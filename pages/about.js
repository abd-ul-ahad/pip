import HeadersSection from '../components/HeadersSection'
import { Container } from 'react-bootstrap'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>Pip Makers | About</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Container>
                <HeadersSection heading="Who we are ?"
                    desc="Best Free and Premium Static and Animated Banners"
                    col={3}
                />
            </Container>
        </>
    )
}

export default About