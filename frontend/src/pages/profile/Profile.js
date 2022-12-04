import React from 'react';
import './profile.css'
// import image from '../../assets/profile-image.jpeg'
// import Job from '../../components/jobprofile/Job'
// import Navbar from '../../components/navbar/Navbar';
import { donations } from './donations';
import { received } from './received';
import Temp from './Temp';
import Navbar1 from '../../components/Navbar1';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {

  const [profile, setProfile] = useState()
  const [receive, setReceive] = useState()
  const [donated, setDonated] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://127.0.0.1:8000/api/user/profile/', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        // console.log(res)
        setProfile(res.data)
    })
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://127.0.0.1:8000/api/user/recieve/', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        // console.log(res)
        setReceive(res.data)
    })
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://127.0.0.1:8000/api/user/donation/', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        // console.log(res)
        setDonated(res.data)
    })
  }, []);

  return (
    <>
      <Navbar1 />
      <br />
      <section className="profile">
        <div className="profile-details">
          <h2 className='profile_heading'><u>User Details</u></h2>
          <img className='m-auto' src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fExPR098ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <h4 className='m-auto'>Name :<span>{profile.name}</span></h4>               
          <h4 className='m-auto'>Contact :<span>{profile.mobile}</span></h4>
        </div>

        <div className="profile-add">
          <h2 className='profile_heading'><u>Donated</u></h2>
            <Temp data={donated} />

        </div>

        <div className="profile-add">
          <h2 className='profile_heading'><u>Received</u></h2>
          <Temp data={receive} />
        </div>

      </section>

      <button onClick={() => {
        localStorage.clear()
        window.location.reload()
      }}>Logout</button>
        

    </>
  )
};

export default Profile;
