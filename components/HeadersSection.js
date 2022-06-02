import { Row, Col } from 'react-bootstrap';

export default function HeadersSection({ heading, desc }) {
    return (
        <div className=" my-5">
            <Row className='d-flex justify-content-between align-items-center'>
                <Col md={5} className='d-flex justify-content-start align-items-center flex-column'>
                    <h1 className='my-2 h3Heading text-start w-100'>{heading}</h1>
                    <i className='my-2 text-start w-100'>{desc}</i>
                </Col>
                <Col md={7} className='d-flex justify-content-end align-items-center'>
                    <video width={396} height={313} muted="muted" loop="loop">
                        <source src="/images/headerFileImage.webm" type="video/webm" />
                    </video>
                </Col>
            </Row>
        </div>
    )
}
