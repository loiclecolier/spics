import style from '../styles/modules/Contact.module.scss';
import React from 'react'
import CTAContact from './CTAContact';

export default function Contact() {
  return (
    <section id="contact" className={style.contact}>
        <h2 className="titleSection">Contact</h2>
        <CTAContact hasButton={false} />
        <form className={style.contact__form}>
            <div className={style.contact__form__line}>
                <div className={style.contact__form__line__block}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" />
                    <p className={style.error}>Erreur: Ce champ est obligatoire</p>
                </div>
                <div className={style.contact__form__line__block}>
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" />
                    <p className={style.error}>Erreur: Ce champ est obligatoire</p>
                </div>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="company">Entreprise <span className={style.contact__form__block__facultatif}>(facultatif)</span></label>
                <input type="text" name="company" id="company" />
                <p className={style.error}>Erreur: Ce champ est obligatoire</p>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="email">Adresse e-mail</label>
                <input type="email" name="email" id="email" />
                <p className={style.error}>Erreur: Ce champ est obligatoire</p>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <p className={style.error}>Erreur: Ce champ est obligatoire</p>
            </div>
            <div className={style.contact__form__block}>
                <button className="btnPrimary">Envoyer votre message</button>
                <p className={style.error}>Erreur: Ce champ est obligatoire</p>
            </div>
        </form>
    </section>
  )
}
