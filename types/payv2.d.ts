type PayV2Response = {
	status: boolean;
	url: string;
	id: string;
};

type PayV2SimpleRequest = {
	title: string;
	value: number;
};

type PayV2Request = {
	title: string;
	value: number;
	white_label?: boolean;
	email: string;
	gateway: string;
	webhook_urls?: string[];
	custom_fields?: CustomField[];
	quantity?: number;
};

type PayV2AdvancedObject = {
	status: boolean;
	id: string;
	crypto_address: string;
	crypto_value: number;
	confirmations_needed: number;
	email: string;
	value: number;
	quantity: number;
	gateway: string;
};
