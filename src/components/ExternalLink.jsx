import "./styles/ExternalLink.css"
import PropTypes from "prop-types";

ExternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
  };
  
  function ExternalLink({ url, txt }) {
    return (
      <>
        <a href={url} target="_blank" className="nav_link center">
          {txt}
          <img
            src="/images/new_tab.svg"
            alt="New window icon by Grand Iconic - Flaticon"
            className="new_tab_icon"
          />
        </a>
      </>
    );
  }

  export default ExternalLink;