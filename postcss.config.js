module.exports = {
    plugins: [
        require('postcss-nested'),
        require('tailwindcss')({
            purge: [
                './src/**'
            ],
            plugins: [
                require('@vue-interface/variant/tailwindcss'),
                require('@vue-interface/form-control/tailwindcss/form-control'),
                require('@vue-interface/form-control/tailwindcss/form-check'),
                require('@vue-interface/form-control/tailwindcss/form-switch'),
                require('@vue-interface/form-control/tailwindcss/form-select'),
                require('@vue-interface/form-control/tailwindcss/form-file'),
                require('@vue-interface/form-control/tailwindcss/form-text'),
                require('@vue-interface/form-control/tailwindcss/form-labels'),
                require('@vue-interface/form-control/tailwindcss/form-group'),
                require('@vue-interface/form-control/tailwindcss/input-group'),
                require('@vue-interface/form-control/tailwindcss/validation'),
                require('@vue-interface/btn/tailwindcss')
            ]
        }),
        require('autoprefixer'),
    ],
};