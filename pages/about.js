import HeadersSection, { SocialAnime } from '../components/HeadersSection';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>Pip Makers | About</title>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="description" content="Free Animated Graphics for your Discord Icons" />
                <meta name="keywords" content="canva, pipmakers, pip, makers, templates, discord icons, discord, icons, dp, profile picture"></meta>
                <meta name="author" content="Pip Makers"></meta>
            </Head>
            <Container>
                <HeadersSection heading="Who we are ?"
                    desc="Best Free and Premium Static and Animated Banners"
                    col={3}
                />
                <SocialAnime />
            </Container>
        </>
    )
}
