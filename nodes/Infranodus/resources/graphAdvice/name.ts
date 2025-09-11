import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExistingGraphs = {
	operation: ['promptGraph', 'questionGraph'],
	resource: ['aiAdvice'],
};

export const graphNameDescription: INodeProperties[] = [
	{
		displayName: 'Graph name',
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
