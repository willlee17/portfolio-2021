import React from 'react';
import './Resume.css';
import { Grid, Typography } from '@material-ui/core'
import { styles } from '../../containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import resumeData from '../../utils/resumeData';

import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';


const Resume = ({ classes }) => {
  return (
    
    <div>
      {/* About me */}
      <Grid container className={classes.Section}>
        <Grid item className={classNames(classes.SectionTitle)} xs={12}>  
          <span className={classes.SpanHighlight}></span>
          <Typography className={classNames(classes.SectionTitleTypography)}>About Me</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.AboutMe}>{resumeData.aboutMe}</Typography>
        </Grid>
      </Grid>

        {/* Resume */}
        <Grid container  className={classes.Section}>
          <Grid item className={classNames(classes.SectionTitle)} xs={12}>  
            <span className={classes.SpanHighlight}></span>
            <Typography className={classNames(classes.SectionTitleTypography)}>Resume</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container  className={classes.ResumeTimeline}>
            {/* Working History */}
              <Grid item md={6} xs={12}>
                <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                  {resumeData.experiences.map((experience) => (
                    <TimelineItem>
                      <CustomTimelineSeparator classes={classes} />
                      <TimelineContent>
                        <Typography classes={classes} className={classes.ResumeTitle}>{experience.title}</Typography>
                        <Typography variant="caption" classes={classes} className={classes.ResumeDate}>{experience.date}</Typography>
                        <br/>
                        <Typography variant="body" classes={classes} className={classes.ResumeDescription}>{experience.description}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
              {/* Education History */}
              <Grid item md={6} xs={12}>
                <CustomTimeline title="Education" icon={<SchoolIcon />}>
                  {resumeData.education.map((education) => (
                    <TimelineItem>
                      <CustomTimelineSeparator classes={classes} />
                      <TimelineContent>
                        <Typography classes={classes} className={classes.ResumeTitle}>{education.title}</Typography>
                        <Typography variant="caption" classes={classes} className={classes.ResumeDate}>{education.date}</Typography>
                        <br/>
                        <Typography variant="body" classes={classes} className={classes.ResumeDescription}>{education.description}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      {/* Services */}
        <Grid container  className={classes.Section}>

        </Grid>


        {/* Skills */}
        <Grid container  className={classes.Section}>

        </Grid>

         {/* Contact */}
         <Grid container className={classes.Section}>

        </Grid>
    </div>
   
  )
}

export default withStyles(styles)(Resume); 