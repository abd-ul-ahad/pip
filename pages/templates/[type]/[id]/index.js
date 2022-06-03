import { useRouter } from 'next/router';
import CreateBanner from '../../../../components/CreateBanner';
import { useState } from 'react';
import Head from 'next/head';

export default function ID() {
    const { id } = useRouter().query;
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const bannersData = [
        {
            title: "Animated",
            desc: "Free Discord Icon Makers",
            htmlContent: <div className='temp1Div'>
                <h2 className="temp1Rotate temp1H2">{text1 || "Writing"} </h2>
                <h2 className='temp1H2'>{text2 || "Mode"} </h2>
            </div>,
            redirect: "/export/icons/0"
        },
        {
            title: "Animated",
            desc: "Free Discord Icon Makers",
            htmlContent: <div className="temp2Container">
                <h1 className="temp2Heading">{text1 || "Write"} {text2 || "Here"}</h1>
            </div>,
            redirect: "/export/icons/1"
        }
    ];


    for (let i in bannersData) {
        switch (id) {
            case `${i}`:
                return (
                    <>
                        <Head>
                            <title>Pip Makers | Create</title>
                            <link rel="icon" href="/images/favicon.ico" />
                            <meta name="description" content="Free Animated Graphics for your Discord Icons" />
                            <meta name="keywords" content="canva, pipmakers, pip, makers, templates, discord icons, discord, icons, dp, profile picture"></meta>
                            <meta name="author" content="Pip Makers"></meta>
                        </Head>
                        <CreateBanner htmlContent={bannersData[i].htmlContent} setText2={setText2} text1={text1} text2={text2} setText1={setText1} exportLink={bannersData[i].redirect} />
                    </>
                )
            default:
                break;
        }
    }

}
