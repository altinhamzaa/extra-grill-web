
import { useTranslation } from "react-i18next";
import albaniaFlag from "../assets/drink/download.jpeg";
import usaFlag from "../assets/drink/download.jpeg";
import "../styles/LanguegeDropdown.css";

function LanguageDropdown() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="dropdown language-dropdown">
      <button
        className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={i18n.language === "sq" ? albaniaFlag : usaFlag}
          alt="flag"
          style={{ width: "25px", height: "18px" }}
        />
      </button>
      <ul className="dropdown-menu dropdown-menu-end bg-dark bg-opacity-50">
        <li>
          <button
            className="dropdown-item text-white"
            onClick={() => changeLanguage("sq")}
          >
            <img
              src={albaniaFlag}
              alt="Albanian"
              style={{ width: "25px", marginRight: "20px" }}
            />
            Shqip
          </button>
        </li>
        <li>
          <button
            className="dropdown-item text-white"
            onClick={() => changeLanguage("en")}
          >
            <img
              src={usaFlag}
              alt="English"
              style={{ width: "25px", marginRight: "10px" }}
            />
            English
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;
