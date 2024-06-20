import PropTypes from "prop-types";
import useAppContext from "../../../context/useAppContext";
import "./message-box.css";

const MessageBox = ({ message, type }) => {
  const { showFoodAtcMessageBox } = useAppContext();

  return (
    showFoodAtcMessageBox && (
      <div className={`message-box ${type}`}>{message}</div>
    )
  );
};

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["positive", "negative"]).isRequired,
};

export default MessageBox;
