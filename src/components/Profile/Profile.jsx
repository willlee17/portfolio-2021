import React from 'react';
import { Typography } from '@material-ui/core';
import headshotImg from '../../assets/images/headshot.jpg'
import './Profile.css';

import CustomTimeline from '../Timeline/Timeline'

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">William Lee</Typography>
        <Typography className="title">Frontend Developer</Typography>
      </div>

      <figure className="profile_image">
        <img src={headshotImg} alt="Professional headshot" />
      </figure>

      <div className="profile_information">
        <CustomTimeline />
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}

export default Profile; 