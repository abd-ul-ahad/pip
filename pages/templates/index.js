import Head from 'next/head';
import { Container } from 'react-bootstrap';
import BannerSection from '../../components/BannerSection';
import HeadersSection from '../../components/HeadersSection';

export default function Templates() {
  const bannersData = [
    {
      title: "Animated",
      desc: "Free Discord Icon Makers",
      imgSrc: "/images/temp/discord-icons.svg",
      redirect: "/templates/icons"
    }
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Free Animated Graphics for your Discord Icons" />
        <meta name="keywords" content="canva, pipmakers, pip, makers, templates, discord icons, discord, icons, dp, profile picture" />
        <meta name="author" content="Pip Makers" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta property="og:title" content="Pip Makers" />
        <meta itemProp="name" content=" Pip Makers" />
        <meta name="application-name" content=" Pip Makers" />
        <meta property="og:site_name" content="Pip Makers" />
        <meta name="description" content="Free Animated Graphics for your Discord Icons" />
        <meta itemProp="description" content="Free Animated Graphics for your Discord Icons" />

        <meta charset="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content="Pip Makers" />
        <meta itemProp="name" content=" Pip Makers" />
        <meta name="application-name" content=" Pip Makers" />
        <meta property="og:site_name" content="Pip Makers" />
        <meta name="description" content="Free Animated Graphics for your Discord Icons" />
        <meta itemProp="description" content="Free Animated Graphics for your Discord Icons" />

        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="bingbot" content="all" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="bingbot" content="all" />

        <meta name="description" content="Free Animated Graphics for your Discord Icons" />
        <link rel="canonical" href="/"></link>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="Free Animated Graphics for your Discord Icons" />

        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />

        <meta property="og:title" content="" />
        <meta property="og:description" content="Free Animated Graphics for your Discord Icons" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />

        <meta property="og:site_name" content="Pip Makers" />
        <title>Pip Makers | Templates</title>
      </Head>

      <Container>
        <HeadersSection heading="Free Animated Graphics Maker"
          desc="Choose one of our high quality animated banners and you'll have it in less than a minute! Completely free of charge!"
        />
        <BannerSection title="Templates" linkMore={false} bannerType="banner" bannersData={bannersData} />
      </Container>
    </>
  )
}
