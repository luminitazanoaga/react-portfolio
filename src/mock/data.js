import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Luminița',
  subtitle: "I'm the Unknown Developer. ",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todolist.jpg',
    title: 'To Do List',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/luminitazanoaga/Calculate-Tip', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculatetip.jpg',
    title: 'Calculate Tip',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/luminitazanoaga/Calculate-Tip', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you are interested in',
  btn: 'click here',
  email: 'zanoaga2014@bk.ru',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/z%C4%83noag%C4%83-lumini%C8%9Ba-93a42b1ba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/luminitazanoaga',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
