import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdviceGet = {
	operation: ['promptGraph'],
	resource: ['aiAdvice'],
};

export const graphGetAdviceDescription: INodeProperties[] = [
	{
		displayName: 'Graph name',
		name: 'name',
		type: 'string',
		displayOptions: { show: showOnlyForAdviceGet },
		default: '',
		description: 'The name of the existing InfraNodus graph expert to use',
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: { show: showOnlyForAdviceGet },
		default: '',
		description: 'The prompt to use',
	},
];
