import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function FooTer() {
    return (
        <footer className='px-5 py-3 my-2'>
            <Row>
                <Col className="d-flex justify-content-start align-items-center my-2">
                    <Link href="/">
                        <a className="navLogo">
                            <Image src='/images/logo.png' height={45} width={100} alt='PPIMAKERS' />
                        </a>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="my-2" >
                    <p className='text-start fw-bold'>Free Animated Graphics makers<br />Hundreds of Pre-built Templates ready under a minute.</p>
                </Col>
                <Col md={6} className="my-2" >
                    <p className='text-md-end fw-bold'>Copyright &copy; PipMakers 2022</p>
                </Col>
            </Row>
            <Row>
                <ul className='footer-links d-flex justify-content-center align-items-center flex-row'>
                    <li><Link href="/"><a className="nav-links">Home</a></Link></li>
                    <li><Link href="/templates"><a className="nav-links">Templates</a></Link></li>
                    <li><Link href="/about"><a className="nav-links">About</a></Link></li>
                </ul>
            </Row>
        </footer>
    )
}
