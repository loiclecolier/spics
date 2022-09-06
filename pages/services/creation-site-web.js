import Head from 'next/head'
import React from 'react'
import Hero from '../../components/services/Hero'
import CreationsSiteWebImage from '../../public/assets/img/services/creation-site-web.jpg'

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
    </>
  )
}