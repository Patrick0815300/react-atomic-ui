import { Instagram, Linkedin, Google, CCircle } from 'react-bootstrap-icons'
import styles from './Footer.module.css'

type InformationsProps = {
    companyName?: string;
    address?: string;
    phone?: string;
    mail?: string;
    claimer?: string;
    Linkedin?: string;
    Instagram?: string;
    Google?: string;
    [key: string]: string | undefined;
}

type FooterProps = {
    informations: InformationsProps;
};

export function Footer({ informations }: FooterProps) {

    const socials = [
        { key: 'Instagram', Icon: Instagram },
        { key: 'Linkedin', Icon: Linkedin },
        { key: 'Google', Icon: Google },
    ];

    return (
        <>
            <footer>
                <div className={styles.informationContainer}>
                    <div>
                        <address>
                            <strong>{informations.companyName}</strong><br />
                            {informations.address}<br />
                            <a href="tel:{informations.companyName}">{informations.phone}</a><br />
                            <a href={`mailto:${informations.mail}`}>{informations.mail}</a>
                            <div className={styles.socials}>
                                {socials.map(({ key, Icon }) => (
                                    informations[key] ? (
                                        <a href={informations[key]} key={key} target="_blank" rel="noopener noreferrer">
                                            <Icon />
                                        </a>
                                    ) : null
                                ))}
                            </div>
                        </address>
                        <span className={styles.footerClaimer}>{informations.claimer}</span>

                    </div>

                    <div className={styles.navigationList}>
                        <p><strong>Navigation</strong></p>
                        <a href="/">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Über uns</a>
                        <a href="#">Kontakt</a>
                    </div>
                    <div className={styles.legal}>
                        <p><strong>Legal</strong></p>
                        <a href="#">Impressum</a>
                        <a href="#">Datenschutzerklärung</a>
                    </div>
                </div>
                <div className={styles.bottomLine}>
                    <span><CCircle /> 2025 Innovate Solutions. All rights reserved</span>
                </div>
            </footer>
        </>
    )
}