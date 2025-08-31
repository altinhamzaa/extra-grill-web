import LanguageDropdown from "./LanguegeDropdown";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import ReservationButton from "./ReservationButton";
import '../styles/Header.css';
import logo from "../assets/drink/download.jpeg";


function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container py-5 position-relative">
        <img
          src={logo}
          alt="Extra Grill Logo"
          className="img-fluid mx-auto d-block logo-spacing"
          style={{ maxWidth: "160px", height: "auto", borderRadius: "10%" }}
        />

        <div className="language-switcher position-absolute top-0 end-0 mt-3 me-0">
          <div className="dropdown language-dropdown">
            <LanguageDropdown />
          </div>
        </div>

        <h1 className="display-3 text-white text-center heading-spacing" style={{ fontSize: "34px", fontFamily:"fantasy" }}>
          {t('welcome')}
        </h1>

        <nav className="navbar navbar-dark justify-content-center mt-4">
          <div className="container-fluid justify-content-center">
            <ul className="navbar-nav flex-column flex-md-row align-items-center text-center" style={{ marginTop: "40px" }}>
              <li className="nav-item mx-md-3 my-2 my-md-0">
                <button
                  className="btn btn-outline-light fs-5 px-4 py-2 text-center"
                  style={{ width: "200px" }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {t('home')}
                </button>
              </li>
              <li className="nav-item mx-md-3 my-2 my-md-0">
                <NavLink
                to={"/about"}
                  className="btn btn-outline-light fs-5 px-4 py-2 text-center mt-2"
                  style={{ width: "200px" }}
                >
                  {t('about')}
                </NavLink>
              </li>
              <li className="nav-item mx-md-3 my-2 my-md-0">
                <NavLink
                  to="/menu"
                  className="btn btn-outline-light fs-5 px-4 py-2 text-center mt-2"
                  style={{ width: "200px" }}
                >
                  {t('menu')}
                </NavLink>
              </li>
              <li className="nav-item mx-md-3 my-2 my-md-0">
                <NavLink
                  to="/gallery"
                  className="btn btn-outline-light fs-5 px-4 py-2 text-center mt-2"
                  style={{ width: "200px" }}
                >
                  {t('gallery')}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        
        <h4 className="header-text text-center mt-180" style={{ fontSize: "25px" }}>
          {t('meat')}
        </h4>
      </div>
      <ReservationButton />
    </header>
  );
}

export default Header;