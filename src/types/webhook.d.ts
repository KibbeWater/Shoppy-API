type WebhookConfig = {
    secret?: string;
    secure?: boolean;
};

type WebhookCallback = { event: string; callback: (data: any) => void };
