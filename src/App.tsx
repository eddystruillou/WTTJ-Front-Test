import React, { useState, useEffect } from 'react';
import './App.css';
import JobList from './Components/JobsList/JobList';
import SearchBar from './Components/Filters/SearchBar/SearchBar';
import { Job } from './model';

const App:React.FC = () => {
  // Used when fetching all the jobs data
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [jobs, setJobs] = useState<[]>([]);
  // Used when searching by input text
  const [filtredsJobs, setFiltredJobs] = useState<Job[]>([]);
  const [inputTextValue, setInputTextValue] = React.useState<string>('');

  /**
   * Creation of an array of elements filtered according to what the user enters in the inputText
   * @param event 
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Retrieving the content of our input text
    setInputTextValue(event.target.value);
    // Change our text to lower case format and split the elements after a space
    let text = inputTextValue.toLowerCase().split(' ');
    // We start to set up our filter only from 3 letters
    if(inputTextValue.length >= 2) {
      setFiltredJobs(jobs.filter(
        (job: Job) => {
          return text.every(el => {
            return job.name.toLowerCase().includes(el);
          });
        })
      );
    } else {
      setFiltredJobs([]);
    }
  }

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

  return <div className="App">
    <SearchBar handleChange={handleChange} value={inputTextValue} />
    <JobList jobs={filtredsJobs.length <= 0 && inputTextValue.length === 0 ? jobs : filtredsJobs} />
  </div>
}

export default App;
