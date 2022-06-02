import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function BannerSection({ title, bannersData, seeMore, linkMore, bannerType }) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-4'>

            {linkMore ?
                <Link href={seeMore || "/"} className="nav-links">
                    <a className="nav-links">
                        <h3 className='my-2 h3Heading'>{title} <HiOutlineArrowNarrowRight /></h3>
                    </a>
                </Link>
                : <h3 className='my-2 h3Heading'>{title}</h3>}

            <Row className="d-flex justify-content-center align-items-center my-5 w-100">
                {bannerType === "productbanner" ?
                    <>{bannersData.map((e, i) =>
                        <ProductBanners
                            key={i}
                            redirect={e.redirect}
                            title={e.title}
                            desc={e.desc}
                            htmlContent={e.htmlContent} />)} </>
                    : <>{bannersData.map((e, i) =>
                        <Banners
                            key={i}
                            redirect={e.redirect}
                            title={e.title}
                            desc={e.desc}
                            imgSrc={e.imgSrc} />)}
                    </>}
            </Row>
        </div>
    )
}

function Banners({ imgSrc, title, desc, redirect }) {
    return (
        <Col md={3} className='bannerBox d-flex justify-content-center flex-column align-items-center mx-4 my-2'>
            <Link href={redirect || "/"}>
                <a className='textDecNone d-flex justify-content-center flex-column align-items-center px-4 py-4'>
                    <img width={200} height={100} src={imgSrc} className="my-2"  alt='' />
                    <p className="text-center my-2" >{title}</p>
                    <h5 className="text-center my-2">{desc}</h5>
                </a>

            </Link>
        </Col>
    )
}

function ProductBanners({ htmlContent, title, redirect }) {
    return (
        <Col md={3} className='bannerBox d-flex justify-content-center flex-column align-items-center mx-4 my-2'>
            <Link href={redirect || "/"}>
                <a className='sampleBannerTextSize textDecNone d-flex justify-content-center flex-column align-items-center px-4 py-4 '>
                    {htmlContent}
                    <h5 className="text-center my-2 h3Heading">{title}</h5>
                    <p className="h6 text-center my-2" >Select <HiOutlineArrowNarrowRight /> </p>
                </a>

            </Link>
        </Col>
    )
}

BannerSection.defaultProps = {
    bannerType: "productbanner",
    linkMore: true
}
