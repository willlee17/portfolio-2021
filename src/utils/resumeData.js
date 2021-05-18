import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

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

  aboutMe: "Hello and welcome to my page! I am a frontend developer in the Bay Area who's had 2 YOE as a frontend developer across various SF startups. I am currently working as a frontend developer at DockPad, an agile construction management startup in San Francisco. Throughout my roles, I have primarily built key components and features for end users using JavaScript, TypeScript, React, React Native, HTML, CSS, Redux, Firebase, Node, Express, GraphQL, Jest, Enzyme, and REST APIs. I also helped contribute to scaling our frontend designs and build reusable, maintainable, and accessible features. Throughout my time at my previous work experiences, I have had many opportunities working with different engineers, managers, and clients. Building user-friendly products and improving upon front end designs has been an incredibly rewarding experience and I wish to continue to improve upon it in my career. ",

  experiences: [
    {
      title: "Frontend Developer - DockPad",
      date: "07/2020 - Present",
      description: "Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built "
    }, 
    {
      title: "Web Developer (Contract) - Cafe X Technologies",
      date: "12/2019 - 02/2020",
      description: "Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built "
    }, 
    {
      title: "Frontend Developer (Contract) - DockPad",
      date: "03/2018 - 08/2018",
      description: "Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built "
    }, 
  ],

  education: [
    {
      title: 'University of Pennsylvania',
      date: '08/2014 - 05/2018',
      description: "Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built UI Built "
    }
  ],

  services: [
    {
      title: 'Web Devevlopment',
      description: 'I have been a badass dev for 2years',
      icon: <WebOutlinedIcon />
    },
    {
      title: 'UI / UX Design',
      description: 'I have been a badass designer for 2years',
      icon: <DashboardOutlinedIcon />
    },
    {
      title: 'Testing',
      description: 'I have been a badass tester for 2years',
      icon: <BuildOutlinedIcon />
    },
    {
      title: 'Frontend Architecture',
      description: 'I have been a badass architect for 2years',
      icon: <AccountTreeOutlinedIcon />
    },
  ],

  skills: [
    {
      title: "FRONT-END", 
      description: [ "JavaScript", "TypeScript", "React", "Redux", "React Native", "HTML", "CSS", "SCSS", "Firebase" ]
    },
    {
      title: "BACK-END",
      description: [ "Node", "Express", "REST", "GraphQL", "Apollo"]
    },
    {
      title: "DATABASE", 
      description: ["Firebase", "MongoDB"]
    },
    {
      title: "TESTING",
      description: ["Jest", "Enzyme"]
    }, 
    {
      title: "SOURCE-CONTROL",
      description: ["Git", "Github", "SCRUM", "Agile" ]
    }
  ]
}