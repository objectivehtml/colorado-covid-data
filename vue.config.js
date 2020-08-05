module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/colorado-covid-data/'
        : '/'
};