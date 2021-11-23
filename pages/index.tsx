import {Button, Callout, CalloutText, Col, Container, Row, Tile, TileBody, Title} from '@dataesr/react-dsfr';
import type {NextPage} from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (


        <Container className={[styles.content, "fr-my-3w"]}>
            <Row alignItems="middle" spacing="p-4w">
                <Title as="h1">Le Contrat d&apos;Engagement Républicain (CER)</Title>
            </Row>

            <Callout hasInfoIcon={false}>
                <CalloutText>Dans le cadre de la loi 2021-1109 du 24 août 2021 confortant le respect des principes
                    de la
                    République, chaque association dans une démarche de demande de subvention ou d&apos;agrément se
                    doit de
                    signer un contrat d’engagement républicain.
                </CalloutText>
            </Callout>

            <Row justifyContent="center" gutters className="fr-my-3w">
                <Col>
                    <Tile>
                        <TileBody
                            titleAs="h5"
                            title="Je suis une association et je souhaite signer mon contrat d’engagement républicain"
                            linkHref=''
                            className="cta-title">
                            <Link
                                href="https://www.demarches-simplifiees.fr/commencer/test/bb36fc57-68a1-4d53-b9f7-944167676920"
                                passHref={true}>
                                <Button
                                    className="fr-mt-3w"
                                    title="">Je signe le contrat
                                </Button>
                            </Link>
                        </TileBody>
                    </Tile>
                </Col>
                <Col>
                    <Tile>
                        <TileBody
                            titleAs="h3"
                            title="Je suis un service instructeur et je suis en train d’instruire une demande de subvention"
                            description="Bientôt disponible"
                            linkHref=''
                            className="cta-title">
                            <Button
                                disabled
                                className="fr-mt-3w"
                                title="">Voir les associations
                            </Button>
                        </TileBody>
                    </Tile>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
