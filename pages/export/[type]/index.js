import Head from "next/head";
import { useRouter } from "next/router";

export default function Type() {
    const { type } = useRouter().query;
    return (
        <>
            <Head>
                <title>Pip Makers | {(type || "").charAt(0).toUpperCase() + (type || "").slice(1)}</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <div>
                <h1>
                    Type
                </h1>
            </div>
        </>
    )
}
