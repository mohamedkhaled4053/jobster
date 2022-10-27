import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import {
  changeSearchFilters,
  clearSearchFilters,
  editDisplayMode,
} from '../features/allJobsSlice';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

export default function SearchJobFrom() {
  // get data from the store
  let {
    displayMode,
    filters: { search, status, type, sort },
  } = useSelector((store) => store.allJobs);

  // prepare options data for select inputs
  let jobTypesList = ['all', 'full-time', 'part-time', 'remote', 'internship'];
  let statusList = ['all', 'pending', 'interview', 'declined'];
  let sortList = ['latest', 'oldest', 'a-z', 'z-a'];

  let dispatch = useDispatch();

  // helper functions
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(changeSearchFilters({ name, value }));
  }

  function ChangeDisplayMode(e) {
    let value = e.target.value;
    dispatch(editDisplayMode(value));
  }

  useEffect(()=>{

      dispatch(clearSearchFilters())
      dispatch(editDisplayMode('pagination'));
      
  },[])

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            name="search"
            type="text"
            value={search}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="status"
            value={status}
            list={statusList}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="type"
            value={type}
            list={jobTypesList}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            list={sortList}
            handleChange={handleChange}
          />

          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => {
              dispatch(clearSearchFilters());
            }}
          >
            clear filters
          </button>
          <FormRowSelect 
            name="display mode"
            value={displayMode}
            list={['pagination', 'infinite scroll']}
            handleChange={ChangeDisplayMode}
          />
        </div>
      </form>
    </Wrapper>
  );
}
