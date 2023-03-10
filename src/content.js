// project images
import fox from "./images/fox.jpg";
import netflixss from "./images/netflix-ss.jpg";
import topicratess from "./images/topicrate-ss.jpg";
import musicfinderss from "./images/musicfinder-ss.jpg";
import petgramss from "./images/petgram.jpg";
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
    code_url: "https://github.com/Danieruone/netflix-ui",
    topics: ["Reactjs", "Styled Components"],
  },
  {
    image: musicfinderss,
    name: "Music Finder",
    description: "Buscador de música implementando el API de Spotify",
    url: "https://music-finder.vercel.app/",
    code_url: "https://github.com/Danieruone/music-finder",
    topics: ["Reactjs", "Styled Components"],
  },
  {
    image: topicratess,
    name: "Topicrate",
    description:
      "Aplicación web con funcionalidad en tiempo real para calificar temas",
    url: "https://topicrate.vercel.app/",
    code_url: "https://github.com/Danieruone/topicrate",
    topics: ["Reactjs", "Styled Components", "SocketIO"],
  },
  {
    image: petgramss,
    name: "Petgram",
    description:
      "Página web diseño mobile first estilo Instagram con fotos de animales",
    url: "https://petgram-lovat-eight.vercel.app/",
    code_url: "https://github.com/Danieruone/petgram",
    topics: ["Reactjs", "Styled Components", "GraphQL"],
  },
  {
    image: fox,
    name: "Jumper Fox",
    description:
      "Videojuego para dispositivos móviles desplegado en la tienda de Google",
    url: "https://play.google.com/store/apps/details?id=com.DaruStudios.JumperFox&hl=es_CO",
    code_url: "https://github.com/Danieruone/jumper-fox",
    topics: ["Unity3D"],
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
  position: "💻 Ingeniero de software 💻",
  description1:
    "Soy ingeniero de software con tres años de experiencia en la creación de aplicaciones. Me apasiona aprender y utilizar las últimas tecnologías para mejorar la calidad de mis proyectos. Soy un desarrollador curioso, creativo y proactivo, siempre buscando nuevas soluciones para mejorar el rendimiento y la funcionalidad de las aplicaciones.",
};
