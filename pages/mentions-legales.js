import Head from 'next/head';
import React from 'react';
import Hero from '../components/services/Hero';
import DocumentImg from '../public/assets/img/document.jpg';
import style from '../styles/modules/DocumentsLegaux.module.scss';

export default function MentionsLegales() {
  return (<>
    <Head>
        <title>Spicx - Mentions légales</title>
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div>
        <Hero 
            title="MENTIONS LÉGALES"
            subtitle=""
            img={DocumentImg}
        />
    </div>
    <section className={style.section}>
        <h1>MENTIONS LÉGALES</h1>
        <h2>Définitions</h2>
        <ul>
            <li><strong>Client</strong> : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</li>
            <li>
                <strong>Prestations et Services</strong> : <a href="https://spicx.be">Spicx</a> met à disposition des Clients :
                <ul>
                    <li><strong>Contenu</strong> : Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</li>
                    <li><strong>Informations clients</strong> : Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <a href="https://spicx.be">Spicx</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</li>
                </ul>
            </li>
            <li><strong>Utilisateur</strong> : Internaute se connectant, utilisant le site susnommé.</li>
            <li><strong>Informations personnelles</strong> : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&apos;identification des personnes physiques auxquelles elles s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).<br />
            Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</li>
        </ul>

        <h2>1. Présentation du site internet.</h2>
        <p>En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet <a href="https://spicx.be">https://spicx.be</a> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
        <ul>
            <li><strong>Propriétaire</strong> :
                <ul>
                    <li>EPP Spicx</li>
                    <li>Numéro de TVA : BE 0791.905.426</li>
                    <li>59B Rue des Saules 7730 Néchin</li>
                    <li>contact@spicx.be</li>
                    <li>+32 478 65 18 87</li>
                </ul>
            </li>
            <li><strong>Responsable publication</strong> :
                <ul>
                    <li>Loïc Lécolier</li>
                    <li>contact@spicx.be</li>
                    <li>Le responsable publication est une personne physique ou une personne morale.</li>
                </ul>
            </li>
            <li><strong>Webmaster</strong> :
                <ul>
                    <li>Loïc Lécolier</li>
                    <li>contact@spicx.be</li>
                </ul>
            </li>
            <li><strong>Hébergeur</strong> :
                <ul>
                    <li>Vercel Inc.</li>
                    <li><a href="https://vercel.com/" target="_blank" rel="noreferrer">https://vercel.com/</a></li>
                    <li>340 S Lemon Ave #4133 Walnut, CA 9178</li>
                </ul>
            </li>
            <li><strong>Délégué à la protection des données</strong> :
                <ul>
                    <li>Loïc Lécolier</li>
                    <li>contact@spicx.be</li>
                </ul>
            </li>
        </ul>

        <h2>2. Conditions générales d’utilisation du site et des services proposés.</h2>

        <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. 
        Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>

        <p>L’utilisation du site <a href="https://spicx.be">https://spicx.be</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://spicx.be">https://spicx.be</a> sont donc invités à les consulter de manière régulière.</p>

        <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <a href="https://spicx.be">Spicx</a>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
        Le site web <a href="https://spicx.be">https://spicx.be</a> est mis à jour régulièrement par <a href="https://spicx.be">Spicx</a> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

        <h2>3. Description des services fournis.</h2>

        <p>Le site internet <a href="https://spicx.be">https://spicx.be</a> a pour objet de fournir une information concernant l’ensemble des activités de la société. <a href="https://spicx.be">Spicx</a> s’efforce de fournir sur le site <a href="https://spicx.be">https://spicx.be</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

        <p>Toutes les informations indiquées sur le site <a href="https://spicx.be">https://spicx.be</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="https://spicx.be">https://spicx.be</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

        <h2>4. Limitations contractuelles sur les données techniques.</h2>

        <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour. Le site <a href="https://spicx.be">https://spicx.be</a> est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

        <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>

        <p><a href="https://spicx.be">Spicx</a> et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>

        <h2>5. Propriété intellectuelle et contrefaçons.</h2>

        <p><a href="https://spicx.be">Spicx</a> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <a href="https://spicx.be">Spicx</a>.</p>

        <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

        <h2>6. Limitations de responsabilité.</h2>

        <p><a href="https://spicx.be">Spicx</a> agit en tant qu’éditeur du site. <a href="https://spicx.be">Spicx</a> est responsable de la qualité et de la véracité du Contenu qu’il publie. </p>

        <p><a href="https://spicx.be">Spicx</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://spicx.be">https://spicx.be</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

        <p><a href="https://spicx.be">Spicx</a> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="https://spicx.be">https://spicx.be</a>.</p>

        <h2>7. Gestion des données personnelles</h2>

        <p><a href="https://spicx.be">Spicx</a> s’engage à traiter vos données personnelles de manière transparente et conforme au Règlement du RGPD. Vous trouverez ci-dessous le détail des données que traite Spicx et leur finalité.</p>
        <p>Le responsable du Traitement est l&apos;entreprise Spicx, et le Délégué à la Protection des Données est Loïc Lécolier.</p>

        <h3>7.1. Gestion des données personnelles des clients</h3>

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
            
        <h3>7.2. Gestion des données personnelles des visiteurs</h3>   
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
            
        <h2>8. Liens hypertextes</h2>
        <p>
        Le site <a href="https://spicx.be">https://spicx.be</a> contient un certain nombre de liens hypertextes vers d’autres sites. Cependant, <a href="https://spicx.be">Spicx</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
        Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.
        </p>
    </section>
    </>)
}
