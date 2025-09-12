import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphCreate = {
	operation: ['createGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphCreateDescription: INodeProperties[] = [
	{
		displayName: 'Graph Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGraphCreate,
		},
		description: 'The name of the graph (use any if you are not saving the graph to InfraNodus)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGraphCreate,
		},
		description: 'The text to create a graph from',
		typeOptions: {
			rows: 8,
		},
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Include Statements in Response',
		name: 'includeStatements',
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
		description: 'Include statements from the graph in response',
		displayOptions: { show: showOnlyForGraphCreate },
		routing: {
			send: {
				type: 'query',
				property: 'includeStatements',
			},
		},
	},
];
