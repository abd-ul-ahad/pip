import Head from 'next/head';

export default function PathNotFound() {
    return (
        <>
        <Head>
            <title>Pip Makers | Error 404</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <div className="error-404 d-flex justify-content-center align-items-center w-100">
            <div>
                <h1 className='my-2 h3Heading text-start w-100'>404 - Page Not Found</h1>
            </div>
        </div>
    </>
    )
}
