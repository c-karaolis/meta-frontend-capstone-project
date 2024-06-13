import { useState } from "react";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import "./Reservations.css";
import ReservationConfirmed from "../../components/ReservationConfirmed/ReservationConfirmed";
const Reservations = () => {
  const availableTimeslots = [
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];
  const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);
  function reserveATable() {
    setIsReservationConfirmed(true);
  }

  if (isReservationConfirmed) {
    return <ReservationConfirmed />;
  }
  return (
    <>
      <div className="reservations">
        <h2>Reserve a table</h2>
        <ReservationForm
          availableTimeslots={availableTimeslots}
          onSubmit={reserveATable}
        />
      </div>
    </>
  );
};

export default Reservations;
