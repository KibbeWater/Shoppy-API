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

type Query = {
	id: string;
	status: number;
	subject: string;
	email: string;
	message: string;
	created_at: string;
	updated_at: string;
	replies: string[];
	agent: {
		geo: {
			ip: string;
			iso_code: string;
			country: string;
			city: string;
			state: string;
			state_name: string;
			postal_code: string;
		};
	};
};
