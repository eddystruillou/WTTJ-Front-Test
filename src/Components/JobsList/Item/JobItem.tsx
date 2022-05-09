import React from 'react';
import { Text } from '@welcome-ui/text';
import { Button } from '@welcome-ui/button';
import JobDescription from '../../JobDescription/JobDescription';
import { Job } from '../../../model';
import './JobItem.css';

interface Props {
  job: Job;
}

const JobItem: React.FC<Props> = ({ job }) => {
  return <div className="jobItem">
    <div className="jobName">
      <Text variant="subtitle1">{job.name}</Text>
    </div>
    <Text variant="subtitle2">{job.contract_type.en}</Text>
    <Text variant="subtitle2">{job.office.name}</Text>
    <JobDescription job={job} />
  </div>
}

export default JobItem;