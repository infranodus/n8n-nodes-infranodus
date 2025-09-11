import type { INodeProperties } from 'n8n-workflow';
import { graphGetAdviceDescription } from './get';
import { generateQuestionDescription } from './generate';

const showOnlyForAiAdvice = {
	resource: ['aiAdvice'],
};

export const aiAdvice: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAiAdvice,
		},
		options: [
			{
				name: 'Prompt a graph expert',
				value: 'promptGraph',
				action: 'Get AI advice from a graph expert',
				description: 'Get an AI advice from an existing knowledge graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
			{
				name: 'Generate a question',
				value: 'questionGraph',
				action: 'Generate a research question',
				description: 'Generate questions generated based on the content gaps in a graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
		],
		default: 'promptGraph',
	},
	...graphGetAdviceDescription,
	...generateQuestionDescription,
];
