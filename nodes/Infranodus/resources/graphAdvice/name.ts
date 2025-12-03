import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExistingGraphs = {
	operation: ['promptGraph', 'questionGraph', 'summarizeGraph', 'retrieveStatementsFromGraph'],
	resource: ['aiAdviceForGraph'],
};

export const graphNameDescription: INodeProperties[] = [
	{
		displayName: 'Graph Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForExistingGraphs,
		},
		description: 'The name of the existing InfraNodus graph expert to use',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
