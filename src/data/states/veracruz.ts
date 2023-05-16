import { Partners } from '../../typings/types';
import { oficinaGolfo } from '../oficinasRegionales/oficinasRegionales';

const golfoVeracruz: Partners = {
	...oficinaGolfo,
	state: 'Veracruz',
};

export let veracruz: Partners[] = [
	{
		...golfoVeracruz,
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
		office: 'Golfo',
		state: 'Veracruz',
		city: 'Xalapa',
		inPageName: 'Luis Alejandro Soto Diez',
		phone: '(228) 186-3320',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'alex.stdz@si-code.com.mx',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Golfo',
		state: 'Veracruz',
		city: 'Coatzacoalcos',
		inPageName: 'Oscar Uribe Guerrero',
		phone: '(921) 212-2129',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'ventas.erpcoatza@gmail.com',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Golfo',
		state: 'Veracruz',
		city: 'Córdoba/Orizaba',
		inPageName: 'Oscar Uribe Guerrero',
		phone: '(272) 201-4238',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'ventas.erporizaba@gmail.com',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Golfo',
		state: 'Veracruz',
		city: 'Veracruz',
		inPageName: 'ZAGO Tecnologia Integral',
		phone: '(229) 202-0539',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: false,
		email: 'israel.zavala@zagoti.com.mx',
	},
];
