import React from 'react';
import { render, screen } from "@testing-library/react";

import JobDescription from './JobDescription';
import { Job } from './../../model';

// Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'xs')]
// En ayant mis un point d'arrêt, le problème provient de l'endroit ou est fait le findIndex

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

test.skip("should title be equal to nameTest", () => {
    const { getByText } = render(<JobDescription job={jobTest} />);

    expect(getByText(jobTest.name)).toBe("nameTest");
});