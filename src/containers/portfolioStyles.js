import { createStyles } from '@material-ui/core/styles'

export const styles = () => createStyles({
  AppContainer: {
    marginTop: '60px'
  },
  Timeline: {
    padding: 0
  },
  TimelineHeader: {
    paddingTop: '7px',
  },
  TimelineFirstItem: {
    minHeight: '80px !important',
  },
  TimelineDotHeader: {
    backgroundColor: '#ffc500',
    color: 'black',
    padding: '10px',
  }, 
  Icon: {
    fontSize: 'small',
  },

  // remaining items
  TimelineDot: {
    borderColor: '#ffc500',
    color: 'black',
    padding: '2px',
  },
  TimelineSeparator: {
    paddingLeft: '20px'
  },
  ProfileTimelineContent: {
    paddingTop: '0px',
    marginBottom: '2px',
  },
  ProfileTimelineContentItem: {
    paddingTop: '4px',
  }, 
  ProfileTimelineContentItemText: {
    fontSize: '13.5px',
    color: '#787878',
    fontWeight: 400
  },
  ProfileTimelineContentItemTitle: {
    color: 'black',
  },


  // Button 
  CustomButton: {
    backgroundColor: '#ffc500',
    fontSize: '14px',
    fontWeight: '500',
    border: 0,
    borderRadius: '50px',
    padding: '1px 12px',
    lineHeight: '35px',
    minWidth: '100px',
    outline: 'none'
  },


  // Resume Page
  ResumeTimeline: {
    margin: '25px',
    // width: '95%',
  },
  Section: {
    // border: '1px solid black'
    width: '95%',
  }, 
  SectionTitle: {
    position: 'relative',
    display: 'inline-block',
    padding: '0 30px',
  },
  SectionTitleTypography: {
    fontSize: '18px',
    fontWeight: '600',
    position: 'relative',
    margin: 0,
  }, 
  SpanHighlight: {
    position: 'absolute',
    height: '7px',
    width: '90px',
    bottom: 0,
    opacity: 0.4,
    left: '27px', 
    top: '18px',
    backgroundColor: '#ffc500'
  }, 
  AboutMe: {
    padding: '30px',
    fontSize: '14px',
    lineHeight: '25px',
    color: 'darkslategray'
  },


  // Resume
  ResumeTitle: {
    marginTop: '-4px',
    fontSize: '16px',
    fontWeight: 500
  },
  ResumeDate: { 
    color: 'darkslategray',
  },
  ResumeDescription: {
    color: 'gray',
    fontSize: '12px',
    marginTop: '6px',
  },


  // My Services
  ServicesSection: {
    padding: "30px",
  },
  Service: {
    height: "100%",
    textAlign: "center",
  },
  ServiceIcon: {
    color: "darkslategray",
    fontWeight: 300,
    marginRight: "5px"
  }, 
  ServiceTitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: '35px',
    textAlign: 'center',
  }, 
  ServiceDescription: {
    color: '#989898',
    borderColor: '#ffc500',
    // marginRight: "5px",
    textAlign: "center"
  }, 


  // My Skills
  SkillsSection: {
    width: "95%",
    marginLeft: "15px", 
    marginRight: "15px", 
  }, 
  Skill: {
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 0px 48px 0px rgba(4,6,4,0.08)",
    minHeight: "186px",
    height: "100%",
  }, 
  SkillTitle: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "35px",
  },
  SkillDescription: {
    display: "flex",
    alignItems: "center",
    color: "#989898",
    fontWeight: 400,
    lineHeight: "18px",
  },
  SkillTimelineDot: {
    borderColor: '#ffc500',
    padding: "2px",
    marginRight: "5px"
  }, 



  //Portfolio styles
  ProjectsContainer: {
    marginTop: 30,
    marginLeft: 15,
  },
  CustomCard: {
    height: '100%',
    // maxWidth: 200,
    // minWidth: 250,
    boxShadow: "0px 0px 48px 0px rgba(4,6,4,0.08)",
    borderRadius: 5,
    overflow: 'hidden',
    outlineWidth: 0
  }, 
  CustomCardImage: {
    height: 140, 
  },  
  CustomCardTitle: {
    fontWeight: 500
  },
  CustomCardCaption: {
    color: 'darkslategray',
    fontWeight: 300
  },

  // ProjectDialog: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center', 
  //   maxWidth: 800
  // },
  ProjectDialogImage: {
    maxHeight: 300,
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center'
  }, 
  ProjectDialogDesc: {
    marginTop: 10
  }, 
  ProjectDialogActions: {
    justifyContent: 'center',
    marginBottom: 10
  },
  ProjectDialogIcon: {
    color: 'darkslategray',
    margin: '0px 12px',
    cursor: 'pointer',
  }
})