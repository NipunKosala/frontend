import React, { useState } from 'react';
import './SubmissionForm.css';
import axios from 'axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    nic: '',
    landLine: '',
    applicantName: '',
    email: '',
    mobile: '',
    address: '',
    eventType: '',
    otherEventType: '',
    concertType: '',
    musicBand: '',
    singers: '',
    specialInvitees: '',
    viewers: '',
    reservedDate: '',
    eventStartTime: '',
    eventEndTime: '',
    eventNoOfHours: '',
    eventAdditionalHours: '',
    decorationStartTime: '',
    decorationEndTime: '',
    decorationNoOfHours: '',
    rehearsalStartTime: '',
    rehearsalEndTime: '',
    rehearsalNoOfHours: '',
    stageLighting: '',
    stageSoundAdministration: '',
    electricGenerator: '',
    stageDecoration: '',
    ticketSalesAtPremises: '',
    security: '',
    agreed: false,
    username:''
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgreeChange = (e) => {
    setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
  };

  const validate = () => {
    const newErrors = {};
    const {
      organizationName,
      nic,
      landLine,
      applicantName,
      email,
      mobile,
      address,
      eventType,
      otherEventType,
      concertType,
      musicBand,
      singers,
      specialInvitees,
      viewers,
      reservedDate,
      eventStartTime,
      eventEndTime,
      eventNoOfHours,
      security,
    } = formData;

    if (!organizationName) newErrors.organizationName = '*Required';
    if (!nic) newErrors.nic = '*Required';
    if (!landLine) newErrors.landLine = '*Required';
    if (!applicantName) newErrors.applicantName = '*Required';
    if (!email) newErrors.email = '*Required';
    if (!mobile) newErrors.mobile = '*Required';
    if (!address) newErrors.address = '*Required';

    if (!eventType) newErrors.eventType = '*Select an event type';
    if (eventType === 'Other' && !otherEventType) newErrors.otherEventType = '*Required';

    if (eventType === 'Musical concerts') {
      if (!concertType) newErrors.concertType = '*Select a music type';
      if (!musicBand) newErrors.musicBand = '*Required';
      if (!singers) newErrors.singers = '*Required';
    }

    if (['Stage Drama', 'Conferences/Lectures', 'Awards/Tributes/Ceremonies'].includes(eventType) && !specialInvitees) {
      newErrors.specialInvitees = '*Required';
    }

    if (!viewers) newErrors.viewers = '*Select a viewer type';
    if (!reservedDate || !eventStartTime || !eventEndTime || !eventNoOfHours) newErrors.dateTime = '*All fields are required';

    if (!security) newErrors.security = '*Select security handling';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Form submitted', formData);

        const userName = localStorage.getItem("userName");
        formData.username = userName
        console.log(formData.username)

        const response = await axios.post('http://localhost:8080/reservation/submit-form', formData,
          {
            headers: {
              'Content-Type': 'application/json',
          },
          }
        );
        console.log('Reservation created successfully', response.data);
      } catch (error) {
        console.error('Error submitting form', error);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Application Form</h1>

      <form className="form-content" onSubmit={handleSubmit}>
        <div className="section">
          <h3>Details of the organization/person applying:</h3>
          <div className="input-group">
            <div className="input-column">
              <label>Name of the organization</label>
              <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} />
              {errors.organizationName && <span className="error-text">{errors.organizationName}</span>}

              <label>National Identity Card Number</label>
              <input type="text" name="nic" value={formData.nic} onChange={handleChange} />
              {errors.nic && <span className="error-text">{errors.nic}</span>}

              <label>Landline</label>
              <input type="text" name="landLine" value={formData.landLine} onChange={handleChange} />
              {errors.landLine && <span className="error-text">{errors.landLine}</span>}
            </div>

            <div className="input-column">
              <label>Name of the applicant</label>
              <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} />
              {errors.applicantName && <span className="error-text">{errors.applicantName}</span>}

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error-text">{errors.email}</span>}

              <label>Mobile</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </div>
          </div>

          <label>Address</label>
          <textarea name="address" rows="3" value={formData.address} onChange={handleChange}></textarea>
          {errors.address && <span className="error-text">{errors.address}</span>}
        </div>

        <div className="section">
          <h3>Details related to the matter of application:</h3>
          <div className="radio-group">
            {['Conferences/Lectures', 'Stage Drama', 'Musical concerts', 'Awards/Tributes/Ceremonies'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="eventType"
                  value={type}
                  checked={formData.eventType === type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>

          <div className="radio-group secondary">
            <label>
              <input
                type="radio"
                name="eventType"
                value="Other"
                checked={formData.eventType === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
            <input
              type="text"
              name="otherEventType"
              className="small-input"
              value={formData.otherEventType}
              onChange={handleChange}
            />
            {errors.otherEventType && <span className="event-error-text">{errors.otherEventType}</span>}
          </div>
          {errors.eventType && <span className="error-text">{errors.eventType}</span>}
        </div>

        <div className="section">
          <h3>Musical concerts:</h3>
          <div className="radio-group music">
            <label>
              <input
                type="radio"
                name="concertType"
                value="Classical"
                checked={formData.concertType === 'Classical'}
                onChange={handleChange}
              />
              Classical
            </label>
            <label>
              <input
                type="radio"
                name="cencertType"
                value="Fast rhythms"
                checked={formData.concertType === 'Fast rhythms'}
                onChange={handleChange}
              />
              Fast rhythms
            </label>
            {errors.concertType && <span className="error-text">{errors.concertType}</span>}
          </div>

          <p className="warning-text">
            There is no space for spectators to dance in the auditorium. If this is done, the security deposit amount of the relevant concert will be cancelled.
          </p>

          <label>Music Band</label>
          <input type="text" className='band' name="musicBand" value={formData.musicBand} onChange={handleChange} />
          {errors.musicBand && <span className="error-text">{errors.musicBand}</span>}

          <label>Participating singers</label>
          <textarea name="singers" rows="3" value={formData.singers} onChange={handleChange}></textarea>
          {errors.singers && <span className="error-text">{errors.singers}</span>}
        </div>

        <div className="section">
          <h3>Stage drama/Conferences/Lectures/Awards/Tributes/Ceremonies:</h3>
          <label>Resource persons/ Program lead persons/ Team/ Special Invitees</label>
          <textarea name="specialInvitees" rows="3" value={formData.specialInvitees} onChange={handleChange}></textarea>
          {errors.specialInvitees && <span className="error-text">{errors.specialInvitees}</span>}
        </div>

        <div className="section">
          <h3>Viewers:</h3>
          <div className="radio-group">
            {['University students', 'School students', 'Institute staff', 'Open'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="viewers"
                  value={type}
                  checked={formData.viewers === type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>
          {errors.viewers && <span className="error-text">{errors.viewers}</span>}
          </div>

<div className="section">
  <h3>Date and Time:</h3>
  <div className="date-time-group">
    <input
      className="date"
      type="date"
      name="reservedDate"
      value={formData.reservedDate}
      onChange={handleChange}
    />
    <label>From</label>
    <input
      type="time"
      name="eventStartTime"
      value={formData.eventStartTime}
      onChange={handleChange}
      onFocus={() => {
        if (!formData.eventStartTime) {
          setFormData({ ...formData, eventStartTime: "08:00" });
        }
      }}
    />
    <label>To</label>
    <input
      type="time"
      name="eventEndTime"
      value={formData.eventEndTime}
      onChange={handleChange}
      onFocus={() => {
        if (!formData.eventEndTime) {
          setFormData({ ...formData, eventEndTime: "12:00" });
        }
      }}
    />
    <label>No of Hours</label>
    <select
      name="eventNoOfHours"
      value={formData.eventNoOfHours}
      onChange={handleChange}
    >
      <option value="">Select</option>
      <option value="4">4</option>
      <option value="8">8</option>
    </select>
    {errors.dateTime && <span className="error-text">{errors.dateTime}</span>}
  </div>
  <label>Additional Hours</label>
    <select
      name="eventAdditionalHours"
      value={formData.eventAdditionalHours}
      onChange={handleChange}
      className='additionalHour'
    >
      <option value="">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
</div>

<div className="section">
  <h3>Time Period of Decoration/Preparation:</h3>
  <div className="date-time-group">
    <label>From</label>
    <input type="time" name="decorationStartTime" value={formData.decorationStartTime} onChange={handleChange} />
    <label>To</label>
    <input type="time" name="decorationEndTime" value={formData.decorationEndTime} onChange={handleChange} />
    <label>No of Hours</label>
    <select name="decorationNoOfHours" value={formData.decorationNoOfHours} onChange={handleChange}>
      <option value="">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  </div>
</div>

<div className="section">
  <h3>Time Period of the Rehearsal:</h3>
  <div className="date-time-group">
    <label>From</label>
    <input type="time" name="rehearsalStartTime" value={formData.rehearsalStartTime} onChange={handleChange} />
    <label>To</label>
    <input type="time" name="rehearsalEndTime" value={formData.rehearsalEndTime} onChange={handleChange} />
    <label>No of Hours</label>
    <select name="rehearsalNoOfHours" value={formData.rehearsalNoOfHours} onChange={handleChange}>
      <option value="">Select</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  </div>
</div>

<div className="section">
  <h3>Details regarding Outsourced Equipment/Services:</h3>
  <label>Stage lighting</label>
  <textarea rows="2" name="stageLighting" value={formData.stageLighting} onChange={handleChange}></textarea>
  <label>Stage Sound Administration</label>
  <textarea rows="2" name="stageSoundAdministration" value={formData.stageSoundAdministration} onChange={handleChange}></textarea>
  <label>Electric generators</label>
  <textarea rows="2" name="electricGenerator" value={formData.electricGenerator} onChange={handleChange}></textarea>
  <label>Stage Decorations</label>
  <textarea rows="2" name="stageDecoration" value={formData.stageDecoration} onChange={handleChange}></textarea>
  <label>Ticket sales at the Auditorium premises</label>
  <textarea rows="2" name="ticketSalesAtPremises" value={formData.ticketSalesAtPremises} onChange={handleChange}></textarea>

  <h3>Personnel handling and security of premises:</h3>
  <div className="radio-group security">
    <label>
      <input
        type="radio"
        name="security"
        value="Externally"
        checked={formData.security === 'Externally'}
        onChange={handleChange}
      />
      Externally
    </label>
    <label>
      <input
        type="radio"
        name="security"
        value="University security department"
        checked={formData.security === 'University security department'}
        onChange={handleChange}
      />
      University security department
    </label>
    {errors.security && <span className="error-text">{errors.security}</span>}
  </div>
</div>

<div className="section terms">
  <input type="checkbox" onChange={handleAgreeChange} />
  <p>
    <b>
      I agree to avail the Rabindranath Tagore Memorial Auditorium by paying the fees charged by Ruhuna University for conducting the above-mentioned program subject to the conditions/rules to be followed while using the Rabindranath Tagore Memorial Auditorium.
    </b>
  </p>
</div>

<button type="submit" disabled={!formData.agreed}>
  Submit
</button>
</form>
</div>
);
};

export default ApplicationForm;

       
