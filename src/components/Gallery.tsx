import  { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackToTopButton from "./BackToTopButton";
import '../styles/Gallery.css';
import img1 from '../assets/drink/download.jpeg';
import img2 from '../assets/drink/download.jpeg';
import img3 from '../assets/drink/download.jpeg';
import img4 from '../assets/drink/download.jpeg';
import img5 from '../assets/drink/download.jpeg';
import img6 from '../assets/drink/download.jpeg';
import img7 from '../assets/drink/download.jpeg';
import img8 from '../assets/drink/download.jpeg';
import img9 from '../assets/drink/download.jpeg';
import img10 from '../assets/drink/download.jpeg';
import img11 from '../assets/drink/download.jpeg';
import img12 from '../assets/drink/download.jpeg';

import BackButtons from "./Buttons";

const images = [img1, img2,img3, img4,img5, img6, img7, img8, img9,img10,img11,img12];

export default function Gallery() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <NavLink to="/" className="back-button">
          <BackButtons />
        </NavLink>
        <h1 className="gallery-title" style={{color: "white", fontFamily:"fantasy", fontWeight: "normal"}}>{t('gallery')}</h1>
      </div>

      <div id="gallery" className="gallery-grid mt-2">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="gallery-img" />
        ))}
      </div>
      <BackToTopButton/>
    </div>
  );
}