import { createStyles } from '@material-ui/core/styles'

export const styles = () => createStyles({
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
  }
})