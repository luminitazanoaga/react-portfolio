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
  paragraphOne:
    "I am a student at the state university in Moldova. I learn through the bachelor's program in computer science.But this is not the most significant attribution of my personality. I do not stop myself perfecting the vision of life and everything that defines it.I try, in the same way we all do. I learn, I perfect, I find myself and I look for myself again.",
  paragraphTwo: 'I prefer quiet autumn evenings, strong morning coffee and documentaries.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todolist.jpg',
    title: 'To Do List',
    info:
      ' TO DO list app:, my html page have an input where you can enter your TO DO items , there is a Submit button that on click add new TO DO items to the existing list, there there is a Clear List button that delete all the TO DO items from the list, each Item in the list is displayed in a new line and have the possibility to be deleted from the list',
    info2: '',
    url: '',
    repo: 'https://github.com/luminitazanoaga/Calculate-Tip', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculatetip.jpg',
    title: 'Calculate Tip',
    info:
      ' My will allow you to calculate the Tip for the waitress in a restaurant. My project allow the end user to enter:, The total bill amount", The Service level: Outstanding-30%, Good-20%, OKish-15%, Bad - 10%, Never coming back - 0%, The number of persons that are splitting the bill',
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
