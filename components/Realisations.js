import React from 'react';
import style from '../styles/modules/Realisations.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Jinkgo from '../public/assets/img/realisations/jinkgo.png';
import TiramisuBlog from '../public/assets/img/realisations/tiramisu-blog.png';
import ShuttleShop from '../public/assets/img/realisations/shuttle-shop.png';
import SportsRiveDroite from '../public/assets/img/realisations/sports-rive-droite.png';
import FigmaLogo from '../public/assets/icons/technologies/figma.png';
import ReactLogo from '../public/assets/icons/technologies/react.png';
import FirebaseLogo from '../public/assets/icons/technologies/firebase.png';
import NodeLogo from '../public/assets/icons/technologies/nodejs.png';
import ExpressLogo from '../public/assets/icons/technologies/expressjs.png';
import MongoDBLogo from '../public/assets/icons/technologies/mongodb.png';
import WordPressLogo from '../public/assets/icons/technologies/wordpress.png';
import BookedLogo from '../public/assets/icons/technologies/booked.png';
import Realisation from './Realisation';

export default function Realisations() {

  const figma = { name: "Figma", srcImage: FigmaLogo, altImage: "Logo Figma" };
  const reactTechno = { name: "React", srcImage: ReactLogo, altImage: "Logo React" };
  const nodejs = { name: "Node.js", srcImage: NodeLogo, altImage: "Logo Node.js" };
  const expressjs = { name: "Express.js", srcImage: ExpressLogo, altImage: "Logo Express.js" };
  const mongodb = { name: "MongoDB", srcImage: MongoDBLogo, altImage: "Logo MongoDB" };
  const wordpress = { name: "WordPress", srcImage: WordPressLogo, altImage: "Logo WordPress" };
  const booked = { name: "Booked", srcImage: BookedLogo, altImage: "Logo Booked" };
  const firebase = { name: "Firebase", srcImage: FirebaseLogo, altImage: "Logo Firebase" };

  return (
    <section id="realisations" className={style.realisations}>
        <h2 className={`titleSection ${style.realisations__title}`}>Nos Réalisations</h2>
        <Carousel showStatus={false} className={style.realisations__carousel}>
            <Realisation 
              link="https://loiclecolier.github.io/jinkgo/"
              title="Jinkgo"
              srcImage={Jinkgo}
              altImage="Représentation du site web Jinkgo"
              technologies={[figma, reactTechno]}
              information={true}
            />
            <Realisation 
              link="https://loiclecolier.github.io/tiramisu-blog"
              title="Tiramisu Blog"
              srcImage={TiramisuBlog}
              altImage="Représentation du blog Tiramisu"
              technologies={[reactTechno, firebase]}
              information={true}
            />
            <Realisation 
              link="https://shuttle-shop.herokuapp.com/"
              title="Shuttle Shop"
              srcImage={ShuttleShop}
              altImage="Représentation de la boutique en ligne Shuttle"
              technologies={[reactTechno, nodejs, expressjs, mongodb]}
              information={true}
            />
            <Realisation 
              link="https://sportsrivedroite.be/"
              title="Sports Rive Droite"
              srcImage={SportsRiveDroite}
              altImage="Représentation du site web Sports Rive Droite"
              technologies={[wordpress, booked]}
              information={false}
            />
        </Carousel>
    </section>
  )
}
