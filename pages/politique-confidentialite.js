import Head from 'next/head';
import React from 'react';
import Hero from '../components/services/Hero';
import DocumentImg from '../public/assets/img/document.jpg';
import style from '../styles/modules/DocumentsLegaux.module.scss';

export default function PolitiqueConfidentalite() {
  return (<>
    <Head>
        <title>Spicx - Politique de confidentialité</title>
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div>
        <Hero 
            title="POLITIQUE DE CONFIDENTIALITÉ"
            subtitle=""
            img={DocumentImg}
        />
    </div>
    <section className={style.section}>
        <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
        <h2>Gestion des données personnelles</h2>

        <p><a href="https://spicx.be">Spicx</a> s’engage à traiter vos données personnelles de manière transparente et conforme au Règlement du RGPD. Vous trouverez ci-dessous le détail des données que traite Spicx et leur finalité.</p>
        <p>Le responsable du Traitement est l&apos;entreprise Spicx, et le Délégué à la Protection des Données est Loïc Lécolier.</p>

        <h3>Gestion des données personnelles des clients</h3>

        <p>Les données personnelles des clients de Spicx sont les suivantes :</p>
        <ul>
            <li>Nom et prénom de la personne de contact</li>
            <li>Adresse email de la personne de contact</li>
            <li>Numéro de téléphone de la personne de contact</li>
            <li>Adresse de la personne de contact / de l&apos;entreprise de la personne de contact</li>
        </ul>

        <p>Ces données sont utilisées uniquement dans le cadre de la relation commerciale avec le client, pour les finalités suivantes :</p>
        <ul>
            <li>Transmission de documents commerciaux (devis, commande, livraison, facture)</li>
            <li>Communication pour un dossier commercial ou technique en cours</li>
            <li>Informations techniques/commerciales à transmettre au client</li>
            <li>Communication de ces informations à des sous-traitants/partenaires devant intervenir expressément sur un dossier client</li>
        </ul>
        <p>Les données sont conservées dans notre système, sans date de fin définie. Si le client souhaite utiliser son droit à la rectification ou à l’oubli, il pourra le faire en nous contactant par mail à cette adresse : contact@spicx.be. Si les données personnelles sont intimement liées à une facture émise, Spicx conservera ses données dans un délai qui sera en adéquation avec le délai comptable belge légal en vigueur à la date de la demande.</p>
        <p>Le client peut demander à tout moment à Spicx un inventaire des données personnelles en réalisant une demande par mail à cette adresse : contact@spicx.be.</p>
            
        <h3>Gestion des données personnelles des visiteurs</h3>   
        <p>Les données personnelles des visiteurs de <a href="https://spicx.be">https://spicx.be</a> sont les suivantes :</p>
        <ul>
            <li>Nom et prénom de la personne de contact (si utilisation du formulaire de contact)</li>
            <li>Adresse email de la personne de contact  (si utilisation du formulaire de contact)</li>
            <li>Données de navigation (adresse IP, ID, géolocalisation, recherches sur le site,...)</li>
        </ul>
        <p>Ces données sont utilisées pour les finalités suivantes :</p>
        <ul>
            <li>Prendre contact avec un prospect. Une application tierce est utilisée pour cette finalité : <a href="https://sendgrid.com/" target="_blank" rel="noreferrer">SendGrid</a> (<a href="https://sendgrid.com/resource/general-data-protection-regulation-2/" target="_blank" rel="noreferrer">voir leur politique de confidentialité.</a>)</li>
            <li>Analyser le trafic du site</li>
        </ul>
        <p>Les données sont conservées dans notre système, sans date de fin définie. Si l&apos;utilisateur souhaite utiliser son droit à la rectification ou à l’oubli, il pourra le faire en contactant Spicx par mail à cette adresse : contact@spicx.be.</p>
        <p>L&apos;utilisateur peut demander à tout moment à Spicx un inventaire des données personnelles en réalisant une demande par mail à cette adresse : contact@spicx.be.</p>
        <p>Certaines applications présentes sur le site <a href="https://spicx.be">https://spicx.be</a> sont susceptibles de collecter des données personnelles :</p>
        <ul>
            <li><a href="https://sendgrid.com/" target="_blank" rel="noreferrer">SendGrid</a> (<a href="https://sendgrid.com/resource/general-data-protection-regulation-2/" target="_blank" rel="noreferrer">voir leur politique de confidentialité</a>)</li>
            <li><a href="https://www.messenger.com/" target="_blank" rel="noreferrer">Messenger</a> (<a href="https://www.facebook.com/business/gdpr" target="_blank" rel="noreferrer">voir leur politique de confidentialité</a>)</li>
        </ul>
    </section>
    
</>)
}
