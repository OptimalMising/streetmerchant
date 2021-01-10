import {Store} from '../store';

export const ComputerAlliance: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#main > div.col-md-12 > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div > ul > li:nth-child(1) > a',
			text: ['In Stock']
		},
		maxPrice: {
			container: 'span.price',
			euroFormat: false
		},
		outOfStock: {
			container: '#main > div.col-md-12 > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div > ul > li:nth-child(1) > a',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/asus-rtx3080-10gb-tuf-gaming-pcie-video-card-tuf-rtx3080-10g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/asus-rtx3080-10gb-tuf-oc-gaming-pcie-video-card-tuf-rtx3080-o10g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/asus-rtx3080-10gb-rog-strix-oc-gaming-pcie-video-card-rog-strix-rtx3080-o10g-gaming'
		},		
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/evga-rtx3080-10gb-ftw3-ultra-gaming-pcie-video-card-10g-p5-3897-kr'
		},	
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/evga-rtx3080-10gb-xc3-ultra-gaming-pcie-video-card-10g-p5-3885-kr'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/galax-rtx3080-10gb-sg-1-click-oc-pcie-video-card-38nwm3md99nn'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-aorus-master-pcie-video-card-gv-n3080aorus-m-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-aorus-xtreme-pcie-video-card-gv-n3080aorus-x-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-eagle-oc-pcie-video-card-gv-n3080eagle-oc-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-gaming-oc-pcie-video-card-gv-n3080gaming-oc-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-vision-oc-pcie-video-card-gv-n3080vision-oc-10gd'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card-c30804-106xx-1810va36'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/msi-rtx3080-10gb-gaming-x-trio-pcie-video-card'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/msi-rtx3080-10gb-suprim-x-pcie-video-card'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.computeralliance.com.au/msi-rtx3080-10gb-ventus-3x-oc-pcie-video-card'
		},
//
//
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/asus-rtx3090-24gb-tuf-gaming-pcie-video-card-tuf-rtx3090-24g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/asus-rtx3090-24gb-tuf-gaming-pcie-oc-video-card-tuf-rtx3090-o24g-gaming'
		},		
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/asus-rtx3090-24gb-rog-strix-oc-pcie-video-card-rog-strix-rtx3090-o24g-gaming'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/galax-rtx3090-24gb-sg-1-click-oc-pcie-video-card-39nsm5md1gna'
		},	
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-aorus-master-pcie-video-card-gv-n3090aorus-m-24gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-aorus-xtreme-pcie-video-card-gv-n3090aorus-x-24gd'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-eagle-oc-pcie-video-card-gv-n3090eagle-oc-24gd'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-gaming-oc-pcie-video-card-gv-n3090gaming-oc-24gd'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-vision-oc-pcie-video-card-gv-n3090vision-oc-24gd'
		},		
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/inno3d-geforce-rtx-3090-ichill-x4-24gb-video-card-c30904-246xx-1880va36'
		},	
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/msi-rtx3090-24gb-ventus-3x-oc-pcie-video-card'
		},		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/msi-rtx3090-24gb-gaming-x-trio-pcie-video-card'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
			url:
				'https://www.computeralliance.com.au/msi-rtx3090-24gb-suprim-x-pcie-video-card'
		},				
//
//
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.computeralliance.com.au/asrock-rx6800-16gb-pcie-video-card'
		},
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.computeralliance.com.au/asus-rx6800xt-16gb-rog-strix-liquid-cooled-oc-gaming-pcie-video-card'
		},		
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url:
				'https://www.computeralliance.com.au/gigabyte-rx6800-16gb-gaming-oc-pcie-video-card-gv-r68gaming-oc-16gd'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.computeralliance.com.au/gigabyte-rx6800xt-16gb-gaming-oc-pcie-video-card-gv-r68xtgaming-oc-16gd'
		},		
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.computeralliance.com.au/msi-rx6800-16gb-pcie-video-card'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url:
				'https://www.computeralliance.com.au/msi-rx6800xt-16gb-gaming-x-trio-pcie-video-card'
		},		
//
//	
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.computeralliance.com.au/asus-rx6900xt-16gb-pcie-video-card-rx6900xt-16g'
		},
//
//	
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.computeralliance.com.au/amd-am4-ryzen-9-5950x-16-core-4.9ghz-cpu-no-heatsink-100-100000059wof'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.computeralliance.com.au/amd-am4-ryzen-9-5900x-12-core-4.8ghz-cpu-no-heatsink-100-100000061wof'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.computeralliance.com.au/amd-am4-ryzen-7-5800x-8-core-4.7ghz-cpu-(no-heatsink)-100-100000063wof'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.computeralliance.com.au/amd-am4-ryzen-5-5600x-6-core-4.6ghz-cpu-100-100000065box'
		}		
	],
	name: 'computeralliance'
};
