import React from "react";

const CourseSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-semibold text-gray-800">2024 Start Courses</h2>
          <p className="text-gray-600 mt-4">
            Kickstart your learning journey with our comprehensive courses designed to help you succeed in 2024.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/images/customer.png" 
            alt="Student Studying"
            className="rounded-lg w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
