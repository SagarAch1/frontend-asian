import {
  faBook,
  faCalendarAlt,
  faDollarSign,
  faEarth,
  //   faFileAlt,
  faMapMarkerAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Homepage/Footer";
import FormPage from "../../Homepage/FormPage";

const courses = [
  //for Certified//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    title: "Science and Technology",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.5",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
  {
    title: "Engineering",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "Anglia Ruskin University",
    location: "Cambridge and Chelmsford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "Birmingham City University",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "BPP University",
    location: " London, Birmingham, Bristol, and Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "Canterbury Christ Church University",
    location: "Canterbury, Medway, and Tunbridge Wells, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "Cardiff Metropolitan University",
    location: "Cardiff, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: "Coventry University",
    location: "Coventry and London, England",
    worldRanking: "571",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: "De Montfort University",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: "De Montfort University",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: "De Montfort University",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " De Montfort University ",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " De Montfort University ",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " De Montfort University ",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " De Montfort University",
    location: "Leicester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law",
    university: " Edinburgh Napier University ",
    location: "Edinburgh, Scotland",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Glasgow Caledonian University ",
    location: "Glasgow, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Leeds Beckett University ",
    location: "Leeds, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law",
    university: " Liverpool Hope University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Liverpool John Moores University ",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Liverpool John Moores University",
    location: "Liverpool, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " London South bank University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Middlesex University ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Middlesex University",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Manchester Metropolitan University ",
    location: " Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law",
    university: " Queen Margaret University ",
    location: "Edinburgh, Scotland",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Ravensbourne University ",
    location: "London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "900",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "900",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "900",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "800",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Sheffield Hallam University ",
    location: "Sheffield, England",
    worldRanking: "900",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Teesside University ",
    location: "Middlesbrough, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law",
    university: " Ulster University ",
    location: "Northern Ireland",
    worldRanking: "501",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University College Birmingham ",
    location: "Birmingham, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University for the Creative Arts ",
    location: "Canterbury, Epsom, Farnham, and Rochester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Bedfordshire ",
    location: "Luton and Bedford, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Bolton ",
    location: "Bolton, Greater Manchester, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Central Lancashire ",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Central Lancashire",
    location: "Preston and Burnley, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Chester ",
    location: "Chester and Warrington, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of East London ",
    location: " London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Greenwich ",
    location: "London, England",
    worldRanking: "801",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Hertfordshire ",
    location: "Hatfield, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Huddersfield ",
    location: "Huddersfield, England",
    worldRanking: "502",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Law ",
    location: "London, England, and eight other locations in the UK",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Northampton ",
    location: "Northampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Plymouth ",
    location: "Plymouth, England",
    worldRanking: "605",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Business and Management ",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " University of Portsmouth ",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " University of Portsmouth",
    location: "Portsmouth, England",
    worldRanking: "606",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
  {
    title: "Life Sciences",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of Reading ",
    location: "Reading, England",
    worldRanking: "200",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of Roehampton",
    location: "London, England",
    worldRanking: "651",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Managemen",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of South Wales",
    location: "Cardiff, Newport, and Trefforest, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of Sunderland",
    location: "Sunderland and London, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of the West of Scotland",
    location: "Scotland, United Kingdom",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Arts",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " University of Wolverhampton",
    location: "Wolverhampton, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Engineering ",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Life Sciences ",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Medical and Healthcare ",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Arts ",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: " Law ",
    university: " Wrexham University",
    location: "Wrexham, Wales",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Science and Technology",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Business and Management",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Engineering",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Life Sciences",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Medical and Healthcare",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },
  {
    title: "Arts",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  {
    title: "Law",
    university: " York St John University ",
    location: "York, England",
    worldRanking: "50",
    degree: "Certification",
    intakeDate: "Jan, May, September",
    entryScore: "IELTS 6.0",
    fees: "Contact AIEC",
    link: "/bachelorofdesign",
  },

  // Other programs
];

const CourseUk= () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    const searchCriteria = location.state || {};
    const filtered = courses.filter(
      (program) =>
        (!searchCriteria.course ||
          program.title.toLowerCase().includes(searchCriteria.course?.toLowerCase()))
    );

    setFilteredPrograms(filtered.length > 0 ? filtered : null);
  }, [location.state]);

  const handleViewDetails = (course) => {
    navigate("/course-detail", {
      state: {
        courseName: course.title,
        universityName: course.university,
        countryName: course.location.trim(),
        worldRanking: course.worldRanking,
        degree: course.degree,
        intakeDate: course.intakeDate,
        entryScore: course.entryScore,
        fees: course.fees,
      },
    });
  };

  const handleContactAIEC = () => {
    navigate("/formpage");
  };

  return (
    <>
      <Container>
        {filteredPrograms ? (
          <>
            <DataCount size="1.5em" bold>
              Found {filteredPrograms.length} programs according to your criteria in United Kingdom.
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
                      {/* <ContactLink onClick={handleContactClick}>
                        {program.fees}
                      </ContactLink> */}
                    </p>
                  </ProgramDetails>
                  <ViewDetailsButton onClick={() => handleViewDetails(program)}>
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

export default CourseUk;
