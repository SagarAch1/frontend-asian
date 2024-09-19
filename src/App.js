// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";

import Bachelorofdesign from "./Blog/Bachelorofdesign";
import CourseAustralia from "./Pages/Courses/Australia/b/master";
import CourseCanada from "./Pages/Courses/Canada/canada";
import CourseNewzeland from "./Pages/Courses/Newzeland/newzeland";
import CourseUsa from "./Pages/Courses/USA/usa";
import Afterreceivingoffer from "./Pages/Newsandarticles/Afterreceivingoffer";
import Arriveandthrive from "./Pages/Newsandarticles/Arriveandthrive";
import Howdoiapply from "./Pages/Newsandarticles/Howdoiapply";
import Preparetodepart from "./Pages/Newsandarticles/Preparetodepart";
import Newsandarticles from "./Pages/Newsandarticles/Totalnewsandarticle";
import WhereAndWhatToStudy from "./Pages/Newsandarticles/Whereandwhattostudy";
import WhyStudyAbroad from "./Pages/Newsandarticles/Whystudyabroad";
import Studyinaustralia from "./Pages/StudyDestination/Studyinaustralia";
import Studyincanada from "./Pages/StudyDestination/Studyincanada";
import Studyinireland from "./Pages/StudyDestination/Studyinireland";
import Studyinnewzeland from "./Pages/StudyDestination/Studyinnewzeland";
import Studyinuk from "./Pages/StudyDestination/Studyinuk";
import StudyInUsa from "./Pages/StudyDestination/Studyinusa";
import DuolingoPreparationPage from "./Pages/TestPreparation/Duolingo";
import IELTSPreparationPage from "./Pages/TestPreparation/Ielts";
import PtePreparationPage from "./Pages/TestPreparation/Pte";
import SatPreparationPage from "./Pages/TestPreparation/Sat";
import ToeflPreparationPage from "./Pages/TestPreparation/Toefl";

import Convera from "./Pages/Studentessentials/Convera";
import Flywire from "./Pages/Studentessentials/Flywire";
import Guardianship from "./Pages/Studentessentials/Guardianship";
import Moneytransfer from "./Pages/Studentessentials/Moneytransfer";
import Studentbanking from "./Pages/Studentessentials/Studentbanking";

import Courseadvice from "./Pages/Findacourse/Courseadvice";
import Australiascholarships from "./Pages/Scholarships/Australiascholarship";
import Canadascholarships from "./Pages/Scholarships/Canadascholarships";
import Newzelandscholarships from "./Pages/Scholarships/Newzelandscholarships";
import Ukscholarships from "./Pages/Scholarships/Ukscholarships";
import Usascholarships from "./Pages/Scholarships/Usascholarships";
import Australiauni from "./Universitiy/Australiauni";
import Canadauni from "./Universitiy/Canadauni";
import Newzelanduni from "./Universitiy/Newzelanduni";
import Ukuni from "./Universitiy/Ukuni";
import Usauni from "./Universitiy/Usauni";
// import Irelanuni from "./Universitiy/Irelanuni";

import Contact from "./Pages/Contact/Contact";
import Slider from "./Pages/Coupon/Slider";
import AIECGlobal from "./Pages/Homepage/Aboutus";

import Homepage from "./Pages/Homepage/Homepage";
import Myorder from "./Pages/Homepage/Myorder";
import UserOrder from "./Pages/Homepage/Userorder";

import Login from "./Pages/Login/Login";
import Profile from "./Pages/Login/Profile";
import Message from "./Pages/Message/Message";

import Bookclass from "./Pages/BookClass/Bookclass";

import Thankyou from "./Pages/Payment/Thankyou";

import FormPage from "./Pages/Homepage/FormPage";

import UniversityRankings from "./Pages/Findacourse/Universityranking";
import Register from "./Pages/Register/Register";
import Search from "./Pages/Search/Search";

import Aboutaiec from "./Pages/Whychoosedata/Aboutaiec";
import Howtofindcourse from "./Pages/Whychoosedata/Howtofindacourse";
import Predeparturesupport from "./Pages/Whychoosedata/Predeparturesupport";
import Studentvisaapplication from "./Pages/Whychoosedata/Studentvisaapplication";
import Studyabroadcounseling from "./Pages/Whychoosedata/Studyabroadcounselling";
import Whatwedo from "./Pages/Whychoosedata/Whatwedo";
import Whychooseaiec from "./Pages/Whychoosedata/Whychooseaiec";
import Livingabroadsupport from "./Pages/Whychoosedata/Livingabroadsupport";

import Support from "./Pages/Support/Support";
import AdminDashboard from "./Pages/admin/admin_dashboard/AdminDashboard";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import Navbar from "./components/Navbar";

import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/bookclass" element={<Bookclass />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/messages" element={<Message />} />

        <Route path="/search" element={<Search />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/myorder" element={<Myorder />} />

        <Route path="/userorder" element={<UserOrder />} />
        <Route path="/userprofile" element={<Profile />} />

        <Route path="/slider" element={<Slider />} />

        <Route path="/bachelorofdesign" element={<Bachelorofdesign />} />

        <Route path="/courseaustralia" element={<CourseAustralia />} />

        <Route path="/courseusa" element={<CourseUsa />} />
        <Route path="/coursecanada" element={<CourseCanada />} />

        <Route path="/courseadvice" element={<Courseadvice />} />

        <Route path="/ielts" element={<IELTSPreparationPage />} />
        <Route path="/pte" element={<PtePreparationPage />} />
        <Route path="/toefl" element={<ToeflPreparationPage />} />
        <Route path="/sat" element={<SatPreparationPage />} />
        <Route path="/duolingo" element={<DuolingoPreparationPage />} />

        <Route path="/newsandarticles" element={<Newsandarticles />} />

        <Route path="/coursenewzeland" element={<CourseNewzeland />} />

        <Route path="/whystudyabroad" element={<WhyStudyAbroad />} />

        <Route path="/whereandwhattostudy" element={<WhereAndWhatToStudy />} />

        <Route path="/howdoiapply" element={<Howdoiapply />} />

        <Route path="/afterreceivingoffer" element={<Afterreceivingoffer />} />

        <Route path="/preparetodepart" element={<Preparetodepart />} />

        <Route path="/arriveandthrive" element={<Arriveandthrive />} />

        <Route path="/studyinaustralia" element={<Studyinaustralia />} />

        <Route path="/studyinusa" element={<StudyInUsa />} />

        <Route path="/studyinuk" element={<Studyinuk />} />

        <Route path="/studyincanada" element={<Studyincanada />} />

        <Route path="/studyinnewzeland" element={<Studyinnewzeland />} />

        <Route path="/studyinireland" element={<Studyinireland />} />

        <Route path="/aiecglobal" element={<AIECGlobal />} />

        <Route path="/formpage" element={<FormPage />} />

        <Route path="/moneytransfer" element={<Moneytransfer />} />
        <Route path="/flywire" element={<Flywire />} />

        <Route path="/convera" element={<Convera />} />
        <Route path="/studentbanking" element={<Studentbanking />} />

        <Route path="/guradianship" element={<Guardianship />} />

        <Route path="/universityrankingthe" element={<UniversityRankings />} />
        <Route path="/australiauniversities" element={<Australiauni />} />
        <Route path="/usauniversities" element={<Usauni />} />
        <Route path="/ukuniversities" element={<Ukuni />} />
        <Route path="/canadauniversities" element={<Canadauni />} />
        <Route path="/newzelanduniversities" element={<Newzelanduni />} />

        <Route
          path="/scholarshipsinaustralia"
          element={<Australiascholarships />}
        />

        <Route path="/scholarshipsinusa" element={<Usascholarships />} />

        <Route path="/scholarshipsinuk" element={<Ukscholarships />} />

        <Route path="/scholarshipsincanada" element={<Canadascholarships />} />

        <Route
          path="/scholarshipsinnewzeland"
          element={<Newzelandscholarships />}
        />

        <Route path="/about-aiec" element={<Aboutaiec />} />
        <Route path="/whychooseus" element={<Whychooseaiec />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route
          path="/studyabroadcounseling"
          element={<Studyabroadcounseling />}
        />
        <Route path="/howtofindcourse" element={<Howtofindcourse />} />
        <Route
          path="/studentvisapplication"
          element={<Studentvisaapplication />}
        />
        <Route path="/predeparturesupport" element={<Predeparturesupport />} />

        <Route path="/livingabroadsupport" element={<Livingabroadsupport />} />

        {/* Admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* User Routes */}
        <Route element={<UserRoutes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
