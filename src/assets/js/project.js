/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
export const projects = [
  {
    id: 'tonic',
    name: 'Rinse',
    featured: ['CANOPY', 'Back End Dev', 2015],
    summary: 'A responsive JavaScript Application',
    description: `A web app developed using HTML, CSS and JavaScript to demonstrate reponsive design 
    principles and dynamic content generation. Fictional cleaning company showcasing their services`,
    image: require('../imgs/capstone-1.png'),
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/capstone-1/',
    source: 'https://github.com/j-tee/capstone-1',
  },
  {
    id: 'stories',
    name: 'Awesome Books',
    featured: ['FACEBOOK', 'Full Stack Dev', 2015],
    summary: 'Awesome Books is a simple library application design using ES6',
    description: `A simple web app built with HTML, CSS and JavaScript, displays a list of books and allows 
    the user to add books to a list in local storage, demonstrate the concept of modules in 
    JavaScript using ES6 approach`,
    image: require('../imgs/awesome-book.png'),
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/awesome-books-es6/',
    source: 'https://github.com/j-tee/awesome-books-es6/tree/master',
  },
  {
    id: 'leader',
    name: 'Leader Board',
    featured: ['FACEBOOK', 'Full Stack Dev', 2015],
    summary: 'A JavaScript Application for adding and displaying scores',
    description: `The application demonstrates the use of modules in JavaScript accessing the following API 
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api".`,
    image: require('../imgs/leaderboard.png'),
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://extraordinary-heliotrope-92c389.netlify.app/',
    source: 'https://github.com/j-tee/awesome-books-es6/tree/master',
  },
  {
    id: 'facebook',
    name: 'To Do List',
    summary: 'A JavaScript Application for managing tasks',
    featured: ['LOCAL STORAGE', 'Full Stack Dev', 2015],
    description: 'A simple web app built HTML, CSS and JavaScript that stores a list of todo tasks in local storage',
    image: require('../imgs/todolist.png'),
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/to-do-list/dist/',
    source: 'https://github.com/j-tee/to-do-list',
  },
  {
    id: 'doctors',
    name: 'Doctors',
    summary: 'A Client/Server Application that uses ReactJS for front-end and Ruby for the bakend API',
    featured: ['TeeJay', 'Lead Developer', 2015],
    description: `A web app that allows users to book the services of a doctors. 
    User can view a list of doctors and schedule an appointment, Add and delete a doctor. 
    The project is a collaboration in remote environment using pair-programming. 
    The application showcases a client/server architecture with the server being an Ruby API and the client, a react project`,
    image: require('../imgs/doctors.png'),
    technologies: ['ReactJS', 'Ruby', 'Bootstrap'],
    demo: 'https://preeminent-croquembouche-1dabc5.netlify.app/',
    source: 'https://github.com/j-tee/front-end-booking-app',
  },
];
