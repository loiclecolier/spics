import Image from 'next/image';
import React from 'react';
import style from '../styles/modules/Footer.module.scss';
import Logo from '../public/assets/logo-footer.svg';
import FacebookIcon from '../public/assets/icons/facebook-colore.svg';
import InstagramIcon from '../public/assets/icons/instagram-colore.svg';
import LinkedinIcon from '../public/assets/icons/linkedin-colore.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.footer__block}>
            <div className={style.footer__block__contact}>
                <h3 className={style.title}>CONTACT</h3>
                <address>
                    <ul>
                        <li>Loïc Lécolier</li>
                        <li><a href="tel:+32478651887">+32 478 65 18 87</a></li>
                        <li><a href="mailto:contact@spics.pro">contact@spics.pro</a></li>
                        <li>7730 Néchin <br/>59B Rue des Saules</li>
                    </ul>
                </address>
                <nav className={style.footer__block__contact__menuSocialNetworks}>
                    <ul>
                        <li>
                            <a target="_blank" href="#">
                                <Image src={FacebookIcon} alt="Page Facebook Spics" width={18} height={18} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                                <Image src={InstagramIcon} alt="Instagram Spics" width={18} height={18} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                                <Image src={LinkedinIcon} alt="LinkedIn Spics" width={18} height={18} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.footer__block__menu}>
                <h3 className={style.title}>MENU</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#valeurs">Valeurs</a>
                        </li>
                        <li>
                            <a href="#realisations">Réalisations</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
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
        </div>
        <div className={style.footer__logo}>
            <Image src={Logo} alt="Logo Spics" />
        </div>
        <div className={style.footer__copyright}>
            <p><span className={style.footer__copyright__symbol}>©</span> Spics - 2022</p>
        </div>
    </footer>
  )
}
