import {
    Button,
    Callout,
    CalloutText,
    Col,
    Container,
    Header,
    HeaderBody,
    Logo,
    Row,
    Service,
    Tile,
    TileBody,
    Title
} from '@dataesr/react-dsfr';
import type {NextPage} from 'next'
import Link from 'next/link'

const redirectToForm = (event: any) => {
    console.log(event)
}

const Home: NextPage = () => {
    return (
        <div>
            <Header>
                <HeaderBody>
                    <Logo splitCharacter={10}>République Française</Logo>
                    <Service
                        title="Contrat d'Engagement Républicain"
                        description=""/>
                </HeaderBody>
            </Header>


            <Container className="fr-my-3w">
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
                    {/*<Col className={styles.center}>Je suis une association et je souhaite signer mon contrat*/}
                    {/*    d’engagement républicain*/}
                    {/*</Col>*/}
                    {/*<Col className={styles.center}>Je suis un service instructeur et je suis en train d’instruire une*/}
                    {/*    demande de subvention.*/}
                    {/*</Col>*/}
                    <Col>
                        <Tile>
                            <TileBody
                                titleAs="h5"
                                title="Je suis une association et je souhaite signer mon contrat d’engagement républicain"
                                linkHref=''
                                className="cta-title">
                                <Link href="https://www.demarches-simplifiees.fr/commencer/test/bb36fc57-68a1-4d53-b9f7-944167676920" passHref={true}>
                                    <Button
                                        className="fr-mt-3w"
                                        title="sign_contract">Je signe
                                    </Button>
                                </Link>
                            </TileBody>
                        </Tile>
                    </Col>
                    <Col>
                        <Tile>
                            <TileBody
                                titleAs="h3"
                                title="Je suis un service instructeur et je suis en train d’instruire une demande de subvention."
                                description=""
                                linkHref=''
                                className="cta-title">
                                <Button
                                    disabled
                                    className="fr-mt-3w"
                                    title="see_associations">Voir les associations
                                </Button>
                            </TileBody>
                        </Tile>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Title as="h5" look="h5">Ce téléservice vous est proposé par l’Etat (Direction de la jeunesse, de
                    l’éducation
                    populaire et de la vie associative)
                </Title>
            </Container>
        </div>
    )
}

export default Home
