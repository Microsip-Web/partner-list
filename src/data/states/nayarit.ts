import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteNayarit: Partners = {
	...oficinaOccidente,
	state: 'Nayarit',
};

export let nayarit: Partners[] = [
	{
		...occidenteNayarit,
	},
];
