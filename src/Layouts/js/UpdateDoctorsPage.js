import React, { Component } from 'react';
import Navbar from '../../MyComponents/js/Navbar';
import UpdateDoctors from '../../MyComponents/js/UpdateDoctors';
import '../css/DoctorsPage.css';

class UpdateDoctorsPage extends Component {

    
  render() {
    return (
      <div>
          <Navbar/>
          <div id="k"><UpdateDoctors 
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          id={this.props.id}
          /></div>
      </div>
    )
  }
}

export default UpdateDoctorsPage