import style from '../../styles/modules/services/ReferencementSEO.module.scss'
import Head from 'next/head'
import React from 'react'
import CTAContact from '../../components/common/CTAContact'
import Hero from '../../components/services/Hero'
import Competence from '../../components/services/Competence'
import ReferencementSEOImage from '../../public/assets/img/services/referencement-seo.jpg'
import LettersIcon from '../../public/assets/icons/competences/letters.svg'
import WriteDocumentIcon from '../../public/assets/icons/competences/write-document.svg'
import DesktopMobileIcon from '../../public/assets/icons/competences/desktop-mobile.svg'
import TargetIcon from '../../public/assets/icons/competences/target.svg'
import SpinningArrowsIcon from '../../public/assets/icons/competences/spinning-arrows.svg'
import MagnifyingGlassIcon from '../../public/assets/icons/competences/magnifying-glass.svg'

export default function HebergementMaintenance() {
  return (
    <>
      <Head>
          <title>Spics - Référencement (SEO)</title>
          <meta name="description" content="Faites confiance à Spics pour optimiser le référencement naturel de votre site et augmenter la visibilité de votre activité" />
      </Head>
      <Hero
        title="RÉFÉRENCEMENT (SEO)"
        subtitle="Optimisation SEO de votre site<br/>à Tournai et Mouscron"
        img={ReferencementSEOImage}
      />
      <main className={style.referencement}>
        <section className={style.referencement__description}>
          <h2 className="titleService">Le SEO, c&apos;est quoi ?</h2>
          <div className={style.referencement__description__content}>
            <h3 className={style.referencement__description__subtitle}>
              <span className="gradientTextBig">SEO</span> (Search Engine Optimization)
            </h3>
            <p className={style.referencement__description__text1}>
            Le SEO signifie Search Engine Optimization (<strong>Optimisation pour les moteurs de recherche en français)</strong> et désigne les techniques qui visent à <strong>améliorer le référencement naturel</strong> de votre site web.<br/>
            En d’autres termes, le but du SEO est que votre site se trouve dans <strong>les premiers résultats des moteurs de recherche</strong> (Google par exemple) en se basant sur des mots-clés.
            </p>
            <div className={style.referencement__description__text2}>
              <p>Avec une <strong>bonne visibilité</strong> sur les moteurs de recherche, vous <strong>augmentez le trafic</strong> sur votre site web, votre nombre de clients, de ventes, etc. Le SEO est <strong>essentiel</strong> pour votre activité !</p>
              <p>Nous optimisons votre <strong>référencement sur Google</strong> en priorité. Il représente plus de 90% des parts de marché des moteurs de recherche en Belgique et en France (mars 2022).</p>
            </div>
          </div>
        </section>

        <section className={style.referencement__competences}>
          <h2 className="titleService">Nos Compétences</h2>
          <div className={style.referencement__competences__list}>
            <Competence
              img={DesktopMobileIcon}
              widthImg="45"
              heightImg="45"
              text="Nous <a href='/services/creation-site-web'><strong>développons des sites web</a> performants</strong>, <strong>sécurisés</strong> et <strong>accessibles</strong>. Ces 3 conditions techniques améliorent le référencement de votre site" />
            <Competence
              img={LettersIcon}
              widthImg="48"
              heightImg="48"
              text="Nous ciblons les <strong>mots-clés les plus intéressants</strong> de votre activité pour améliorer votre référencement" />
            <Competence
              img={WriteDocumentIcon}
              widthImg="45"
              heightImg="50"
              text="Nous <strong>rédigeons et optimisons le texte</strong> de votre site web en fonction des objectifs de votre activité" />
            <Competence
              img={MagnifyingGlassIcon}
              widthImg="45"
              heightImg="45"
              text="Nous réalisons un <strong>audit SEO de votre site</strong> pour optimiser son référencement sur les moteurs de recherche" />
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

        <section className={style.referencement__contact}>
          <CTAContact hasButton={true} isService={true} />
        </section>
      </main>
    </>
  )
}