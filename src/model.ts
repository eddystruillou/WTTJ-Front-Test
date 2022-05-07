export interface Job {
    id: number;
    name: string;
    contract_type: {
        en: string
    };
    office: {
        name: string;
    };
}