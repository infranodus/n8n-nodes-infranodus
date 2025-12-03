import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRetrieveStatementsFromGraph = {
	operation: ['retrieveStatementsFromGraph'],
	resource: ['aiAdviceForGraph'],
};

export const retrieveStatementsFromGraphDescription: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: { show: showOnlyForRetrieveStatementsFromGraph },
		default: '',
		description: 'The prompt to use to retrieve statements from the graph',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
		typeOptions: {
			rows: 3,
		},
	},
	{
		displayName: 'Request Mode',
		name: 'requestMode',
		type: 'hidden',
		default: 'retrieve',
		description: 'The type of AI request',
		displayOptions: { show: showOnlyForRetrieveStatementsFromGraph },
		routing: {
			send: {
				type: 'body',
				property: 'requestMode',
			},
		},
	},
	{
		displayName: 'Include Statements in Response',
		name: 'includeStatements',
		type: 'options',
		options: [
			{
				name: 'Yes',
				value: 'true',
			},
			{
				name: 'No',
				value: 'false',
			},
		],
		default: 'false',
		description: 'Include extended statement information with similarity scores in response',
		displayOptions: { show: showOnlyForRetrieveStatementsFromGraph },
		routing: {
			send: {
				type: 'query',
				property: 'includeStatements',
			},
		},
	},
	{
		displayName: 'Include Full JSON Graph',
		name: 'includeGraph',
		type: 'options',
		options: [
			{
				name: 'Yes',
				value: 'true',
			},
			{
				name: 'No',
				value: 'false',
			},
		],
		default: 'false',
		description: 'Include the full JSON graph in response',
		displayOptions: { show: showOnlyForRetrieveStatementsFromGraph },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
			},
		},
	},
];
