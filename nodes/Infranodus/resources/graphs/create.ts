import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphSave = {
	operation: ['saveGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphSaveDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGraphSave,
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
			show: showOnlyForGraphSave,
		},
		description: 'The text to create a graph from',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
];
