import React, { useState } from 'react';

const Flywire = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. Why choose to pay using Flywire?",
      answer: "Flywire ensures secure, flexible, and convenient international payments for your educational institution."
    },
    {
      question: "2. How to pay?",
      answer: "You can follow the instructions provided by Flywire and use your preferred payment method."
    },
    {
      question: "3. Can a family member, friend or third party pay on my behalf?",
      answer: "Yes, you can assign someone to pay on your behalf by sharing the payment details with them."
    },
    {
      question: "4. My country is not listed. Can I still pay with Flywire?",
      answer: "If your country is not listed, please contact Flywire support to check for alternative payment options."
    },
    {
      question: "5. Whose information should I supply for 'Payer Information'?",
      answer: "You should provide the details of the person or entity making the payment."
    },
    {
      question: "6. I don’t know my Student ID. What should I do?",
      answer: "Contact your educational institution to retrieve your Student ID or ask for assistance from Flywire."
    },
    {
      question: "7. What exchange rate will be applied to my payment?",
      answer: "The exchange rate will be locked in when you initiate the payment and is competitive in the market."
    },
    {
      question: "8. What is included in the amount I have to pay?",
      answer: "The amount you have to pay includes the fees outlined by your educational institution."
    },
    {
      question: "9. When will my institution receive my payment?",
      answer: "Your payment will be processed in a timely manner and will reach your institution typically within 2-3 business days."
    },
    {
      question: "10. Do you accept credit cards and debit cards?",
      answer: "Yes, Flywire accepts both credit and debit card payments."
    },
    {
      question: "11. Why is the amount different between payment methods?",
      answer: "Different payment methods may have varying fees and exchange rates, which can affect the total amount."
    },
    {
      question: "12. Who should I contact if I have additional questions about making a payment with Flywire?",
      answer: "You can contact Flywire support via their official website or customer service."
    }
  ];

  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif', paddingTop: '80px' }}>
      {/* Top header part */}
      <div style={{ backgroundColor: '#e7f3ff', padding: '40px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontSize: '3rem', color: '#333' }}>Flywire</h1>
          <img src="https://your-logo-url.com/logo.png" alt="Flywire Logo" style={{ width: '120px', height: '120px' }} />
        </div>
      </div>

      {/* Main content section */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h2>Use Flywire Money Transfer with IDP</h2>
          <p>
            Trusted by millions of students and thousands of institutions globally, Flywire offers secure, convenient ways to make your educational payments to more than 5,000 institutions.
          </p>
          <p>
            Flywire is a different type of payment service. We have been using unique payment processes to enhance the educational institutions’ service since 2009. Today, we continue to use innovative payment technologies to give students and their families the flexibility to make payments with the highest standards of security.
          </p>
          <h3>Secure, flexible payment options</h3>
          <p>
            Flywire streamlines, secures, and optimizes education payments. Our powerful digital platform is trusted by thousands of institutions and millions of students across the globe.
          </p>
          <h3>Competitive exchange rates</h3>
          <p>
            Convenient and competitive exchange rates lower the cost of payments for students and families. You can make your payment in your own currency.
          </p>
          <h3>Convenient, local payment methods</h3>
          <p>
            Flywire provides local payment methods like bank transfer, debit/credit cards, and e-wallets, allowing you to make payments in the way that is most convenient to you.
          </p>
          <h3>Real-time payment tracking</h3>
          <p>
            Track your payment with the Flywire tracking system, ensuring that both you and your institution are up to date with the progress of your transaction.
          </p>
          <h3>Around-the-clock multilingual support</h3>
          <p>
            Access multilingual support around the clock via chat, phone, and email to help navigate the payment process.
          </p>

          <div style={{ backgroundColor: '#e7f3ff', padding: '20px', borderRadius: '5px', marginBottom: '40px' }}>
            <h4 style={{ margin: 0, color: '#0073e6' }}>Flywire</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Education payments made easy</li>
              <li>Trusted by thousands of institutions globally</li>
              <li>Convenient, flexible payment options</li>
              <li>Competitive exchange rates</li>
              <li>Real-time payment tracking and support</li>
              <li>Around-the-clock multilingual support</li>
            </ul>
            <button style={{ backgroundColor: '#0073e6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Enquire Now
            </button>
          </div>

          {/* FAQ Section */}
          <div>
            <h3>FAQs</h3>
            <div style={{ marginTop: '20px' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <h4 
                    onClick={() => toggleFaq(index)} 
                    style={{ cursor: 'pointer', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', marginBottom: '10px', transition: 'background-color 0.3s' }}
                  >
                    {faq.question}
                  </h4>
                  {faqIndex === index && <p style={{ padding: '10px', backgroundColor: '#f1f1f1', marginTop: '0' }}>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Flywire;
