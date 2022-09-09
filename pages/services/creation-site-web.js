/* eslint-disable @next/next/no-img-element */
import style from '../../styles/modules/services/CreationSiteWeb.module.scss'
import Head from 'next/head'
import React from 'react'
import Hero from '../../components/services/Hero'
import CTAContact from '../../components/common/CTAContact'
import Competence from '../../components/services/Competence'
import CreationsSiteWebImage from '../../public/assets/img/services/creation-site-web.jpg'
import PaintShapesIcon from '../../public/assets/icons/competences/paint-shapes.svg'
import SpeedometerIcon from '../../public/assets/icons/competences/speedometer.svg'
import ShieldIcon from '../../public/assets/icons/competences/shield.svg'
import DesktopMobileIcon from '../../public/assets/icons/competences/desktop-mobile.svg'
import AnalyticIcon from '../../public/assets/icons/competences/analytic.svg'
import BoussoleIcon from '../../public/assets/icons/competences/boussole.svg'
import TargetIcon from '../../public/assets/icons/competences/target.svg'
import SpinningArrowsIcon from '../../public/assets/icons/competences/spinning-arrows.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import WordPressImage from '../../public/assets/img/services/wordpress.jpg';
import EcommerceImage from '../../public/assets/img/services/ecommerce.jpg';
import SiteVitrineImage from '../../public/assets/img/services/site-vitrine.jpg';
import SiteReservationImage from '../../public/assets/img/services/site-reservation.jpg';
import BlogImage from '../../public/assets/img/services/blog.jpg';
import AutresImage from '../../public/assets/img/services/autres.jpg';
import Image from 'next/image'

export default function CreationSiteWeb() {
  return (
    <>
      <Head>
          <title>Spics - Création de site web</title>
          <meta name="description" content="Faites confiance à Spics pour développer votre site. Notre flexibilité nous permet d’utiliser les bons outils en fonction de vos besoins et votre budget" />
      </Head>
      <Hero
        title="CRÉATION DE SITE WEB"
        subtitle="Conception de site internet<br/>à Tournai et Mouscron"
        img={CreationsSiteWebImage}
      />
      <main id="creation" className={style.creation}>
        <section className={style.creation__competences}>
          <h2 data-aos="fade-up" className="titleService">Nos Compétences</h2>
          <div className={style.creation__competences__list}>
            <Competence
              img={PaintShapesIcon}
              widthImg="45"
              heightImg="45"
              text="Nous sommes très <strong>flexibles</strong>, nous utilisons les <strong>outils</strong> qui correspondent à <strong>vos besoins</strong> et à <strong>votre budget</strong>" />
            <Competence
              img={SpeedometerIcon}
              widthImg="45"
              heightImg="45"
              text="Nous réalisons des sites web <strong>performants</strong> et <strong>rapides</strong> pour améliorer l’expérience de vos visiteurs" />
            <Competence
              img={ShieldIcon}
              widthImg="45"
              heightImg="45"
              text="Nous prêtons une attention particulière à la <strong>sécurité</strong> de votre site web pour <strong>éviter les attaques informatiques</strong>" />
            <Competence
              img={DesktopMobileIcon}
              widthImg="50"
              heightImg="50"
              text="Nous réalisons des sites <strong>responsives</strong>, c’est-à-dire <strong>adaptées</strong> aux différentes tailles d’écran (mobile, tablette, PC,...)" />
            <Competence
              img={AnalyticIcon}
              widthImg="45"
              heightImg="45"
              text="Nous <strong>optimisons le <a href='/services/referencement-seo'>référencement naturel (SEO)</a></strong> de votre site web" />
            <Competence
              img={BoussoleIcon}
              widthImg="45"
              heightImg="45"
              text="Nous vous accompagnons jusqu’au bout en vous <strong>formant aux outils</strong> et en vous <strong>conseillant</strong> pour l’utilisation de votre site" />
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

        <section className={style.creation__carousel} data-aos="fade-up" >
          <Carousel
            showStatus={false}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            className={style.creations__carousel__blocks}
          >
            <div>
              <div>
                <img src="/assets/img/services/wordpress.jpg" alt="Application WordPress sur un écran" />
              </div>
              <h2>WORDPRESS</h2>
              <p>Pour des sites adaptés à tous les budgets</p>
            </div>

            <div>
              <div>
                <img src="/assets/img/services/site-vitrine.jpg" alt="Vitrine d'une boulangerie" />
              </div>
              <h2>SITE VITRINE</h2>
              <p>Présentez votre activité pour augmenter votre visibilité</p>
            </div>

            <div>
              <div>
                <img src="/assets/img/services/ecommerce.jpg" alt="Boutique de vêtements" />
              </div>
              <h2>E-COMMERCE</h2>
              <p>Vendez vos produits en ligne pour augmenter vos revenus</p>
            </div>

            <div>
              <div>
                <img src="/assets/img/services/site-reservation.jpg" alt="Tables de restaurant" />
              </div>
              <h2>SITE DE RÉSERVATION</h2>
              <p>Utilisez un système en ligne de réservation pour gagner du temps</p>
            </div>

            <div>
              <div>
                <img src="/assets/img/services/blog.jpg" alt="Personne qui écrit" />
              </div>
              <h2>BLOG</h2>
              <p>Partagez votre savoir et votre expérience au monde entier</p>
            </div>

            <div>
              <div>
                <img src="/assets/img/services/autres.jpg" alt="Randonneur au sommet d'une montagne" />
              </div>
              <h2>ET BIEN D&apos;AUTRE...</h2>
              <p>Tous vos projets sont réalisables !</p>
            </div>
            
          </Carousel>
        </section>

        <section className={style.creation__contact}>
          <CTAContact hasButton={true} isService={true} />
        </section>
      </main>
    </>
  )
}