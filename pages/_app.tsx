import {Footer, FooterBody, FooterBodyItem, Header, HeaderBody, Logo, Service} from "@dataesr/react-dsfr";
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
                    description="Ce téléservice vous est proposé par l’Etat (Direction de la jeunesse, de l’éducation populaire et de la vie associative)">
                    <Logo>Service du premier ministre</Logo>
                    <FooterBodyItem>
                        <Link href="https://service-public.fr">
                            service-public.fr
                        </Link>
                    </FooterBodyItem>
                    <FooterBodyItem>
                        <Link href="https://github.com/betagouv/contrat-republicain">
                            Code source
                        </Link>
                    </FooterBodyItem>
                </FooterBody>
                {/*<FooterBottom>*/}
                {/*    <FooterLink href="/">Footer Link</FooterLink>*/}
                {/*    <FooterLink href="/">Footer Link</FooterLink>*/}
                {/*    <FooterLink href="/">Footer Link</FooterLink>*/}
                {/*</FooterBottom>*/}
            </Footer>
        </div>
    )
}

export default MyApp
