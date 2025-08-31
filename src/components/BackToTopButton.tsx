
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../styles/BackToTopButton.css';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      setVisible(scrollTop > 80); 
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button className="back-to-top-btn" onClick={goToTop} aria-label="Back to top">
      <FaArrowUp />
    </button>
  );
}
