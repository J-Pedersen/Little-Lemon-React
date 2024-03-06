import React, { useState, useEffect } from 'react';

const SelectDatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Update the parent component with the selected date when it changes
    onChange({ target: { name: 'date', value: selectedDate.toISOString().split('T')[0] } });
  }, []); // Empty dependency array indicates that the effect should only run once

  const today = new Date();
  const endDate = new Date(today);
  endDate.setMonth(today.getMonth() + 1);

  const renderDates = () => {
    const dates = [];
    const currentDate = new Date(today);

    while (currentDate <= endDate) {
      dates.push(
        <option key={currentDate.toISOString()} value={currentDate.toISOString().split('T')[0]}>
          {currentDate.toDateString()}
        </option>
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <select id="date" name="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleChange} required>
      {renderDates()}
    </select>
  );
};

export default SelectDatePicker;