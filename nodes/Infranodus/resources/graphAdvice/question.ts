import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGenerateQuestion = {
	operation: ['questionGraph'],
	resource: ['aiAdviceForGraph'],
};

export const generateQuestionDescription: INodeProperties[] = [
	{
		displayName: 'Deep Thinking Mode',
		name: 'extendedAdvice',
		type: 'options',
		options: [
			{
				name: 'No',
				value: 'false',
			},
			{
				name: 'Yes',
				value: 'true',
			},
		],
		default: 'false',
		required: true,
		displayOptions: {
			show: showOnlyForGenerateQuestion,
		},
		description: 'Should we use more content gaps to generate diverse questions',
		routing: {
			send: {
				type: 'query',
				property: 'extendedAdvice',
			},
		},
	},
	{
		displayName: 'Request Mode',
		name: 'requestMode',
		type: 'hidden',
		default: 'question',
		description: 'The type of AI request',
		displayOptions: { show: showOnlyForGenerateQuestion },
		routing: {
			send: {
				type: 'body',
				property: 'requestMode',
			},
		},
	},
];
