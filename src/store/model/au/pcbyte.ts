import {Store} from './store';

export const PCByte: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '.in-stock-label',
			text: ['In Stock','IN STOCK']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: 'a.btn:nth-child(3)',
			text: ['Pre Order','Pre-Order']
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
				'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3070-tuf-gaming-oc-8gb-video-card-tuf-rtx3070-o8g-gaming-65877'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-tuf-rtx3080-o10g-gaming-56838'
		},
//		{
//			brand: 'asus',
//			model: 'strix',
//			series: '3080',
//			url:
//				'https://www.pccasegear.com/products/52274/asus-rog-strix-geforce-rtx-3080-10gb'
//		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-rog-strix-oc-10gb-video-card-rog-strix-rtx3080-o10g-gaming-57717'
		},					
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/galax-nvidia-geforce-rtx-3080-sg-1-click-oc-video-card-38nwm3md99nn-57223'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-vision-oc-10g-video-card-gv-n3080vision-oc-10gd-57540'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-gaming-oc-10gb-video-card-gv-n3080gaming-oc-10gd-53154'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-10g-video-card-gv-n3080eagle-10gd-63192'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-oc-10gb-video-card-gv-n3080eagle-oc-10gd-24750'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-master-10g-video-card-gv-n3080aorus-m-10gd-57539'
		},		
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-xtreme-10gb-video-card-gv-n3080aorus-x-10gd-60222'
		},
//		{
//			brand: 'gigabyte',
//			model: 'aorus xtreme waterforce',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165691'
//		},
//		{
//			brand: 'gigabyte',
//			model: 'aorus xtreme waterforce wb',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165692'
//		},
//		{
//			brand: 'inno3d',
//			model: 'ichill x4',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165575'
//		},
//		{
//			brand: 'inno3d',
//			model: 'ichill x3',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165564'
//		},
//		{
//			brand: 'inno3d',
//			model: 'twin x2 oc',
//			series: '3080',
//			url:
//				'https://www.saveonit.com.au/products/productdetails/65165576'
//		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-suprim-x-10g-video-card-64075'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-video-card-53151'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-gaming-x-trio-10g-video-card-53150'
		},
		//
		// AMD Zen3
		//
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5950x-16-core-32-threads-3-4-4-9ghz-am4-cpu-processor-100-100000059wof-61095?search=5950x'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5900x-12-core-24-threads-3-7-4-8ghz-am4-cpu-processor-100-100000061wof-61096?search=5900x'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.pcbyte.com.au/store/product/amd-ryzen-7-5800x-8-core-16-threads-3-8-4-7ghz-am4-cpu-processor-100-100000063wof-61098?search=5800x'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.pcbyte.com.au/store/product/amd-ryzen-5-5600x-6-core-12-threads-3-7-4-6ghz-am4-cpu-processor-100-100000065box-61099'
		}		
	],
	name: 'pcbyte'
};
