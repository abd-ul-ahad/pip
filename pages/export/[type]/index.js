import Head from "next/head";
import { useRouter } from "next/router";
import PathNotFound from "../../../components/PathNotFound";
import HeadersSection from '../../../components/HeadersSection';
import { Container } from "react-bootstrap";

export default function Type() {
    const { type } = useRouter().query;
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

                    </Container>
                </>
            )
        default:
            return <PathNotFound />
    }
}
