import Head from "next/head";
import { Container } from "react-bootstrap";
import HeadersSection from "../../components/HeadersSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>Pip Makers | Export</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Container>
                <HeadersSection heading="Free Animated Graphics Maker"
                    desc="Choose one of our high quality animated banners and you'll have it in less than a minute! Completely free of charge!"
                />
            </Container>
        </>
    )
}
