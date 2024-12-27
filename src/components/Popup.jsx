import "./styles/Popup.css";
import PropTypes from "prop-types";

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function Popup({ onClose }) {
  return (
    <div className="popup_overlay" id="popup_overlay" onClick={onClose}>
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome!</h2>
        <p>Make sure to turn down your audio before proceeding.</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}

export default Popup;
