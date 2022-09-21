import React, { useEffect } from 'react'
import Hero from '../components/services/Hero'
import Error404Img from '../public/assets/img/error404.jpg'
import Head from 'next/head';

export default function Error404() {

    return (<>
        <Head>
            <title>Spicx - Erreur 404</title>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div>
            <Hero 
                title="ERREUR 404"
                subtitle="La page recherché n'existe pas"
                img={Error404Img}
            />
        </div>
    </>)
}
