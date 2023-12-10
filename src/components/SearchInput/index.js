import PropTypes from "prop-types";
import styles from "./SearchInput.module.css";

const Input = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className={styles.input}
        type="text"
        placeholder="list"
        id="input"
      />
      <button className={styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
