import React from 'react';
import './Resume.css';
import { Grid, Typography } from '@material-ui/core'
import { styles } from '../../containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import resumeData from '../../utils/resumeData';

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

        {/* Education */}
        <Grid container  className={classes.Section}>

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