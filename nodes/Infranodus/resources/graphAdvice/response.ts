import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphResponse = {
	operation: ['promptGraph'],
	resource: ['aiAdvice'],
};

export const getGraphResponseDescription: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: { show: showOnlyForGraphResponse },
		default: '',
		description: 'The prompt to use',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	{
		displayName: 'Request mode',
		name: 'requestMode',
		type: 'hidden',
		default: 'response',
		description: 'The type of AI request',
		displayOptions: { show: showOnlyForGraphResponse },
		routing: {
			send: {
				type: 'body',
				property: 'requestMode',
			},
		},
	},
];
