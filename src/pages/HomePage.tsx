
import React from "react";
import HeroSection from "../components/HeroSection";




import WhyChoose from "../components/WhyChoose";
import BlogSection from "../components/BlogSection";

import CourseSection from "../components/CourseSection"


const HomePage: React.FC = () => {
  return (
    <div>
      
      <HeroSection />
      <WhyChoose/>
      <CourseSection/>
      <BlogSection />
    </div>
  );
};

export default HomePage;
