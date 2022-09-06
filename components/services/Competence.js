import Image from 'next/image'
import React from 'react'
import style from '../../styles/modules/services/Competence.module.scss'

export default function Competence(props) {
  return (
    <div className={style.competence}>
        <div className={style.competence__container}>
            <Image
                src={props.img}
                alt=""
                aria-hidden="true"
                focusable="false"
                width={props.widthImg}
                height={props.heightImg}
                className={style.competence__container__image}
            />
        </div>
        <p
            className={style.competence__text}
            dangerouslySetInnerHTML={{ __html: props.text }}>
        </p>
    </div>
  )
}
