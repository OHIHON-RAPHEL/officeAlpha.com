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








// {/* Tab Navigation */}
// <div className="flex space-x-3 mt-4 bg-gray-100 p-2 rounded-lg mb-8">
// {['Market Prediction', 'Finance', 'Analytics', 'Content Generation', 'Customer Support'].map((tab, index) => (
//   <button
//    key={index}
//    onClick={() => setActiveIndex(index)}
//     className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
//       activeIndex === index ? "bg-[#03217F] text-white" : "bg-gray-200 text-gray-700"
//     }`}
//    >
//      {tab}
//   </button>
// ))}
// </div>
// </section>

// {/* Content Section */}

// <div className="overflow-hidden w-full flex justify-center">
// <AnimatePresence mode="wait">
// <motion.div
//   key={sections[activeIndex].title}
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   exit={{ opacity: 0, y: -20 }}
//   transition={{ duration: 0.5 }}
//   className="bg-[#f8fafc] w-full max-w-3xl px-5 flex h-90 mb-10 rounded-md flex-col md:flex-row items-center shadow-md relative overflow-hidden"
// >
//   <div className="md:w-1/3 py-20 px-10">
//     <p className="text-gray-500 text-sm font-semibold">{sections[activeIndex].title}</p>
//     <p className="text-3xl font-[600] text-gray-900 mt-2 w-70">
//       {sections[activeIndex].description}
//     </p>
//     <button className="mt-4 px-4 py-2 bg-[#03217F] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
//       {sections[activeIndex].buttonText}
//     </button>
//   </div>
//   <div className="md:w-1/2 p-6 relative left-43 top-8">
//     <img
//       src={sections[activeIndex].image}
//       alt={sections[activeIndex].title}
//       className="rounded-lg shadow-md object-cover w-full h-93"
//     />
//   </div>
// </motion.div>
// </AnimatePresence>
// </div>
