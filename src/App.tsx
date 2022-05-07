import React, { useState, useEffect } from 'react';
import './App.css';
import JobList from './Components/JobsList/JobList';
import SearchBar from './Components/Filters/SearchBar/SearchBar';

const App:React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [jobs, setJobs] = useState<[]>([]);

  useEffect(() => {
    fetch(`https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k`)
      .then(res => res.json())
      .then(({ jobs }) => {
          setJobs(jobs);
          setIsLoaded(true);
        },
        error => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div className="App">
      <SearchBar />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
