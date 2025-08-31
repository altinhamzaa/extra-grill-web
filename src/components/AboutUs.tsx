import  {useEffect}from 'react';
import '../styles/AboutUs.css';
import img1 from '../assets/eat/food.jpg';
import img2 from "../assets/drink/download.jpeg";
import { NavLink } from 'react-router-dom';
import BackButtons from './Buttons';
import BackToTopButton from './BackToTopButton';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="about-wrapper" id="about">
      <div className="about-header">
        <NavLink to="/" className="back-button">
          <BackButtons />
        </NavLink>
        <h1 className="about-title">{t('about')}</h1>
      </div>
      <div className="about-grid">
        <div className="about-section">
            <div className="about-text">
            <h2>{t('history-title')}</h2>
            <p>{t('content')}</p>
            </div>
            <div className="about-image">
            <img src={img1} alt="Altin Hamza" />
            </div>
        </div>
            <hr />
        <div className="about-section reverse">
            <div className="about-image">
            <img src={img2} alt="Work Environment" />
            </div>
            <div className="about-text">
            <h2>{t('title-history')}</h2>
            <p>{t('content-history')}</p>
          </div>
            </div>
        </div>
        <BackToTopButton />
    </div>
  );
}