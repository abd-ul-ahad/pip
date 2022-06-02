import Head from 'next/head';
import HeadersSection, { SocialAnime } from '../components/HeadersSection';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Free Animated Graphics for your Discord Icons" />
        <meta name="keywords" content="canva, pipmakers, pip, makers, templates, discord icons, discord, icons, dp, profile picture"></meta>
        <meta name="author" content="Pip Makers"></meta>
        <title>Pip Makers</title>
      </Head>

      <Container>
        <HeadersSection heading="Free Animated Graphics Maker"
          desc="Choose one of our high quality animated banners and you'll have it in less than a minute! Completely free of charge!"
        />
        <SocialAnime />
      </Container>
    </>
  )
}
