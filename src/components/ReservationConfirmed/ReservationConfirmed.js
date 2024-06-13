import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReservationConfirmed.css";

const ReservationConfirmed = () => {
  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" color="#495E57" />
      <h2 className="green-text">Your reservation has been confirmed.</h2>
      <p className="green-text">Thank you for chosing Little Lemon.</p>
    </div>
  );
};

export default ReservationConfirmed;
