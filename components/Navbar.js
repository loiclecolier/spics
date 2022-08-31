import style from '../styles/modules/Navbar.module.scss'
import Image from 'next/image';
import React, { useState } from 'react';
import LogoBlanc from '../public/assets/icons/logo-spics-blanc.svg';
import BurgerMenuIcon from '../public/assets/icons/burger-menu.svg';
import CloseMenuIcon from '../public/assets/icons/close-menu.svg';
import FacebookIcon from '../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../public/assets/icons/linkedin-blanc.svg';
import Link from 'next/link';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={`${style.navContent} ${toggle && style.active}`}>

        <nav className={style.navContent__menu}>
          <ul>
            <li>
              <Link href="#services">
                <a>&#10621; &#8239; SERVICES</a>
              </Link>
              <ul className={style.navContent__menu__submenu}>
                <li>
                  <Link href="/ux-ui-design">
                    <a>UX / UI Design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/developpement-web">
                    <a>Développement web</a>
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
              <Link href="#valeurs">
                <a>&#10621; &#8239; VALEURS</a>
              </Link>
            </li>
            <li>
              <Link href="#realisations">
                <a>&#10621; &#8239; RÉALISATIONS</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>&#10621; &#8239; CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={style.navContent__menuSocialNetworks}>
          <ul>
            <li>
              <Link href="#">
                <a>
                  <Image src={FacebookIcon} alt="Page Facebook Spics" width={20} height={20} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src={InstagramIcon} alt="Instagram Spics" width={20} height={20} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src={LinkedinIcon} alt="LinkedIn Spics" width={20} height={20} />
                </a>
              </Link>
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
          {toggle ?
            <span>&#10539;</span>
          :
            <Image src={BurgerMenuIcon} alt="Ouvrir le menu mobile" width={30} height={30} />
          }
          
        </div>
      </header>
    </>
  );
}