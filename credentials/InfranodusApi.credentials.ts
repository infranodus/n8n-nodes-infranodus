import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class InfranodusApi implements ICredentialType {
	name = 'infranodusApi';

	displayName = 'Infranodus API';

	// Link to your community node's README
	documentationUrl =
		'https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points';

	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'http://localhost:3000/api/v1',
			url: '/token',
		},
	};
}
