import React, { Component } from 'react';
import '../css/Doctors.css';
import { addUser } from '../../services/Api';

export class Doctors extends Component {
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
    addDetails = async (event,object) => {
      event.preventDefault();
      const sendObject = {RecipientFirstName: this.props.firstName,RecipientLastName: this.props.lastName,RecipientEmail: this.props.email,DoctorName: object.name,DoctorPosition: object.position,DoctorImage: object.pic};
      await addUser(sendObject);
    }

  render() {
    return (
      <div>
        <section class="doctors" id="doctors">

            <h1 class="heading"> our <span>doctors</span> </h1>

            <div class="box-container">

                {this.state.Card.map((c) => {
                    return(
                          <div class="box">
                        <img src={c.pic} alt=""/>
                            <h3>{c.name}</h3>
                            <span>{c.position}</span>
                            <div class="share">
                                <button 
                                onClick={(event) => this.addDetails(event,c)} 
                                className="btnt"
                                style={{width: "70%"}}
                                >Get Appointment</button>
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

export default Doctors