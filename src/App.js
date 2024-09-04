// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";

import Bachelorofdesign from "./Blog/Bachelorofdesign";
import CourseAustralia from "./Pages/Courses/Australia/b/master"
import CourseNewzeland from "./Pages/Courses/Newzeland/newzeland"
import IELTSPreparationPage from "./Pages/TestPreparation/Ielts";
import PtePreparationPage from "./Pages/TestPreparation/Pte";
import ToeflPreparationPage from "./Pages/TestPreparation/Toefl";
import SatPreparationPage from "./Pages/TestPreparation/Sat";
import DuolingoPreparationPage from "./Pages/TestPreparation/Duolingo";

import AIECGlobal from "./Pages/Homepage/Aboutus";
import Contact from "./Pages/Contact/Contact";
import Slider from "./Pages/Coupon/Slider";

import Homepage from "./Pages/Homepage/Homepage";
import Myorder from "./Pages/Homepage/Myorder";
import UserOrder from "./Pages/Homepage/Userorder";

import Login from "./Pages/Login/Login";
import Profile from "./Pages/Login/Profile";
import Message from "./Pages/Message/Message";

import Bookclass from "./Pages/BookClass/Bookclass";

import Thankyou from "./Pages/Payment/Thankyou";

import FormPage from "./Pages/Homepage/FormPage";

import Register from "./Pages/Register/Register";
import Search from "./Pages/Search/Search";

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

        <Route path="/ielts" element={<IELTSPreparationPage />} />
        <Route path="/pte" element={<PtePreparationPage />} />
        <Route path="/toefl" element={<ToeflPreparationPage />} />
        <Route path="/sat" element={<SatPreparationPage />} />
        <Route path="/duolingo" element={<DuolingoPreparationPage />} />
        

        <Route path="/coursenewzeland" element={<CourseNewzeland />} />

        <Route path="/aiecglobal" element={<AIECGlobal />} />

        <Route path="/formpage" element={<FormPage />} />

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
