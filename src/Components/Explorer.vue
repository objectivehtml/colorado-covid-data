<template>
    <div>
        <form v-if="response" class="container mx-auto">
            <h1>Colorado COVID-19 Data</h1>
            <div class="mb-3">
                <em>Be sure to use a desktop, tablet, or larger screen to view the chart. You may click to toggle the various datasets.</em>
            </div>
            <select-field v-model="filters.COUNTY" name="test" label="County" :value="filters.COUNTY" @input="fetch">
                <option value="">
                    All Counties
                </option>
                <option v-for="value in extractUniqueValues(response, 'COUNTY')" :key="value">
                    {{ value }}
                </option>
            </select-field>
            <canvas v-if="response" ref="chart" />
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
import Chart from 'chart.js';
import randomcolor from 'randomcolor';
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
        SelectField
    },
    data() {
        return {
            source,
            name: null,
            response: null,
            activity: false,
            filters: {
                COUNTY: this.get('county')
            },
        };
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
                this.$nextTick(this.render);
            });
        },
        render() { 
            /*
            0: "Case Rates Per 100,000 People in Colorado by County"
            1: "Colorado Case Counts by County"
            2: "Number of Deaths by County"
            3: "Total COVID-19 Tests Performed in Colorado by County"
            4: "Total Testing Rate Per 100,000 People in Colorado by County"
            */

            const defaults = this.extractUniqueValues(this.response, 'Desc_');

            const additionalFilters = {
                'Total COVID-19 Tests Performed in Colorado by County': {
                    Metric: 'Total Tests Performed'
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

            const colors = randomcolor({
                count: defaults.length,
                luminosity: 'bright'
            });

            const datasets = defaults.map((key, i) => {
                this.filter(Object.assign({Desc_: key}, additionalFilters[key])).forEach(({ properties }) => {
                    dates[properties.Date][key] = properties.Value || properties.Rate;
                });

                const data = Object.entries(dates).map(([date, subject]) => subject[key]);

                if(data.filter(value => value !== null).length) {
                    return {
                        fill: false,
                        label: key,
                        data,
                        borderColor: colors[i],
                        backgroundColor: colors[i],
                    };
                }
            }).filter(value => !!value);

            let chart = new Chart(this.$refs.chart, {
                type: 'line',
                data: {
                    datasets: datasets,
                    labels: Object.keys(dates).map(value => {
                        const date = new Date(value);

                        return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                    })
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 50,
                                suggestedMax: 100
                            }
                        }]
                    }
                }
            });
        },
    }
};
</script>