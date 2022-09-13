import style from '../../styles/modules/common/Navbar.module.scss'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LogoSpicx from '../../public/assets/icons/logo-spicx.svg';
import BurgerMenuIcon from '../../public/assets/icons/burger-menu.svg';
import FacebookIcon from '../../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin-blanc.svg';
import DropMenuIcon from '../../public/assets/icons/scroll-down.svg';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router'

export default function Navbar({toggleDesk, setToggleDesk}) {

  // open/close nav mobile
  const [toggle, setToggle] = useState(false);
  const handleNav = () => {
    setToggle(!toggle);
  };

  // open/close nav desktop/tablet
  const openNavDesk = () => {
    setToggleDesk(true);
  };
  const closeNavDesk = () => {
    if (toggleDesk) setToggleDesk(false);
  }

  // get screen size
  const size = useWindowSize();

  // change nav when scrolling
  const [scroll, setScroll] = useState(false);

  // get URL
  const router = useRouter();
  const page = router.pathname;

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    function changeNavbar () {
      if (window.scrollY >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    }
  }, []);

  return (
    <>
      <div className={`${style.navContent} ${toggle && style.active}`} style={{height: `${size.height}px`}} id="navContent">

        <nav className={style.navContent__menu}>
          <span onClick={handleNav} className={style.navContent__menu__close}>&#10539;</span>
          <ul>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="services" spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav}>SERVICES</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#services">
                  <a onClick={handleNav}>SERVICES</a>
                </Link>
              }
              <ul className={style.navContent__menu__submenu}>
                <li>
                  <Link href="/services/ux-ui-design">
                    <a onClick={handleNav}>UX / UI Design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/creation-site-web">
                    <a onClick={handleNav}>Création de site web</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/referencement-seo">
                    <a onClick={handleNav}>Référencement (SEO)</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/hebergement-maintenance">
                    <a onClick={handleNav}>Hébergement &amp; Maintenance</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="valeurs" spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav}>VALEURS</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#valeurs">
                  <a onClick={handleNav}>VALEURS</a>
                </Link>
              }
            </li>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="realisations" spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav}>RÉALISATIONS</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#realisations">
                  <a onClick={handleNav}>RÉALISATIONS</a>
                </Link>
              }
            </li>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav}>CONTACT</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#contact">
                  <a onClick={handleNav}>CONTACT</a>
                </Link>
              }
            </li>
          </ul>
        </nav>

        <nav className={style.navContent__menuSocialNetworks}>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100085689700690">
                <Image src={FacebookIcon} alt="Page Facebook Spicx" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spicx.be/">
                <Image src={InstagramIcon} alt="Instagram Spicx" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/spicx">
                <Image src={LinkedinIcon} alt="LinkedIn Spicx" width={20} height={20} />
              </a>
            </li>
          </ul>
        </nav>

        <nav className={style.navContent__menuSecondary}>
          <ul>
            <li>
              <Link href="/mentions-legales">
                <a onClick={handleNav}>Mentions légales</a>
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">
                <a onClick={handleNav}>Politique de confidentialité</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <header id="navbar" className={scroll ? `${style.navbar} ${style.navbarScroll}` : `${style.navbar}`}>

        {page !== '/' ? // Si pas la page principale -> pas de smooth scroll
          <Link href="/">
            <a className={style.navbar__image}>
              <Image
                src={LogoSpicx}
                alt="Logo Spicx"
                width={100}
                height={35}
              />
            </a>
          </Link>
          : // Si page principale -> smooth scroll
          <Scroll.Link to="topPage" spy={true} smooth={true} duration={500} className={`${style.navbar__image} ${"logoSpicx"}`}>
            <Image
              src={LogoSpicx}
              alt="Logo Spicx"
              width={100}
              height={35}
            />
          </Scroll.Link>
        }

        {/* For mobile */}
        <div onClick={handleNav} className={style.navbar__burger}>
          <Image src={BurgerMenuIcon} alt="Ouvrir le menu mobile" width={30} height={30} />
        </div>

        {/* For tablet and desktop */}
        <nav className={style.navbar__menu}>
          <ul>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="services" spy={true} smooth={true} offset={-50} duration={500} className={style.navbar__menu__link}>SERVICES</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#services">
                  <a className={style.navbar__menu__link}>SERVICES</a>
                </Link>
              }
              <Image src={DropMenuIcon} alt="Dérouler le menu des services" width={25} height={25} onClick={openNavDesk} className={style.navbar__menu__link__drop} />
              {toggleDesk &&
                <ul className={style.navbar__menu__submenu}>
                  <li>
                    <Link href="/services/ux-ui-design">
                      <a className={style.navbar__menu__submenu__link} onClick={closeNavDesk}>UX / UI Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/creation-site-web">
                      <a className={style.navbar__menu__submenu__link} onClick={closeNavDesk}>Création de site web</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/referencement-seo">
                      <a className={style.navbar__menu__submenu__link} onClick={closeNavDesk}>Référencement (SEO)</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hebergement-maintenance">
                      <a className={style.navbar__menu__submenu__link} onClick={closeNavDesk}>Hébergement &amp; Maintenance</a>
                    </Link>
                  </li>
                </ul>
              }
            </li>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="valeurs" spy={true} smooth={true} offset={-50} duration={500} className={style.navbar__menu__link}>VALEURS</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#valeurs">
                  <a className={style.navbar__menu__link}>VALEURS</a>
                </Link>
              }
            </li>
            <li>
              {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="realisations" spy={true} smooth={true} offset={-50} duration={500} className={style.navbar__menu__link}>RÉALISATIONS</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#realisations">
                  <a className={style.navbar__menu__link}>RÉALISATIONS</a>
                </Link>
              }
            </li>
            <li>
            {page === '/' ? // Si page principale -> smooth scroll
                <Scroll.Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className={style.navbar__menu__link}>CONTACT</Scroll.Link>
              : // si autre page -> pas de smooth scroll
                <Link href="/#contact">
                  <a className={style.navbar__menu__link}>CONTACT</a>
                </Link>
              }
            </li>
          </ul>
        </nav>

        {/* For tablet and desktop */}
        <nav className={style.navbar__socialNetworks}>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100085689700690">
                <Image src={FacebookIcon} alt="Page Facebook Spicx" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spicx.be/">
                <Image src={InstagramIcon} alt="Instagram Spicx" width={20} height={20} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/spicx">
                <Image src={LinkedinIcon} alt="LinkedIn Spicx" width={20} height={20} />
              </a>
            </li>
          </ul>
        </nav>
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