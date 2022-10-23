import React from 'react';
import Wrapper from '../assets/wrappers/SearchContainer';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

export default function SearchJobFrom() {
  function handleChange() {}

  return (
    <Wrapper>
      <form class="form">
        <h4>search form</h4>
        <div class="form-center">
          <FormRow
            name="search"
            type="text"
            value=""
            handleChange={handleChange}
          />
          <FormRowSelect
            name="status"
            value=""
            list={[1, 2, 3]}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="status"
            value=""
            list={[1, 2, 3]}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="status"
            value=""
            list={[1, 2, 3]}
            handleChange={handleChange}
          />

          <button class="btn btn-block btn-danger">clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
}
