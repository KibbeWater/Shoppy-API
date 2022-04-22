const { ShoppyAPI, WebhookAPI } = require('./index');

(async () => {
	const api = new WebhookAPI('sss');
	console.log(await api.getWebhookUrl());
	api.on('order:paid', (data) => {
		console.log('order:paid executed with following data:');
		console.log(data);
	});
	api.execute('order:paid', { data: 'dumbfuck' });
})();
