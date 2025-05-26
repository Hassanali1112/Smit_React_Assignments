import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CenteredText = ({ text, linkText }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="wrapper d-flex justify-content-center align-items-center flex-column py-3">
          <h3 className="tex-upperCase">{text}</h3>

          {linkText ? (
            <a className="underline h6 text-dark" href="/">
              {linkText} <FontAwesomeIcon icon={faPlay} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CenteredText;
