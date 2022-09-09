import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Hero from '../components/services/Hero'
import Error404Img from '../public/assets/img/error404.jpg'

export default function Error404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return (
        <section>
            <Hero 
                title="ERROR 404 - NOT FOUND"
                subtitle="Redirection vers la page d'accueil dans quelques instants..."
                img={Error404Img}
            />
        </section>
    )
}
