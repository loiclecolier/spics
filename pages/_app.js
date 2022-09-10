import Container from '../components/Container';
import '../styles/globals.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {

  // For animations
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, [])

  return <>
    <SessionProvider session={pageProps.session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  </>
}

export default MyApp;
