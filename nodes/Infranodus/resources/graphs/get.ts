import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphGet = {
	operation: ['getGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphGetDescription: INodeProperties[] = [
	{
		displayName: 'Graph name',
		name: 'name',
		type: 'string',
		displayOptions: { show: showOnlyForGraphGet },
		default: '',
		description: 'The name of the graph to retrieve',
	},
];
