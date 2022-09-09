import style from '../../styles/modules/main/Valeurs.module.scss';
import React from 'react';
import Image from 'next/image';
import Valeur1 from '../../public/assets/icons/valeur-1.svg';
import Valeur2 from '../../public/assets/icons/valeur-2.svg';
import Valeur3 from '../../public/assets/icons/valeur-3.svg';

export default function Valeurs() {
  return (
    <section id="valeurs" className={style.valeurs}>
        <h2 data-aos="fade-up" className="titleSection">Nos Valeurs</h2>
        <ol className={style.valeurs__list}>
            {/* VALEUR 1 : PROXIMITE */}
            <li data-aos="fade-up" className={style.valeurs__list__element}>
                <div className={style.valeurs__list__element__number}>
                  <Image src={Valeur1} alt="1" width={50} height={118} />
                </div>
                <div className={style.valeurs__list__element__valeur}>
                    <h3>PROXIMITÉ</h3>
                    <p>Nous sommes à votre <strong>écoute</strong> pour répondre au maximum à <strong>vos attentes</strong>.</p>
                </div>
            </li>

            {/* VALEUR 2 : FLEXIBILITE */}
            <li data-aos="fade-up" className={style.valeurs__list__element}>
                <div className={style.valeurs__list__element__number}>
                  <Image src={Valeur2} alt="2" width={60} height={117} />
                </div>
                <div className={style.valeurs__list__element__valeur}>
                    <h3>FLEXIBILITÉ</h3>
                    <p>Nous utilisons les outils <strong>adaptés</strong> à <strong>votre demande</strong> et <strong>votre budget</strong>.</p>
                </div>
            </li>

            {/* VALEUR 3 : QUALITE */}
            <li data-aos="fade-up" className={style.valeurs__list__element}>
                <div className={style.valeurs__list__element__number}>
                  <Image src={Valeur3} alt="3" width={60} height={119} />
                </div>
                <div className={style.valeurs__list__element__valeur}>
                    <h3>QUALITÉ</h3>
                    <p>Nous mettons un point d’honneur à vous offrir un <strong>service de qualité et durable</strong>.</p>
                </div>
            </li>
        </ol>
    </section>
  )
}
