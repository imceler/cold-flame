module.exports = {
	plugins: [
		require('postcss-preset-env')({}),
        require('css-mqpacker')({}),
        require('autoprefixer')({}),
        // require('cssnano')({
        //     preset: 'default',
        // })
	]
}