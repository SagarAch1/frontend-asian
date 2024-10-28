import React from "react";
import FormPage from "../Pages/Homepage/FormPage";
import "./Blog.css"; // Link to updated CSS styles

const Managingfinance = () => {
  return (
    <div className="blog-container">
      {/* Top Section */}
      <div className="header-section">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
          alt="Consultancy"
          className="blog-header-image"
        />
        <div className="blog-header-text">
          <h1>Why We Are The Best Consultancy</h1>
          <p>
            Asian Education Consultancy - Guiding Students to Their Dream
            Universities Across the Globe
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-content">
        <div className="blog-date">
          <span>October 16, 2024</span>
        </div>

        <div className="blog-main">
          <h2>Studying Abroad</h2>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
            alt="Blog image"
            className="blog-main-image"
          />
        </div>

        {/* Additional Content - Inserted Section */}
        <div className="additional-section">
          <h3>
            The Finances and Financial Planning Concerning Nepali Students
            Studying in Other Countries
          </h3>
          <p>
            Overseas education is a wonderful experience which opens many doors
            for learning and self development. However, one of the most
            important parts of this process is the financial one or the aspect
            of money management. Managing your finances as an international
            student is easier when you plan well ahead, thus the need to plan
            right. Here are some important tips and strategies that will help
            you as a Nepali student pursuing higher education overseas to manage
            your money wisely.
          </p>

          <h3>Understanding the Costs</h3>
          <p>
            So it is imperative that you familiarize yourself with the several
            expenses that are involved when studying in another country. These
            can be broadly categorized into the following:
          </p>
          <ul>
            <li>
              Tuition Fees: This is the largest cost and varies based on the
              country, university, or program chosen.
            </li>
            <li>
              Living Expenses: These include accommodation, food, transport, and
              other sundry expenses.
            </li>
            <li>
              Travel Expenses: The cost of tickets for travels to and from the
              study country and within it.
            </li>
            <li>
              Health Insurance: Most countries require international students to
              have health insurance.
            </li>
            <li>
              Miscellaneous Expenses: These cover books, study materials,
              entertainment, and more.
            </li>
          </ul>

          <h3>Creating a Budget</h3>
          <p>
            After determining the costs, the next step is to develop a budget. A
            budget helps you track income and spending, ensuring you don't
            exceed your limit. Here's how you can create an effective budget:
          </p>
          <ul>
            <li>
              Calculate Your Income: List all sources like scholarships, wages,
              and financial aid.
            </li>
            <li>
              List Your Expenses: Differentiate between essential and
              non-essential expenses.
            </li>
            <li>
              Track Your Spending: Use budget apps or spreadsheets to monitor
              expenses.
            </li>
            <li>
              Set Financial Goals: Define short and long-term goals to manage
              your spending.
            </li>
          </ul>

          <h3>Reducing Expenses</h3>
          <p>
            Reducing expenses is key to relieving financial pressure. Here are
            tips to help you save:
          </p>
          <ul>
            <li>
              Choose Affordable Accommodation: Consider shared apartments,
              dormitories, or host families.
            </li>
            <li>
              Cook at Home: Cooking at home is a great way to cut down on food
              costs.
            </li>
            <li>
              Use Student Discounts: Always carry your student ID to take
              advantage of discounts.
            </li>
            <li>
              Buy Second-Hand: Look for second-hand textbooks and other
              equipment online or in shops.
            </li>
            <li>
              Limit Non-Essential Spending: Be mindful of spending on
              entertainment and leisure activities.
            </li>
          </ul>

          <h3>Earning While Studying</h3>
          <p>
            International students often work while studying to earn extra
            money. Here are some considerations:
          </p>
          <ul>
            <li>
              Check Visa Regulations: Understand the employment laws in your
              study country.
            </li>
            <li>
              Find Campus Jobs: Universities offer many part-time jobs, such as
              in the library or cafeteria.
            </li>
            <li>
              Explore Internships: Seek internships related to your field of
              study.
            </li>
            <li>
              Freelance or Online Jobs: Consider freelance or online jobs like
              teaching or design work.
            </li>
          </ul>

          <h3>Financial Aid and Scholarships</h3>
          <p>
            Applying for scholarships and financial aid can significantly reduce
            your study costs. Here are steps to explore these options:
          </p>
          <ul>
            <li>
              Research Scholarships: Look for governmental, private, and
              non-governmental scholarships.
            </li>
            <li>
              Apply Early: Start searching and applying for scholarships as
              early as possible.
            </li>
            <li>
              Prepare Strong Applications: Write articulate essays and get good
              letters of recommendation.
            </li>
            <li>
              Seek Financial Aid: Consider grants, loans, or work-study programs
              offered by colleges or governments.
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a6.Webp`}
            alt="Additional image"
            className="bottom-image"
          />
          <h3>Conclusion</h3>
          <p>
            Financial management is important for Nepali students studying
            abroad. By understanding expenses, creating a budget, saving money,
            working while studying, and applying for scholarships, you can
            successfully manage your finances and make the most of your
            international educational experience. At Asian Education
            Consultancy, we support you throughout your journey, from deciding
            to study abroad to achieving your financial and academic goals.
          </p>
        </div>

        {/* Footer */}
        <div className="footer">
          <FormPage />
        </div>
      </div>
    </div>
  );
};

export default Managingfinance;
