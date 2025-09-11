import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphCreate = {
	operation: ['createGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphCreateDescription: INodeProperties[] = [
	{
		displayName: 'Graph name',
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
];
