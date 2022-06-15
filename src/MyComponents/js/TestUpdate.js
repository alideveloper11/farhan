import React from 'react'
import { useLocation } from 'react-router-dom';
import UpdateDoctorsPage from '../../Layouts/js/UpdateDoctorsPage';
function Test() {

  const location = useLocation();
  const {firstName,lastName,id} = location.state;

  return (
    <div>
      <UpdateDoctorsPage firstName={firstName} lastName={lastName} id={id}/>
    </div>
  )
}

export default Test;