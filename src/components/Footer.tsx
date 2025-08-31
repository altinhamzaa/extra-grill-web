import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";




function Footer() {

    const { t } = useTranslation();

  return (
    <footer className="footer text-light py-4" style={{ backgroundColor: "#5C1A1B" }}>
        <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <iframe
              className="footer-map rounded shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.35206425860656!2d20.585704818559012!3d42.3593672532476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353bbb45d0b5bcd%3A0x9ec8e7c9bdd79303!2sGrill%20EXTRA!5e1!3m2!1sen!2s!4v1753004384215!5m2!1sen!2s"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <div className="mb-3 footer-contact-info">
              <h5 className="mb-2">{t('contact')}</h5>
              <div>
                <div>
                    <IoIosCall className="me-2" />
                    <a
                        href="tel:+38349182103"
                        className="text-warning text-decoration-line"
                    >
                        +383 49 182 103
                    </a>
                </div>
                <div>
                  <BiLogoGmail className="me-2" />
                  <a href="mailto:info@extragrill.com" className="text-warning text-decoration-line">info@extragrill.com</a>
                </div>
                <div className="d-flex align-items-center flex-wrap ">
                <HiLocationMarker className="me-2" />
                <span className="text-warning text-decoration-underline">Fortesë, Rahovec, Kosovë.</span>
              </div>
              <h5 className="mt-3 mb-0">{t('work-hours')}</h5>
              <div className="d-flex align-items-center flex-wrap">
                <FaRegClock className="me-2" />
                <span className="text-warning text-decoration-underline">{t('working-hours')}</span>
              </div>
              </div>
            </div>

            <div className="mb-3">
              <h6 className="mb-2">{t('social')}</h6>
              <div className="d-flex gap-4 justify-content-start align-items-center">
                <a
                    href="https://www.facebook.com/extragrillkosove"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="footer-social-link text-light fs-3 text-decoration-none"
                    >
                    <i className="fab fa-facebook-f"></i>
                </a>

                <a
                    href="https://www.instagram.com/extra_grill_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="footer-social-link text-light fs-3 text-decoration-none"
                    >
                    <i className="fab fa-instagram"></i>
                </a>

                <a
                    href="https://www.tiktok.com/@extragrill"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="footer-social-link text-light fs-3 text-decoration-none"
                >
                    <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            <div className="text-white fs-6 mt-2 text-center">
              &copy; {new Date().getFullYear()} {t('copy-right')}
            </div>
            <div style={{justifyContent: "center", textAlign: "center", marginTop: "10px", fontSize: "15px"}}>
              Made by <a className="text-white" href="https://www.terre-dev.com">TERRE DEV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;