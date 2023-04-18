import React, { useState } from 'react';
import Destination from './components/Destination';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Passenger from './components/Passenger';

function App() {
  const [selectedValue, setSelectedValue] = useState('One Way');
  const [ourDestinations, setOurDestinations] = useState()
  const [selectedDate, setSelectedDate] = useState(null);


  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <>
    <div>
      <label>
        <input
          type="radio"
          value="One Way"
          checked={selectedValue === 'One Way'}
          onChange={handleChange}
        />
        One Way
      </label>
      <label>
        <input
          type="radio"
          value="Round Trip"
          checked={selectedValue === 'Round Trip'}
          onChange={handleChange}
        />
        Round Trip
      </label>
      
      {/* <Destination /> */}
      {selectedValue}
    </div>
    <input type="text" placeholder={"From"}  />
    <input type="text" placeholder={"To"}  />
    <DatePicker
     selected={selectedDate} 
    //  minDate={moment().toDate()}
     minDate={new Date()}
     onChange={handleDateChange} />
     <Passenger />

    </>
  );
}
export default App;