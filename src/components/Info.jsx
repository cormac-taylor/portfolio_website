import { useState } from "react";
import "./styles/Info.css";
import PropTypes from "prop-types";

Info.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoDesc: PropTypes.string.isRequired,
};

function Info({ infoTitle, infoDesc }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* https://www.flaticon.com/free-icons/information */}
      <div>
        <img
          src="/images/info.svg"
          alt="Information icons created by Freepik - Flaticon"
          className="info_icon"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        {isHovering && (
          <div className="info_content">
            <h4>{infoTitle}</h4>
            <p>{infoDesc}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Info;
