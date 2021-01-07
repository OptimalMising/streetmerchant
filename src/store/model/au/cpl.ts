import {Store} from '../store';

export const Cpl: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container:
				'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
			text: ['In Stock']
		},
		outOfStock: {
			container:
				'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
			text: ['Pre Order']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-rog-strix-rtx3080-10g-gaming-graphics-card.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-10g-gaming-graphics-card.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-o10g-gaming-graphics-card.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-gaming-10g-p5-3895-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-ultra-gaming-10g-p5-3897-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-black-gaming-10g-p5-3881-kr-10gb-gddr6x-icx3-cooling-argb-led-hdmi-dpx3.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-gaming-10g-p5-3883-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-ultra-gaming-10g-p5-3885-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080aorus-m-10gd-aorus-geforce-rtx-3080-master-10gb.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-aorus-geforce-rtx-3080-xtreme-10g.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080aorusx-wb-10gd-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb.html'
		},		
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-geforce-rtx-3080-eagle-oc-10gb-graphics-card-gv-n3080eagle-oc-10gd.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080gaming-oc-10gd-graphics-card.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080vision-oc-10gd-geforce-rtx-3080-vision-oc-10gb.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30803-106xx-1810va37-geforce-rtx-3080-ichill-x3-10g.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30804-106xx-1810va36-geforce-rtx-3080-ichill-x4-10g.html'
		},
		{
			brand: 'leadtek',
			model: 'hurricane',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/leadtek-12789000110-geforce-rtx-3080-hurricane.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-gaming-x-trio-10g-graphics-card.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-geforce-rtx-3080-suprim-x-10g-graphics-card.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-ventus-3x-10g-oc-graphics-card.html'
		},
//
//
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://cplonline.com.au/asus-tuf-rtx3090-24g-gaming.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://cplonline.com.au/asus-tuf-rtx3090-o24g-gaming.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://cplonline.com.au/asus-rog-strix-rtx3090-o24g-gaming.html'
		},			
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3090',
			url:
				'https://cplonline.com.au/galax-geforce-rtxtm-3090-sg-1-click-oc.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-gv-n3090aorus-m-24gd-aorus-geforce-rtx-3090-master-24gb.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-aorus-geforce-rtx-3090-xtreme-24g.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-gv-n3090aorusx-w-24gd.html'
		},		
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-gv-n3090aorusx-wb-24gd.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-gv-n3090eagle-oc-24gd.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabute-gv-n3090gaming-oc-24gd-vga-card.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3090',
			url:
				'https://cplonline.com.au/gigabyte-gv-n3090vision-oc-24gd-geforce-rtx-3090-vision-oc-24gb-graphics-card.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3090',
			url:
				'https://cplonline.com.au/inno3d-c30903-246xx-1880va37-geforce-rtx-3090-ichill-x3-24gb.html'
		},		
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url:
				'https://cplonline.com.au/inno3d-c30904-246xx-1880va36-rtx-3090-ichill-x4-1755mhz-24gb.html'
		},		
		{
			brand: 'leadtek',
			model: 'hurricane',
			series: '3090',
			url:
				'https://cplonline.com.au/leadtek-12788000110-geforce-rtx-3090-hurricane.html'
		},		
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://cplonline.com.au/msi-rtx-3090-ventus-3x-24g-oc-vga-card.html'
		},		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://cplonline.com.au/msi-rtx-3090-gaming-x-trio-24g-vga-card.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
			url:
				'https://cplonline.com.au/msi-rtx-3090-suprim-x-24g-graphics-card.html'
		},	
//
//
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://cplonline.com.au/asus-radeon-rx6800-xt-16gb-graphics-card.html'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://cplonline.com.au/msi-radeon-rx6800-xt-16gb-graphics-card.html'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://cplonline.com.au/sapphire-11296-01-20g-radeon-pulse-rx-5600-xt-6g-gddr6-74342.html'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://cplonline.com.au/sapphire-11304-02-20g-nitro-radeon-rx-6800-xt-16-gb-graphics-card.html'
		},				
//
//		
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://cplonline.com.au/amd-ryzen-5950x.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://cplonline.com.au/amd-ryzen-5900x.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://cplonline.com.au/amd-ryzen-5800x.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://cplonline.com.au/amd-ryzen-5600x.html'
		}			
	],
	name: 'cpl'
};
