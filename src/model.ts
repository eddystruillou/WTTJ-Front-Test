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

export interface FilterState {
    selectedField: string;
    selectFields: string[];
}
  
export interface FilterAction {
    type: string;
    value: any;
}