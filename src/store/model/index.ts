import {config, defaultStoreData} from '../../config';
import {Allneeds} from './au/allneeds';
import {Amazon} from './amazon';
import {Amd} from './amd';
import {Bpctech} from './au/bpctech';
import {Centrecom} from './au/centrecom';
import {ComputerAlliance} from './au/computeralliance';
import {Cpl} from './au/cpl';
import {Dcomp} from './au/dcomp';
import {Evatech} from './au/evatech';
import {HarrisTechnology} from './au/harristechnology';
import {iGameComputer} from './au/igame';
import {LandmarkComputers} from './au/lmc';
import {MSY} from './au/msy';
import {Mwave} from './au/mwave';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {PCByte} from './au/pcbyte';
import {PBTech} from './au/pbtech';
import {Pccg} from './au/pccg';
import {PlayStation} from './playstation';
import {Rosman} from './au/rosman';
import {SaveOnIt} from './au/saveonit';
import {Scorptec} from './au/scorptec';
import {StormComputers} from './au/storm';
import {Store} from './store';
import {Umart} from './au/umart';
import {WellsTechnology} from './au/wellstechnology';
import {Xbox} from './xbox';
import {logger} from '../../logger';

export const storeList = new Map([
	[Allneeds.name, Allneeds],
	[Amazon.name, Amazon],
	[Amd.name, Amd],
	[Bpctech.name, Bpctech],
	[Centrecom.name, Centrecom],
	[ComputerAlliance.name, ComputerAlliance],	
	[Cpl.name, Cpl],
	[Dcomp.name, Dcomp],
	[Evatech.name, Evatech],	
	[HarrisTechnology.name, HarrisTechnology],
	[iGameComputer.name, iGameComputer],	
	[LandmarkComputers.name, LandmarkComputers],		
	[MSY.name, MSY],	
	[Mwave.name, Mwave],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[PCByte.name, PCByte],
	[PBTech.name, PBTech],		
	[Pccg.name, Pccg],
	[PlayStation.name, PlayStation],
	[Rosman.name, Rosman],	
	[SaveOnIt.name, SaveOnIt],
	[Scorptec.name, Scorptec],
	[StormComputers.name, StormComputers],	
	[Umart.name, Umart],
	[Xbox.name, Xbox],
	[WellsTechnology.name, WellsTechnology],	
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
	brands.clear();
	series.clear();
	models.clear();

	for (const store of storeList.values()) {
		for (const link of store.links) {
			brands.add(link.brand);
			series.add(link.series);
			models.add(link.model);
		}

		if (store.minPageSleep === undefined) {
			store.minPageSleep = defaultStoreData.minPageSleep;
		}

		if (store.maxPageSleep === undefined) {
			store.maxPageSleep = defaultStoreData.maxPageSleep;
		}
	}
}

function printConfig() {
	if (config.store.stores.length > 0) {
		logger.info(
			`ℹ selected stores: ${config.store.stores
				.map((store) => store.name)
				.join(', ')}`
		);
	}

	if (config.store.showOnlyBrands.length > 0) {
		logger.info(
			`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`
		);
	}

	if (config.store.showOnlyModels.length > 0) {
		logger.info(
			`ℹ selected models: ${config.store.showOnlyModels
				.map((entry) => {
					return entry.series
						? entry.name + ' (' + entry.series + ')'
						: entry.name;
				})
				.join(', ')}`
		);
	}

	if (config.store.showOnlySeries.length > 0) {
		logger.info(
			`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`
		);
	}
}

function warnIfStoreDeprecated(store: Store) {
	switch (store.name) {
		case 'nvidia':
		case 'nvidia-api':
			if (config.store.country === 'usa')
				logger.warn(`${store.name} is deprecated in favor of bestbuy`);
			break;
		case 'evga':
			logger.warn(
				`${store.name} is deprecated since they only support queuing`
			);
			break;
		default:
	}
}

export function updateStores() {
	stores.clear();

	for (const storeData of config.store.stores) {
		const store = storeList.get(storeData.name);

		if (store) {
			warnIfStoreDeprecated(store);
			stores.set(storeData.name, store);
			store.minPageSleep = storeData.minPageSleep;
			store.maxPageSleep = storeData.maxPageSleep;
			store.proxyList = storeData.proxyList;
		} else {
			logger.warn(`No store named ${storeData.name}, skipping.`);
		}
	}

	filterBrandsSeriesModels();
	printConfig();
}

updateStores();

export function getAllBrands() {
	return Array.from(brands);
}

export function getAllSeries() {
	return Array.from(series);
}

export function getAllModels() {
	return Array.from(models);
}

export function getStores() {
	return stores;
}

export * from './store';
