import Head from 'next/head'
import React from 'react'
import Hero from '../../components/services/Hero'
import HebergementMaintenanceImage from '../../public/assets/img/services/hebergement-maintenance.jpg'

export default function HebergementMaintenance() {
  return (
    <>
    <Head>
        <title>Spics - Hébergement &amp; Maintenance</title>
        <meta name="description" content="Faites confiance à Spics pour l’hébergement et la maintenance de votre site pour que vous puissiez vous consacrer à 100% à votre activité" />
    </Head>
    <Hero
      title="HÉBERGEMENT &amp; MAINTENANCE"
      subtitle="Gestion et maintenance de votre site<br/>à Tournai et Mouscron"
      img={HebergementMaintenanceImage}
    />
    </>
  )
}