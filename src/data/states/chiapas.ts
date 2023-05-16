import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteChiapas: Partners = {
	...oficinaSureste,
	state: 'Chiapas',
};

export let chiapas: Partners[] = [
	{
		...suresteChiapas,
	},
	// certification level
	/*
  NA = 0
  Afilado = 1
  Bronce = 2
  Plata = 3
  Oro = 4
  Elite = 5
*/
	{
		id: 1,
		isInPage: true,
		office: 'Sureste',
		state: 'Chiapas',
		city: 'Tuxtla Gutiérrez',
		inPageName: 'Casa de Software Tuxtla',
		phone: '(961) 612-0589',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: 'javier.baqueiro@cstuxtla.com',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Sureste',
		state: 'Chiapas',
		city: 'San Cristobal de las Casas',
		inPageName: 'Casa de Software San Cristóbal',
		phone: '(967) 131-5051',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'info@cssancristobal.com',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Sureste',
		state: 'Chiapas',
		city: 'Tuxtla Gutiérrez',
		inPageName: 'PROPSESA',
		phone: '(961) 146-4443',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'jjmacias@integraconsorcio.com.mx',
	},
];
