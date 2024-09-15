import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import WhyChooseAiec from "../Homepage/WhyChooseAiec";

const Convera = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const toggleFaq = (index) => {
    // Toggle the FAQ by setting openIndex to the clicked FAQ index or closing it by setting null
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "1. What payment options are available?",
      answer:
        "Depending on where you are located Convera offers many different payment options including:Ali Pay,China Pay,WeChat Pay,Visa,Sofort,Trustly,Poli,Mastercard,JCB,Union Pay,iDeal,Online Bank Transfer",
    },
    {
      question: "2. Can I pay with my credit card?",
      answer:
        "Major credit cards are accepted when submitting a payment to select education institutions in Australia, New Zealand, Canada, the United Kingdom, the United States, Singapore, Hong Kong, and Japan. If you are sending a payment to one of these participating institutions, you can use a credit card when completing your transaction online through GlobalPay for Students. This payment method will be displayed as one of the options after selecting your institution in the payment flow.Payments by UnionPay debit and credit cards are available for students from China, Hong Kong, Japan, and South Korea.",
    },
    {
      question: "3.  How long will it take for Convera to receive my payment?",
      answer:
        "This varies depending on the payment method used. If you pay by bank transfer, your payment will typically arrive with Convera within 2-3 days, other payment options may take a little longer..",
    },
    {
      question: "4. Is there a fee for using Convera?",
      answer:
        "No, there is no additional fee as Convera provides services to your education institution and does not act as a payment service provider to you.Convera’s extensive payment network helps to reduce the risk of unexpected intermediary bank fees. ",
    },
    {
      question: "5.  How does it work?",
      answer:
        "The payment process varies based on the option you choose. If the education institution you're paying isn't pre-populated, you'll need to select it. Next, you'll choose the country you're paying from and the type of fees you're covering. Once these details are provided, the available payment options and the amount owed will be displayed. After entering your student information, you'll be directed to complete your payment through the selected provider..",
    },
    {
      question: "6.  How does Convera help protect my information?",
      answer:
        "We employ secure socket layer (SSL) encryption technology and display a valid security certificate on every page..",
    },
    {
      question: "7. How do you use my information?",
      answer:
        "Convera uses the information we collect for the purpose of processing your educational payment. We abide by privacy laws globally and have controls in place to safeguard your personal information. We are continuously enhancing our program to help ensure it complies with all relevant laws. ",
    },
    {
      question: "8. Are credit/debit card payments secure?",
      answer:
        "Convera’s platform meets the industry standard of 128-bit encryption, and credit card processing is subject to the standard validations and authorisation process operated industry-wide. Security code validation and 3D Secure, an additional security layer for online credit and debit card transactions, are integral to the card authorisation process managed by the Payment Service Provider (PSP).",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        paddingTop: "80px",
      }}
    >
      {/* Top header part */}
      <div
        style={{
          backgroundColor: "#e7f3ff",
          padding: "40px 20px",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "3rem", color: "#333" }}>
            Convera
          </h1>
          <img
            src="https://demo.students.convera.com/geo-buyer/_assets/img/loader-logo.png"
            alt="Convera Logo"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
      </div>

      {/* Main content section */}
      <div
        style={{ display: "flex", justifyContent: "center", padding: "40px" }}
      >
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Use Convera Money Transfer with AIEC
          </h2>{" "}
          {/* Bold line size decreased */}
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            {/* Increase size of other text */}
            Convera partners with education institutions, accommodation, and
            insurance providers to offer students a simple and efficient way to
            pay their tuition fees and accommodation costs in the currency of
            your choice.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            {/* Increase size of other text */}
            Many of the top universities in Australia, Canada, the United
            States, the UK, and New Zealand trust us to manage international
            payments on their behalf.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            {/* Increase size of other text */}
            We use our network of local bank accounts and relationships with
            payment partners to manage the exchange into your education
            institution’s local currency, so you don’t have to worry about
            currency volatility.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            {/* Increase size of other text */}
            Your payment will arrive in full at your education institution which
            may help expedite visa applications and enrolment.
          </p>
         
          
          
          <div
            style={{
              backgroundColor: "#e7f3ff",
              padding: "20px",
              borderRadius: "5px",
              marginBottom: "40px",
            }}
          >
            <h4 style={{ margin: 0, color: "#0073e6" }}>Convera</h4>
            <h3 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Use Convera to transfer money with AIEC
            </h3>{" "}
            <p style={{ fontSize: "1.2rem" }}>
              {" "}
              {/* Increase size of other text */}
              AIEC proudly partners with Convera to offer a simple, secure, and
              smart way to pay your fees online. Convera’s platform is trusted
              by 800+ education institutions worldwide to enable payments in
              140+ currencies across 200+ countries and territories.
            </p>
            <h3 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Why choose Convera:
            </h3>{" "}
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Students, parents, and sponsors can use this platform to pay deposits, tuition fees and more</li>
              <li>Avoid costly transaction charges from your bank</li>
              <li>Pay online via popular options including bank transfer, credit, or debit card or eWallet.</li>
              <li>Compare payment options instantly and Convera holds the exchange rate for 72 hours.</li>
              <li>If you find a cheaper quote from your bank, Convera will match it in accordance with their Price Promise Guarantee. Ask your IDP counsellor for more details.</li>
              <li>Track your payment status by SMS and email</li>
              <li>Multilingual platform available in 10 languages.</li>
              <li>Access 24/7 live chat on the platform, or contact our friendly team at studentsupport@convera.com.</li>
              <li>A platform built with security in mind.</li>
              <li>Ability to initiate refunds easily should circumstances change.</li>
              <li>Pay your fees via a global partner which has helped students achieve their education dreams for over a decade.</li>
            </ul>
            <button
              onClick={() => navigate("/formpage")} // Navigation using useNavigate
              style={{
                backgroundColor: "#0073e6",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Enquire Now
            </button>
          </div>
          <div>
            <h3>FAQs</h3>
            <div style={{ marginTop: "20px" }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <h4
                    onClick={() => toggleFaq(index)} // On click toggle
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#f1f1f1",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {faq.question}
                  </h4>
                  {openIndex === index && ( // Show the answer only if the index matches the openIndex
                    <p
                      style={{
                        padding: "10px",
                        backgroundColor: "#f1f1f1",
                        marginTop: "0",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhyChooseAiec />

      <Footer />
    </div>
  );
};

export default Convera;
