import React, { Component } from 'react';
import '../css/Doctors.css';
import { updateUser } from '../../services/Api';

class UpdateDoctors extends Component {
    state = {
        Card: [
            {name: "Dr. Rukhsana",pic: require('../images/doc-1.jpg'),position: "Expert Cardiologist",urlimage: '../images/doc-1.jpg'},
            {name: "Dr. T.A Shah",pic: require('../images/doc-2.jpg'),position: "Expert Dermatologist",urlimage: '../images/doc-2.jpg'},
            {name: "Dr. Aizaz B",pic: require('../images/doc-3.jpg'),position: "Expert Pediatricianist",urlimage: '../images/doc-3.jpg'},
            {name: "Dr. Nadeem",pic: require('../images/doc-4.jpg'),position: "Expert Physiotherapist",urlimage: '../images/doc-4.jpg'},
            {name: "Dr. Bukhtawar",pic: require('../images/doc-5.jpg'),position: "Expert Neurologist",urlimage: '../images/doc-5.jpg'},
            {name: "Dr. Khawar",pic: require('../images/doc-6.jpg'),position: "Expert Gynaeclogist",urlimage: '../images/doc-6.jpg'}
        ],
    }
    updateDetails = async (event,object) => {
      event.preventDefault();
      const sendObject = {firstName: this.props.firstName,lastName: this.props.lastName,doctorName: object.name,doctorPosition: object.position,doctorImage: object.pic};
      const id = this.props.id;
      await updateUser(id,sendObject);
    }

  render() {
    return (
      <div>
        <section class="doctors" id="doctors">

            <h1 class="heading"> your <span>update</span> </h1>

            <div class="box-container">

                {this.state.Card.map((c) => {
                    return(
                          <div class="box">
                        <img src={c.pic} alt=""/>
                            <h3>{c.name}</h3>
                            <span>{c.position}</span>
                            <div class="share">
                                <button 
                                onClick={(event) => this.updateDetails(event,c)} 
                                className="btnt"
                                style={{width: "70%"}}
                                >Update</button>
                            </div>
                        </div>
                    );
                })}

            </div>

            </section>

      </div>
    )
  }
}

export default UpdateDoctors;