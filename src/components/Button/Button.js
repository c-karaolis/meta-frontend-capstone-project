import "./Button.css";

const Button = ({ label = "Clickable", onClick, type = "" }) => {
  const handleClick = (event) => {
    if (type !== "submit") {
      event.preventDefault();
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button type={type} className="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
