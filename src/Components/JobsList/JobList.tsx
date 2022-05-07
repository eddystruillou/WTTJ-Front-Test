import React from 'react';
import JobItem from './Item/JobItem';
import { Job } from '../../model';
import './JobList.css';

interface Props {
  jobs: Job[];
}

const JobList: React.FC<Props> = ({ jobs }) => {
  return <div className="jobList">
    { jobs.map(job => 
      <JobItem job={job} key={job.id} />
    )}
  </div>
}

export default JobList;