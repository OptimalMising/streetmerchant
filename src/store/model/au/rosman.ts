import {Store} from '../store';

export const Rosman: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#Availability > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4)',
			text: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: '#Availability > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4)',
			text: ['ETA','Call Us','0']
		}
	},
	links: [
		//
		// Nvidia 3080
		//
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/asus-nvidia-geforce-rtx-3080-10gb-2100mhz-core-clock-4750mhz-memory-clock/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/asus-nvidia-tuf-gaming-geforce-rtx-3080-10gb-buffed-up-design-with-chart-topping-thermal-performance/'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/asus-nvidia-rog-strix-geforce-rtx-3080-buffed-up-design-with-chart-topping-thermal-performance/'
		},
//		{
//			brand: 'asus',
//			model: 'strix oc',
//			series: '3080',
//			url:
//				'https://www.pccasegear.com/products/51850/asus-rog-strix-geforce-rtx-3080-oc-10gb'
//		},
//		{
//			brand: 'evga',
//			model: 'xc3',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85269-10g-p5-3883-kr'
//		},
//		{
//			brand: 'evga',
//			model: 'xc3 black',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85193-10g-p5-3881-kr'
//		},
//		{
//			brand: 'evga',
//			model: 'xc3 ultra',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85130-10g-p5-3885-kr'
//		},
//		{
//			brand: 'evga',
//			model: 'xc3 ultra hybrid',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86985-10g-p5-3888-kr'
//		},					
//		{
//			brand: 'evga',
//			model: 'ftw3',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/85194-10g-p5-3895-kr'
//		},
//		{
//			brand: 'evga',
//			model: 'ftw3 ultra',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165879'
//		},
//		{
//			brand: 'evga',
//			model: 'ftw3 ultra hybrid',
//			series: '3080',
//			url:
//				'https://www.scorptec.com.au/product/graphics-cards/nvidia/86984-10g-p5-3898-kr'
//		},					
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/gigabyte-geforce-rtx-3080-eagle-oc-10gb/'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.saveonit.com.au/products/productdetails/65165519'
		},		
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/aorus-geforce-rtx-3080-xtreme-10g/'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card/'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x4-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-4xfans-750w-3-years-warranty/'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x3-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url:
				'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-twin-x2-oc-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/'
		},
		//
		// AMD Zen3
		//
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://rosmancomputers.com.au/amd-ryzen-9-5900x-12-core-24-threads-max-freq-4-8ghz-70mb-cache-socket-am4-105w-without-cooler-100-100000061wo/'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://rosmancomputers.com.au/amd-ryzen-5-5600x-6-core-12-threads-max-freq-4-6ghz-35mb-cache-socket-am4-105w-with-wraith-stealth-cooler/'
		}		
	],
	name: 'rosman'
};
