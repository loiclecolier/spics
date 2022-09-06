import style from '../../styles/modules/services/Hero.module.scss';
import React from 'react';
import Image from 'next/image';

export default function Hero(props) {

  return (
    <div className={style.hero}>
        <div className={style.hero__image}>
          <Image
            alt={props.title}
            src={props.img}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <h1 className={style.hero__title}>{props.title}</h1>
        <h2 className={style.hero__subtitle} dangerouslySetInnerHTML={{ __html: props.subtitle }}></h2>
    </div>
  )
}
