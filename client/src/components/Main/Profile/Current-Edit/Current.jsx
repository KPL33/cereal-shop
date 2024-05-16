import PropTypes from "prop-types";

const Current = ({ onEditClick }) => {
  return (
    <section className="current-profile">
      <h1 className="title">Here&apos;s your profile!</h1>

      <div className="user-details">
        <button onClick={onEditClick}>Edit</button>
      </div>
    </section>
  );
};

Current.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

export default Current;

