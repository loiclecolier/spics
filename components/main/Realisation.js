import Image from 'next/image'
import React from 'react'
import style from '../../styles/modules/main/Realisation.module.scss';
import InformationIcon from '../../public/assets/icons/information.svg';
import ExternalLink from '../../public/assets/icons/external-link.svg';
import { v4 as uuidv4 } from 'uuid';

export default function Realisation(props) {

  return (
    <div className={style.realisation}>

        <a target="_blank" rel="noreferrer" href={props.link} className={style.realisation__title}>
            <h3 className={style.realisation}>{props.title}</h3>
            <Image src={ExternalLink} alt="" width={15} height={15} />
            <p>Visiter le site web</p>
        </a>
        <div className={style.realisation__image}>
            <Image
                layout="responsive"
                placeholder="blur"
                src={props.srcImage}
                alt={props.altImage}
                width={1000}
                height={650}
            />
        </div>

        <div className={style.realisation__container}>
            <div className={style.realisation__technologies}>
                <h4 className={style.realisation__technologies__title}>Technologies utilisées</h4>
                <ul className={style.realisation__technologies__list}>
                    {props.technologies.map(techno => (
                        <li key={uuidv4()} className={style.realisation__technologies__list__element}>
                            <Image
                                src={techno.srcImage}
                                alt={techno.altImage}
                                width={40}
                                height={40}
                            />
                            <span>{techno.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {props.information &&
                <div className={style.realisation__information}>
                    <Image src={InformationIcon} alt="Information" height={15} width={15} />
                    <p>Ce site web est fictif et réalisé à titre d’exemple.</p>
                </div>
            }
        </div>
    </div>
  )
}
