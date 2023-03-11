type CustomField = {
    name: string;
    type: 'text';
    required: boolean;
};

type Product = {
    id: string;
    attachment_id: string;
    title: string;
    description: string;
    unlisted: boolean;
    type: string;
    price: number;
    currency: string;
    email: string;
    stock_warning: number;
    quantity: string;
    confirmations: string;
    custom_fields: CustomField[];
    gateways: string[];
    webhook_urls: string[];
    position: string;
    created_at: string;
    updated_at: string;
    seller: string;
    stock: number;
    accounts: string[];
};

type CreateProductParams = {
    title: string;
    price: number;
    unlisted?: boolean;
    description?: string;
    type: 'service' | 'file' | 'account' | 'dynamic';
    stock_warning?: number;
    email: {
        enabled: boolean;
        value?: string;
    };
    quantity: {
        min?: number;
        max?: number;
    };
    confirmations?: number;
    attachment_id?: string;
    webhook_urls?: string[];
    dynamic_url?: string;
    gateways?: string[];
    accounts?: string[];
    currency: string;
};

type UpdateProductParams = {
    title?: string;
    price?: number;
    unlisted?: boolean;
    description?: string;
    type?: 'service' | 'file' | 'account' | 'dynamic';
    stock_warning?: number;
    email?: {
        enabled?: boolean;
        value?: string;
    };
    quantity?: {
        min?: number;
        max?: number;
    };
    confirmations?: number;
    attachment_id?: string;
    webhook_urls?: string[];
    dynamic_url?: string;
    gateways?: string[];
    accounts?: string[];
    currency?: string;
};
