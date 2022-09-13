import Image from 'next/image';
import React from 'react';
import style from '../../styles/modules/common/Footer.module.scss';
import Logo from '../../public/assets/logo-footer.svg';
import FacebookIcon from '../../public/assets/icons/facebook-colore.svg';
import InstagramIcon from '../../public/assets/icons/instagram-colore.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin-colore.svg';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router';
/* DEV CONFIG */
import { signIn, signOut, useSession } from "next-auth/react";

export default function Footer() {

    /* DEV CONFIG */
    const { data: session, status } = useSession()

    // get URL
    const router = useRouter();
    const page = router.pathname;
    
  return (
    session && (
        <footer className={style.footer} id="footer">
            <div className={style.footer__block}>
                <div className={style.footer__block__contact}>
                    <h3 className={style.title}>CONTACT</h3>
                    <address>
                        <ul>
                            <li>Loïc Lécolier</li>
                            <li><a href="tel:+32478651887">+32 478 65 18 87</a></li>
                            <li><a href="mailto:contact@spicx.be">contact@spicx.be</a></li>
                            <li>7730 Néchin <br/>59B Rue des Saules</li>
                        </ul>
                    </address>
                    <nav className={style.footer__block__contact__menuSocialNetworks}>
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100085689700690">
                                    <Image src={FacebookIcon} alt="Page Facebook Spicx" width={18} height={18} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spicx.be/">
                                    <Image src={InstagramIcon} alt="Instagram Spicx" width={18} height={18} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/spicx">
                                    <Image src={LinkedinIcon} alt="LinkedIn Spicx" width={18} height={18} />
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
                            {page === '/' ?
                                <Scroll.Link to="services" spy={true} smooth={true} offset={-50} duration={500}>Services</Scroll.Link>
                            :
                                <Link href="/#services">
                                    <a>Services</a>
                                </Link>
                            }
                            </li>
                            <li>
                                {page === '/' ?
                                    <Scroll.Link to="valeurs" spy={true} smooth={true} offset={-50} duration={500}>Valeurs</Scroll.Link>
                                :
                                    <Link href="/#valeurs">
                                        <a>Valeurs</a>
                                    </Link>
                                }
                            </li>
                            <li>
                                {page === '/' ?
                                    <Scroll.Link to="realisations" spy={true} smooth={true} offset={-50} duration={500}>Réalisations</Scroll.Link>
                                :
                                    <Link href="/#realisations">
                                        <a>Réalisations</a>
                                    </Link>
                                }
                            </li>
                            <li>
                            {page === '/' ?
                                    <Scroll.Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Scroll.Link>
                                :
                                    <Link href="/#contact">
                                        <a>Contact</a>
                                    </Link>
                                }
                            </li>
                            <li>
                                <Link href="/mentions-legales">
                                    <a>Mentions légales</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/politique-confidentialite">
                                    <a>Politique de confidentialité</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={style.footer__logo}>
                <Image src={Logo} alt="Logo Spicx" width={176} height={263} />
            </div>
            <div className={style.footer__copyright}>
                <p><span className={style.footer__copyright__symbol}>©</span> Spicx - 2022</p>
            </div>
        </footer>
    )
  )
}
