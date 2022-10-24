import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/EditWindow';
import AddJob from '../pages/dashboard/AddJob';

export default function EditWindow() {
  let { isEdit } = useSelector((store) => store.newJob);
  return (
    <Wrapper>
      <div className={`sidebar-container ${isEdit && 'show-sidebar'}`}>
        <div className="content">
          <AddJob />
        </div>
      </div>
    </Wrapper>
  );
}
