import React from 'react';
import { Modal, useModalState } from '@welcome-ui/modal';
import { Button } from "@welcome-ui/button";
import { Job } from '../../model';

const JobDescription = ({ job }: {job: Job}) => {
    const modal = useModalState();

    return <>
        <Modal.Trigger as={Button} {...modal}>
        See more
      </Modal.Trigger>
      <Modal {...modal} size='sm' ariaLabel="example">
        <Modal.Title>{job.name}</Modal.Title>
        <Modal.Content>
            {job.description}
        </Modal.Content>
      </Modal>
    </>
}

export default JobDescription;