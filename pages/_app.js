import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import FooTer from '../components/FooTer';

function MyApp({ Component, pageProps }) {
  const [Hamburger, setHamburger] = useState(false);
  return (
    <>
      <NavBar Hamburger={Hamburger} setHamburger={setHamburger} />
      <div className={Hamburger ? 'body-anime-on-mob-menu-active' : "body-anime-on-mob-menu"}>
        <Component {...pageProps} />
      </div>
      <FooTer />
    </>
  )

}

export default MyApp;
