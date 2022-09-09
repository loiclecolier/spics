import Container from '../components/Container';
import '../styles/globals.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  // For animations
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, [])

  return <>
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
}

export default MyApp;
