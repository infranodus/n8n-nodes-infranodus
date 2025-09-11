import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGenerateQuestion = {
	operation: ['questionGraph'],
	resource: ['aiAdvice'],
};

export const generateQuestionDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGenerateQuestion,
		},
		description: 'The name of the graph',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
