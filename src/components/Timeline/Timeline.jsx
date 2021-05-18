import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import WorkIcon from '@material-ui/icons/Work';

import './Timeline.css'
import { styles } from '../../containers/portfolioStyles';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const CustomTimeline = ({ title, icon, children, classes }) => {
  return (
     <Timeline className={classes.Timeline}>
       {/* Item Header */}
      <TimelineItem className={classes.TimelineFirstItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.TimelineDotHeader}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={classes.TimelineHeader}>{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* Remaining Items */}
      {/* <TimelineItem>
        <CustomTimelineSeparator classes={classes}/>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}

    </Timeline>
  )
}


export const CustomTimelineSeparator = ({ classes }) => (
  <TimelineSeparator className={classes.TimelineSeparator}>
    <TimelineDot variant="outlined" className={classes.TimelineDot}/>
    <TimelineConnector />
  </TimelineSeparator>
)

export default withStyles(styles)(CustomTimeline);