import React from 'react';
import './profile.css'
// import image from '../../assets/profile-image.jpeg'
// import Job from '../../components/jobprofile/Job'
// import Navbar from '../../components/navbar/Navbar';
import { donations } from './donations';
import { received } from './received';
import Temp from './Temp';

const Profile = () => {
  return (
    <>
      <section className="profile">
        <div className="profile-details">
          <h2 className='profile_heading'>User Details</h2>
          <img className='m-auto' src="" alt="" />
          <h4 className='m-auto'>Name :<span>Ramesh Kumar</span></h4>               
          <h4 className='m-auto'>Contact :<span>1234567890</span></h4>
          <h4 className='m-auto'>Location :<span>Bhopal</span></h4>

        </div>

        <div className="profile-add">
          <h2 className='profile_heading'>Donated</h2>
            <Temp data={donations} />

        </div>

        <div className="profile-add">
          <h2 className='profile_heading'>Received</h2>
          <Temp data={received} />
        </div>
      </section>
    </>
  )
};

export default Profile;
