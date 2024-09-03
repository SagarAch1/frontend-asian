import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faDollarSign,
  faEarth,
//   faFileAlt,
  faMapMarkerAlt,
  faStar,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Homepage/Footer";
import FormPage from "../../Homepage/FormPage";

const programs = [
  //for Certified//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    title: "Science and Technology",
    university: "University of Auckland, Auckland",
    location: "Auckland, New Zealand",
    worldRanking: "85",
    Certified: "Certified",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "01 .11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "University of Auckland, Auckland",
    location: " Auckland, New Zealand ",
    worldRanking: "85",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: "University of Otago",
    location: "Dunedin, New Zealand",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " University of Otago ",
    location: " Dunedin, New Zealand ",
    worldRanking: "184",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Science and Technology ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },



{
    title: " Law ",
    university: " Massey University",
    location: " Palmerston North, Wellington, and Auckland campuses ",
    worldRanking: "326",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Victoria University of Wellington",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Science and Technology ",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },



{
    title: " Life Sciences ",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " Victoria University of Wellington ",
    location: " Wellington ",
    worldRanking: "236",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " University of Waikato ",
    location: " Hamilton ",
    worldRanking: "357",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " University of Canterbury ",
    location: " Christchurch ",
    worldRanking: "270",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Lincoln University",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Lincoln University ",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Lincoln University ",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Lincoln University ",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Lincoln University ",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Lincoln University ",
    location: " Lincoln",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Lincoln University ",
    location: " Lincoln ",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Auckland University of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Unitec Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Unitec Institute of Technology",
    location: " Auckland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Otago Polytechnic",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Otago Polytechnic ",
    location: " Dunedin ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Manukau Institute of Technology ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Manukau Institute of Technology",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Ara Institute of Canterbury ",
    location: " Christchurch",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Eastern Institute of Technology",
    location: " Napier",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Eastern Institute of Technology",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology",
    university: " Eastern Institute of Technology",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Eastern Institute of Technology",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Eastern Institute of Technology ",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Eastern Institute of Technology",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Eastern Institute of Technology",
    location: " Napier ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Waikato Institute of Technology (Wintec)",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law",
    university: " Nelson Marlborough Institute of Technology (NMIT) ",
    location: " Nelson and Blenheim ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law",
    university: " Whitireia New Zealand ",
    location: " Porirua ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Southern Institute of Technology",
    location: " Invercargill ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Wellington Institute of Technology (WelTec))",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Wellington Institute of Technology (WelTec)",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Western Institute of Technology at Taranaki (WITT) ",
    location: " Taranaki ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " North Tec ",
    location: " Northland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " North Tec ",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " North Tec ",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: "Engineering",
    university: " North Tec ",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " North Tec ",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " North Tec ",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law",
    university: " North Tec",
    location: " Northland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Toi Ohomai Institute of Technology ",
    location: " Rotorua and Tauranga ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Pacific International Hotel Management School ",
    location: " New Plymouth ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law",
    university: " New Zealand Tertiary College (NZTC) ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " UC International College ",
    location: " Christchurch ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " Taylors College ",
    location: " Auckland ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Arts ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Business and Management ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Science and Technology ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Engineering ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Life Sciences ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Medical and Healthcare ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
{
    title: " Law ",
    university: " University of Waikato College ",
    location: " Hamilton ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, Feb, July ",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign", 
  },
{
    title: " Arts ",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Science and Technology ",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Le Cordon Bleu",
    location: " Wellington ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "04.11.2024",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  // Other programs
];

const CourseNewzeland = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    const searchCriteria = location.state || {};
    const filtered = programs.filter(
      (program) =>
        (!searchCriteria.course ||
          program.title.toLowerCase().includes(searchCriteria.course?.toLowerCase()))
    );

    setFilteredPrograms(filtered.length > 0 ? filtered : null);
  }, [location.state]);

  const handleViewDetails = (link) => {
    navigate(link);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Container>
        {filteredPrograms ? (
          <>
            <DataCount size="1.5em" bold>
              Found {filteredPrograms.length} programs according to your criteria in New Zeland.
            </DataCount>
            <GridContainer>
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={index}>
                  <ProgramTitle>{program.university}</ProgramTitle>
                  <ProgramDetails>
                    <p>
                      <FontAwesomeIcon icon={faBook} />{" "}
                      <strong>{program.title}</strong>
                    </p>
                    {/* <p>
                      <FontAwesomeIcon icon={faFileAlt} /> {program.Certified}
                    </p> */}
                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {program.location}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEarth} /> World Ranking:{" "}
                      {program.worldRanking}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCalendarAlt} />  Intake:{" "}
                      {program.intakeDate}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faStar} /> Entry Score:{" "}
                      {program.entryScore}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faDollarSign} /> Fees: 
                      <ContactLink onClick={handleContactClick}>
                        {program.fees}
                      </ContactLink>
                    </p>
                  </ProgramDetails>
                  <ViewDetailsButton
                    onClick={() => handleViewDetails(program.link)}
                  >
                    View details
                  </ViewDetailsButton>
                </ProgramCard>
              ))}
            </GridContainer>
          </>
        ) : (
          <DataCount size="1.5em" bold>
            No available programs for the selected criteria.
          </DataCount>
        )}
      </Container>

      <FormPage />
      

      {/* Footer */}
      <Footer />
    </>
  );
};

// Styled-components for styling
const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataCount = styled.p`
  font-size: ${(props) => props.size || "1.1em"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-bottom: 20px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
`;

const ProgramCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 350px;
`;

const ProgramTitle = styled.h3`
  font-size: 1em;
  color: #333;
  margin-bottom: 10px;
`;

const ProgramDetails = styled.div`
  text-align: left;
  margin-top: 10px;

  p {
    margin: 4px 0;
    font-size: 0.8em;
    color: #555;

    svg {
      margin-right: 8px;
      color: #007bff;
    }
  }
`;

const ContactLink = styled.span`
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const ViewDetailsButton = styled.button`
  margin-top: 15px;
  padding: 10px 25px;
  font-size: 0.9em;
  color: black;
  background-color: #ffffff;
  border: black 1px solid;
  border-radius: 20px;
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

export default CourseNewzeland;
