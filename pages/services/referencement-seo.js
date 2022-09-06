import Head from 'next/head'
import React from 'react'
import Hero from '../../components/services/Hero'
import ReferencementSEOImage from '../../public/assets/img/services/referencement-seo.jpg'

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
    </>
  )
}