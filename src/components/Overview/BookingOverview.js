import React from 'react';
import './BookingOverview.css'; 
import topImage from '../../images/header2.jpg';
import rateCard from '../../images/RateCard.jpg'; 
import floorPlan from '../../images/FloorPlan.jpg'; 

const BookingOverview = () => {
  const handleCheckAvailability = () => {
    window.location.href = "/availability"; 
  };

  return (
    <div className="homepage">
      <div className="top-section">
        <img src={topImage} alt="Top Background" className="top-image" />
        <button className="check-availability-btn" onClick={handleCheckAvailability}>
          Check Availability
        </button>
      </div>

      <div className="rate-card-section">
        <h2>Rate Card</h2>
        <img src={rateCard} alt="Rate Card" className="rate-card-image" />
      </div>

      <div className="floor-plan-section">
        <h2>Floor Plan</h2>
        <img src={floorPlan} alt="Floor Plan" className="floor-plan-image" />
      </div>
    </div>
  );
};

export default BookingOverview;
