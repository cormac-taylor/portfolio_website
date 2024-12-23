import "./styles/Popup.css";
import PropTypes from "prop-types";

Popup.propType = {
  onClose: PropTypes.bool.isRequired,
};

function Popup({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome!</h2>
        <p>This pop-up shows when the page is first loaded.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
