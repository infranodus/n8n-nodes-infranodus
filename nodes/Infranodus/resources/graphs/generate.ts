import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphGenerate = {
	operation: ['generateGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphGenerateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'hidden',
		default: 'do_not_save_graph',
		displayOptions: {
			show: showOnlyForGraphGenerate,
		},
		description: 'The name of the graph',
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
			show: showOnlyForGraphGenerate,
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
		displayName: 'Save / Update the Graph in InfraNodus',
		name: 'doNotSave',
		type: 'hidden',
		default: 'true',
		displayOptions: { show: showOnlyForGraphGenerate },
		description: 'Save or update the graph with this name in InfraNodus',
		routing: {
			send: {
				type: 'query',
				property: 'doNotSave',
			},
		},
	},
];
