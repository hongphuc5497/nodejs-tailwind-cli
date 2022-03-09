#! /usr/bin/env node

const inquirer = require('inquirer');

const questions = [
	{
		type: 'list',
		name: 'framework',
		message: 'Which framework do you want to use?',
		choices: ['React', 'VueJS', 'Angular', 'NextJS', 'Svelte'],
	},
];

const questionsTs = [
	{
		type: 'list',
		name: 'typescript',
		message: 'Does your project use TypeScript?',
		choices: ['Yes', 'No'],
	},
];

inquirer.prompt(questions).then((answers) => {
	console.log(answers);
});
