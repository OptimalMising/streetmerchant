import {Store} from '../store';

export const Dcomp: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#cart-info > button.btn.addToCart',
			text: ['Add to','']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: '#cart-info > button.btn.notifyMe',
			text: ['Notify Me']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3172'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3205'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3206'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3183'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3310'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3307'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3308'
		},		
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3136'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3135'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3166'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3199'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3306'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://dcomp.com.au/productdetail/3141'
		},		
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://dcomp.com.au/productdetail/3270'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://dcomp.com.au/productdetail/3289'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://dcomp.com.au/productdetail/3265'
		}		
	],
	name: 'dcomp'
};
