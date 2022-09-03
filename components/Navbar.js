import style from '../styles/modules/Navbar.module.scss'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LogoBlanc from '../public/assets/icons/logo-spics-blanc.svg';
import BurgerMenuIcon from '../public/assets/icons/burger-menu.svg';
import FacebookIcon from '../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../public/assets/icons/linkedin-blanc.svg';
import Link from 'next/link';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setToggle(!toggle);
  };

  const size = useWindowSize();

  return (
    <>
      <div className={`${style.navContent} ${toggle && style.active}`} style={{height: `${size.height}px`}}>

        <nav className={style.navContent__menu}>
          <span onClick={handleNav} className={style.navContent__menu__close}>&#10539;</span>
          <ul>
            <li>
              <a href="#services">SERVICES</a>
              <ul className={style.navContent__menu__submenu}>
                <li>
                  <Link href="/ux-ui-design">
                    <a>UX / UI Design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/creation-site-web">
                    <a>Création de site web</a>
                  </Link>
                </li>
                <li>
                  <Link href="/referencement-seo">
                    <a>Référencement (SEO)</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hebergement-maintenance">
                    <a>Hébergement & Maintenance</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#valeurs">VALEURS</a>
            </li>
            <li>
              <a href="#realisations">RÉALISATIONS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        <nav className={style.navContent__menuSocialNetworks}>
          <ul>
            <li>
              <a target="_blank" href="#">
                <Image src={FacebookIcon} alt="Page Facebook Spics" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <Image src={InstagramIcon} alt="Instagram Spics" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <Image src={LinkedinIcon} alt="LinkedIn Spics" width={20} height={20} />
              </a>
            </li>
          </ul>
        </nav>

        <nav className={style.navContent__menuSecondary}>
          <ul>
            <li>
              <Link href="/mentions-legales">
                <a>Mentions légales</a>
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentalite">
                <a>Politique de confidentialité</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <header className={style.navbar}>
        <Link href="/">
          <a>
            <Image
              src={LogoBlanc}
              alt="Logo Spics Blanc"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <div onClick={handleNav} className={style.navbar__burger}>
          <Image src={BurgerMenuIcon} alt="Ouvrir le menu mobile" width={30} height={30} />
        </div>
      </header>
    </>
  );
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