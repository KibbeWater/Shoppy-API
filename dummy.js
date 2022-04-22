const { ShoppyAPI } = require('./index');

(async () => {
	const api = new ShoppyAPI('k9JzatZZaTMT6SNz0PUYwnYE92B8sZIc6VPko6Wy0vwbhiSv9B');
	let order = await api.products.get('0dI2Urg');
	console.log(order);
})();
