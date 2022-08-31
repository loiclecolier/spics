import style from '../styles/modules/Hero.module.scss';
import FacebookIcon from '../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../public/assets/icons/linkedin-blanc.svg';
import ScrollDownIcon from '../public/assets/icons/scroll-down.svg';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={style.hero}>
        <nav className={style.hero__menuSocialNetworks}>
          <ul>
            <li>
              <Link href="#">
                <a>
                  <Image src={FacebookIcon} alt="Page Facebook Spics" width={15} height={15} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src={InstagramIcon} alt="Instagram Spics" width={15} height={15} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src={LinkedinIcon} alt="LinkedIn Spics" width={15} height={15} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main className={style.hero__main}>
            <div className={style.hero__main__titles}> 
                <h1>SPICS <span>Création de site web</span></h1>
                <div>Tournai et Mouscron</div>
                <h2>Au service des indépendants et des <br/>petites entreprises</h2>
            </div>
            <div className={style.hero__main__cta}>
                <Link href="#contact">
                    <a className="btnPrimary">Parler de votre projet</a>
                </Link>
                <Link href="#realisations">
                    <a className="btnSecondary">Voir nos réalisations<div></div></a>
                </Link>
            </div>
        </main>
        <Link href="#services">
            <a className={style.hero__discover}>
                <Image src={ScrollDownIcon} alt="" aria-hidden="true" focusable="false" width={20} height={20}/>
                <span>DÉCOUVRIR SPICS</span>
            </a>
        </Link>
    </div>
  )
}
