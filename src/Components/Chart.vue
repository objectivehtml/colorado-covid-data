<script>
import Chart from 'chart.js';

export default {
    props: {
        datasets: Array,
        options: Object
    },
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.chart = new Chart(this.$el, Object.assign({
            type: 'line',
            data: {
                datasets: this.datasets,
            },
        }, this.options));
    },
    render(h) {
        return h('canvas');
    }
};
</script>