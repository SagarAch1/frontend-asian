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
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Business and Management",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Engineering",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Acadia University",
    location: "Wolfville, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Adler University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Alexander College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Alexander College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare ",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Algoma University",
    location: "Sault Ste. Marie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Algonquin College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Bow Valley College",
    location: "Calgary, Alberta, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Brandon University",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Brandon, Manitoba, Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Brighton College",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare ",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "British Columbia Institute of Technology",
    location: "Brandon, Manitoba, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Brock University",
    location: "St. Catharines, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Cambrian College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Canadian Business College",
    location: "Sudbury, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Canadian College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Cape Breton University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Capilano University",
    location: "Sydney, Nova Scotia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Centennial College",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Centennial College ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "College of New Caledonia",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " College of New Caledonia ",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Columbia College ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Columbia College",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Concordia University of Edmonton",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Concordia University of Edmonton ",
    location: " Vancouver, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Conestoga College ",
    location: " Kitchener, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Confederation College ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Crandall University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Dominican University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Douglas College ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Douglas College",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Durham College ",
    location: "Oshawa, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Fairleigh Dickinson University ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Fanshawe College",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Fanshawe College ",
    location: "Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Fleming College ",
    location: "Peterborough, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Focus College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Focus College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Fraser International College (FIC) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Fraser International College (FIC)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " George Brown College ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Georgian College ",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Georgian College",
    location: "Barrie, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Humber Polytechnic ",
    location: "Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Humber Polytechnic",
    location: " Toronto, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " International Business University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " International College of Manitoba (ICM) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Justice Institute of British Columbia ",
    location: "New Westminster, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Keyano College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " King's University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " King's University College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Kwantlen Polytechnic University ",
    location: "Surrey, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Lakehead University ",
    location: "Thunder Bay, Ontario, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law ",
    university: " Lakehead University ",
    location: " Thunder Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Lakeland College ",
    location: " Vermilion, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare ",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Langara College ",
    location: " Vancouver, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " LaSalle College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " LaSalle College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Business and Management ",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Engineering ",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Life Sciences ",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Medical and Healthcare",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Arts ",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: " Law",
    university: " Laurentian University ",
    location: " Sudbury, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: " Loyalist College",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Loyalist College ",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Loyalist College ",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Loyalist College ",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Loyalist College ",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Loyalist College ",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Loyalist College",
    location: " Belleville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "MacEwan University",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Manitoba Institute of Trades and Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Medicine Hat College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Memorial University of Newfoundland (MUN) ", 
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Memorial University of Newfoundland (MUN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Mohawk College",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Mohawk College ",
    location: " Hamilton, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Mount Allison University",
    location: " Sackville, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Mount Royal University",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Mount Saint Vincent University",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "New York Institute of Technology - Vancouver (NYIT)",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Niagara College ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Niagara University ",
    location: " Niagara-on-the-Lake, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Nipissing University",
    location: " North Bay, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "NorQuest College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "North Island College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Northern Alberta Institute of Technology (NAIT) ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Northern Lights College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Northwestern Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Northwestern Polytechnic ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "OCAD University",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Olds College",
    location: " Olds, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare ",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Ontario Tech University ",
    location: " Oshawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Providence University College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Queen's University",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Red Deer Polytechnic",
    location: " Red Deer, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Red River College Polytechnic ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Renison University College - University of Waterloo",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Science and Technology",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Royal Roads University",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Saskatchewan Polytechnic",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Sault College ",
    location: " Sault Ste. Marie, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Selkirk College",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Selkirk College ",
    location: " Castlegar, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Seneca Polytechnic ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Seneca Polytechnic",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
 },
{
    title: "Science and Technology",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Sheridan College ",
    location: " Oakville, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "Southern Alberta Institute of Technology",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "St. Clair College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "St. Francis Xavier University (StFX)",
    location: " Antigonish, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "St. Lawrence College",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " St. Lawrence College ",
    location: " Kingston, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " St. Mary's University ",
    location: " Halifax, Nova Scotia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " St. Thomas University (CAN) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " Stenberg College ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " Thompson Rivers University ",
    location: " Kamloops, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: "Ottawa, Can Toronto, Ontario, Canada ada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " Toronto Metropolitan University (formerly Ryerson University) ",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " Trent University ",
    location: " Peterborough, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " Trinity Western University ",
    location: " Langley, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " Tyndale University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " ULethbridge International College Calgary ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law",
    university: " University Canada West (UCW) ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " University of Alberta ",
    location: " Edmonton, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " University of Calgary ",
    location: " Calgary, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " University of Guelph ",
    location: " Guelph, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " University of Lethbridge ",
    location: " Lethbridge, Alberta, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Business and Management ",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Engineering ",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Life Sciences ",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Medical and Healthcare",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Arts ",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: " Law ",
    university: " University of Manitoba ",
    location: " Winnipeg, Manitoba, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of New Brunswick ",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Niagara Falls Canada",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Northern British Columbia",
    location: " Prince George, British Columbia, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Ottawa",
    location: " Ottawa, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Prince Edward Island",
    location: " Charlottetown, Prince Edward Island, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Regina",
    location: " Regina, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Saskatchewan",
    location: " Saskatoon, Saskatchewan, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of the Fraser Valley",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Toronto - Rotman School of Management",
    location: " Toronto, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Science and Technology",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Business and Management",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Engineering",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Life Sciences",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Medical and Healthcare",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Arts",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },


{
    title: "Law",
    university: "University of Victoria (in partnership with Kaplan International)",
    location: " Victoria, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "University of Waterloo",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "University of Windsor",
    location: " Windsor, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Vancouver Island University",
    location: " Nanaimo, British Columbia, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Vanier College",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Western University",
    location: " London, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Life Sciences",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Medical and Healthcare",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Arts",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Law",
    university: "Wilfrid Laurier International College (WLIC)",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Science and Technology",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Business and Management",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },

{
    title: "Engineering",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Life Sciences",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Medical and Healthcare",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Arts",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Law",
    university: "Wilfrid Laurier University",
    location: " Waterloo, Ontario, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Science and Technology",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Business and Management",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Engineering",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Life Sciences",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Medical and Healthcare",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Arts",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Law",
    university: "Yorkville University",
    location: " Fredericton, New Brunswick, Canada ",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Science and Technology",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Business and Management",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Engineering",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Life Sciences",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Medical and Healthcare",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Arts",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },
{
    title: "Law",
    university: "Yukon University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5/6.0",
    fees: "Contact Aiec",
    link: "/bachelorofdesign",
  },





  // Other programs
];

const  CourseCanada
 = () => {
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
              Found {filteredPrograms.length} programs according to your criteria in Canada.
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

export default  CourseCanada
;
