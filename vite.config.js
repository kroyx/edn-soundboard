module.exports = {
	build: {
		minify: true,
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]'
			},
		},
	},
	base: '/edn-soundboard/',
};
