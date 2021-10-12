interface Project {
  title: string;
  image: string;
  techStacks: any;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'Picme',
    image: 'picme.png',
    techStacks: (
      <>
        TypeScript · Node.js <br />
        AWS - ( VPC · ECS · ECR · S3 · RDS ) <br />
        DevOps: Docker · AWS CDK (IaC) · CodePipeline
      </>
    ),
    githubUrl: 'https://github.com/dnd-side-project/dnd-5th-1-backend',
  },
  {
    title: 'Algorithm Visualizer',
    image: 'algorithm-visualizer.png',
    techStacks: (
      <>
        TypeScript · React.js <br />
        DevOps: GitHub Actions
      </>
    ),
    githubUrl: 'https://sjunhong.github.io/algorithm-visualizer',
  },
  {
    title: 'Coholy',
    image: 'coholy.png',
    techStacks: (
      <>
        Python · FastAPI <br />
        DevOps: Docker · GCP · Buddy
      </>
    ),
    githubUrl: 'https://github.com/dnd-side-project/dnd-mentee-4th-5-backend',
  },
  {
    title: 'DePauw ArtWalk',
    image: 'depauw-artwalk.png',
    techStacks: ['React.js · Google Maps API'],
    githubUrl: 'https://github.com/Depauw-Art-Walk-WebApp/Depauw-Art-Walk-WebApp',
  },
  {
    title: 'Indian Faker',
    image: 'indian-faker.png',
    techStacks: ['Node.js · AWS Lambda'],
    githubUrl: 'https://github.com/kinda-diff/kinda-diff-backend',
  },
  {
    title: 'Personal Website',
    image: 'personal-website.png',
    techStacks: (
      <>
        TypeScript · React.js <br />
        DevOps: GitHub Actions
      </>
    ),
    githubUrl: 'https://github.com/sjunhong/personal-web',
  },
];
