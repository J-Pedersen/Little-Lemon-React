import React, { useState } from 'react';

const SelectDatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (event) => {
    const date = event.target.value;
    setSelectedDate(new Date(date));
    // Call the onChange function with the selected date
    onChange({ target: { name: 'date', value: date } });
  };

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

  return (
    <select id="date" name="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleChange} required>
      {renderDates()}
    </select>
  );
};

export default SelectDatePicker;


<option value="6am">6:00 AM</option>
<option value="630am">6:30 AM</option>
<option value="7am">7:00 AM</option>
<option value="730am">7:30 AM</option>
<option value="8am">8:00 AM</option>
<option value="830am">8:30 AM</option>
<option value="9am">9:00 AM</option>
<option value="930am">9:30 AM</option>
<option value="10am">10:00 AM</option>
<option value="1030am">10:30 AM</option>
<option value="11am">11:00 AM</option>
<option value="1130am">11:30 AM</option>
<option value="12pm">12:00 PM</option>
<option value="1230pm">12:30 PM</option>
<option value="1pm">1:00 PM</option>
<option value="130pm">1:30 PM</option>
<option value="2pm">2:00 PM</option>
<option value="230pm">2:30 PM</option>
<option value="3pm">3:00 PM</option>
<option value="330pm">3:30 PM</option>
<option value="4pm">4:00 PM</option>
<option value="430pm">4:30 PM</option>
<option value="5pm">5:00 PM</option>
<option value="530pm">5:30 PM</option>
<option value="6pm">6:00 PM</option>
<option value="630pm">6:30 PM</option>
<option value="7pm">7:00 PM</option>
<option value="730pm">7:30 PM</option>
<option value="8pm">8:00 PM</option>
<option value="830pm">8:30 PM</option>
<option value="9pm">9:00 PM</option>