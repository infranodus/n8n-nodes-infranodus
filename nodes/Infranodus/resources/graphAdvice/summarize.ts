import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSummarizeGraph = {
	operation: ['summarizeGraph'],
	resource: ['aiAdviceForGraph'],
};

export const summarizeGraphDescription: INodeProperties[] = [
	{
		displayName: 'Request Mode',
		name: 'requestMode',
		type: 'hidden',
		default: 'graph summary',
		description: 'The type of AI request',
		displayOptions: { show: showOnlyForSummarizeGraph },
		routing: {
			send: {
				type: 'body',
				property: 'requestMode',
			},
		},
	},
];
