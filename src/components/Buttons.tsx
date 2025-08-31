import { FaArrowLeft } from "react-icons/fa";
import "../styles/Button.css";
import { useNavigate } from "react-router-dom";

function BackButtons() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <FaArrowLeft className="back-icon" />
    </button>
  );
}

export default BackButtons;