type WebhookConfig = {
	port?: number;
	secret?: string;
	secure?: boolean;
};

type WebhookCallback = { event: string; callback: (data: any) => void };
