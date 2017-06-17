'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

	constructor(args, opts) {
		super(args, opts);
	}

	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(
			'Bienvenido a ' + chalk.red('generator-miweb') + ''
		));

		const prompts = [{
			type: 'list',
			name: 'features',
			message: 'Seleccione el tipo de proyecto?',
			choices: [{
				name: 'HTML',
				value: 'includeHTML',
				checked: true
			}, {
				name: 'PHP',
				value: 'includePHP',
				checked: false
			}]
		},{
			type: 'input',
			name: 'projectTitle',
			message: '¿Cuál es el título de la pagina?',
			default: 'Mi primer proyecto'
		}];

		return this.prompt(prompts).then(answers => {
			const features = answers.features;
			const hasFeature = feat => features && features.indexOf(feat) !== -1;
			// manually deal with the response, get back and store the results.
			this.props = answers;
			this.includeHTML = hasFeature('includeHTML');
			this.includePHP = hasFeature('includePHP');
		});
	}

	writing() {
		this._writingMiWeb();
	}

	_writingMiWeb() {
		var params = {
			projectTitle: this.props.projectTitle,
			includeHTML: this.includeHTML,
			includePHP: this.includePHP
		};
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			params
		);
		if (this.includeHTML === true) {
			this.fs.copyTpl(
				this.templatePath('_index.html'),
				this.destinationPath('index.html'),
				params
			);
		}
		if (this.includePHP === true) {
			this.fs.copyTpl(
				this.templatePath('_index.php'),
				this.destinationPath('index.php'),
				params
			);
		}
		this.fs.copyTpl(
			this.templatePath('js/_script.js'),
			this.destinationPath('js/script.js'),
			{includeHTML: this.includeHTML}
		);

	}

	/*
	//not install yet
	install() {
		this.installDependencies();
	}
	*/
};
