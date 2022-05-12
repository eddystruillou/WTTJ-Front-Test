import React from 'react';
import { Modal, useModalState } from '@welcome-ui/modal';
import { Button } from "@welcome-ui/button";
import { Box } from '@welcome-ui/box';
import { Text } from "@welcome-ui/text";
import { Job } from '../../model';

const JobDescription = ({ job }: {job: Job}) => {
    const modal = useModalState();

    return <>
        <Modal.Trigger as={Button} {...modal} color="dark.900" borderRadius="0">
        See more
        </Modal.Trigger>
        <Modal {...modal} size='md' ariaLabel="example">
        <Modal.Title>{job.name}</Modal.Title>
        <Modal.Content>
            <Text variant="h3">Job description</Text>
            <hr/>
            <Text dangerouslySetInnerHTML={{ __html: job.description }} />
            <Text variant="h3">Profile required</Text>
            <hr/>
            <Text dangerouslySetInnerHTML={{ __html: job.profile }} />
            <Text variant="h3">Conduct of the interviews</Text>
            <hr/>
            <Text dangerouslySetInnerHTML={{ __html: job.recruitment_process }} />
            <Box display="flex" w="100%" justifyContent="center" alignItems="center">
                <Box w={300} margin="xl" boxShadow="md">
                    <Text variant="h5" textAlign="center">Are you interested in this offer?</Text>
                    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
                        <Button as="a" color="dark.900" borderRadius="0" mb="xl"
                            href={job.websites_urls[job.websites_urls.findIndex((e) => e.website_reference === "wttj_fr")].url}
                            target="_blank" rel="noopener nofollow">
                            Apply
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal.Content>
        </Modal>
    </>
}

export default JobDescription;