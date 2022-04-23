# Shoppy-API
A basic shoppy API wrapper

<!-- TOC -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

<!-- TOC -->

## Features
- Easy usage of the shoppy API
- Easily integratable
- Support for webhooks
- Automatic validation of webhook requests

## Installation
Current stable release (`1.x`)

```sh
$ npm install shoppy-api
```

## Usage

Here are some few examples of how you can use the API and how it looks like when in use

#### Requiring
```js
const { ShoppyAPI, WebhookAPI } = require('shoppy-api');
// OR
const shoppy = require('shoppy-api');
```

#### Orders
```js
const { ShoppyAPI } = require('shoppy-api');

const API = new ShoppyAPI('your-token-here');

let page = 1;
API.orders.all(page);
```

#### Reviews
```js
const { ShoppyAPI } = require('shoppy-api');

const API = new ShoppyAPI('your-token-here');

let page = 1;
API.feedback.all(page);
```

#### Webhook listening
```js
const { WebhookAPI } = require('shoppy-api');

const webhook = new WebhookAPI('your-secret-here');

webhook.on('order:paid', (order) => {
	console.log(`You received order: ${order.id}`);
});

webhook.getWebhookUrl().then((url) => { console.log(`Webhook now listening on ${url}`) });

// Incase your application does not prevent exiting of the script then you can add `process.stdin.resume();` here
```
