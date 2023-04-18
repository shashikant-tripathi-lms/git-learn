import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function Passenger() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [seniorCitizens, setSeniorCitizens] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleAdultsMinus = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const handleAdultsPlus = () => {
    setAdults(adults + 1);
  };

  const handleChildrenMinus = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleChildrenPlus = () => {
    setChildren(children + 1);
  };

  const handleSeniorCitizensMinus = () => {
    if (seniorCitizens > 0) {
      setSeniorCitizens(seniorCitizens - 1);
    }
  };

  const handleSeniorCitizensPlus = () => {
    setSeniorCitizens(seniorCitizens + 1);
  };

  const handleInfantsMinus = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };

  const handleInfantsPlus = () => {
    setInfants(infants + 1);
  };

  return (
    <div>
      <div>
        <label>Adults:</label>
        <div>
          <button onClick={handleAdultsMinus}><FaMinus /></button>
          <span>{adults}</span>
          <button onClick={handleAdultsPlus}><FaPlus /></button>
        </div>
      </div>
      <div>
        <label>Children:</label>
        <div>
          <button onClick={handleChildrenMinus}><FaMinus /></button>
          <span>{children}</span>
          <button onClick={handleChildrenPlus}><FaPlus /></button>
        </div>
      </div>
      <div>
        <label>Senior Citizens:</label>
        <div>
          <button onClick={handleSeniorCitizensMinus}><FaMinus /></button>
          <span>{seniorCitizens}</span>
          <button onClick={handleSeniorCitizensPlus}><FaPlus /></button>
        </div>
      </div>
      <div>
        <label>Infants:</label>
        <div>
          <button onClick={handleInfantsMinus}><FaMinus /></button>
          <span>{infants}</span>
          <button onClick={handleInfantsPlus}><FaPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default Passenger;
