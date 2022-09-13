import style from '../../styles/modules/main/Hero.module.scss';
import FacebookIcon from '../../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin-blanc.svg';
import ScrollDownIcon from '../../public/assets/icons/scroll-down.svg';

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import * as Scroll from 'react-scroll';

export default function Hero() {
  const size = useWindowSize();

  return (
    <div className={style.hero} id="topPage" style={{height: `${size.height}px`}}>
        <nav className={style.hero__menuSocialNetworks}>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100085689700690">
                <Image src={FacebookIcon} alt="Page Facebook Spicx" width={15} height={15} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer"  href="https://www.instagram.com/spicx.be/">
                <Image src={InstagramIcon} alt="Instagram Spicx" width={15} height={15} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/spicx">
                <Image src={LinkedinIcon} alt="LinkedIn Spicx" width={15} height={15} />
              </a>
            </li>
          </ul>
        </nav>
        <main className={style.hero__main}>
            <div className={style.hero__main__titles}> 
                <h1>SPICX <span className={style.hero__main__titles__mobile}>Création de site web</span></h1>
                <div className={style.hero__main__titles__mobile}>Tournai et Mouscron</div>
                <h2 className={style.hero__main__titles__desktop}>Création de site web à Tournai et Mouscron</h2>
                <h2>Au service des indépendants et des <br/>petites entreprises</h2>
            </div>
            <div className={style.hero__main__cta}>
              <Scroll.Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="btnPrimary">Parler de votre projet</Scroll.Link>
              <Scroll.Link to="realisations" spy={true} smooth={true} offset={-50} duration={500} className="btnSecondary">Voir nos réalisations<div></div></Scroll.Link>
            </div>
        </main>
        <Scroll.Link to="services" spy={true} smooth={true} offset={-50} duration={1000} className={style.hero__discover}>
          <Image src={ScrollDownIcon} alt="" aria-hidden="true" focusable="false" width={20} height={20}/>
          <span>DÉCOUVRIR SPICX</span>
        </Scroll.Link>
    </div>
  )
}

// Tricks pour mettre le hero à 100vh avec Next.js (fonctionnel sur mobile)
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}