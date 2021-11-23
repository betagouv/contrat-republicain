import {Footer, FooterBody, FooterBodyItem, FooterBottom, FooterLink, Header, HeaderBody, Logo, Service} from "@dataesr/react-dsfr";
import type {AppProps} from 'next/app'
import Link from "next/link";
import '../styles/globals.css'
import styles from "../styles/Home.module.css";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className={styles.main}>
            <Header>
                <HeaderBody>
                    <Logo splitCharacter={10}>République Française</Logo>
                    <Service
                        title="Contrat d'Engagement Républicain"
                        description=""/>
                </HeaderBody>
            </Header>
            <Component {...pageProps} />
            <Footer className="footer">
                <FooterBody
                    description="Le code source est ouvert et les contributions sont bienvenues.">
                    <Logo>Ministère de l&apos;éducation Nationale, de la jeunesse et des sports</Logo>
                    <FooterBodyItem>
                        <Link href="https://github.com/betagouv/contrat-republicain">
                            Code source
                        </Link>
                    </FooterBodyItem>
                    <FooterBodyItem>
                        <Link href="https://beta.gouv.fr">
                            beta.gouv.fr
                        </Link>
                    </FooterBodyItem>
                </FooterBody>
                <FooterBottom>
                    <FooterLink href="/">Accessibilité : non conforme</FooterLink>
                    <FooterLink href="/">Mentions légales</FooterLink>
                    <FooterLink href="/">Conditions générales d&apos;utilisation</FooterLink>
                    <FooterLink href="/">Politique de confidentialité</FooterLink>
                </FooterBottom>
            </Footer>
        </div>
    )
}

export default MyApp
