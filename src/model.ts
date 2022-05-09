export interface Job {
    id: number;
    name: string;
    description: string;
    profile: string;
    recruitment_process: string;
    contract_type: {
        en: string
    };
    department: {
        name: string;
    };
    office: {
        name: string;
    };
    websites_urls: WebSiteReference[]
}

export interface WebSiteReference {
    website_reference: string;
    url: string;
}

export interface FilterState {
    selectedField: string;
    selectFields: string[];
}
  
export interface FilterAction {
    type: string;
    value: any;
}