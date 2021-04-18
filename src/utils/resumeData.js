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
  },

  aboutMe: "Hello and welcome to my page! I am a frontend developer in the Bay Area who's had 2+ YOE as a frontend developer across various SF startups. I am currently working as a frontend developer at DockPad, an agile construction management startup in San Francisco. Throughout my roles, I have primarily built key components and features for end users using JavaScript, TypeScript, React, HTML, CSS, Redux, Firebase, Node, Express, GraphQL, Jest, Enzyme, and REST APIs. I also helped contribute to scaling our frontend designs and build reusable, maintainable, and accessible features. Throughout my time at my previous work experiences, I have had many opportunities working with different engineers, managers, and clients. Building user-friendly products and improving upon front end designs has been an incredibly rewarding experience and I wish to continue to improve upon it in my career. "
}