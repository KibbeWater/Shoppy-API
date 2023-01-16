require('dotenv').config();
if (!process.env.SHOPPY_API_KEY) {
	console.error(''); // Do this otherwise the error message will be on the same line as the jest banner
	console.error(new Error('SHOPPY_API_KEY is required to run tests. Please set it in your environment variables.'));
	process.exit(1);
}

module.exports = () => {};
