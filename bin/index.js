#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const path = process.cwd();
const { links, questions, questionsTs } = require('./utils');
console.log(links.get('React'))

inquirer.prompt(questions).then((answers) => {
  const { framework, projectName } = answers;
  console.log(framework, projectName)

	shell.exec(`mkdir ${projectName}`);
	console.log('📁 Created a folder for the project');

	shell.exec(`git clone ${links.get(framework)} ${projectName}`);
	console.log(`🖨️  Cloned started files into ${projectName}`);

	shell.cd(`${path}/${projectName}`);
	shell.exec('npm install');
	console.log(
		'👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
  );
});
