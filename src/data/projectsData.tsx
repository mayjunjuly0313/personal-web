interface project {
  title: string;
  image: string;
  techStacks: string[];
  githubUrl: string;
}

export const projectsData: project[] = [
  {
    title: 'Coholy',
    image: 'coholy.png',
    techStacks: ['Python', 'FastAPI'],
    githubUrl: 'https://github.com/dnd-side-project/dnd-mentee-4th-5-backend',
  },
  {
    title: 'DePauw ArtWalk',
    image: 'depauw-artwalk.png',
    techStacks: ['React.js', 'Google Maps API'],
    githubUrl:
      'https://github.com/Depauw-Art-Walk-WebApp/Depauw-Art-Walk-WebApp',
  },
  {
    title: 'Indian Faker',
    image: 'indian-faker.png',
    techStacks: ['Node.js', 'AWS Lambda'],
    githubUrl: 'https://github.com/kinda-diff/kinda-diff-backend',
  },
  {
    title: 'Personal Website',
    image: 'personal-website.png',
    techStacks: ['React.js'],
    githubUrl: 'https://github.com/sjunhong/personal-web',
  },
];
