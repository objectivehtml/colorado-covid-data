<script>
import Chart from 'chart.js';

export default {
    props: {
        datasets: Array,
        labels: Array,
    },
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.chart = new Chart(this.$el, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: this.datasets,
            }
        });
    },
    render(h) {
        return h('canvas');
    }
};
</script>