import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const universitiesData = [
  {
    id: 37,
    name: "The University of Melbourne",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/sat.jpeg`,
  },
  {
    id: 54,
    name: "Monash University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/pre.jpeg`,
  },
  {
    id: 60,
    name: "The University of Sydney",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 67,
    name: "The Australian National University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 70,
    name: "The University of Queensland",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 84,
    name: "UNSW College",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 84,
    name: "The University of New South Wales",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 111,
    name: "The University of Adelaide",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 143,
    name: "The University of Western Australia",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 148,
    name: "University of Technology Sydney",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 180,
    name: "Macquarie University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 199,
    name: "Queensland University of Technology",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "The University of Newcastle",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Western Sydney University - Sydney City Campus",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Curtin University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Wollongong",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Swinburne University of Technology-sydney",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Swinburne University of Technology",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Deakin University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "University of Tasmania (UTAS)",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "RMIT University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Griffith University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "La Trobe University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "Western Sydney University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "Flinders University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "USQ - Sydney Education Centre",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "University of South Australia",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "Murdoch University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "James Cook University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "The University of Southern Queensland (UniSQ)",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Canberra",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "Edith Cowan University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Bond University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Victoria University - Sydney",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Charles Darwin University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Victoria University - Brisbane",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Australian Catholic University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Victoria University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Southern Cross University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "CQUniversity Australia",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of the Sunshine Coast",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Educo Southern Cross University - Sydney",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Educo Southern Cross University - Melbourne",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of the Sunshine Coast English Language Centre",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Federation University Australia",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Educo Southern Cross University - Perth",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Charles Sturt University",
    country: "Australia",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  ////////////////////////////////////////////////////////////////////////////Newzeland//////////////////////////////////////////////////////////////////////
  {
    id: 150,
    name: "The University of Auckland",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "The University of Otago",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Victoria University of Wellington",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Auckland University of Technology",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "The University of Waikato",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Lincoln University",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Canterbury",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Massey University",
    country: "New Zealand",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  ////////////////////////////////////////////////////////////////////////Ireland////////////////////////////////////////////////////////////////////
  {
    id: 134,
    name: "Trinity College Dublin, the University of Dublin",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University College Dublin",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Royal College of Surgeons in Ireland",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "University College Cork",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "University of Galway",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Dublin City University",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Limerick",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Maynooth University",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "TU Dublin",
    country: "Ireland",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  ///////////////////////////Canada////////////////////////////
  {
    id: 21,
    name: "University of Toronto",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 41,
    name: "University of British Columbia",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 49,
    name: "McGill University (Continuing Education)",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 103,
    name: "McMaster University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 109,
    name: "University of Alberta",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 158,
    name: "University of Waterloo",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 177,
    name: "University of Ottawa",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Calgary",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Western University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Simon Fraser University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Queen's University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "Dalhousie University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Saskatchewan",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Victoria",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "York University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Manitoba",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Victoria - Kaplan",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Guelph",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Concordia University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Windsor",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Carleton University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Memorial University of Newfoundland",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Ontario Tech University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of New Brunswick",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Toronto Metropolitan University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Lakehead University",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "University of Northern British Columbia",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "University of Regina",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1201,
    name: "University of Lethbridge",
    country: "Canada",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  ////////////////////////////USA//////////////////////////////////////////////////////////////////////////////////////
  {
    id: 2,
    name: "Stanford University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 3,
    name: "Massachusetts Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 4,
    name: "Harvard University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 6,
    name: "Princeton University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 7,
    name: "California Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 9,
    name: "University of California - Berkeley",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 10,
    name: "Yale University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 13,
    name: "University of Chicago",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 15,
    name: "Johns Hopkins University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 16,
    name: "University of Pennsylvania",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 17,
    name: "Columbia University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 18,
    name: "University of California, Los Angeles",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 20,
    name: "Cornell University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 23,
    name: "University of Michigan - Ann Arbor",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 25,
    name: "University of Washington",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 27,
    name: "New York University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 28,
    name: "Northwestern University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 34,
    name: "University of California - San Diego",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 36,
    name: "Georgia Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 42,
    name: "University of Illinois - Urbana-Champaign",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 52,
    name: "University of Texas - Austiny",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 59,
    name: "University of California - Davis",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 63,
    name: "University of Wisconsin - Madison",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 64,
    name: "Brown Universityk",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 69,
    name: "University of California - Santa Barbara",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 72,
    name: "University of North Carolina at Chapel Hill",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 78,
    name: "Boston University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 85,
    name: "University of Minnesota - Twin Cities",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 86,
    name: "Purdue University - West Lafayette",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 92,
    name: "University of California - Irvine",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 92,
    name: "Vanderbilt University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 106,
    name: "Emory University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 114,
    name: "University of Maryland - College Park",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 116,
    name: "Michigan State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 119,
    name: "Rice University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 122,
    name: "Pennsylvania State University - University Park",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 132,
    name: "University of Florida",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 133,
    name: "University of Rochester",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 138,
    name: "University of Colorado - Boulder",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 145,
    name: "University of Pittsburgh",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 155,
    name: "University of Arizona",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 161,
    name: "Dartmouth College",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 164,
    name: "Case Western Reserve University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 166,
    name: "University of Virginia",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 187,
    name: "Georgetown University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 191,
    name: "Tufts University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 198,
    name: "Indiana University - Bloomington",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 199,
    name: "University of Notre Dame",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of California - Santa Cruz",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Utahy",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Miami",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Iowa",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "University of Hawaii - Manoa",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "George Washington University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: "Northeastern University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Virginia Tech",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "SUNY Stony Brook University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Florida State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Brandeis University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "University of California, Riverside (Engineering)",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "Boston College",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "North Carolina State University - Raleigh",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: "University of California, Riverside (Business)",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "Washington State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "University of Tennessee",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: "Drexel University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "llinois Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Georgia",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "Temple University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Connecticut",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Colorado - Denver",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "Iowa State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: "University of Texas - Dallas",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Central Florida",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Saint Louis University (Globally Recruit)",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Delaware",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "New Jersey Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Texas - San Antonio",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Missouri University of Science and Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Wake Forest University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Colorado State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Florida International University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Rensselaer Polytechnic Institute",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Stevens Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "National University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Missouri",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Kentucky",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Nebraska - Lincoln",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "University of Oregon",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Syracuse University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: "Georgia State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Houston",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Alaska - Fairbanks",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Tulsa",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Nebraska at Omaha",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "Wayne State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: "University of Denver",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Northern Illinois University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Old Dominion University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Kansas State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Texas - Arlington",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Baylor University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Mississippi State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Maryland, Baltimore County",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of North Carolina - Charlotte",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Alabama",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Toledo",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Lehigh University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Oklahoma State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Worcester Polytechnic Institute",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Clark University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Nevada, Las Vegas",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "Texas Tech University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "The Catholic University of America",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Rhode Island",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: "University of Wyoming",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Florida Atlantic University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "New Mexico State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Marquette University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Florida Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "The New School",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Howard University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Clarkson University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "San Diego State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Montana State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Rochester Institute of Technology",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "University of Texas - El Paso",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "Nova Southeastern University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: "University of Memphis",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "Central Michigan University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "Florida Agricultural and Mechanical University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "Oakland University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "University of South Dakota",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "Texas State University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: "Western Michigan University",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1201,
    name: "University of Texas - Rio Grande Valley",
    country: "USA",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  /////////////////////////////uk/////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 30,
    name: " University of Edinburgh ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 38,
    name: " King's College London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 51,
    name: " University of Manchester ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 81,
    name: " University of Manchester ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 87,
    name: " University of Glasgow ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 97,
    name: " University of Southampton ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 101,
    name: " University of Birmingham ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 105,
    name: " University of Sheffield ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 106,
    name: " University of Warwick ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 129,
    name: " University of Leeds ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 130,
    name: " University of Nottingham ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 135,
    name: " Queen Mary University of London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 147,
    name: " University of York ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 155,
    name: " Lancaster University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 168,
    name: " Newcastle University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 168,
    name: " University of Liverpool ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 174,
    name: " Durham University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 177,
    name: " University of Exeter ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 190,
    name: " Cardiff University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 193,
    name: " University of St Andrews ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: " University of Aberdeen ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: " University of Leicester ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: " Queen's University Belfast ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: " University of Sussex ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 201,
    name: " University of Reading ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: " University of East Anglia ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: " Swansea University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: " Loughborough University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: " University of Bath ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 251,
    name: " University of Surrey ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: " University of Dundee ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: " University of Strathclyde ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: " Royal Holloway, University of London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 301,
    name: " University of Essex ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: " Brunel University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: " City, University of London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 351,
    name: " Heriot-Watt University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " University of Portsmouth ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " University of Kent ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " SOAS University of London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " Aston University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " University of Stirling ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " Goldsmiths, University of London ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " University of Plymouth ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " Bournemouth University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " University of Hull ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 401,
    name: " Bangor University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " University of Greenwich ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Keele University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Liverpool John Moores University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Aberystwyth University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Anglia Ruskin University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " University of Huddersfield",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " University of the West of England ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " University of Bradford ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Northumbria University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Nottingham Trent University ",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Edinburgh Napier University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Middlesex University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " University of Lincoln",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 501,
    name: " Manchester Metropolitan University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " University of Hertfordshire",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " London South Bank University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " Oxford Brookes University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " De Montfort University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " University of Wolverhampton",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " University of the West of Scotland",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " University of Derby",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " Glasgow Caledonian University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " Coventry University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " Birmingham City University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 601,
    name: " Ulster University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " University of Roehampton",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " Robert Gordon University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " University of Brighton",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " Sheffield Hallam University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " Leeds Beckett University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " Kingston University London",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " University of Gloucestershire",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 801,
    name: " University of Salford",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " University of West London",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " University of East London",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " University of South Wales",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " University of Bedfordshire",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " Edge Hill University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " University of Central Lancashire",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " Canterbury Christ Church University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " Staffordshire University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1001,
    name: " Teesside University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1201,
    name: " Cardiff Metropolitan University",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1201,
    name: " University of Chester",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
  {
    id: 1201,
    name: " University of Sunderland",
    country: "United Kingdom",
    logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
  },
];

const UniversityRankings = () => {
  const [searchName, setSearchName] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("Australia");
  const navigate = useNavigate();

  // Filter universities by both name and country
  const filteredData = universitiesData.filter((university) => {
    return (
      university.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (university.country === selectedDestination || !selectedDestination)
    );
  });

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", paddingTop: "100px" }}>
      {/* Full-width background section */}
      <div
        style={{
          backgroundColor: "#f0f4f8",
          padding: "40px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            THE University Rankings for 2024
          </h1>
          <p style={{ marginBottom: "40px" }}>
            Discover the world’s top-ranking universities according to Times
            Higher Education University Rankings 2024. Search globally or by
            country and explore the courses and experience they offer.
          </p>

          {/* Search and Dropdown Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              width: "60%",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search by university name"
              value={searchName}
              onChange={handleSearchNameChange}
              style={{
                padding: "15px",
                width: "60%",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />

            <select
              value={selectedDestination}
              onChange={handleDestinationChange}
              style={{
                padding: "15px",
                width: "40%",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            >
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="United Kingdom">UK</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Ireland">Ireland</option>
            </select>

            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* University List and Signup Section */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* University List */}
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "20px" }}>
            {filteredData.length} Universities found, showing results below
          </p>
          {filteredData.length > 0 ? (
            filteredData.map((university) => (
              <div
                key={`${university.id}-${university.name}`} // Ensuring unique keys
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <strong
                    style={{
                      fontSize: "1.2rem",
                      marginRight: "15px",
                      backgroundColor: "black",
                      padding: "5px 10px",
                      borderRadius: "50%",
                      color: "#fff",
                    }}
                  >
                    {university.id}
                  </strong>
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "15px",
                      borderRadius: "8px",
                    }}
                  />
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {university.name}
                  </span>
                  <span style={{ marginLeft: "10px", color: "#888" }}>
                    ({university.country})
                  </span>
                </div>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #007BFF",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    color: "#007BFF",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View details
                </button>
              </div>
            ))
          ) : (
            <p>No universities found matching your criteria.</p>
          )}
        </div>

        {/* Sign Up Box */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f4f8",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            Need help with choosing a university?
          </p>
          <p style={{ marginBottom: "20px", color: "#888" }}>
            Sign in to get personalized content optimized for you or get in
            touch with one of our counselors for free consultation.
          </p>
          <button
            onClick={handleSignUp}
            style={{
              padding: "15px 30px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityRankings;
