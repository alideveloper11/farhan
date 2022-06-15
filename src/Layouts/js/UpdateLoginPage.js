import React from 'react';
import '../css/LoginPage.css';
import Navbar from '../../MyComponents/js/Navbar'
import { UpdateLogin } from '../../MyComponents/js/UpdateLogin';
import { useLocation } from 'react-router-dom';

function UpdateLoginPage() {
    const state = {
            contact_pic: require("../../MyComponents/images/NewLogo.png"),
            Img: require("../../MyComponents/images/Background.png")
    }
    const location = useLocation();
    const {id} = location.state;

    return (
      <div className="LoginPage">
          <Navbar/>
                <div id="F">
                  <div id="L" className="container mt-3">
                      <div className="row">
                        <div className="col-md-5">
                          <UpdateLogin id={id}/>
                        </div>
                        <div className="col-md-7 my-auto">
                          <img className="img-fluid w-100" src={state.Img} alt=""/>
                        </div>
                      </div>
                    </div>
                </div>
      </div>
      
    )
}

export default UpdateLoginPage;