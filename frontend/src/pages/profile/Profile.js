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
          <h2 className='profile_heading'><u>User Details</u></h2>
          <img className='m-auto' src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fExPR098ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <h4 className='m-auto'>Name :<span>Bhopal Food Bank</span></h4>               
          <h4 className='m-auto'>Contact :<span>1234567890</span></h4>
          <h4 className='m-auto'>Location :<span>Bhopal</span></h4>

        </div>

        <div className="profile-add">
          <h2 className='profile_heading'><u>Donated</u></h2>
            <Temp data={donations} />

        </div>

        <div className="profile-add">
          <h2 className='profile_heading'><u>Received</u></h2>
          <Temp data={received} />
        </div>
      </section>
    </>
  )
};

export default Profile;
