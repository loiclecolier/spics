import style from '../../styles/modules/main/Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Card(props) {
  return (
    <Link href={props.link}>
        <div data-aos="fade-up" className={style.card}>
            <div className={style.card__background}>
                <div className={style.card__background__overlay}></div>
                <Image layout="fill" placeholder="blur" src={props.srcImage} alt={props.altImage} />
            </div>
            <div className={style.card__text}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p className={style.card__text__cta}>En savoir plus &gt;</p>
            </div>
        </div>
    </Link>
  )
}
