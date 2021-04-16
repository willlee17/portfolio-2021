import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default {
  name: 'William Lee', 
  title: 'Frontend Developer',
  birthday: 'February 02, 1996',
  email: 'williamklee1996@gmail.com',

  socials: {
    LinkedIn: {
      link: 'https://www.linkedin.com/in/williamlee671/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />
    }, 
    GitHub: {
      link: 'https://github.com/willlee17',
      text: 'GitHub',
      icon: <GitHubIcon />
    }, 
  }
}