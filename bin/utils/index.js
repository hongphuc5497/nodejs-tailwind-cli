const links = new Map([
	['React', 'https://github.com/YashKumarVerma/react-tailwind-template'],
	[
		'React-TS',
		'https://github.com/GKaszewski/react-tailwind-typescript-template',
	],
	['NextJS', 'https://github.com/Neeraj1005/Nextjs-tailwind-template'],
	['NextJS-TS', 'https://github.com/avneesh0612/next-starter'],
	['Svelte', 'https://github.com/jhanca-vm/Svelte-Tailwind'],
	['Vue', 'https://github.com/web2033/vite-vue3-tailwind-starter'],
]);

const questions = [
	{
		type: 'text',
		name: 'projectName',
		message: 'Enter your project name:',
	},
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

export { links, questions, questionsTs };
