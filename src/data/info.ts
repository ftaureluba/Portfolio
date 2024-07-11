export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Felipe Taurel",
  jobDescription: "Web Developer",
  about: `Soy un estudiante de licenciatura en sistemas viviendo en Buenos Aires, Argentina
   Cuento con 3 años de experiencia en HTML, CSS, SCSS, JavaScript, Bootstrap, Tailwind CSS, StyledComponent, React JS y Next JS.
   Por lo tanto, he completado con éxito varios proyectos web desde cero. A pesar de ello, aprendo de manera continua
   y nunca dejo de explorar nuevas tecnologías.

   Así, he adquirido conocimientos de Node JS, Express JS, MongoDB, Python, Firebase y React Native con el tiempo.
  `,

  experience: [
    {
      name: "Ayudante de catedra",
      location: "Universidad de Buenos Aires",
      startDate: "Apr 2024",
      endDate: "Present",
      description: [
        "Ayudante de catedra en la asignatura Algoritmos y programacion 2, corrector de trabajos practicos",
        "La asignatura se centra en estructuras de datos dinamicas, principalmente en C++",
      ],
    },

  ],

  education: [
    {
      name: "Licenciatura en analisis de sistemas.",
      location: "Universidad de Buenos Aires.",
      startDate: "2021",
      endDate: "presente",
      description: [
        "",
      ],
    }
  ],

  socialMedia: {
    github: "https://github.com/ftaureluba",
    email: "mailto:felitaurel@gmail.com",
    linkedin: "https://www.linkedin.com/in/felipe-taurel-4858b321a/",
  },

  projects: [
    {
      title: "Gym app",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/ftaureluba/posts/tree/main",
      liveUrl: "https://taurel-fitness-app.vercel.app/",
    },
    {
      title: "E-commerce",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/felitaurel/react",
      liveUrl: "https://ecommerce-taurel.vercel.app/",
    },
    
  ],
};
