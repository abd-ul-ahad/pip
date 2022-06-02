import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import HeadersSection from '../../../components/HeadersSection';
import BannerSection from '../../../components/BannerSection';
import Head from 'next/head';
import PathNotFound from '../../../components/PathNotFound';

export default function Type() {
  const { type } = useRouter().query;
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    setText1(localStorage.getItem('text__pip__one'));
    setText2(localStorage.getItem('text__pip__two'));
  }, []);

  const bannersData = [
    {
      title: "Animated",
      desc: "Free Discord Icon Makers",
      htmlContent: <div className='temp1Div'>
        <h2 className="temp1Rotate temp1H2">{text1 || "Writing"} </h2>
        <h2 className='temp1H2'>{text2 || "Mode"} </h2>
      </div>,
      redirect: "/templates/icons/0"
    },
    {
      title: "Animated",
      desc: "Free Discord Icon Makers",
      htmlContent: <div className="temp2Container">
        <h1 className="temp2Heading">{text1 || "Write"} {text2 || "Here"}</h1>
      </div>,
      redirect: "/templates/icons/1"
    }
  ];

  switch (type) {
    case 'icons':
      return (
        <>
          <Head>
            <title>Pip Makers | {(type || "").charAt(0).toUpperCase() + (type || "").slice(1)}</title>
            <link rel="icon" href="/images/favicon.ico" />
          </Head>
          <Container>
            <HeadersSection heading="Free Animated Graphics Maker"
              desc="Choose one of our high quality animated banners and you'll have it in less than a minute! Completely free of charge!"
            />
            <BannerSection title="Icons" bannerType="productbanner" linkMore={false} bannersData={bannersData} />
          </Container>
        </>
      )
    default:
      return <PathNotFound />
  }
}

