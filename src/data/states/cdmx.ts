import { Partners } from '../../typings/types';
import { oficinaCDMX } from '../oficinasRegionales/oficinasRegionales';

const cdmxCDMX: Partners = {
	...oficinaCDMX,
	state: 'Ciudad de México',
};

// certification level
/*
  NA = 0
  Afilado = 1
  Bronce = 2
  Plata = 3
  Oro = 4
  Elite = 5
*/

export let cdmx: Partners[] = [
	{
		...cdmxCDMX,
	},
	// {
	// 	isOffice: true,
	// 	id: 1,
	// 	isInPage: true,
	// 	office: 'Centro',
	// 	state: 'Ciudad de México',
	// 	city: 'Ciudad de México',
	// 	inPageName: 'Oficina Regional del Centro',
	// 	phone: '(55) 5530-0042',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: true,
	// 	email: 'eduardo@microsipmx.mx',
	// },
	// {
	// 	isOffice: true,
	// 	id: 2,
	// 	isInPage: true,
	// 	office: 'Ciudad de México',
	// 	state: 'Ciudad de México',
	// 	city: 'México',
	// 	inPageName: 'Oficina Regional Ciudad de México',
	// 	phone: '(55) 8852-2756',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: false,
	// 	email: 'roberto.cazares@microsip.com',
	// },
	{
		id: 3,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'Simplifica',
		phone: '(55) 5105-6844',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'marco.herrera.oli@simplifica.mx',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'ITBCMOOD',
		phone: '(55) 1209-1376',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'contacto@itbc.mx',
	},
	{
		id: 5,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'Soleti',
		phone: '(55) 1953-9350',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: false,
		email: 'dorianmr@soleti.mx',
	},
	{
		id: 6,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'Omey Consulting',
		phone: '(55) 1684-4390',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'gerardo.rivas@omey.com.mx',
	},
	{
		id: 7,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'Sakbe Networks',
		phone: '(55) 7588-0242',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'contacto@sakbenetworks.com',
	},
	{
		id: 8,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'Asesorame',
		phone: '(55) 2072-0356',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'marco@asesorame.com.mx',
	},
	{
		id: 9,
		isInPage: true,
		office: 'Ciudad de México',
		state: 'Ciudad de México',
		city: 'México',
		inPageName: 'MicMex',
		phone: '(55) 5353-2222',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'ventas@micmex.com.mx',
	},
];
