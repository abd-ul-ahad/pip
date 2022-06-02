import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

export default function NavBar({ Hamburger, setHamburger }) {
    return (
        <nav>
            <TopNavbar />
            <div className='nav-sec'>
                <div>
                    <Link href="/">
                        <a className="navLogo d-flex justify-content-end align-items-center">
                            <h1 className="logoHead"><span>PIP</span><span>MAKERS</span></h1>
                        </a>
                    </Link>
                </div>

                <div
                    className={Hamburger ? "mobMenuBtn active" : "mobMenuBtn"}
                    onClick={() => { setHamburger(!Hamburger) }} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={Hamburger ? 'nav-tab mob-menu-drop' : "nav-tab"} >
                    <ul>
                        <li><Link href="/"><a className="nav-links" onClick={() => { setHamburger(false) }}>Home</a></Link></li>
                        <li><Link href="/templates"><a className="nav-links" onClick={() => { setHamburger(false) }}>Templates</a></Link></li>
                        <li><Link href="/about"><a className="nav-links" onClick={() => { setHamburger(false) }}>About</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const TopNavbar = () => {
    return (
        <div className='top-navbar-container'>
            <Container>
                <div className="d-flex justify-content-end align-items-center">
                    <div className='topNavbar'>
                        <ul className='d-flex justify-content-center align-items-center'>
                            <li><a className="social-icons" href={`mailto: ${process.env.NEXT_MAIL_NAVBAR}`} ><GrMail /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_DISCORD} target="_blank" rel="noreferrer"><SiDiscord /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_YOUTUBE} target="_blank" rel="noreferrer"><BsYoutube /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_TIKTOK} target="_blank" rel="noreferrer"><FaTiktok /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_FACEBOOK} target="_blank" rel="noreferrer"><ImFacebook /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_INSTAGRAM} target="_blank" rel="noreferrer"><BsInstagram /></a></li>
                            <li><a className="social-icons" href={process.env.NEXT_TWITTER} target="_blank" rel="noreferrer"><BsTwitter /></a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}