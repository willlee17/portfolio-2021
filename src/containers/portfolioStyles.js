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
    minHeight: '80px',
  },
  TimelineDotHeader: {
    backgroundColor: '#ffc500',
    color: 'black',
    padding: '10px',
  }, 
  Icon: {
    fontSize: 'small',
  },
  TimelineDot: {
    borderColor: '#ffc500',
    color: 'black',
    padding: '2px',
  },
  TimelineSeparator: {
    paddingLeft: '15px'
  },
  ProfileTimelineContent: {
    marginTop: '2px',
    marginBottom: '12px',
  },
  ProfileTimelineContentItem: {

  }, 
  ProfileTimelineContentItemText: {
    fontSize: '13.5px',
    color: '#787878',
    fontWeight: 400
  },
  ProfileTimelineContentItemTitle: {
    color: 'black',
  },
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
  Section: {

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
  }
})