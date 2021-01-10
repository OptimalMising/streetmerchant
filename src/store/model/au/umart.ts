import {Store} from '../store';

export const Umart: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#youhuo_delivery',
			text: ['in stock']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: 'div.price-box > div.stock-label',
			text: ['out of stock']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-10G-Graphics-Card_56894G.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-OC-10G-Graphics-Card_56893G.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-10G-Graphics-Card_56792G.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-OC-10G-Graphics-Card_56895G.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.umart.com.au/EVGA-GeForce-RTX-3080-FTW3-Ultra-Gaming-10G-Graphics-Card_57050G.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.umart.com.au/EVGA-GeForce-RTX-3080-XC3-Ultra-Gaming-10G-Graphics-Card_57049G.html'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Galax-GeForce-RTX-3080-SG--1-Click-OC--10G-Graphics-Card_56817G.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Master-10G-Graphics-Card_56885G.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-AORUS-GeForce-RTX-3080-Xtreme-10G-Graphics-Card_56969G.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Xtreme-Waterforce-10G-Graphics-Card_57650G.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Xtreme-WaterForce-WB-10G-Graphics-Card_57486G.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-10G-Graphics-Card_57335G.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-OC-10G-Graphics-Card_56791G.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Gaming-OC-10G-Graphics-Card_56790G.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Vision-10G-OC-Graphics-Card_56886G.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.umart.com.au/Inno3D-GeForce-RTX-3080-iCHILL-X4-10G-Graphics-Card_56962G.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.umart.com.au/Inno3D-GeForce-RTX-3080-iChill-X3-10G-Graphics-Card_57729G.html'
		},		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.umart.com.au/MSI-GeForce-RTX-3080-Gaming-X-Trio-10G-Graphics-Card_56788G.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.umart.com.au/MSI-GeForce-RTX-3080-Suprim-X-10G-Graphics-Card_57617G.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.umart.com.au/MSI-GeForce-RTX-3080-Ventus-3X-10G-Graphics-Card_56789G.html'
		},
//		
//		
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url:
				'https://www.umart.com.au/Gigabyte-Radeon-RX-6800-Gaming-OC-16GB-Graphics-Card_57571G.html'
		},
//
//
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Asrock-Radeon-RX-6800-XT-16G-Graphics-Card_57755G.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Asus-TUF-Radeon-6800-XT-OC-Edition-16GB-Graphics-Card_57569G.html'
		},			
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Asus-ROG-Strix-LC-Radeon-6800-XT-OC-Edition-16GB-Graphics-Card_57570G.html'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Gigabyte-Radeon-RX-6800-XT-16GB-Graphics-Card_57462G.html'
		},			
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Gigabyte-Radeon-RX-6800-XT-Gaming-OC-16GB-Graphics-Card_57568G.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/MSI-Radeon-RX-6800-XT-Gaming-X-Trio-16G-Graphics-Card_57893G.html'
		},		
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Sapphire-Radeon-RX-6800-XT-Nitro+-16G-Graphics-Card_57764G.html'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.umart.com.au/Sapphire-Radeon-RX-6800-XT-SE-Nitro+-16G-Graphics-Card_57765G.html'
		},

//
//
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/Asrock-Radeon-RX-6900-XT-16G-Graphics-Card_57921G.html'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/Asus-Radeon-RX-6900-XT-16GB-Graphics-Card_57746G.html'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/Gigabyte-Radeon-RX-6900-XT-16GB-Graphics-Card_57747G.html'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/MSI-Radeon-RX-6900-XT-16GB-Graphics-Card_57749G.html'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-16GB-Graphics-Card_57748G.html'
		},		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6900xt',
			url:
				'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-Nitro+-16G-Graphics-Card_57964G.html'
		},				
//		
//
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.umart.com.au/AMD-Ryzen-9-5950X-16-Core-AM4-4-9GHz-CPU-Processor_57287G.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.umart.com.au/AMD-Ryzen-9-5900X-12-Core-AM4-4-8GHz-CPU-Processor_57286G.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.umart.com.au/AMD-Ryzen-7-5800X-8-Core-AM4-4-7GHz-CPU-Processor_57285G.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.umart.com.au/AMD-Ryzen-5-5600X-6-Core-AM4-4-6GHz-CPU-Processor_57284G.html'
		}		
	],
	name: 'umart'
};
