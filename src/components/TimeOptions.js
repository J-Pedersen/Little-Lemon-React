import React from 'react';

function TimeOptions() {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 6; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedMinute = minute === 0 ? '00' : minute;
        const time = `${formattedHour}:${formattedMinute} ${ampm}`;
        options.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return options;
  };

  return (
    <>
      {generateTimeOptions()}
    </>
  );
}

export default TimeOptions;



