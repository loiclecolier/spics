import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Hero from '../components/services/Hero'
import Error404Img from '../public/assets/img/error404.jpg'
import Head from 'next/head';

export default function Error404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return (<>
        <Head>
            <title>Spics - Erreur 404</title>
            <meta name="robots" content="noindex" />
        </Head>
        <div>
            <Hero 
                title="ERREUR 404 - PAGE INTROUVABLE"
                subtitle="Redirection vers la page d'accueil dans quelques instants..."
                img={Error404Img}
            />
        </div>
    </>)
}
