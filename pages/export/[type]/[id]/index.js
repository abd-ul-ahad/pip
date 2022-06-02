import Head from "next/head";
import { AiOutlineExport } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
    const { id } = useRouter().query;
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

    if (id) {
        for (let i = 0; i < bannersData.length; i++) {
            switch (id) {
                case `${i}`:
                    return (
                        <>
                            <Head>
                                <title>Pip Makers | Export</title>
                                <link rel="icon" href="/images/favicon.ico" />
                            </Head>
                            <div className='d-flex justify-content-center align-items-center py-5 my-4 flex-column'>
                                <div className='exportContainerDiscordIcons'>
                                    {bannersData[i].htmlContent}
                                </div>
                                <div className='my-4'>
                                    <button className='blueBtn'>Export <AiOutlineExport /></button>
                                </div>
                            </div>
                        </>
                    )
                default:
                    break;
            }
        }
    }
}
