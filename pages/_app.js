import Container from '../components/Container';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
}

export default MyApp;
