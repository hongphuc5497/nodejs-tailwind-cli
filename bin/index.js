#! /usr/bin/env node

import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';
const path = process.cwd();
import { links, questions, questionsTs } from './utils/index.js';

inquirer.prompt(questions).then((answers) => {
	const { framework, projectName } = answers;

	shell.exec(`mkdir ${projectName}`);
	console.log(chalk.green('📁 Created a folder for the project'));

	shell.exec(`git clone ${links.get(framework)} ${projectName}`);
	console.log(chalk.green(`🖨️  Cloned started files into ${projectName}`));

	shell.cd(`${path}/${projectName}`);
	shell.exec('npm install');
	console.log(
		chalk.green(
			'👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
		)
	);
});
