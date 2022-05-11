import React from 'react';
import { Text } from '@welcome-ui/text';
import { Box } from '@welcome-ui/box';
import JobDescription from '../../JobDescription/JobDescription';
import { Job } from '../../../model';

interface Props {
  job: Job;
}

const JobItem: React.FC<Props> = ({ job }) => {
  return <Box p="md" display="flex" boxShadow="md">
      <Box w="80%">
        <Text variant="subtitle1" lines={1}>{job.name}</Text>
        <Text variant="subtitle2">{job.contract_type.en}</Text>
        <Text variant="subtitle2">{job.office.name}</Text>
      </Box>
      <Box w="20%" display="flex" justifyContent="center" alignItems="center">
        <JobDescription job={job} />
      </Box>
  </Box>
}

export default JobItem;