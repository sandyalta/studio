export const personalData = {
  name: 'Jane Doe',
  title: 'Full-Stack Developer',
  bio: "A passionate Full-Stack Developer with experience in building web applications with JavaScript, React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.",
  contact: {
    email: 'jane.doe@email.com',
    tel: '+1 123 456 7890',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  location: 'San Francisco, CA',
};

export const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    date: '2020 - Present',
    description:
      'Led development of a new microservices-based platform, improving scalability and performance. Mentored junior developers and established best practices for code quality and testing.',
  },
  {
    title: 'Software Engineer',
    company: 'Innovate Co.',
    date: '2018 - 2020',
    description:
      'Developed and maintained features for a large-scale e-commerce website using React and Node.js. Collaborated with designers and product managers to deliver a seamless user experience.',
  },
  {
    title: 'Junior Developer',
    company: 'Web Wizards',
    date: '2016 - 2018',
    description:
      'Assisted in building responsive websites for various clients. Gained foundational experience in HTML, CSS, JavaScript, and version control with Git.',
  },
];

export const projectsData = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with a modern UI, product management, and secure payments via Stripe.',
    image: '1',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Prisma'],
    links: {
      github: '#',
      preview: '#',
    },
  },
  {
    id: 'project-2',
    title: 'Project Management Tool',
    description:
      'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, with real-time updates.',
    image: '2',
    tags: ['Vue.js', 'Firebase', 'SCSS', 'Real-time DB'],
    links: {
      github: '#',
      preview: '#',
    },
  },
  {
    id: 'project-3',
    title: 'PortfolioFlow',
    description:
      'A personal portfolio website to showcase my work and skills, built with Next.js and featuring AI-powered CV data extraction.',
    image: '3',
    tags: ['Next.js', 'Genkit AI', 'Shadcn/ui', 'Tailwind'],
    links: {
      github: '#',
      preview: '#',
    },
  },
];

export const skillsData = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'Databases (SQL/NoSQL)', level: 80 },
  { name: 'Cloud (AWS/GCP)', level: 75 },
  { name: 'UI/UX Design', level: 70 },
];
