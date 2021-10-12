interface experience {
  key: number;
  startDate: string;
  endDate: string;
  title: string;
  companyName: string;
  imageUrl: string;
  description: string[];
}

export const expData: experience[] = [
  {
    key: 0,
    startDate: '8/2021',
    endDate: 'Present',
    title: 'Information Technology Associate',
    companyName: 'The Tenzer Technology Center',
    imageUrl: process.env.PUBLIC_URL + 'images/depauw-logo.png',
    description: ['-'],
  },
  {
    key: 1,
    startDate: '5/2021',
    endDate: '8/2021',
    title: 'Software Engineer Intern',
    companyName: 'The Tenzer Technology Center',
    imageUrl: process.env.PUBLIC_URL + 'images/depauw-logo.png',
    description: [
      'Set up the AWS environment to manage student website hosting',
      'Implemented policies for IAM Users, S3, and EC2 to manage user permissions on the AWS resources.',
      'Documented the process of building the environment and the ways to deploy frontend and backend application on AWS platform to help students understand the cloud platform.',
      '-  Technologies and Skills: AWS IAM, EC2, S3',
    ],
  },
  {
    key: 2,
    startDate: '3/2021',
    endDate: '5/2021',
    title: 'Web Development Intern',
    companyName: 'The Tenzer Technology Center',
    imageUrl: process.env.PUBLIC_URL + 'images/depauw-logo.png',
    description: [
      'Developed DePauw Art Exhibition Web application for the annual DePauw art exhibition. Showed student artworks on the map with descriptions and real-time user location.',
      '-  Technologies and Skills: React.js, Google Maps API',
    ],
  },
  {
    key: 3,
    startDate: '& 1/2021 ~7/2020 3/2020',
    endDate: '3/2021',
    title: 'Software Engineer Intern',
    companyName: 'Seeann Solution',
    imageUrl: process.env.PUBLIC_URL + 'images/seeann-logo.png',
    description: [
      'Developed a CRM web application and desktop application for managing EEG brainwave data.',
      'Visualized 12500 electrophysiology signals per second flowing from Intan board. Successfully incorporated open-source data pipeline of the board into the application.',
      'Designed and implemented high-performing features that handles graphs of 64 channels which allow user to visually check the data with play, pause and reset functions.',
      '-  Technologies and Skills: React.js, Node.js – Express, MySQL, Qt, Git',
    ],
  },
];
