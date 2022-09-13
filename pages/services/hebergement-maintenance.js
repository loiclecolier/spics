import style from '../../styles/modules/services/HebergementMaintenance.module.scss'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import CTAContact from '../../components/common/CTAContact'
import Competence from '../../components/services/Competence'
import Hero from '../../components/services/Hero'
import HebergementMaintenanceImage from '../../public/assets/img/services/hebergement-maintenance.jpg'
import HundredPercentIcon from '../../public/assets/icons/competences/hundred-percent.svg'
import TelephoneIcon from '../../public/assets/icons/competences/telephone.svg'
import ServersIcon from '../../public/assets/icons/competences/servers.svg'
import TargetIcon from '../../public/assets/icons/competences/target.svg'
import WWWIcon from '../../public/assets/icons/competences/www.svg'
import UploadCloudIcon from '../../public/assets/icons/competences/upload-cloud.svg'

export default function HebergementMaintenance() {
  return (
    <>
    <Head>
        <title>Spicx - Hébergement &amp; Maintenance</title>
        <meta name="description" content="Faites confiance à Spicx pour l’hébergement et la maintenance de votre site pour que vous puissiez vous consacrer à 100% à votre activité" />
    </Head>
    <Hero
      title="HÉBERGEMENT &amp; MAINTENANCE"
      subtitle="Gestion et maintenance de votre site<br/>à Tournai et Mouscron"
      img={HebergementMaintenanceImage}
    />
    <main className={style.maintenance}>
        <section className={style.maintenance__description}>
          <h2 data-aos="fade-up" className="titleService">L&apos;hébergement et la maintenance, c&apos;est quoi ?</h2>
          <div data-aos="fade-up" className={style.maintenance__description__content}>
              <div data-aos="fade-up" className={style.maintenance__description__text1}>
                <p>
                  Pour avoir un site web sur Internet, il doit être <strong>hébergé</strong> sur des machines, appelées <strong>serveurs</strong>, allumées 24h/24h 7j/7j pour permettre à vos visiteurs d’accéder à votre site à tout moment.
                </p>
                <p>
                  Il est également nécessaire d’acheter un <strong>nom de domaine</strong> qui permet d’accéder à votre site sur Internet. Un nom de domaine ressemble à ça : votre-activite.com.
                </p>
                <p>
                  <strong>Nous gérons pour vous l’hébergement de votre site et votre nom de domaine !</strong>
                </p>
              </div>
            <div data-aos="fade-up" className={style.maintenance__description__text2}>
              <p>En plus de ça, un site web doit être maintenu à jour régulièrement :</p>
              <ul>
                <li>Ajout de contenu</li>
                <li>Correction de bugs</li>
                <li>
                  Optimisation du <Link href="/services/referencement-seo"><a><strong>référencement (SEO)</strong></a></Link>
                </li>
                <li>Mise à jour technique</li>
                <li>...</li>
              </ul>
              <p>
                  <strong>Faites confiance à Spicx pour gérer la maintenance de votre site web !</strong>
                </p>
            </div>
          </div>
        </section>

        <section className={style.maintenance__competences}>
          <h2 data-aos="fade-up" className="titleService">Nos Compétences</h2>
          <div className={style.maintenance__competences__list}>
            <Competence
              img={HundredPercentIcon}
              widthImg="60"
              heightImg="45"
              text="Nous nous occupons entièrement de l’hébergement et de la maintenance de votre site web pour que <strong>vous puissiez vous consacrer à 100% à votre activité</strong>" />
            <Competence
              img={TelephoneIcon}
              widthImg="45"
              heightImg="45"
              text="Nous sommes là pour vous. <strong>Nous sommes disponibles à tout moment</strong> en cas de problème ou si avez des questions " />
            <Competence
              img={ServersIcon}
              widthImg="45"
              heightImg="45"
              text="Nous hébergeons votre site sur des <strong>serveurs proches</strong> de chez nous et <strong>sécurisés</strong>" />
            <Competence
              img={WWWIcon}
              widthImg="50"
              heightImg="50"
              text="Nous gérons pour vous le <strong>nom de domaine</strong> de votre site et son <strong>renouvellement</strong>" />
            <Competence
              img={UploadCloudIcon}
              widthImg="48"
              heightImg="48"
              text="Nous réalisons <strong>des sauvegardes</strong> de votre site <strong>régulièrement</strong> sur des serveurs sécurisés pour <strong>ne jamais perdre vos données</strong>" />
            <Competence
              img={TargetIcon}
              widthImg="45"
              heightImg="45"
              text="Nous discutons ensemble pour <strong>comprendre votre activité et vos objectifs</strong>, et ainsi vous proposer <strong>une solution adaptée à vos besoins</strong>" />
          </div>
        </section>

        <section className={style.maintenance__contact}>
          <CTAContact hasButton={true} isService={true} />
        </section>
      </main>
    </>
  )
}