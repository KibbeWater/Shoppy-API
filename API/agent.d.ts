type UserAgent = {
	geo: {
		ip: string;
		iso_code: string;
		country: string;
		city: string;
		state: string;
		state_name: string;
		postal_code: string;
		lat: number;
		lon: number;
		timezone: string;
		continent: string;
		currency: string;
		default: boolean;
	};
	data: {
		is_mobile: boolean;
		is_tablet: boolean;
		is_desktop: boolean;
		platform: string;
		browser: {
			name: string;
			version: string;
		};
		device: {
			name: string;
			version: string;
		};
	};
};
