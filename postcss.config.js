/*eslint-disable*/
module.exports = {
  plugins: [
    require('postcss-cssnext')({
			'warnForDuplicates':false,
      features: {
        customProperties: false,
      },
    }),
		require('postcss-flexbugs-fixes')(),

    require('cssnano')({
      preset: 'default',
    }),
  ],
};
