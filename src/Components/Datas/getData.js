import psIcon from '../Images/psIcon.svg'
import xdIcon from '../Images/xdIcon.svg'
import aiIcon from '../Images/aiIcon.svg'
import aeIcon from '../Images/aeIcon.svg'
import sideName from '../Images/sideName.svg'
import profileDP from '../Images/profileDP.svg'
import CV from './CV.pdf'

import { WhatsApp, LinkedIn, GitHub, Mail, Phone } from '@material-ui/icons'

import dark_d1 from '../Images/Decorations/dark/decoration1.svg'
import dark_d2 from '../Images/Decorations/dark/decoration2.svg'
import dark_d3 from '../Images/Decorations/dark/decoration3.svg'
import dark_d4 from '../Images/Decorations/dark/decoration4.svg'
import dark_d5 from '../Images/Decorations/dark/decoration5.svg'
import dark_d6 from '../Images/Decorations/dark/decoration6.svg'

import light_d1 from '../Images/Decorations/light/decoration1.svg'
import light_d2 from '../Images/Decorations/light/decoration2.svg'
import light_d3 from '../Images/Decorations/light/decoration3.svg'
import light_d4 from '../Images/Decorations/light/decoration4.svg'
import light_d5 from '../Images/Decorations/light/decoration5.svg'
import light_d6 from '../Images/Decorations/light/decoration6.svg'

const myProfile = {
  name: 'Meenatchi',
  shortName: 'Meena',
  role: 'React Developer',
  technologies: 'ReactJS | ReactNative | JavaScript',
  tools: 'TypeScript, Redux, Hooks, Context API, REST API, GitHub Actions.',
  nameImage: sideName,
  DP: profileDP,
  CV: CV,
  mail: {
    id: 'meena.programmer@gmail.com',
    subject: 'Hiring for React Developer',
    body: '',
  },
}

const projects = [
  {
    name: 'Marvel Application',
    platform: 'React Js | Redux | TypeScript | Java',
    about:
      'The Web Marvel that is PSS transformation. That is not only the transformation of domestic PSS but also integrating domestic and international system into a common platform/operating model. Building a common B2B application to handle both domestic&Internationaltravels(Altea). Developing a flexible common integration hub(CAS) with diverse protocol support. ',
    tools: [
      'Hooks',
      'ReduxToolKit',
      'TypeScript',
      'i18n',
      'Axios',
      'React Router',
      'OpenApi Code Generator',
      'SpringBoot',
    ],
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Krida Application',
    platform: 'React Native | React JS | Redux',
    about:
      'Krida is an application which works for multiple club activities. This application built with React Native that manages the entire club activities and provides respective functionality such as session management, game creation, wallet and list of activities for various types of visitors.',
    tools: [
      'React Native',
      'React JS',
      'Hooks',
      'Redux Thunk',
      'Middleware',
      'Typescript',
      'Material UI',
    ],
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Billing Software',
    platform: 'React JS | React Native | PHP',
    about:
      'Billing app offers a myriad features that keep accounts detail, track sales details of each branch and maintain debt details of customers',
    tools: [
      'React Router',
      'Animation [React Spring]',
      'Hooks',
      'useContext',
      'Material UI',
      'PHP',
    ],
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'E-Commerce',
    platform: 'React JS | Redux | PHP',
    about:
      'Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the internet using a web browser.',
    tools: ['React Router', 'Hooks', 'Redux', 'Material UI', 'PHP'],
    githubLink: '',
    projectLink: '',
  },
]

const skills = [
  'React Native + React JS',
  'React Hooks',
  'Redux',
  'TypeScript',
  'Node + npm + yarn',
  'HTML + CSS',
  'JavaScript Fundamentals + ES6',
  'HOC [Higher Order Components]',
  'React Library [Redux, Axios]',
  'GitHub, Git',
  'Backend [Java SpringBoot, PHP, C#.Net]',
  'Firebase',
]

const UIUX_Design = [
  {
    logo: psIcon,
    name: 'PhotoShop',
  },
  {
    logo: xdIcon,
    name: 'Adobe XD',
  },
  {
    logo: aiIcon,
    name: 'Illustrator',
  },
]

const socialMedia = [
  {
    socialMedia: <Phone />,
    iconData: '6380606049',
    link: null,
  },
  {
    socialMedia: <WhatsApp />,
    iconData: '6380606049',
    link: null,
  },
  {
    socialMedia: <LinkedIn />,
    iconData: 'Meenatchi',
    link: 'https://www.linkedin.com/in/meena-programmer/',
  },
  {
    socialMedia: <GitHub />,
    iconData: 'Meena-programmer',
    link: 'https://github.com/meena-programmer',
  },
  {
    socialMedia: <Mail />,
    iconData: 'meena.programmer@gmail.com',
    link: null,
  },
]

const decorations = {
  dark: [
    {
      src: dark_d1,
    },
    {
      src: dark_d2,
    },
    {
      src: dark_d3,
    },
    {
      src: dark_d4,
    },
    {
      src: dark_d5,
    },
    {
      src: dark_d6,
      height: 1,
      width: 2,
    },
  ],

  light: [
    {
      src: light_d1,
    },
    {
      src: light_d2,
    },
    {
      src: light_d3,
    },
    {
      src: light_d4,
    },
    {
      src: light_d5,
    },
    {
      src: light_d6,
      height: 1,
      width: 2,
    },
  ],
}

export { projects, skills, UIUX_Design, myProfile, socialMedia, decorations }
