import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeadersSection from './HeadersSection';
import Link from 'next/link';

export default function CreateBanner({ htmlContent, setText1, text1, text2, setText2, exportLink }) {
    const [textColor, setTextColor] = useState();
    return (
        <Container>
            <HeadersSection heading="Free Animated Graphics Maker"
                desc="Choose one of our high quality animated banners and you'll have it in less than a minute! Completely free of charge!"
            />

            <Row className='d-flex justify-content-start align-items-center py-5 my-3'>
                <RenderSample textColor={textColor} htmlContent={htmlContent} />
                <ReRenderSample setText1={setText1} text1={text1} text2={text2} setText2={setText2} setTextColor={setTextColor} textColor={textColor} exportLink={exportLink} />
            </Row>

        </Container>
    )
}

const RenderSample = ({ htmlContent }) => {
    let templateStyle = {
        width: "500px",
        height: "300px"
    }

    return (
        <Col md={7} className="d-flex justify-content-center align-items-center">
            <div className='templateContainer'>
                <span className='template'>
                    <div className='createTemplate' style={templateStyle} >{htmlContent}</div>
                </span>
            </div>

        </Col>
    )
}

const ReRenderSample = ({ text1, setText1, text2, setText2, exportLink }) => {

    const setTextsInLocalStorage = () => {
        localStorage.setItem('text__pip__one', text1);
        localStorage.setItem('text__pip__two', text2);

    }

    return (
        <Col md={5} >
            <Row className='d-flex justify-content-between align-items-center '>
                <Col className="py-3 my-3">
                    <input
                        type="text"
                        className='inputText w-100'
                        value={text1}
                        onChange={e => { setText1(e.target.value) }}
                        placeholder="Text"
                    />
                </Col>
                <Col className="py-3 my-3">
                    <input
                        type="text"
                        className='inputText w-100'
                        value={text2}
                        onChange={e => { setText2(e.target.value) }}
                        placeholder="Text"
                    />
                </Col>
            </Row>
            <div className="py-3 my-3 d-flex justify-content-start align-items-center">
                <Link
                    href={exportLink || "/notfound"}>
                    <a className='blueBtn'
                        onClick={() => { setTextsInLocalStorage() }} >Render
                    </a>
                </Link>
            </div>
        </Col>
    )
}
