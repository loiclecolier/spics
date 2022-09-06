import style from '../../styles/modules/common/CTAContact.module.scss';
import React from 'react';
import Image from 'next/image';
import Rocket from '../../public/assets/icons/rocket.svg';
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function CTAContact(props) {

  const router = useRouter();
  const page = router.pathname;

  return (
    <>
      <div className={style.rocket}>
        <Image src={Rocket} alt="" width={60} height={60} />
      </div>
      <div className={style.CTAContact}>
          <h2 className={style.CTAContact__title}>Donnez vie à votre projet !</h2>
          <p className={style.CTAContact__description}>
              Un site vitrine ? Un e-commerce ? Un site de réservation en ligne ?
              <span> Un café pour en discuter ? N’attendez plus et contactez-nous !</span>
          </p>
          {props.hasButton && (
            page === '/' ? // Si page principale -> smooth scroll
              <Scroll.Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className={`btnPrimary ${style.CTAContact__button}`}>Parler de votre projet</Scroll.Link>
            : // si autre page -> pas de smooth scroll
            <Link href="/#contact">
              <a className={`btnPrimary ${style.CTAContact__button}`}>Parler de votre projet</a>
            </Link>
          )}
      </div>
    </>
  )
}
