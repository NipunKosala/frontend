import React from 'react';
import './Footer.css';
import person1Image from '../../images/nalintha.jpg'; 
import person2Image from '../../images/deepal.jpg'; 

const Footer = () => {
  const contacts = [
    {
      name: 'Mr. K.G. Nalintha Kumara (Assistant Registrar)',
      address: 'General Administration Branch,University of Ruhuna, Wellamadama, Matara.',
      phone: '(041) 2222681 Ex. 2180 <br /> General administration office (041) 203-3254 Ex. 12014',
      email: 'piyal@admin.ruh.ac.lk',
      image: person1Image,
    },
    {
      name: 'Mr. R.K Deepal (Audio Visual Technical Officer)',
      address: 'Rabindranath Tagore Memorial Auditorium,University of Ruhuna, Wellamadama, Matara.',
      phone: '(041) 2222681 Ex. 12160',
      email: 'deepalavto@gmail.com',
      image: person2Image,
    },
  ];

  return (
    <footer className="footer">
      <div className="contact-details">
        {contacts.map((contact, index) => (
          <div className="contact-box" key={index}>
            <img src={contact.image} alt={contact.name} className="contact-image" />
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{contact.address}</p>
              <p dangerouslySetInnerHTML={{ __html: contact.phone }} />
              <p>{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
