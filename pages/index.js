import Head from 'next/head';
import Hero from '../components/main/Hero';
import Services from '../components/main/Services';
import CTAContact from '../components/common/CTAContact';
import Valeurs from '../components/main/Valeurs';
import Realisations from '../components/main/Realisations';
import Contact from '../components/main/Contact';
/* DEV CONFIG */
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {

  /* DEV CONFIG */
  const { data: session, status } = useSession()
  const loading = status === "loading"
  if (loading) {
    return <p style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "25px",
      padding: "0 25px"
    }}>Chargement...</p>
  }

  return (
    <>
      {!session && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "0 25px"
        }}>
          <p style={{marginBottom: "20px", fontSize: "25px", textAlign: "center"}}>Vous n&apos;avez pas la permission de voir cette page.</p>
          <button style={{
            fontSize: "18px",
            padding: "15px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={signIn}>
            Se connecter
          </button>
        </div>
      )}
      {session && (
        <>
          <button style={{position: "absolute", bottom: 30, right: 30}}onClick={signOut}>Se déconnecter</button>
          <Head>
            <title>Spicx - Création de site web à Tournai et Mouscron</title>
            <meta name="description" content="Vous êtes indépendant et vous avez besoin d'un site web ? Ne cherchez plus et faites confiance à Spicx pour vous accompagner dans votre projet !" />

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
      )}
    </>
  );
}
