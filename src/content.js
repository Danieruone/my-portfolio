// project images
import fox from "./images/fox.jpg";
import netflixss from "./images/netflix-ss.jpg";
import applacartass from "./images/applacarta-ss.jpg";
import topicratess from "./images/topicrate-ss.jpg";
// about me images
import profilePic from "./images/profile.jpg";

export const projects = [
  // {
  //   image: applacartass,
  //   name: "Applacarta",
  //   description:
  //     "Aplicación web con funcionalidad en tiempo real para hacer pedidos desde la mesa al restaurante",
  //   url: "https://localapp-q7q4e76fn.vercel.app/",
  // },
  {
    image: netflixss,
    name: "Netflix UI",
    description: "Vista del home de Netflix con componente de render de video",
    url: "https://netflix-ui-alpha.vercel.app/",
  },
  {
    image: topicratess,
    name: "Topicrate",
    description:
      "Aplicación web con funcionalidad en tiempo real para calificar temas con distintas personas",
    url: "https://topicrate.vercel.app/",
  },
  {
    image: fox,
    name: "Jumper Fox",
    description:
      "Videojuego para dispositivos móviles desplegado en la tienda de Google",
    url: "https://play.google.com/store/apps/details?id=com.DaruStudios.JumperFox&hl=es_CO",
  },
];

export const articles = [
  {
    name: "Guía básica para entender componentes en React Js",
    description:
      "Introducción a los tipos de componentes de React Js como también sus principales métodos.",
    url: "https://medium.com/@danieruone/gu%C3%ADa-b%C3%A1sica-para-entender-componentes-en-react-js-9a0b07edb1f8",
  },
];

export const aboutMe = {
  image: profilePic,
  position: "Ingeniero de software 💻 Front-end developer ⌨️",
  description1:
    "Hola! mi nombre es Daniel Mendoza, soy de Bogotá Colombia. Me enfoco principalmente en el Front-end pero también tengo bases en Back-end. Me gusta compartir conocimiento y sobre todo estar actualizado en tecnologías y buenas prácticas.",
  description2:
    "Actualmente me dedico a desarrollar proyectos propios con el fin de mejorar mis habilidades en desarrollo. Mi meta es desarrollar aplicaciones escalables, eficientes y optimizadas para que el usuario tenga una experiencia óptima.",
};
