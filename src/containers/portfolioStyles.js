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
    width: '95%',
  },
  Section: {
    // border: '1px solid black'
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
  }
})