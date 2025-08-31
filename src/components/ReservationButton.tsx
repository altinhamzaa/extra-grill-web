
import  { useState, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import '../styles/ReservationButton.css';
import { useTranslation } from "react-i18next";

export default function ReservationButton() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      setVisible(scrollTop > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:+38345889097"
      className="back-to-top-btn"
      aria-label="Call now"
    >
      <IoIosCall style={{ marginRight: "8px" }} />
      {t('reservation')}
    </a>
  );
}
