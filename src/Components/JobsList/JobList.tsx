import React from 'react';
import JobItem from './Item/JobItem';
import './JobList.css';

const JobList = () => {
  return (
    <div className="jobList">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
    </div>
  )
}

export default JobList;