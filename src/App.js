// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Gallerycreate from "./Pages/Gallery/Imageupload";

import Bachelorofdesign from "./Blog/Bachelorofdesign";
import CourseAustralia from "./Pages/Courses/Australia/b/master";
import CourseCanada from "./Pages/Courses/Canada/canada";
import CourseNewzeland from "./Pages/Courses/Newzeland/newzeland";
import CourseUk from "./Pages/Courses/UK/Uk";
import CourseUsa from "./Pages/Courses/USA/usa";
import Afterreceivingoffer from "./Pages/Newsandarticles/Afterreceivingoffer";
import Arriveandthrive from "./Pages/Newsandarticles/Arriveandthrive";
import Howdoiapply from "./Pages/Newsandarticles/Howdoiapply";
import Preparetodepart from "./Pages/Newsandarticles/Preparetodepart";
// import Newsandarticles from "./Pages/Newsandarticles/Totalnewsandarticle";
import WhereAndWhatToStudy from "./Pages/Newsandarticles/Whereandwhattostudy";
import WhyStudyAbroad from "./Pages/Newsandarticles/Whystudyabroad";
import Createnews from "./Pages/Newsarticles/CreateNews";
import Newslist from "./Pages/Newsarticles/NewsList";
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
import ChitwanOffice from "./Pages/Whychoosedata/Chitwanoffice";
import KathmanduOffice from "./Pages/Whychoosedata/Kahmanduoffice";
import PokharaOffice from "./Pages/Whychoosedata/Pokharaoffice";
import SydneyOffice from "./Pages/Whychoosedata/Sydneyoffice";
import Australiauni from "./Universitiy/Australiauni";
import Canadauni from "./Universitiy/Canadauni";
import Newzelanduni from "./Universitiy/Newzelanduni";
import Ukuni from "./Universitiy/Ukuni";
import Usauni from "./Universitiy/Usauni";
// import Irelanuni from "./Universitiy/Irelanuni";

import Contact from "./Pages/Contact/Contact";
import Slider from "./Pages/Coupon/Slider";
import Event from "./Pages/Events/CreateEvent";
import AIECGlobal from "./Pages/Homepage/Aboutus";

import Homepage from "./Pages/Homepage/Homepage";
import Myorder from "./Pages/Homepage/Myorder";
import UserOrder from "./Pages/Homepage/Userorder";

import Book from "./Pages/BookClass/Book";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Login/Profile";
import Message from "./Pages/Message/Message";

import Bookclass from "./Pages/BookClass/Bookclass";

import Thankyou from "./Pages/Payment/Thankyou";

import FormPage from "./Pages/Homepage/FormPage";

import UniversityRankings from "./Pages/Findacourse/Universityranking";
import Register from "./Pages/Register/Register";

import UpcomingEvents from "./Pages/Events/Event";

import BlogList from "./Blog/Blogasian";
import Visaapplicationassistance from "./Pages/Homepage/Visaapplicationassistance";
import Doctoratescholarship from "./Pages/Scholarships/Doctorate";
import FoundationScholar from "./Pages/Scholarships/Foundationscholaraship";
import Postgraduatescholar from "./Pages/Scholarships/Postgraduatescholarship";
import ScholarshipList from "./Pages/Scholarships/Predegreevocationalscholarship";
import ScholarshipPage from "./Pages/Scholarships/Totalscholarships";
import Undergraduatescholar from "./Pages/Scholarships/Undergraduatescholarship";
import Vetscholar from "./Pages/Scholarships/Vetscholarship";
import Acupuncture from "./Pages/Subjects/Acupunture";
import AgricultureScience from "./Pages/Subjects/Agriculturescience";
import AlliedHealthScience from "./Pages/Subjects/Alliedhealthscience";
import Allsubjects from "./Pages/Subjects/Allsubjects";
import AnimalandVeterinarySciences from "./Pages/Subjects/Animalandveterinary";
import Architecture from "./Pages/Subjects/Architecture";
import ArtHistory from "./Pages/Subjects/Arthistory";
import Astrophysics from "./Pages/Subjects/Astrophysics";
import Bakery from "./Pages/Subjects/Bakery";
import Beauty from "./Pages/Subjects/Beauty";
import Biochemistry from "./Pages/Subjects/Biochemistry";
import Biotechnology from "./Pages/Subjects/Biotechnology";
import Botany from "./Pages/Subjects/Botany";
import BusinessAdministration from "./Pages/Subjects/Bussinessadministration";
import Bussinessenglish from "./Pages/Subjects/Bussinessenglish";
import Cosmetology from "./Pages/Subjects/Cosmetology";
import Counselling from "./Pages/Subjects/Counselling";
import Creativewriting from "./Pages/Subjects/Creativewriting";
import CropScience from "./Pages/Subjects/Cropscience";
import CurriculumandEducation from "./Pages/Subjects/Curriculum";
import Dietetics from "./Pages/Subjects/Dietetics";
import DigitalProduction from "./Pages/Subjects/Digitalproduction";
import DisabilityStudies from "./Pages/Subjects/Disabilitystudies";
import EarlyChildhoodEducation from "./Pages/Subjects/Earlychildeducation";
import Earthscience from "./Pages/Subjects/Earthscience";
import EnvironmentalEngineering from "./Pages/Subjects/Environmentalengineering";
import Environmentconservation from "./Pages/Subjects/Environmentconservation";
import Farmandagribusiness from "./Pages/Subjects/Farmandagribusiness";
import Fashion from "./Pages/Subjects/Fashion";
import FashionDesign from "./Pages/Subjects/Fashiondesign";
import FirstAid from "./Pages/Subjects/Firstaid";
import Fishery from "./Pages/Subjects/Fishery";
import Foodandhspitality from "./Pages/Subjects/Foodandhospitality";
import FoodScience from "./Pages/Subjects/Foodscience";
import Forensics from "./Pages/Subjects/Forensics";
import Generalhistory from "./Pages/Subjects/Generalhistory";
import GeriatricStudies from "./Pages/Subjects/Geriatric";
import Graphicanddesign from "./Pages/Subjects/Graphicanddesign";
import HigherEducation from "./Pages/Subjects/Highereducation";
import HoriCulture from "./Pages/Subjects/Horticulture";
import Hotelandhospitality from "./Pages/Subjects/Hotelandhospitality";
import HumanMovement from "./Pages/Subjects/Humanmovement";
import HumanWelfare from "./Pages/Subjects/Humanwelfare";
import Industrialdesign from "./Pages/Subjects/Industrialdesign";
import InformationTechnology from "./Pages/Subjects/Informationtechnology";
import Landscapedesign from "./Pages/Subjects/Landscapedesign";
import Masscommunication from "./Pages/Subjects/Masscommunication";
import OccupationalHealth from "./Pages/Subjects/Occupationalhealth";
import OccupationalTherapy from "./Pages/Subjects/Occupationaltherapy";
import PestControl from "./Pages/Subjects/Pestcontrol";
import Pharmaceutical from "./Pages/Subjects/Pharmaceutical";
import Pharmacology from "./Pages/Subjects/Pharmacology";
import Philosophyandreligious from "./Pages/Subjects/Philosophyandreligious";
import Physicalsciences from "./Pages/Subjects/Physicalscience";
import Planning from "./Pages/Subjects/Planning";
import Podiatry from "./Pages/Subjects/Podiatry";
import Policestudies from "./Pages/Subjects/Policestudies";
import Politicalscience from "./Pages/Subjects/Politicalscience";
import Politicalscienceandpolicy from "./Pages/Subjects/Politicalscienceandpolicy";
import PrimaryEducation from "./Pages/Subjects/Primaryeducation";
import Productdesign from "./Pages/Subjects/Productdesign";
import Psychiatryandneurosurgery from "./Pages/Subjects/Psychiatryandneurosurgery";
import Psycology from "./Pages/Subjects/Psycology";
import Publichealth from "./Pages/Subjects/Publichealth";
import QualitativeEconomics from "./Pages/Subjects/Qualitativeeco";
import Radiography from "./Pages/Subjects/Radiography";
import RehabilitationTherapy from "./Pages/Subjects/Rehabilationtherapy";
import ReligiousStudies from "./Pages/Subjects/Religiousstudies";
import SecondaryEducation from "./Pages/Subjects/Secondaryeducation";
import SocialJustice from "./Pages/Subjects/Socialjustice";
import SocialScience from "./Pages/Subjects/Socialscience";
import SocialSkills from "./Pages/Subjects/Socialskill";
import Sociology from "./Pages/Subjects/Sociology";
import SpeechPathology from "./Pages/Subjects/Speechpathology";
import SpeechTherapy from "./Pages/Subjects/Speechtherapy";
import SportsScience from "./Pages/Subjects/Sportscience";
import Statistics from "./Pages/Subjects/Statistics";
import PlantScience from "./Pages/Subjects/Studyplantscience";
import Surgery from "./Pages/Subjects/Surgery";
import SystemsEngineering from "./Pages/Subjects/Systemengineering";
import TaxAccounting from "./Pages/Subjects/Taxaccounting";
import Technology from "./Pages/Subjects/Technology";
import TheoreticalPhysics from "./Pages/Subjects/Theoreticalphysics";
import Tourism from "./Pages/Subjects/Tourism";
import Townplanning from "./Pages/Subjects/Townplanning";
import Vediogame from "./Pages/Subjects/Vediogame";
import Visualarts from "./Pages/Subjects/Visualarts";
import WebDevelopment from "./Pages/Subjects/Webdevelopment";
import WoolScience from "./Pages/Subjects/Woolscience";
import Writtencommunication from "./Pages/Subjects/Writtencommunication";

import Chooseusforyourstudy from "./Blog/Chooseusforyourstudy";
import Choosethebestcounsaltancy from "./Blog/Choosingthebestcounsaltancy";
import Createbalanceinfestival from "./Blog/Createbalanceinfestivaal";
import Howtochoosetheright from "./Blog/Howtochoosetheright";
import TestPrepForNepaliStudents from "./Blog/Testpre";
import Thebestcounsaltancyinnepal from "./Blog/Thebestcoun";
import Whywearethebest from "./Blog/Whywearethebest";
import Whyyoushouldstudyinaustralia from "./Blog/Whyyoushouldstudyinaus";
import Howtogetbetterieltsscore from "./Blog/Howtogetbetterscore";
import Ieltstipsfornepalistudent from "./Blog/Ieltstipsfornepalistudent";
import Improveyourvocabulary from "./Blog/Improveyourvocabulary";
import Essentialstudymaterial from "./Blog/Essentialstudymaterial";
import Howtostaymotivated from "./Blog/Howtostaymotivated";
import Creatingbestschedule from "./Blog/Creatingbestschedule";
import Howgoodarepractice from "./Blog/Howgoodarepractice";
import Howtodealwithtest from "./Blog/Howtodealwithtest";
import Ieltsortofel from "./Blog/Ieltsortofel";
import Visarequirementfornepalistudents from "./Blog/Visareq";
import Bestprogramfornepalistudent from "./Blog/Bestprogramfornepalistudent";
import Satvsact from "./Blog/Satoract";
import Balancingjobsandstudy from "./Blog/Balancingjobsandstudy";
import Managingfinance from "./Blog/Managingfinance";
import Whystudyabroadin2024 from "./Blog/Whystudyabroadin2024";
import Tenbestcourse from "./Blog/tenbestcourse";
import Studyingabroadindepthlook from "./Blog/Studingabroadanindepthlook";
import Feeincreaseforaustralia from "./Blog/Feeincreaseforasu";
import Navigatingenglishproficiencytest from "./Blog/Navigatingenglishproficiency";
import Whatisgoodscoreforsat from "./Blog/Whatisgood";
import Ieltsmocktests from "./Blog/Ieltsmocktests";
import SampleDocs from "./Pages/Homepage/Resources";
import StudyInAustralia from "./Pages/Homepage/Australiaresource";
import Resourcecanada from "./Pages/Homepage/Canadaresource";
import Ukresource from "./Pages/Homepage/Unitedresource";




import Aboutaiec from "./Pages/Whychoosedata/Aboutaiec";
import OfficeLocator from "./Pages/Whychoosedata/Aieclocationfind";
import Australiavisarequirement from "./Pages/Whychoosedata/Australiavisarequirement";
import Canadavisarequirementt from "./Pages/Whychoosedata/Canadavisarequirement";
import Howtofindcourse from "./Pages/Whychoosedata/Howtofindacourse";
import Livingabroadsupport from "./Pages/Whychoosedata/Livingabroadsupport";
import Newzelandvisarequirement from "./Pages/Whychoosedata/Newzelandvisarequirement";
import Predeparturesupport from "./Pages/Whychoosedata/Predeparturesupport";
import Studentvisaapplication from "./Pages/Whychoosedata/Studentvisaapplication";
import Studyabroadcounseling from "./Pages/Whychoosedata/Studyabroadcounselling";
import Ukvisarequirement from "./Pages/Whychoosedata/Ukstudentvisapplication";
import Usavisarequirement from "./Pages/Whychoosedata/Usastudentvisarequirement";
import Whatwedo from "./Pages/Whychoosedata/Whatwedo";
import Whychooseaiec from "./Pages/Whychoosedata/Whychooseaiec";

import OurTeam from "./Pages/Ourteam/OurTeam";
import Support from "./Pages/Support/Support";
import AdminDashboard from "./Pages/admin/admin_dashboard/AdminDashboard";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import Navbar from "./components/Navbar";

import GalleryDisplay from "./Pages/Gallery/Gallerydisplay";
import Aiecworkshop from "./Pages/Homepage/Aieclearningcenter";
import UpcomingNews from "./Pages/Newsarticles/News";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";
import Ieltsmocktest from "./Blog/Ieltsmocktests";


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
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/newlist" element={<Newslist />} />
        <Route path="/news" element={<Createnews />} />
        <Route path="/gallerycreate" element={<Gallerycreate />} />
        <Route path="/aiecworkshop" element={<Aiecworkshop />} />
        <Route path="/pestandweedcontrol" element={<PestControl />} />
        <Route path="/plantsciences" element={<PlantScience />} />
        <Route path="/horticultureandviticulture" element={<HoriCulture />} />
        <Route path="/cropsciences" element={<CropScience />} />
        <Route path="/woolscience" element={<WoolScience />} />
        <Route path="/fisheriesstudies" element={<Fishery />} />
        <Route path="/fashionmerchandise" element={<Fashion />} />

        <Route path="/taxation" element={<TaxAccounting />} />
        <Route path="/pharmaceuticalscience" element={<Pharmaceutical />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/humanwelfarestudiesandservices" element={<HumanWelfare />} />
        <Route path="/visualarts" element={<Visualarts />} />
        <Route path="/productdesign" element={<Productdesign />} />
        <Route path="/industrialdesign" element={<Industrialdesign />} />
        <Route path="/graphicanddesignstudies" element={<Graphicanddesign />} />
        <Route path="/fashiondesign" element={<FashionDesign />} />
        <Route path="/arthistory" element={<ArtHistory />} />
        <Route path="/videogamedevelopment" element={<Vediogame />} />
        <Route path="/digitalproduction" element={<DigitalProduction />} />
        <Route path="/pharmacology" element={<Pharmacology />} />
        <Route path="/botany" element={<Botany />} />
        <Route path="/forensics" element={<Forensics />} />
        <Route path="/Biotechnology" element={<Biotechnology />} />
        <Route path="/biochemistry" element={<Biochemistry />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/landscapedesignandarchitecture" element={<Landscapedesign />} />
        <Route path="/townplanning" element={<Townplanning />} />
        <Route path="/psychology" element={<Psycology />} />
        <Route path="/businessadministration" element={<BusinessAdministration />} />
        <Route path="/farmandagribusiness" element={<Farmandagribusiness />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/webdevelopment"element={<WebDevelopment />} />
        <Route path="/systemsengineering" element={<SystemsEngineering />} />
        <Route path="/rehabilitationtherapy" element={<RehabilitationTherapy />} />
        <Route path="/humanmovement" element={<HumanMovement />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/informationtechnology" element={<InformationTechnology />} />
        <Route path="/qualitativeeconomics" element={<QualitativeEconomics />} />
        <Route path="/geriatricstudies" element={<GeriatricStudies />} />
        <Route path="/agricultureeducationservices" element={<AgricultureScience />} />
        <Route path="/foodsciences" element={<FoodScience />} />
        <Route path="/sportsscience" element={<SportsScience />} />
        <Route path="/creativewriting" element={<Creativewriting />} />
        <Route path="/businessenglish" element={<Bussinessenglish />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/conservation" element={<Environmentconservation />} />
        <Route path="/dietetics" element={<Dietetics />} />
        <Route path="/foodandhospitality" element={<Foodandhspitality />} />
        <Route path="/animalandveterinarystudies" element={<AnimalandVeterinarySciences />} />
        <Route path="/socialskillsprogrammes" element={<SocialSkills />} />
        <Route path="/speechtherapy" element={<SpeechTherapy />} />
        <Route path="/occupationaltherapy" element={<OccupationalTherapy />} />
        <Route path="/disabilitystudies" element={<DisabilityStudies />} />
        <Route path="/psychiatryandneurosurgery" element={<Psychiatryandneurosurgery />} />
        <Route path="/firstaid" element={<FirstAid />} />
        <Route path="/podiatry" element={<Podiatry />} />
        <Route path="/occupationalhealth&safety" element={<OccupationalHealth />} />
        <Route path="/speechpathology" element={<SpeechPathology />} />
        <Route path="/acupuncture" element={<Acupuncture />} />
        <Route path="/alliedhealthscience" element={<AlliedHealthScience />} />
        <Route path="/publichealth" element={<Publichealth />} />
        <Route path="/radiography" element={<Radiography />} />
        <Route path="/generalhistory" element={<Generalhistory />} />
        <Route path="/hotelandhospitality" element={<Hotelandhospitality />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/philosophyandreligiousstudies" element={<Philosophyandreligious />} />
        <Route path="/policestudies" element={<Policestudies />} />
        <Route path="/writtencommunication" element={<Writtencommunication />} />
        <Route path="/masscommunication" element={<Masscommunication />} />
        <Route path="/earthsciences" element={<Earthscience />} />
        <Route path="/environmentalengineering" element={<EnvironmentalEngineering />} />
        <Route path="/cosmetology" element={<Cosmetology />} />
        <Route path="/religiousstudies" element={<ReligiousStudies />} />
        <Route path="/astrophysics" element={<Astrophysics />} />
        <Route path="/physicalsciences" element={<Physicalsciences />} />
        <Route path="/theoreticalphysics" element={<TheoreticalPhysics />} />
        <Route path="/socialjustice" element={<SocialJustice />} />
        <Route path="/socialscience" element={<SocialScience />} />
        <Route path="/politicalscienceandpolicy" element={<Politicalscienceandpolicy />} />
        <Route path="/politicalscience" element={<Politicalscience />} />
        <Route path="/sociology" element={<Sociology />} />
        <Route path="/secondaryeducation" element={<SecondaryEducation />} />
        <Route path="/primaryeducation" element={<PrimaryEducation />} />
        <Route path="/highereducation" element={<HigherEducation />} />
        <Route path="/earlychildhoodeducation" element={<EarlyChildhoodEducation />} />
        <Route path="/curriculumandeducationstudies" element={<CurriculumandEducation />} />
        <Route path="/counselling" element={<Counselling />} />
       
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/whywearethebest" element={<Whywearethebest />} />
        <Route path="/howtochoosetheright" element={<Howtochoosetheright />} />
        <Route path="/testprepfornepalistudents" element={<TestPrepForNepaliStudents />} />
        <Route path="/choosingthebest" element={<Choosethebestcounsaltancy />} />
        <Route path="/createbalanceinfestival" element={<Createbalanceinfestival />} />
        <Route path="/chooseusforyourstudy" element={<Chooseusforyourstudy />} />
        <Route path="/thebestcounsaltancyinnepal" element={<Thebestcounsaltancyinnepal />} />
        <Route path="/whyyoushoulsstudyinaustralia" element={<Whyyoushouldstudyinaustralia  />} />
        <Route path="/howtogetbetterscore" element={<Howtogetbetterieltsscore />} />
        <Route path="/ieltstipsfornepalistudents" element={<Ieltstipsfornepalistudent />} />
        <Route path="/improveyourvocabulary" element={<Improveyourvocabulary />} />
        <Route path="/essentialstudymaterial" element={<Essentialstudymaterial />} />
        <Route path="/howtostaymotivated" element={<Howtostaymotivated />} />
        <Route path="/creatingbestschedule" element={<Creatingbestschedule />} />
        <Route path="/howgoodarepractice" element={<Howgoodarepractice />} />
        <Route path="/howtodealwithtest" element={<Howtodealwithtest />} />
        <Route path="/ieltsortofel" element={<Ieltsortofel />} />
        <Route path="/visarequirementfornepalistudents" element={<Visarequirementfornepalistudents />} />
        <Route path="/satvsact" element={<Satvsact />} />
        <Route path="/bestprogramfornepalistudent" element={<Bestprogramfornepalistudent />} />
        <Route path="/balancingjobsandstudy" element={<Balancingjobsandstudy />} />
        <Route path="/managingfinance" element={<Managingfinance />} />
        <Route path="/whystudyabroadin2024" element={<Whystudyabroadin2024 />} />
        <Route path="/tenbestcourse" element={<Tenbestcourse />} />
        <Route path="/studingabroadindepthlook" element={<Studyingabroadindepthlook />} />
        <Route path="/feeincreaseforaustralia" element={<Feeincreaseforaustralia />} />
        <Route path="/navigatingenglishproficiency" element={<Navigatingenglishproficiencytest />} />
        <Route path="/whatisgoodforsat" element={<Whatisgoodscoreforsat />} />
        <Route path="/ieltsmocktest" element={<Ieltsmocktest   />} />
        <Route path="/resources" element={<SampleDocs />} />
        <Route path="/resourceaustralia" element={<StudyInAustralia />} />
        <Route path="/resourcecanada" element={<Resourcecanada />} />
        <Route path="/resourceuk" element={<Ukresource />} />



       
        
   






        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/book" element={<Book />} />

        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/myorder" element={<Myorder />} />

        <Route path="/userorder" element={<UserOrder />} />
        <Route path="/userprofile" element={<Profile />} />

        <Route path="/slider" element={<Slider />} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallerydisplay" element={<GalleryDisplay />} />

        <Route path="/course-detail" element={<Bachelorofdesign />} />

        <Route path="/courseadvice" element={<Courseadvice />} />

        <Route path="/ielts" element={<IELTSPreparationPage />} />
        <Route path="/pte" element={<PtePreparationPage />} />
        <Route path="/toefl" element={<ToeflPreparationPage />} />
        <Route path="/sat" element={<SatPreparationPage />} />
        <Route path="/duolingo" element={<DuolingoPreparationPage />} />
        {/* 
        <Route path="/newsandarticles" element={<Newsandarticles />} /> */}

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
        <Route path="/officelocator" element={<OfficeLocator />} />
        <Route path="/kathmanduoffice" element={<KathmanduOffice />} />
        <Route path="/chitwanoffice" element={<ChitwanOffice />} />
        <Route path="/pokharaoffice" element={<PokharaOffice />} />
        <Route path="/sydneyoffice" element={<SydneyOffice />} />
        <Route path="/doctoratescholrship" element={<Doctoratescholarship />} />
        <Route
          path="/undergraduatescholar"
          element={<Undergraduatescholar />}
        />
        <Route path="/postgraduatescholar" element={<Postgraduatescholar />} />
        <Route path="/vetscholar" element={<Vetscholar />} />
        <Route path="/foundationscholar" element={<FoundationScholar />} />

        <Route path="/predegreevocational" element={<ScholarshipList />} />
        <Route path="/upcommingevents" element={<UpcomingEvents />} />
        <Route path="/upcommingnews" element={<UpcomingNews />} />

        <Route
          path="/scholarshipsinaustralia"
          element={<Australiascholarships />}
        />

        <Route path="/scholarshippage" element={<ScholarshipPage />} />

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
        <Route path="/usavisarequirement" element={<Usavisarequirement />} />
        <Route path="/ukvisarequirement" element={<Ukvisarequirement />} />
        <Route
          path="/australiavisarequirement"
          element={<Australiavisarequirement />}
        />
        <Route
          path="/newzelandvisarequirement"
          element={<Newzelandvisarequirement />}
        />
        <Route
          path="/canadavisarequirement"
          element={<Canadavisarequirementt />}
        />
        <Route
          path="/visaapplicationassistance"
          element={<Visaapplicationassistance />}
        />

        <Route path="/browsesubject" element={<Allsubjects />} />

        {/* Admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* User Routes */}
        <Route element={<UserRoutes />}>
          <Route path="/courseaustralia" element={<CourseAustralia />} />

          <Route path="/courseusa" element={<CourseUsa />} />
          <Route path="/courseuk" element={<CourseUk />} />
          <Route path="/coursecanada" element={<CourseCanada />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
