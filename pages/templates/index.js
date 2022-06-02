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
        <title>Pip Makers | Templates</title>
        <link rel="icon" href="/images/favicon.ico" />
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
