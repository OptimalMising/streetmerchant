import {Store} from '../store';

export const Mwave: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: 'div.divDown > div.addToBasket.addToCarts > button',
			text: ['Add to Cart']
		},		
		maxPrice: {
			container: 'div.divPriceNormal > div',
			euroFormat: false
		},
		outOfStock: {
			container: '.stockAndDelivery > li:nth-child(1) > dl > dd',
			text: ['Currently No Stock']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-10gb-video-card-ac38087'
		},	
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-ac38205'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-gaming-10gb-video-card-ac38086'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-oc-10gb-video-card-ac38206'
		},		
		{
			brand: 'asus',
			model: 'strix oc white',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-gaming-oc-10gb-video-card-white-edition-ac40911'
		},			
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-gaming-10gb-video-card-ac38468'
		},	
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-video-card-ac38322'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-black-gaming-10gb-video-card-ac38323'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-gaming-10gb-video-card-ac38325'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-video-card-ac38327'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/galax-geforce-rtx-3080-sg-1click-oc-10gb-video-card-ac38128'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-master-10gb-video-card-ac38092'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-video-card-ac38093'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card-ac39833'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb-video-card-ac39844'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-10gb-video-card-ac39514'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-oc-10gb-video-card-ac38090'
		},		
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-gaming-oc-10gb-video-card-ac38091'
		},		
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-vision-oc-10gb-video-card-ac38364'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x3-10gb-video-card-ac38356'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card-ac38355'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-ventus-3x-oc-10gb-video-card-ac38105'
		},		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-gaming-x-trio-10gb-video-card-ac38107'
		},		
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-suprim-x-10gb-video-card-ac40223'
		},			
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-revel-epicx-rgb-10gb-video-card-ac38114'
		},
		{
			brand: 'pny',
			model: 'xlr8 uprising',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-uprising-epicx-rgb-10gb-video-card-ac38115'
		},
//
//
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url:
				'https://www.mwave.com.au/product/gigabyte-radeon-rx-6800-gaming-oc-16gb-video-card-ac40356'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800',
			url:
				'https://www.mwave.com.au/product/gigabyte-radeon-rx-6800-aorus-master-16gb-video-card-ac40753'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/gigabyte-radeon-rx-6800-xt-gaming-oc-16gb-video-card-ac40355'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/gigabyte-radeon-rx-6800-xt-aorus-master-16gb-video-card-ac40754'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.mwave.com.au/product/msi-radeon-rx-6800-gaming-x-trio-16gb-video-card-ac40758'
		},		
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/msi-radeon-rx-6800-xt-16gb-video-card-ac40047'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/msi-radeon-rx-6800-xt-gaming-x-trio-16gb-video-card-ac40757'
		},		
		{
			brand: 'sapphire',
			model: 'pulse',
			series: 'rx6800',
			url:
				'https://www.mwave.com.au/product/sapphire-pulse-radeon-rx-6800-16gb-video-card-ac39924'
		},			
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://www.mwave.com.au/product/sapphire-nitro-radeon-rx-6800-16gb-video-card-ac39921'
		},			
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/sapphire-nitro-radeon-rx-6800-xt-16gb-video-card-ac39922'
		},		
		{
			brand: 'sapphire',
			model: 'nitro+ se',
			series: 'rx6800xt',
			url:
				'https://www.mwave.com.au/product/sapphire-nitro-radeon-rx-6800-xt-se-16gb-video-card-ac39923'
		},
//
//
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.mwave.com.au/product/asrock-radeon-rx-6900-xt-16gb-video-card-ac40610'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.mwave.com.au/product/asus-radeon-rx-6900-xt-16gb-video-card-ac40611'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.mwave.com.au/product/msi-radeon-rx-6900-xt-16gb-video-card-ac40613'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.mwave.com.au/product/sapphire-radeon-rx-6900-xt-16gb-video-card-ac40614'
		},		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6900xt',
			url:
				'https://www.mwave.com.au/product/sapphire-nitro-radeon-rx-6900-xt-16gb-video-card-ac40931'
		},
//
//
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.mwave.com.au/product/amd-ryzen-9-5950x-16core-am4-340-ghz-unlocked-cpu-processor-ac39470'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.mwave.com.au/product/amd-ryzen-9-5900x-12core-am4-370-ghz-unlocked-cpu-processor-ac39469'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.mwave.com.au/product/amd-ryzen-7-5800x-8core-am4-380-ghz-unlocked-cpu-processor-ac39468'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.mwave.com.au/product/amd-ryzen-5-5600x-6core-am4-370-ghz-unlocked-cpu-processor-wraith-stealth-ac39467'
		}			
	],
	name: 'mwave'
};
