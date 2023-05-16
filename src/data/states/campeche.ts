import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteCampeche: Partners = {
	...oficinaSureste,
	state: 'Campeche',
};

export let campeche: Partners[] = [
	{
		...suresteCampeche,
	},
	{
		id: 1,
		isInPage: true,
		office: 'Sureste',
		state: 'Campeche',
		city: 'Ciudad del Carmen',
		inPageName: 'Casa de software Ciudad del Carmen',
		phone: '(938) 384-1584',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: '',
	},
];
