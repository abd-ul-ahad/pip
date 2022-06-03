import { Row, Col } from 'react-bootstrap';

export default function HeadersSection({ heading, desc }) {
    return (
        <div className=" my-5">
            <Row className='d-flex justify-content-between align-items-center'>
                <Col md={5} className='d-flex justify-content-start align-items-center flex-column'>
                    <h1 className='my-2 h3Heading text-start w-100'>{heading}</h1>
                    <i className='my-2 text-start w-100'>{desc}</i>
                </Col>
                <Col md={7} sm={12} className='d-flex justify-content-md-end justify-content-sm-center align-items-center'>
                    <img height={312} src="/images/headerImage.gif" alt="Pip Makers" />
                </Col>
            </Row>
        </div>
    )
}

export const SocialAnime = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 py-2 my-2'>
            <div className='social-Cont d-flex justify-content-center align-items-center'>
                <img src="/images/socialAnime.gif" alt="Social Media" />
            </div>
        </div>
    )
}