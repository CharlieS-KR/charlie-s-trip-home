export interface items {
    title: string;
    description?: string;
    createdBy?: string;
};

export interface actions {
    type: string;
    payload: object;
};