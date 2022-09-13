import Head from 'next/head';
import Hero from '../components/main/Hero';
import Services from '../components/main/Services';
import CTAContact from '../components/common/CTAContact';
import Valeurs from '../components/main/Valeurs';
import Realisations from '../components/main/Realisations';
import Contact from '../components/main/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spicx - Création de site web à Tournai et Mouscron</title>
        <meta name="description" content="Vous êtes indépendant et vous avez besoin d'un site web ? Ne cherchez plus et faites confiance à Spicx pour vous accompagner dans votre projet !" />

        {/* Add meta tag for Google Search Console */}
        <meta name="google-site-verification" content="BqNDckUJwVAFPoCFfJl59AOkTpLlsx3U-agnHJsyC1g" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#154c89" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

      </Head>

      <Hero />

      <main>
        <Services />
        <CTAContact hasButton={true} />
        <Valeurs />
        <Realisations />
        <Contact />
      </main>
      
    </>
  );
}
