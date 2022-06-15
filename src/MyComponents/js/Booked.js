import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import '../css/BookeMe.css';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, getUsers } from '../../services/Api';

function Booked() {
    const [bookingDetails,setBookingDetails] = useState([]);

    const navigate = useNavigate();

    const getBookings = async() => {
      const details = await getUsers();
      setBookingDetails(details.data);
    }

    useEffect(()=> {
      getBookings();
  },[]);

    const handleDelete = async (id) => {
    await deleteUser(id);
    getBookings();
    }

    const handleUpdate = async (id) => {
      navigate('/Update',{state: {id: id}});
    }


    return (
        <div>
            <Navbar/>
            <section class="blogs" id="blogs">

    <h1 class="heading"> our <span>bookings</span> </h1>

    <div class="box-container">

        {bookingDetails.map((l) => {
          return(
            <div class="box">
            <div class="image">
                <img src={l.doctorImage} alt=""/>
            </div>
            <div class="content">
                <div class="icon">
                    <Link class="a" to={"/"}> <i class="fas fa-calendar"></i> 1st may, 2021 </Link>
                    <Link class="a" to={"/"}> <i class="fas fa-user"></i> {l.firstName + " " + l.lastName} </Link>
                    <button class="btntu" onClick={() => handleUpdate(l._id)}> Edit <span class="fas fa-chevron-right"></span> </button>
                </div>
                <h3>{l.doctorName}</h3>
                <p><span><i class="fas fa-envelope"></i></span>  Email: {l.email}</p>
                <p>{l.doctorPosition}</p>
                <div>
                    <button class="btntd" onClick={() => handleDelete(l._id)}> Cancel Appointment <span class="fas fa-chevron-right"></span> </button>
                </div>
            </div>
        </div>
          )
        })}

    </div>

</section>
        </div>
    )
}

export default Booked