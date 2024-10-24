import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PaymentWorkFlow.css';
import auditoriumOutside from '../../images/header2.jpg';

const PaymentWorkFlow = () => {
  const [reservationData, setReservationData] = useState([]);
  const [advancePaid, setAdvancePaid] = useState(false);
  const [totalPaid, setTotalPaid] = useState(false);
  // eslint-disable-next-line
  const [cancelled, setCancelled] = useState(false);
  const userName = localStorage.getItem('userName'); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        // Fetch reservation details
        const reservationResponse = await axios.get(
          `http://localhost:8080/reservation/get_user/${userName}`
        );
        const data = reservationResponse.data;
        setReservationData(data);

        console.log(data[0])

        // Check if advance payment is already made
        const advancePaymentResponse = await axios.get(
          `http://localhost:8080/payment/advance/${data[0].reservation_id}`
        );
        setAdvancePaid(advancePaymentResponse.data); 
        
        const totalPaymentResponse = await axios.get(
          `http://localhost:8080/payment/total/${data[0].reservation_id}`
        );
        setTotalPaid(totalPaymentResponse.data);

      } catch (error) {
        console.error('Error fetching reservation or payment data:', error);
      }
    };


    fetchReservationData();
  }, [userName]);

  const handleAdvancePayment = () => {
    // Redirect to payment page for advance payment
    navigate(`/payment/${reservationData[0].reservation_id}/${reservationData[0].advanceFee}/ADVANCE_FEE`);
  };

  const handleFullPayment = () => {
    // Redirect to payment page for full payment
    navigate(`/payment/${reservationData[0].reservation_id}/${reservationData[0].totalFee}/TOTAL_FEE`);
  };

  const handleCancellation = async () => {
    try {
      await axios.put(`http://localhost:8080/reservation/cancel/${reservationData[0].reservation_id}`);
      setCancelled(true);
      alert('Reservation cancelled successfully.');
    } catch (error) {
      console.error('Error cancelling reservation:', error);
      alert('Failed to cancel reservation. Please try again.');
    }
  };

  if (reservationData.length === 0) {
    return <div>Loading reservation data...</div>;
  }

  return (
    <div className="payment-page">
      <div className="image-banner">
        <img
          src={auditoriumOutside}
          alt="Auditorium"
          className="auditorium-image"
        />
        <div className="overlay-info">
          <div className="info-box">
            <span>Organization Name : </span>{reservationData[0].organizationName}
          </div>
          <div className="info-box">
            <span>Event Type : </span>{reservationData[0].eventType}
          </div>
          <div className="info-box">
            <span>Date : </span>{reservationData[0].reservedDate}
          </div>
          <div className={`info-box approval-status ${reservationData[0].approvalStatus}`}>
            {reservationData[0].approvalStatus}
          </div>
        </div>
      </div>

      {/* Payment Workflow Section */}
      <h2 className="payment-workflow-title">Payment Work Flow</h2>
      <div className="payment-workflow-container">
        <div className="payment-box">
          <div className="advance-fee">
            <span>Advance Fee: </span>Rs.{reservationData[0].advanceFee}
          </div>
          <button
            className="pay-button"
            onClick={handleAdvancePayment}
            disabled={advancePaid || reservationData[0].approvalStatus !== 'APPROVED'} 
          >
            Pay Advance Amount
          </button>
        </div>

        <div className="payment-box">
          <div className="fees-box">
            <div className="fee-item"><span>Hall Reservation Charges       : </span>Rs.{reservationData[0].hallReservationFee}</div>
            <div className="fee-item"><span>Decoration/Preparation Charges : </span>Rs.{reservationData[0].decorationFee}</div>
            <div className="fee-item"><span>Rehearsal Charges              : </span>Rs.{reservationData[0].rehearsalFee}</div>
            <div className="fee-item"><span>Additional Hours Charges       : </span>Rs.{reservationData[0].additionalHourFee}</div>
            <div className="fee-item"><span>Refundable Charges             : </span>Rs.{reservationData[0].refundableFee}</div>
            <div className="total-fee">Total Fee: Rs.{reservationData[0].totalFee}</div>
          </div>
          <button
            className="pay-button"
            onClick={handleFullPayment}
            disabled={!advancePaid || totalPaid || reservationData[0].isCancelled }
          >
            Pay Full Amount
          </button>
        </div>
      </div>
      <button className="cancel-button"
       onClick={handleCancellation}
       disabled={!advancePaid || reservationData[0].isCancelled}
      >
        Cancel Reservation
      </button>
    </div>
  );
};

export default PaymentWorkFlow;
