import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";





import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import StaffProfilePage from "./pages/StaffProfilePage";
import ContactPage from "./pages/ContactPage";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";


const App: React.FC = () => {
  
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/staff" element={<StaffProfilePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <FooterSection/>
      </BrowserRouter>


  );
};

export default App;