import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import JobList from './Components/JobsList/JobList';
import SearchBar from './Components/Filters/SearchBar/SearchBar';
import SelectionField from './Components/Filters/SelectionField/SelectionField';
import { Job, FilterState, FilterAction } from './model';

const filterReducer = (state: FilterState, { type, value }: FilterAction) => {
  switch (type) {
    case "onBaseFilter":
      return {
        ...state,
        selectFields: [...state.selectFields, ...value.selectFields]
      };
    case "onUpdateFilter": {
      return {
        ...state,
        selectedField: value
      };
    }
    default:
      throw new Error(`Unknow type: ${type}`);
  }
}

const App:React.FC = () => {
  // Used when fetching all the jobs data
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [jobs, setJobs] = useState<[]>([]);
  // Used when searching by input text
  const [inputTextValue, setInputTextValue] = useState<string>('');
  const [filtredsJobs, setFiltredJobs] = useState<Job[]>([]);
  // Used when searching by input text
  const [state, dispatch] = useReducer(filterReducer, {
    selectedField: "Group by",
    selectFields: ["Group by"]
  });

  /**
   * Creation of an array of elements filtered according to what the user enters in the inputText
   * @param event 
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Retrieving the content of our input text
    setInputTextValue(event.target.value);
  }

  /**
   * Update FiltredJobs
   */
   useEffect(() => {
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
    } else if (state.selectedField !== state.selectFields[0]) {
      setFiltredJobs(jobs.filter(
        (job: Job) => {
            return job.department.name.includes(state.selectedField);
        })
      );
    } else {
      setFiltredJobs([]);
    }
  }, [inputTextValue, state])

  /**
   * Data recovery from the backend at application launch
   */
  useEffect(() => {
    fetch(`https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k`)
      .then(res => res.json())
      .then(({ jobs }) => {
          dispatch({
            type: "onBaseFilter",
            value: {
              selectFields: Array.from(new Set(jobs.map((job: Job) => job.department.name)))
            }
          });
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
    <SelectionField state={state} dispatch={dispatch} />
    <JobList jobs={filtredsJobs.length <= 0 && inputTextValue.length === 0 ? jobs : filtredsJobs} />
  </div>
}

export default App;
