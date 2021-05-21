import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { styles } from '../../containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Typography, Icon, Paper, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import resumeData from '../../utils/resumeData';

import picture from '../../assets/images/computer.jpeg'


const Portfolio = ({ classes }) => {
  const [projectDialog, setProjectDialog] = useState(false)

  const ProjectDialog = () => (
    <Dialog open={projectDialog} onClose={() => setProjectDialog({})}>
      <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
      <img src="" alt="" />
      <DialogContent>
        {projectDialog.description}
      </DialogContent>
      <DialogActions>
        {projectDialog.links.map(link => (
          <a href={link.link} target="_blank" > {link.icon} </a>
        ))}
      </DialogActions>
    </Dialog>
  )

  return (
    <Grid container className={classes.Section}>
       {/* Title */}
        <Grid item className={classNames(classes.SectionTitle)} xs={12}>  
          <span className={classes.SpanHighlight}></span>
          <Typography className={classNames(classes.SectionTitleTypography)}>Portfolio</Typography>
        </Grid>

        <br />

        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.ProjectsContainer}>
            { resumeData.projects.map(project => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* <Grid item> */}
                <Grow in timeout={1000}>
                  <Card className={classes.CustomCard} onClick={() => setProjectDialog(project)}>
                    <CardActionArea>
                      <CardMedia className={classes.CustomCardImage} image={project.image} title={project.title}/>
                      <CardContent>
                        <Typography variant="body1" className={classes.CustomCardTitle}>{project.title}</Typography>
                        <Typography variant="caption" className={classes.CustomCardCaption}>{project.caption}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            )) }
          </Grid>
        </Grid>

        <Dialog className={classes.ProjectDialog} open={projectDialog} onClose={() => setProjectDialog(false)}>
          <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
          <img src={projectDialog.image} alt="" className={classes.ProjectDialogImage}/>
          <DialogContent>
            <Typography className={classes.ProjectDialogDesc}>{projectDialog.description}</Typography>
          </DialogContent>
          <DialogActions className={classes.ProjectDialogActions}>
            {projectDialog.links && projectDialog.links.map(link => (
              <a className={classes.ProjectDialogIcon} href={link.link} target="_blank" > {link.icon} </a>
            ))}
          </DialogActions>
        </Dialog>
    </Grid>
  )
}

export default withStyles(styles)(Portfolio); 