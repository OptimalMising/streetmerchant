import {Store} from '../store';

export const Scorptec: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#delivery-wrapper > div.product-stock-text',
			text: ['in stock']
		},
		maxPrice: {
			container: '#price-price',
			euroFormat: false
		},			
		outOfStock: {
			container: '#delivery-wrapper > div.product-stock-text',
			text: ['sold out','SOLD OUT']
		}		
	},
	links: [
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85443-rog-strix-rtx3080-10g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85382-rog-strix-rtx3080-o10g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix oc white',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/87348-rog-strix-rtx3080-o10g-white'
		},		
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85076-tuf-rtx3080-10g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85302-tuf-rtx3080-o10g-gaming'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85269-10g-p5-3883-kr'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85193-10g-p5-3881-kr'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85130-10g-p5-3885-kr'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra hybrid',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86985-10g-p5-3888-kr'
		},					
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85194-10g-p5-3895-kr'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85195-10g-p5-3897-kr'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra hybrid',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86984-10g-p5-3898-kr'
		},			
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85142-38nwm3md99nn'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85046-gv-n3080gaming-oc-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85711-gv-n3080aorus-x-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86435-gv-n3080aorusx-w-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86434-gv-n3080aorusx-wb-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86088-gv-n3080eagle-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85048-gv-n3080eagle-oc-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85328-gv-n3080aorus-m-10gd'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85329-gv-n3080vision-oc-10gd'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85334-c30804-106xx-1810va36'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85333-c30803-106xx-1810va37'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86640-geforce-rtx-3080-suprim-x-10g'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85146-geforce-rtx-3080-gaming-x-trio-10g'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85147-geforce-rtx-3080-ventus-3x-10g-oc'
		},		
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86188-zt-a30800f-10p'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85326-zt-a30800j-10p'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85038-zt-a30800d-10p'
		},
//
//
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86758-tuf-rx6800-o16g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86759-rog-strix-rx6800-o16g-gaming'
		},		
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/87086-gv-r68aorus-m-16gd'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86761-gv-r68gaming-oc-16gd'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86807-radeon-rx-6800-gaming-x-trio-16g'
		},		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86777-11305-01-20g'
		},
//
//		
		{
			brand: 'asrock',
			model: 'phantom gaming',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86775-rx6800xt-pgd-16go'
		},
		{
			brand: 'asrock',
			model: 'taichi',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86774-rx6800xt-tcx-16go'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86757-tuf-rx6800xt-o16g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86750-rog-strix-lc-rx6800xt-o16g-gaming'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/87085-gv-r68xtaorus-m-16gd'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master type-c',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/87084-gv-r68xtaorus-m-16gc'
		},		
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86760-gv-r68xtgaming-oc-16gd'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86805-radeon-rx-6800-xt-gaming-x-trio-16g'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86780-11304-02-20g'
		},
		{
			brand: 'sapphire',
			model: 'nitro+ se',
			series: 'rx6800xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/86781-11304-01-20g'
		},
//
//
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6900xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/87240-11308-01-20g'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6900xt',
			url:
				'https://www.scorptec.com.au/product/graphics-cards/amd/87375-gv-r69xtgaming-oc-16gd'
		},		
//
//
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.scorptec.com.au/product/cpu/amd-socket-am4/86008-100-100000059wof'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.scorptec.com.au/product/cpu/amd-socket-am4/86007-100-100000061wof'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.scorptec.com.au/product/cpu/amd-socket-am4/86006-100-100000063wof'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.scorptec.com.au/product/cpu/amd-socket-am4/86005-100-100000065box'
		}			
	],
	name: 'scorptec'
};
