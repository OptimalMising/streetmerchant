import {Store} from '../store';

export const MSY: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '.product-collateral > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
			text: ['In Stock']
		},
		maxPrice: {
			container: '.goods-price',
			euroFormat: false
		},
		outOfStock: {
			container: 'td.spec-name:nth-child(2)',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-10g-gaming-10gb-rtx-3080-tuf-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-o10g-gaming-10gb-rtx-3080-tuf-gaming-vga-card'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.msy.com.au/asus-nvidia-geforce-rog-strix-rtx3080-o10g-gaming-10gb-rtx-3080-rog-strix-vga-card'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.msy.com.au/gigabyte-nvidia-n3080eagle-oc-10gd-10gb-rtx-3080-eagle-oc-pci-e-vga-card'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.msy.com.au/gigabyte-nvidia-n3080gaming-oc-10gd-10gb-rtx-3080-gaming-oc-pci-e-vga-card'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.msy.com.au/gigabyte-nvidia-geforce-n3080vision-oc-10gd-10gb-rtx-3080-vision-oc-pci-e-vga-card'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-suprim-x-10g-10gb-rtx-3080-suprim-x-pci-e-vga-card'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-10gb-rtx-3080-ventus-3x-oc-pci-e-vga-card'
		},
//
//
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6900',
			url:
				'https://www.msy.com.au/asrock-radeon-radeon-rx6900xt-16g-16gb-rx-6900-xt-pci-e-vga-card'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6900',
			url:
				'https://www.msy.com.au/sapphire-radeon-21308-01-20g-16gb-rx-6900-xt-pci-e-vga-card'
		},		
//
//		
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.msy.com.au/amd-ryzen-9-5950x-100-100000059wof-up-to-49ghz-base-clock-34ghzam416-cores32-threads8mb105w-unlocked-boxed-cpu-without-cpu-cooler'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.msy.com.au/amd-ryzen-9-5900x-100-100000061wof-up-to-48ghz-base-clock-37ghzam412-cores24-threads64mb105w-unlocked-boxed-cpu-without-cpu-cooler'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.msy.com.au/amd-ryzen-7-5800x-100-100000063wof-up-to-47ghz-base-clock-38ghzam48-cores16-threads32mb105w-unlocked-boxed-cpu-without-cpu-cooler'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.msy.com.au/amd-ryzen-5-5600x-100-100000065box-up-to-46ghz-base-clock-37ghzam46-cores12-threads32mb65w-unlocked-boxed-cpu-without-cpu-cooler'
		}		
	],
	name: 'msy'
};
