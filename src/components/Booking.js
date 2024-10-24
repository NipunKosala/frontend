import React from 'react';
import './Booking.css';
import seatingPlan  from "../assets/FloorPlan.jpg";
import backgroundImage from "../assets/background.jpg"; 
import { Link } from 'react-router-dom';

function Booking() {
  return (
    <div className="app-cont">
      <div className="cont">
       


        <div className="availability-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          <div className="card-background">
          <Link to="/event">
          <button className="availability-button">Check Availability</button>
          </Link>
          </div>
        </div>

        {/* Booking Information Table */}
        <div className="booking-info-section">
          <h2>Description of Ruhuna University Rabindranath Tagore Memorial Auditorium Booking Fee</h2>
          <table className="booking-table">
            <thead>
              <tr>
                <th>Seating Subtitle</th>
                <th>Program</th>
                <th>Charges</th>
                <th>Advance</th>
                <th>Refund</th>
                <th>Auditorium</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1462</td>
                <td>Day or program (8 hours) Rs 50,000.00</td>
                <td>Rs 50,000.00</td>
                <td>Rs 30,000.00</td>
                <td>Refundable if conditions met</td>
                <td>University Auditorium</td>
                <td>With advance notice of 2 months</td>
              </tr>
             
            </tbody>
          </table>
          <p>
            A fee is expected to be deposited in the account of the university. 60 security personnel will be assigned for the handling of personnel and the security of the premises.
            Charges per hour: Rs 26,000.00 to Rs 36,000.00
          </p>
        </div>

        {/* Seating Plan Image */}
        <div className="seating-plan-section">
          <h2>Seating Plan RTMA</h2>
          <img src={seatingPlan} alt="Seating Plan" className="seating-plan-img" />
        </div>

       
        
      </div>
    </div>
  );
}

export default Booking;
