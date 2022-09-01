import style from '../styles/modules/Services.module.scss';
import React from 'react'
import Card from './Card';
import UXUIDesign from '../public/assets/img/ux-ui-design.jpg';
import CreationSiteWeb from '../public/assets/img/creation-site-web.jpg';
import ReferencementSEO from '../public/assets/img/referencement-seo.jpg';
import HebergementMaintenance from '../public/assets/img/hebergement-maintenance.jpg';

export default function Services() {

  return (
    <section id="services" className={style.services}>
      <h2 className={`titleSection ${style.titleService}`}>Nos Services</h2>
      <p className={style.sloganService}>Nous développons des solutions adaptées à vos besoins</p>
      <div className={style.listCards}>

        {/* UX / UI DESIGN */}
        <Card
          link="/ux-ui-design"
          title="UX / UI DESIGN"
          description="Faites-nous confiance pour offrir à vos utilisateurs une expérience intuitive et agréable avec un design à l’image de votre activité."
          srcImage={UXUIDesign}
          altImage="Plus de détails sur l'UX/UI Design"
        />

        {/* CREATION DE SITE WEB */}
        <Card
          link="/creation-site-web"
          title="CRÉATION DE SITE WEB"
          description="Faites-nous confiance pour développer votre site. Notre flexibilité nous permet d’utiliser les bons outils en fonction de vos besoins et votre budget."
          srcImage={CreationSiteWeb}
          altImage="Plus de détails sur la création de site web"
        />

        {/* REFERENCEMENT (SEO) */}
        <Card
          link="/referencement-seo"
          title="RÉFÉRENCEMENT (SEO)"
          description="Faites-nous confiance pour optimiser le référencement naturel de votre site et augmenter la visibilité de votre activité."
          srcImage={ReferencementSEO}
          altImage="Plus de détails sur le référencement (SEO)"
        />

        {/* HEBERGEMENT & MAINTENANCE */}
        <Card
          link="/hebergement-maintenance"
          title="HÉBERGEMENT &amp; MAINTENANCE"
          description="Faites-nous confiance pour l’hébergement et la maintenance de votre site pour que vous puissiez vous consacrer à 100% à votre activité."
          srcImage={HebergementMaintenance}
          altImage="Plus de détails sur l'hébergement et la maintenance"
        />
      </div>
    </section>
  )
}
