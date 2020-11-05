<template>
    <div>
        <form v-if="response" class="container mx-auto">
            <h1>Colorado COVID-19 Data</h1>

            <div class="mb-3">
                <em>Be sure to use a desktop, tablet, or larger screen to view the chart. You may click to toggle the various datasets.</em>
            </div>

            <select-field v-model="filters.COUNTY" name="test" label="County" :value="filters.COUNTY" @input="() => currentDatasets = datasets()">
                <option value="">
                    All Counties
                </option>
                <option v-for="value in extractUniqueValues(response, 'COUNTY')" :key="value">
                    {{ value }}
                </option>
            </select-field>

            <chart
                v-if="response"
                :key="filters.COUNTY"
                :options="chartOptions"
                :datasets="currentDatasets"
                @load-start="activity = true"
                @load-stop="activity = false" />

            <div class="mt-3 text-center">
                <em><a href="https://data-cdphe.opendata.arcgis.com/datasets/cdphe-covid19-county-level-open-data-repository/data">SOURCE: https://data-cdphe.opendata.arcgis.com/datasets/cdphe-covid19-county-level-open-data-repository/data</a></em>
            </div>
        </form>
        <div v-if="activity" class="absolute top-0 left-0 flex w-full h-full justify-center items-center">
            <activity-indicator type="SquareFold" />
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import randomcolor from 'randomcolor';
import Chart from './Chart';
import { ActivityIndicator, register } from '@vue-interface/activity-indicator';
import SquareFold from '@vue-interface/activity-indicator/src/types/SquareFold';
import InputField from '@vue-interface/input-field';
import SelectField from '@vue-interface/select-field';

const source = 'https://opendata.arcgis.com/datasets/1456d8d43486449292e5784dcd9ce4a7_0.geojson';

register({
    'square-fold': SquareFold
});

export default {
    name: 'Explorer',
    components: {
        ActivityIndicator,
        Chart,
        SelectField
    },
    data() {        
        const colors = randomcolor({
            count: 5,
            luminosity: 'bright'
        });

        return {
            colors,
            source,
            name: null,
            response: null,
            activity: false,
            currentDatasets: null,
            filters: {
                COUNTY: this.get('county')
            },
        };
    },
    computed: {
        chartOptions() {
            return {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: this.name
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MMM YYYY'
                            }
                        }
                    }
                }
            };
        }
    },
    mounted() {
        this.fetch();
    },
    methods: {
        extractUniqueValues(data, key) {
            const items = data && data.features.reduce((carry, { properties }) => {
                carry.push(properties[key]);

                return carry;
            }, []);

            return Array.from(new Set(items)).sort();
        },
        contains(subject, values) {
            return Object.keys(values).every(k => {
                return Object.keys(subject).indexOf(k)>-1 && values[k] == subject[k];
            });
        },
        filter(filters) {
            const userFilters = Object.entries(this.filters).filter(([key, value]) => {
                return !!value;
            });

            filters = Object.assign({}, Object.fromEntries(userFilters), filters);

            return this.response.features.filter(({ properties }) => {
                return this.contains(properties, filters);
            });
        },
        dates() {
            return this.extractUniqueValues(this.response, 'Date').sort();
        },
        get(key, defaultValue) {
            const value = new URLSearchParams(window.location.search).get(key);

            if(typeof value === 'undefined') {
                return defaultValue;
            }

            return value;
        },
        fetch() {
            this.activity = true;

            Axios.get(source).then(({ data }) => {
                this.activity = false;
                this.response = data;
                this.name = data.name;
                this.currentDatasets = this.datasets();
            });
        },
        datasets() {
            const defaults = this.extractUniqueValues(this.response, 'Desc_');
            
            const additionalFilters = {
                'Total COVID-19 Tests Performed in Colorado by County': {
                    Metric: 'Total Tests Performed'
                }
            };

            const datasets = defaults.map((key, i) => {
                const dataset = {
                    label: key,
                    data: [],
                };
                
                const filters = Object.assign({
                    Desc_: key
                }, additionalFilters[key]);
                
                this.filter(filters).forEach(({ properties }) => {
                    dataset.data.push({
                        label: properties.Date,
                        borderColor: this.colors[i],
                        backgroundColor: this.colors[i],
                        fill: false,
                        x: new Date(properties.Date),
                        y: properties.Value || properties.Rate
                    });
                });

                return dataset;
            });

            /*
            const datasetOptions = {
                'Case Rates Per 100,000 People in Colorado by County': {
                    // yAxisID: 'right-y-axis'
                }
            };
            
            const dates = this.dates().reduce((carry, key) => {
                return Object.assign(carry, {
                    [key]: defaults.reduce((carry, desc) => {
                        return Object.assign(carry, {
                            [desc]: null 
                        });
                    }, {})
                });
            }, {});    

            const datasets = defaults.map((key, i) => {
                this.filter(Object.assign({Desc_: key}, additionalFilters[key])).forEach(({ properties }) => {
                    dates[properties.Date][key] = properties.Value || properties.Rate;
                });

                const data = Object.entries(dates).map(([date, subject]) => subject[key]);

                if(data.filter(value => value !== null).length) {
                    return Object.assign({
                        fill: false,
                        label: key,
                        data,
                        // yAxisID: 'left-y-axis',
                        borderColor: this.colors[i],
                        backgroundColor: this.colors[i],
                    }, datasetOptions[key]);
                }
            }).filter(value => !!value);

            const labels = Object.keys(dates).map(value => {
                return new Date(value);
            });
            */

            return [{
                label: 'test',
                data: [{y: 1, x: new Date('2020-07-01')},{y: 2, x: new Date('2020-07-02')}]
            }];
        }
    }
};
</script>