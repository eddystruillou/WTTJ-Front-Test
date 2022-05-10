import React from 'react';
import JobItem from './Item/JobItem';
import { Box } from '@welcome-ui/box';
import { Job } from '../../model';
import './JobList.css';

interface Props {
  jobs: Job[];
}

const JobList: React.FC<Props> = ({ jobs }) => {
  return <Box p="md" >
        { jobs.map(job => 
      <JobItem job={job} key={job.id} />
    )}
  </Box>
}

export default JobList;