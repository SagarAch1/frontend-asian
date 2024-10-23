import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AnimalandVeterinarySciences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
  };

  const statisticsSection = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statItemStyle = {
    width: "22%",
    textAlign: "center",
    fontSize: "16px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#333",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Change color to make it attractive
    marginBottom: "10px",
  };

  const faqSectionStyle = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqItemStyle = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const faqTitleStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  };

  const faqContentStyle = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };


const faqSubtitleStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Animal and Veterinarians Sciences",
      content1:
        "Veterinarians are medicals professionals who examine and inspect animals. They diagnose and treat illnesses in animals and are equipped to prescribe medicines and perform surgeries on them, if necessary. Becoming a Doctor of Veterinary Medicine takes four years of a bachelor’s programme followed by medical school for four years. This entire process takes a total of eight years, which ends with the student getting a license from a recognised board/institution to start practicing.",
        content2:"Common course modules students can expect to study are animal husbandry, cell biology, genetics, veterinary anatomy, veterinary surgery, radiology and parasitology.",
      
    },
    {
      title: "Is Animal and Veterinarians Sciences right for me?",
      content:
        "Veterinary Science is a great field of study animal lovers and people who are actively involved in community service. If you enjoy looking after animals and possess compassion, manual dexterity, patience and are gregarious, you are well-suited for this profession.",
    },
    {
      title: "Study options and costs",
      content1:
        "The first step to acquiring a degree in animal and veterinary medicine is to complete a bachelor’s degree after high school. In high school, it is preferable to opt for courses related to biology, physics and chemistry so to have a better foundation in animal sciences.",
        content2:"Many veterinary schools recommend taking business and communications courses to help you build other valuable soft skills such as emotional intelligence, leadership and teamwork. In addition, pre-requisite courses like biology, biochemistry, genetics, microbiology and social sciences have to be taken to become eligible for a veterinary school. The average cost for a bachelor’s degree in animal and veterinary sciences, in the US for the year 2021-2022 is $7,276 for in-state colleges and $25,928 for out-of-state colleges.",
        content3:"After bachelor’s, students are encouraged to take part in internships and volunteer work to strengthen their applications. You can also study animal and veterinary sciences at the master’s level. Most US schools request scores from a standardized test like the Graduate Record Exam (GRE) or Medical College Admissions Test (MCAT).",
        content4:"After being accepted into Veterinary school, it takes four years to become a Doctor of Veterinary Medicine (DVM). The first three years comprise of class work which include courses on animal anatomy, behaviour, parasitology, pharmacology, radiology and community practice. The final year is composed of “clinical rotations” during which clinical areas including surgery, community practice, equine medicine and oncology are studied. Toward the end of rotations, students will perform basic duties under the supervision of a licensed professional. According to the Association of American Veterinary Medical Colleges cost comparison tool, total tuition fee can range from $160,000 to $288,000.",
        content5:"Doctors can further go for residencies if they want to specialise in a particular field of animal medicine specific field. This usually take three to four years after students decide their speciality i.e. small animals, large animals or equine and zoo veterinarians.",

    },
    {
      title: "Future outlook",
      content:
        "According to the United States Bureau of Labour statistics, the employment of veterinarians is projected to grow 17%. This far outstrips the average occupational growth which is at 8%. The reason for this is the increase in consumers’ pet-related spending and the advancement of veterinary medicine. Today animal and veterinary science is able to offer cure for a many diseases and perform many complicated procedures such as kidney transplants and cancer treatment. 4,400 job openings every year are a strong indicator of the promise studying animal and veterinary science holds.",
      
    },
    {
        title: 'Career pathways for Animal and Veterinarians Sciences graduates',
        subtitle1: 'Military Veterinarian',
        content1: 'Military veterinarians are involved in looking after animals like military dogs on training bases. They are responsible for animal research on behalf of the federal government. Their average salary in the US is $121,014 per year.',
        subtitle2: 'Zoo Veterinarian',
        content2: 'They are involved in maintaining the health of various exotic animals often found in zoos. They are responsible for monitoring their health or administering medicines. Their average salary in the US is $126,558 per year.',
        subtitle3: 'Professor of Veterinary medicine',
        content3: 'They teach and supervise students in clinical training settings along with delivering academic knowledge regarding veterinary medicine. Their average salary in the US is $166,350 per year.',
        subtitle4: 'Veterinary Surgery specialist',
        content4: 'Board certified veterinary surgeons are specialists who perform surgeries that require specialisation beyond a licensed veterinarian. Apart from surgery, they also diagnose illnesses. Their average salary in the US is $266,908 per year.',
        subtitle5: 'Regulatory Medicine Veterinarian',
        content5: 'They conduct regulatory testing and inspections of animal meat intended for human consumption. The tests check for livestock diseases and disease-causing pathogens. Their average salary in the US is $83,781 per year.',
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Animal and Veterinary Sciences abroad       </h1>
        <p>
        Animal and Veterinary Sciences are responsible for evaluating, diagnosing and treating the ailments of animals. If you enjoy caring for animals and want to give back to the community, then Animal and Veterinary Sciences is a good option for you.




      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 4,400 number of predicted job openings per year



          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average annual salary of top veterinarians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary for a veterinarians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 17% the projected growth employment of veterinarians this decade
          </p>
        </div>
      </div>

      {/* FAQ section */}
      {/* FAQ section */}
<div style={faqSectionStyle}>
  <h2>Subject Overview</h2>
  {faqItems.map((item, index) => (
    <div key={index} style={faqItemStyle}>
      <div style={faqTitleStyle} onClick={() => handleToggle(index)}>
        <span>{item.title}</span>
        <span>{activeIndex === index ? "-" : "+"}</span>
      </div>
      {activeIndex === index && (
        <div style={faqContentStyle}>
          {/* Check for subtitles and content */}
          {item.subtitle1 && (
            <div style={faqSubtitleStyle}>{item.subtitle1}</div>
          )}
          {item.content1 && <p>{item.content1}</p>}
          {item.subtitle2 && (
            <div style={faqSubtitleStyle}>{item.subtitle2}</div>
          )}
          {item.content2 && <p>{item.content2}</p>}
          {item.subtitle3 && (
            <div style={faqSubtitleStyle}>{item.subtitle3}</div>
          )}
          {item.content3 && <p>{item.content3}</p>}
          {item.subtitle4 && (
            <div style={faqSubtitleStyle}>{item.subtitle4}</div>
          )}
          {item.content4 && <p>{item.content4}</p>}
          {item.subtitle5 && (
            <div style={faqSubtitleStyle}>{item.subtitle5}</div>
          )}
           {item.content5 && <p>{item.content5}</p>}
          {item.content && <p>{item.content}</p>}

          
           {/* For items with single content */}
        </div>
      )}
    </div>
  ))}
</div>

<FormPage />
<Footer />

    </div>
  );
};

export default AnimalandVeterinarySciences;