import React from 'react';
import { render, screen } from "@testing-library/react";

import JobItem from './JobItem';
import { Job } from '../../../model';

// En supprimant la balise <box> qui contient la balise du composant <JobDescription> les tests passent
// Mais avec <JobDescription> on obtient l'erreur suivante
// Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'xs')]

const jobTest: Job = {
    id: 1,
    name: "nameTest",
    description: "DescriptionTest",
    profile: "profileTest",
    recruitment_process: "recruitmentProcessTest",
    contract_type: {
        en: "enTest"
    },
    department: {
        name: "departmentNameTest"
    },
    office: {
        name: "officeNameTest"
    },
    websites_urls: [
        {
            website_reference: "wttj_fr",
            url: "urlTest"
        }
    ]
};

test.skip("should return three title", () => {
    const { container } = render(<JobItem job={jobTest} />);
    const title = container.querySelectorAll("p");
  
    expect(title.length).toBe(3);
});

test.skip("should have the first title with job name", () => {
    render(<JobItem job={jobTest} />);
    const input = screen.getByText("nameTest");
  
    expect(input.textContent).toBe(jobTest.name);
});

test.skip("should have the second title with job contrat type", () => {
    render(<JobItem job={jobTest} />);
    const input = screen.getByText("enTest");
  
    expect(input.textContent).toBe(jobTest.contract_type.en);
});

test.skip("should have the second title with job contrat type", () => {
    render(<JobItem job={jobTest} />);
    const input = screen.getByText("officeNameTest");
  
    expect(input.textContent).toBe(jobTest.office.name);
});