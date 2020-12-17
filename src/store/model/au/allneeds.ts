import {Store} from '../store';

export const Allneeds: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '.amstockstatus',
			text: ['In Stock']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: '.amstockstatus',
			text: ['Sold Out','Sold Out - Check back or email us for updates']
		}
	},
	links: [
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://allneeds.com.au/amd-ryzen-9-5950x-processor-100-100000059wof'
		},
//		{
//			brand: 'amd',
//			model: '5900x',
//			series: 'ryzen5900',
//			url:
//				'					https://www.msy.com.au/amd-ryzen-9-5900x-100-100000061wof-up-to-48ghz-base-clock-37ghzam412-cores24-threads64mb105w-unlocked-boxed-cpu-without-cpu-cooler'
//		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://allneeds.com.au/amd-ryzen-7-5800x-processor'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://allneeds.com.au/amd-ryzen-5-5600x-with-wraith-stealth-100-100000065box'
		}		
	],
	name: 'allneeds'
};
