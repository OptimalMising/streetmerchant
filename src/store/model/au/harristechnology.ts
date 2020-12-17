import {Store} from './store';

export const HarrisTechnology: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#content_tab-description > div.desc2 > p.product-availability',
			text: ['in stock']
		},
		outOfStock: {
			container: '#content_tab-description > div.desc2 > p.product-availability',
			text: ['Please call or e-mail us for availability']
		}
	},
	links: [
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.ht.com.au/part/CA093-AMD-Ryzen-5-5600X-6-Core-3.7-GHz-Desktop-Processor-with-AM4-Socket-65W-Thermal-Design-Power/detail.hts'
		}		
	],
	name: 'harristechnology'
};
