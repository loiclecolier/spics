import style from '../../styles/modules/services/UXUIDesign.module.scss'
import Head from 'next/head'
import React from 'react'
import Hero from '../../components/services/Hero'
import Competence from '../../components/services/Competence'
import UXUIDesignImage from '../../public/assets/img/services/ux-ui-design.jpg'
import PaintShapesIcon from '../../public/assets/icons/competences/paint-shapes.svg'
import WireframeIcon from '../../public/assets/icons/competences/wireframe.svg'
import DesktopMobileIcon from '../../public/assets/icons/competences/desktop-mobile.svg'
import TargetIcon from '../../public/assets/icons/competences/target.svg'
import SpinningArrowsIcon from '../../public/assets/icons/competences/spinning-arrows.svg'
import CTAContact from '../../components/common/CTAContact'

export default function UXUIDesign() {
  return (
    <>
      <Head>
          <title>Spicx - UX / UI Design</title>
          <meta name="description" content="Faites confiance à Spicx pour offrir à vos utilisateurs une expérience intuitive et agréable avec un design à l’image de votre activité" />
      </Head>
      <Hero
        title="UX / UI DESIGN"
        subtitle="Création graphique et web design<br/>à Tournai et Mouscron"
        img={UXUIDesignImage}
      />
      <main className={style.design}>
        <section className={style.design__description}>
          <h2 data-aos="fade-up" className="titleService">L&apos;UX / UI Design, c&apos;est quoi ?</h2>
          <div data-aos="fade-up" className={style.design__description__content}>

            <div className={style.design__description__ux}>
              <h3 data-aos="fade-up" className={style.design__description__subtitle}>
                <span className="gradientTextBig">UX</span> (User Experience)
              </h3>
              <p data-aos="fade-up" className={style.design__description__text}>
                L’UX fait référence à l’<strong>expérience d’un utilisateur</strong> sur un site web. Il y a de nombreux avantages à offrir l’expérience la plus <strong>intuitive</strong> et <strong>agréable</strong> possible à vos visiteurs en fonction de vos objectifs :
              </p>
              <ul data-aos="fade-up" className={style.design__description__list}>
                <li>Augmentation du temps passé sur votre site par visiteur</li>
                <li>Augmentation de votre nombre de clients</li>
                <li>Augmentation de vos ventes</li>
                <li>...</li>
              </ul>
            </div>
            
            <div className={style.design__description__ui}>
              <h3 data-aos="fade-up" className={`${style.design__description__subtitle} ${style.design__description__ui__subtitle}`}>
                <span className="gradientTextBig">UI</span> (User Interface)
              </h3>
              <p data-aos="fade-up" className={style.design__description__text}>
                L’UI fait référence à la conception de l’<strong>interface utilisateur</strong>, c’est-à-dire à l’ensemble des éléments graphiques qui composent un site web : boutons, images, typographie, couleurs, etc.
              </p>
              <p data-aos="fade-up" className={style.design__description__text}>
                Elle va de pair avec l’UX pour vous offrir un design <strong>qui correspond à votre activité</strong> et à votre image.
              </p>
            </div>

            <p data-aos="fade-up" className={style.design__description__slogan}>Une bonne expérience utilisateur peut faire <strong>décoller votre activité</strong> !</p>

          </div>
        </section>

        <section className={style.design__competences}>
          <h2 data-aos="fade-up" className="titleService">Nos Compétences</h2>
          <div className={style.design__competences__list}>
            <Competence
              img={PaintShapesIcon}
              widthImg="45"
              heightImg="45"
              text="Nous réalisons des maquettes <strong>professionnelles</strong>, <strong>modernes</strong> et <strong>sur mesure</strong> à l’image de votre activité" />
            <Competence
              img={WireframeIcon}
              widthImg="45"
              heightImg="45"
              text="Pour les <strong>budgets limités</strong>, nous avons des <strong>modèles</strong> (templates) <strong>personnalisables</strong> à 100%" />
            <Competence
              img={DesktopMobileIcon}
              widthImg="45"
              heightImg="40"
              text="Nous élaborons des maquettes <strong>responsives</strong>, c’est-à-dire <strong>adaptées</strong> aux différentes tailles d’écran (mobile, tablette, PC,...)" />
            <Competence
              img={TargetIcon}
              widthImg="45"
              heightImg="45"
              text="Nous discutons ensemble pour <strong>comprendre votre activité et vos objectifs</strong>, et ainsi vous proposer <strong>une solution adaptée à vos besoins</strong>" />
            <Competence
              img={SpinningArrowsIcon}
              widthImg="45"
              heightImg="45"
              text="Nous procédons <strong>par itérations</strong> pour que vous puissiez <strong>suivre l’avancement</strong> du projet et aboutir au <strong>résultat que vous attendez</strong>" />
          </div>
        </section>

        <section className={style.design__contact}>
          <CTAContact hasButton={true} isService={true} className={style.design__contact__component} />
        </section>
      </main>
    </>
  )
}
