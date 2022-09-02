import style from '../styles/modules/CTAContact.module.scss';
import React from 'react';
import Image from 'next/image';
import Rocket from '../public/assets/icons/rocket.svg';

export default function CTAContact() {
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
          <a href="#contact" className={`btnPrimary ${style.CTAContact__button}`}>
              Parler de votre projet
          </a>
      </div>
    </>
  )
}
