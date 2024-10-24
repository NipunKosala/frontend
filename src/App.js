import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Existing imports
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import BookingOverview from './pages/BookingOverview';
import CheckAvailability from './pages/CheckAvailability';
import Terms from './pages/Terms';
import ApplicationForm from './pages/ApplicationForm';
import PaymentWorkflow from './pages/PaymentWorkflow';
import Notifications from './pages/Notifications';
import Payment from './components/PaymentWorkFlow/Payment';

// New page imports
import EventSchedule from './pages/EventSchedule';
import BookingHistory from './pages/BookingHistory';
import ManageUsers from './pages/ManageUsers';

const stripePromise = loadStripe('pk_test_51NTgKRAaWvD0FBmzmVquePz9uFILsjLUYey7pNiY4zIiKVyuzhYAPMdWg7USuiUujmsRvNUC1H14x666RiZKa53g00xLyoEIOj');

function App() {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/booking-overview" element={<BookingOverview />} />
        <Route path="/availability" element={<CheckAvailability />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/form" element={<ApplicationForm />} />
        <Route path="/payment" element={<PaymentWorkflow />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        
        <Route
          path="/payment/:reservationId/:amount/:paymentType"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />

        {/* New Routes for the added pages */}
        <Route path="/event-schedule" element={<EventSchedule />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/manage-users" element={<ManageUsers />} />

      </Routes>
    </Router>
  );
}

export default App;
