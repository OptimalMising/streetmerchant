import {Link, Store} from '../store/model';
import Discord from 'discord.js';
import {config} from '../config';
import {logger} from '../logger';

const discord = config.notifications.discord;
const {notifyGroup, webhooks, notifyGroupSeries} = discord;

function getIdAndToken(webhook: string) {
	const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook);

	if (!match) {
		throw new Error('could not get discord webhook');
	}

	return {
		id: match[1],
		token: match[2]
	};
}

export function sendDiscordMessage(link: Link, store: Store) {
	if (webhooks.length > 0) {
		logger.debug('↗ sending discord message');

		(async () => {
			try {
				const embed = new Discord.MessageEmbed()
					.setTitle([JSON.stringify(link.brand+' '+link.model).replace(/"/ig,'').toUpperCase()+'  ('+link.series+')'])				
					.setURL(link.url)
					.setColor('#77dd77')
					.setFooter('Powered by StreetMerchant & Osir1s for ANZ inStock', 'https://www.freepnglogos.com/uploads/heart/list-emoji-one-symbol-emojis-for-use-facebook-20.png')
					.setTimestamp();

				embed.addField('Store', store.name, true);
				embed.addField('Model', link.model, true);
				embed.addField('Series', link.series, true);	
					
				if (link.price)
					embed.addField(
						'Price',
						`${store.currency}${link.price}`,
						true
					);				
				embed.addField('Product Page', '[Click Here]('+link.url+')');				
				if (link.cartUrl) embed.addField('Add to Cart', link.cartUrl);				

				let notifyText: string[] = [];

				if (notifyGroup) {
					notifyText = notifyText.concat(notifyGroup);
				}

				if (Object.keys(notifyGroupSeries).indexOf(link.series) !== 0) {
					notifyText = notifyText.concat(
						notifyGroupSeries[link.series]
					);
				}

				const promises = [];
				for (const webhook of webhooks) {
					const {id, token} = getIdAndToken(webhook);
					const client = new Discord.WebhookClient(id, token);

					promises.push({
						client,
						message: client.send(notifyText.join(' '), {
							embeds: [embed],
							username: 'ANZ inStock Notifier'
						})
					});
				}

				(await Promise.all(promises)).forEach(({client}) =>
					client.destroy()
				);

				logger.info('✔ discord message sent');
			} catch (error: unknown) {
				logger.error("✖ couldn't send discord message", error);
			}
		})();
	}
}
