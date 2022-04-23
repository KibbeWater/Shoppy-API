/**
 * @typedef {Object} ProductObject
 * @property {string} id
 * @property {string} attachment_id
 * @property {string} title
 * @property {string} description
 * @property {boolean} unlisted
 * @property {string} type
 * @property {number} price
 * @property {string} currency
 * @property {string} email
 * @property {number} stock_warning
 * @property {string} quantity
 * @property {string} confirmations
 * @property {Array<CustomField>} custom_fields
 * @property {Array<string>} gateways
 * @property {Array<string>} webhook_urls
 * @property {string} position
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} seller
 * @property {number} stock
 * @property {Array<string>} accounts
 */

/**
 * @typedef {Object} CreateProductParams
 * @property {string} title 3 - 128 characters
 * @property {number} price 0 - 10000
 * @property {?boolean} unlisted
 * @property {?string} description
 * @property {('service'|'file'|'account'|'dynamic')} type
 * @property {?number} stock_warning 0 - 10000
 * @property {boolean} email.enabled
 * @property {?string} email.value 1000 characters
 * @property {?number} quantity.min 1 - 1000000
 * @property {?number} quantity.max 1 - 1000000
 * @property {?number} confirmations 0 - 64
 * @property {?string} attachment_id
 * @property {?Array<string>} webhook_urls
 * @property {?string} dynamic_url
 * @property {?Array<string>} gateways
 * @property {?Array<string>} accounts
 * @property {string} currency Valid exchange_rate currency
 */

/**
 * @typedef {Object} OrderObject
 * @property {string} id
 * @property {string} pay_id
 * @property {string} product_id
 * @property {string} coupon_id
 * @property {number} price
 * @property {string} currency
 * @property {string} exchange_rate
 * @property {string} email
 * @property {number} delivered
 * @property {number} confirmations
 * @property {number} required_confirmations
 * @property {string} transaction_id
 * @property {string} crypto_address
 * @property {string} crypto_amount
 * @property {string} shipping_address
 * @property {number} quantity
 * @property {string} gateway
 * @property {Array<CustomField>} custom_fields
 * @property {string} refund_id
 * @property {boolean} is_replacement
 * @property {string} replacement_id
 * @property {string} paid_at
 * @property {string} disputed_at
 * @property {string} created_at
 * @property {boolean} is_partial
 * @property {boolean} crypto_received
 * @property {Array<string>} webhooks
 * @property {Array<string>} accounts
 * @property {Array<string>} coupon
 * @property {ProductObject} product
 */

/**
 * @typedef FeedbackObject
 * @property {string} id
 * @property {string} order_id
 * @property {string} comment
 * @property {number} stars
 * @property {number} rating
 * @property {string} response
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} product.id
 * @property {string} product.title
 */

/**
 * @typedef CustomField
 * @property {string} name
 * @property {('text')} type
 * @property {boolean} required
 */

/**
 * @typedef PagesResult
 * @property {number} totalPages
 * @property {number} page
 * @property {number} itemsPerPage
 */

/**
 * @typedef QueryObject
 * @property {string} id
 * @property {number} status
 * @property {string} subject
 * @property {string} email
 * @property {string} message
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<string>} replies
 * @property {string} agent.geo.ip
 * @property {string} agent.geo.iso_code
 * @property {string} agent.geo.country
 * @property {string} agent.geo.city
 * @property {string} agent.geo.state
 * @property {string} agent.geo.state_name
 * @property {string} agent.geo.postal_code
 */

/**
 * @typedef PayV2SimpleRequest
 * @property {string} title
 * @property {number} value
 */

/**
 * @typedef PayV2Request
 * @property {string} title
 * @property {number} value
 * @property {boolean} white_label
 * @property {string} email
 * @property {string} gateway
 * @property {?Array<string>} webhook_urls
 * @property {?Array<CustomField>} custom_fields
 * @property {?number} quantity
 */

/**
 * @typedef PayV2AdvancedObject
 * @property {boolean} status
 * @property {string} id
 * @property {string} crypto_address
 * @property {number} crypto_value
 * @property {number} confirmations_needed
 * @property {string} email
 * @property {number} value
 * @property {number} quantity
 * @property {string} gateway
 */

/**
 * @typedef PayV2Object
 * @property {boolean} status
 * @property {string} url
 */
