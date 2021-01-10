import {Store} from '../store';

export const Pccg: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: 'div.stock-label.btn-esque',
			text: ['IN STOCK','SHIPS IN 1-2 DAYS']
		},
		maxPrice: {
			container: 'div.price',
			euroFormat: false
		},		
		outOfStock: {
			container: 'div.price-box > div.stock-label',
			text: ['CHECK BACK LATER!']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51675/asus-geforce-rtx-3080-tuf-gaming-10gb'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51767/asus-geforce-rtx-3080-tuf-gaming-oc-10gb'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52274/asus-rog-strix-geforce-rtx-3080-10gb'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51850/asus-rog-strix-geforce-rtx-3080-oc-10gb'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51687/galax-geforce-rtx-3080-sg-1-click-oc-10gb'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51679/gigabyte-geforce-rtx-3080-eagle-oc-10gb'
		},		
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51766/gigabyte-geforce-rtx-3080-vision-oc-10gb'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51678/gigabyte-geforce-rtx-3080-gaming-oc-10gb'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51765/gigabyte-aorus-geforce-rtx-3080-master-10gb'
		},		
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52012/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52679/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52410/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51684/inno3d-geforce-rtx-3080-ichill-x3-10gb'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51685/inno3d-geforce-rtx-3080-ichill-x4-10gb'
		},		
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52277/inno3d-geforce-rtx-3080-twin-x2-oc-10gb'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/52533/msi-geforce-rtx-3080-suprim-x-oc-10gb'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51752/msi-geforce-rtx-3080-gaming-x-trio-10gb'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.pccasegear.com/products/51681/msi-geforce-rtx-3080-ventus-3x-oc-10gb'
		},		
//
//




		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52490/asrock-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52479/asus-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52959/gigabyte-aorus-radeon-rx-6800-master-16gb'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52481/gigabyte-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52600/gigabyte-radeon-rx-6800-gaming-oc-16gb'
		},			
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52502/msi-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52609/msi-radeon-rx-6800-gaming-x-trio-16gb'
		},		
		{
			brand: 'powercolor',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52475/powercolor-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'powercolor',
			model: 'fighter',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52724/powercolor-radeon-rx-6800-fighter-16gb'
		},		
		{
			brand: 'powercolor',
			model: 'red devil limited oc',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52594/powercolor-radeon-rx-6800-red-devil-limited-16gb'
		},		
		{
			brand: 'powercolor',
			model: 'red devil oc',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52923/powercolor-radeon-rx-6800-red-devil-16gb'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52488/sapphire-radeon-rx-6800-16gb-rdna-2'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52754/sapphire-radeon-rx-6800-nitro-16gb'
		},
		{
			brand: 'sapphire',
			model: 'pulse',
			series: 'rx6800',
			url:
				'https://www.pccasegear.com/products/52788/sapphire-radeon-rx-6800-pulse-16gb'
		},		
//
//
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52958/gigabyte-aorus-radeon-rx-6800-xt-master-16gb'
		},	
		{
			brand: 'gigabyte',
			model: 'aorus master type-c',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52931/gigabyte-aorus-radeon-rx-6800-xt-master-16gb'
		},	
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52601/gigabyte-radeon-rx-6800-xt-gaming-oc-16gb'
		},	
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52610/msi-radeon-rx-6800-xt-gaming-x-trio-16gb'
		},			
		{
			brand: 'powercolor',
			model: 'red devil oc',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52934/powercolor-radeon-rx-6800-xt-red-devil-oc-16gb'
		},		
		{
			brand: 'powercolor',
			model: 'red dragon',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52957/powercolor-radeon-rx-6800-xt-red-dragon-16gb'
		},		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52628/sapphire-radeon-rx-6800-xt-nitro-16gb'
		},
		{
			brand: 'sapphire',
			model: 'nitro+ se',
			series: 'rx6800xt',
			url:
				'https://www.pccasegear.com/products/52629/sapphire-radeon-rx-6800-xt-nitro-se-16gb'
		},
//		
//	
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52743/asrock-radeon-rx-6900-xt-16gb-rdna-2'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52744/asus-radeon-rx-6900-xt-16gb-rdna-2'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52745/gigabyte-radeon-rx-6900-xt-16gb-rdna-2'
		},		
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52746/msi-radeon-rx-6900-xt-16gb-rdna-2'
		},			
		{
			brand: 'powercolor',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52741/powercolor-radeon-rx-6900-xt-16gb-rdna-2'
		},				
		{
			brand: 'powercolor',
			model: 'red devil limited oc',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52852/powercolor-radeon-rx-6900-xt-red-devil-limited-oc-16gb'
		},		
		{
			brand: 'powercolor',
			model: 'red devil oc',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52853/powercolor-radeon-rx-6900-xt-red-devil-oc-16gb'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52753/sapphire-radeon-rx-6900-xt-16gb-rdna-2'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6900xt',
			url:
				'https://www.pccasegear.com/products/52953/sapphire-radeon-rx-6900-xt-nitro-16gb'
		},		
//
//
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.pccasegear.com/products/52256/amd-ryzen-9-5950x-processor'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.pccasegear.com/products/52255/amd-ryzen-9-5900x-processor'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.pccasegear.com/products/52253/amd-ryzen-7-5800x-processor'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.pccasegear.com/products/52254/amd-ryzen-5-5600x-with-wraith-stealth'
		}
	],
	name: 'pccg'
};
