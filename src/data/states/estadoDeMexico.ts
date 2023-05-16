import { Partners } from '../../typings/types';
import { oficinaCentro } from '../oficinasRegionales/oficinasRegionales';

const centroEstadoDeMexico: Partners = {
	...oficinaCentro,
	state: 'Estado de México',
};

export let estadoDeMexico: Partners[] = [
	{
		...centroEstadoDeMexico,
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
		office: 'Centro',
		state: 'Estado de México',
		city: 'Texcoco',
		inPageName: 'Programas IT',
		phone: '(55) 5639-1144',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'pedro@programasit.mx',
	},
	{
		id: 2,
		isInPage: false,
		office: 'Centro',
		state: 'Estado de México',
		city: 'Chimalhuacán',
		inPageName: 'V&B Estrategias Comerciales',
		phone: '(55) 5985-3459',
		certificationName: 'Afiliado',
		certificationLevel: 1,
		certificationAS: false,
		email: 'mbetanzos@estrategiasc.com.mx',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Centro',
		state: 'Estado de México',
		city: 'Toluca',
		inPageName: 'Proiectus',
		phone: '(722) 180-1844',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: false,
		email: 'isaias@proiectus.mx',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Centro',
		state: 'Estado de México',
		city: 'Chimalhuacán',
		inPageName: 'Consultoría Integral Betanzos S de RL de CV',
		phone: '(55) 1551-8305',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'ventas@consultoriaintegral.com.mx',
	},
];
