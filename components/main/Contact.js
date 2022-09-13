import style from '../../styles/modules/main/Contact.module.scss';
import React, {useState} from 'react'
import CTAContact from '../common/CTAContact';
import isEmail from 'validator/lib/isEmail';

export default function Contact() {

    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");

    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Envoyer votre message");
    const [loading, setLoading] = useState(false);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();
    
        if (isValidForm) {
            setLoading(true);
            setButtonText("Envoi en cours...");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({ name, firstname, email, message, company }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setLoading(false);
                setButtonText("Envoyer votre message");
                return;
            }
            else {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setLoading(false);
                setButtonText("Envoyer votre message");
                setName(""); setFirstname(""); setCompany(""); setEmail(""), setMessage("");
            }
        }
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (name.length <= 0) {
          tempErrors["name"] = "Ce champ est obligatoire";
          isValid = false;
        }
        if (firstname.length <= 0) {
          tempErrors["firstname"] = "Ce champ est obligatoire";
          isValid = false;
        }
        if (!isEmail(email)) {
            tempErrors["email"] = "Entrez une adresse e-mail valide";
            isValid = false;
        }
        if (email.length <= 0) {
          tempErrors["email"] = "Ce champ est obligatoire";
          isValid = false;
        }
        if (message.length <= 0) {
          tempErrors["message"] = "Ce champ est obligatoire";
          isValid = false;
        }
    
        setErrors({ ...tempErrors });
        console.log("errors", errors);

        return isValid;
    };

  return (
    <section id="contact" className={style.contact}>
        <h2 data-aos="fade-up" className={`${style.contact__title} titleSection`}>Contact</h2>
        <CTAContact hasButton={false} />
        <form data-aos="fade-up" onSubmit={handleSubmit} className={style.contact__form}>
            <div className={style.contact__form__line}>
                <div className={style.contact__form__line__block}>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        className={errors.name && `${style.errorInput}`}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                    <p className={errors.name ? `${style.error}` : `${style.hidden}`}>{errors.name}</p>
                </div>
                <div className={style.contact__form__line__block}>
                    <label htmlFor="firstname">Prénom</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        className={errors.firstname && `${style.errorInput}`}
                        onChange={(e) => { setFirstname(e.target.value); }}
                    />
                    <p className={errors.firstname ? `${style.error}` : `${style.hidden}`}>{errors.firstname}</p>
                </div>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="company">Entreprise <span className={style.contact__form__block__facultatif}>(facultatif)</span></label>
                <input
                type="text"
                name="company"
                id="company"
                value={company}
                className={errors.company && `${style.errorInput}`}
                onChange={(e) => { setCompany(e.target.value); }}
            />
                <p className={errors.company ? `${style.error}` : `${style.hidden}`}>{errors.company}</p>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="email">Adresse e-mail</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    className={errors.email && `${style.errorInput}`}
                    onChange={(e) => { setEmail(e.target.value); }}
                />
                <p className={errors.email ? `${style.error}` : `${style.hidden}`}>{errors.email}</p>
            </div>
            <div className={style.contact__form__block}>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={message}
                    className={errors.message && `${style.errorInput}`}
                    onChange={(e) => { setMessage(e.target.value); }}>
                </textarea>
                <p className={errors.message ? `${style.error}` : `${style.hidden}`}>{errors.message}</p>
            </div>
            <div className={style.contact__form__block}>
                <button type="submit" disabled={loading} className="btnPrimary">{buttonText}</button>
                {showFailureMessage && <p className={`${style.error} ${style.errorForm}`}>Une erreur s&apos;est produite.<br/>Réessayez ou contactez-nous à <a href="mailto:contact@spicx.be">contact@spicx.be</a>.</p>}
            </div>
        </form>
        {showSuccessMessage && <>
            <div className={style.overlaySuccessMessage}></div>
            <div className={style.successMessage}>
                <div className={style.successMessage__icon}>&#10004;</div>
                <h3>Merci pour votre message</h3>
                <p>Nous allons traiter votre demande au plus vite. À bientôt !</p>
                <button className="btnPrimary" onClick={() => setShowSuccessMessage(false)}>Fermer</button>
            </div>
        </> }
    </section>
  )
}
