import React from 'react';
import { Modal, useModalState } from '@welcome-ui/modal';
import { Button } from "@welcome-ui/button";
import { Text } from "@welcome-ui/text";
import { Job } from '../../model';

interface WebSiteReference {
    url: string | undefined;
    website_reference: string;
}

const JobDescription = ({ job }: {job: Job}) => {
    const modal = useModalState();

    return <>
        <Modal.Trigger as={Button} {...modal} bg="#FFCD00" borderColor="#FFCD00" color="dark.900" borderRadius="0">
        See more
      </Modal.Trigger>
      <Modal {...modal} size='md' ariaLabel="example">
        <Modal.Title>{job.name}</Modal.Title>
        <Modal.Content>
            <Text variant="h4">Descriptif du poste</Text>
            <Text dangerouslySetInnerHTML={{ __html: job.description }} />
            <Text variant="h4">Profil recherché</Text>
            <Text dangerouslySetInnerHTML={{ __html: job.profile }} />
            <Text variant="h4">Déroulement des entretiens</Text>
            <Text dangerouslySetInnerHTML={{ __html: job.recruitment_process }} />
            <Text variant="h5">Cette offre vous tente ?</Text>
            <Button as="a" 
                href={job.websites_urls[job.websites_urls.findIndex((e) => e.website_reference === "wttj_fr")].url}
                target="_blank" rel="noopener nofollow">
                Apply
            </Button>
        </Modal.Content>
      </Modal>
    </>
}

export default JobDescription;