import React, { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";

const ReservationForm = ({ availableTimeslots, onSubmit }) => {
  const minDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ date, time, guests, occasion });
  }

  const guestsOptions = [2, 3, 4, 5, 6];

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Date:" htmlFor="date">
        <input
          id="date"
          type="date"
          value={date}
          min={minDate}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </FormField>
      <FormField label="Time:" htmlFor="reservation-time">
        <select
          id="reservation-time"
          name="reservation-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimeslots.map((timeslot) => (
            <option
              key={timeslot}
              value={timeslot}
              className="reservation-time-slot"
            >
              {timeslot}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Number of guests:" htmlFor="guests">
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        >
          {guestsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Occasion:" htmlFor="occasion">
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="normal">No Special Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </FormField>
      <Button type="submit" label="Reserve a table">
        Submit
      </Button>
    </form>
  );
};

export default ReservationForm;
