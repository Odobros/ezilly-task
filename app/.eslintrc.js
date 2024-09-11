module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [],
	extends: [
		'airbnb-base'
	],
	// add your custom rules here
	rules: {
		'import/no-extraneous-dependencies': 'off',
		// nuxt
		'nuxt/no-cjs-in-config': 'off',
		semi: ['warn', 'always'],

		// own for ES6
		'template-curly-spacing': 'off',
		'comma-dangle': 'off',
		quotes: [
			'warn',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'no-undef': 'off',
		'no-console': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'off',
		'semi-style': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral'],
			},
		],
		'spaced-comment': 'off',
		'object-curly-newline': 'off',
		'object-curly-spacing': ['warn', 'never'],
		'no-multi-assign': 'off',
		'no-plusplus': 'off',
		'no-param-reassign': 'off',
		'no-use-before-define': 'off',
		'implicit-arrow-linebreak': 'off',
		'class-methods-use-this': 'off',
		'no-nested-ternary': 'off',
		'arrow-parens': ['warn', 'always'],
		'max-len': 'off',
		'no-prototype-builtins': 'off',
		'linebreak-style': 'off',
		'operator-linebreak': ['warn', 'before'],
		'no-unmodified-loop-condition': 'off',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'func-names': 0,
		'no-useless-catch': 'off',
		'no-promise-executor-return': 'off',
		'import/extensions': ['error', 'never', {svg: 'always', jpg: 'always'}],
	}
};
