import React from 'react';
import { Typography } from '@material-ui/core';
import headshotImg from '../../assets/images/headshot.jpg'
import './Profile.css';
import { styles } from '../../containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';


import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';


const CustomTimelineItem = ({title, text, link, classes}) => {
  return (
    <TimelineItem className={classes.ProfileTimelineContent}>
      <CustomTimelineSeparator classes={classes}/>
      <TimelineContent className={classes.ProfileTimelineContentItem}>
        {!!link ? 
        (<Typography className={classes.ProfileTimelineContentItemText}><span className={classes.ProfileTimelineContentItemTitle}>{title}:</span> {<a href={link} style={{textDecoration: 'none', color: '#787878'}} target="_blank">{text}</a>}</Typography>) : 
        (<Typography className={classes.ProfileTimelineContentItemText}><span className={classes.ProfileTimelineContentItemTitle}>{title}:</span> {text}</Typography>)}
      </TimelineContent>
    </TimelineItem>
  )
}

const Profile = ({ classes }) => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <div className="profile_image">
        <img src={headshotImg} alt="Professional headshot" />
      </div>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem classes={classes} title='Name' text={resumeData.name} />
          <CustomTimelineItem classes={classes} title='Title' text={resumeData.title} />
          <CustomTimelineItem classes={classes} title='Email' text={resumeData.email} />

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem classes={classes} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          ))}
        </CustomTimeline>
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Profile); 