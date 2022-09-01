import style from '../styles/modules/Hero.module.scss';
import FacebookIcon from '../public/assets/icons/facebook-blanc.svg';
import InstagramIcon from '../public/assets/icons/instagram-blanc.svg';
import LinkedinIcon from '../public/assets/icons/linkedin-blanc.svg';
import ScrollDownIcon from '../public/assets/icons/scroll-down.svg';

import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={style.hero}>
        <nav className={style.hero__menuSocialNetworks}>
          <ul>
            <li>
              <a target="_blank" href="#">
                <Image src={FacebookIcon} alt="Page Facebook Spics" width={15} height={15} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <Image src={InstagramIcon} alt="Instagram Spics" width={15} height={15} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <Image src={LinkedinIcon} alt="LinkedIn Spics" width={15} height={15} />
              </a>
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
              <a href="#contact" className="btnPrimary">Parler de votre projet</a>
              <a href="#realisations" className="btnSecondary">Voir nos réalisations<div></div></a>
            </div>
        </main>
        <a href="#services" className={style.hero__discover}>
            <Image src={ScrollDownIcon} alt="" aria-hidden="true" focusable="false" width={20} height={20}/>
            <span>DÉCOUVRIR SPICS</span>
        </a>
    </div>
  )
}
