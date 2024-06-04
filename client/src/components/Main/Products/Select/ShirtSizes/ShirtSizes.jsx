import PropTypes from "prop-types";
import "./shirt-sizes.css";

const ShirtSizes = ({ selectedSize, onSizeChange }) => {
  const sizes = ["SM", "MD", "LG", "XL"];

  return (
    <section className="shirt-sizes">
      {sizes.map((size) => (
        <div
          key={size}
          className={`size-option ${selectedSize === size ? "selected" : ""}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </div>
      ))}
    </section>
  );
};

ShirtSizes.propTypes = {
  selectedSize: PropTypes.string.isRequired,
  onSizeChange: PropTypes.func.isRequired,
};

export default ShirtSizes;
