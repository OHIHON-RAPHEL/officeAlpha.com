import React from "react";

const WhyChoose: React.FC = () => {
  return (
    <div className="text-center py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8">Why choose RaphKing University?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="max-w-xs text-center">
          <h4 className="text-xl font-semibold mt-4">Award-Winning Institution</h4>
          <p className="text-gray-600 mt-2">Recognized for excellence with multiple academic and research awards.</p>
        </div>
        <div className="max-w-xs text-center">
          <h4 className="text-xl font-semibold mt-4">Student Satisfaction</h4>
          <p className="text-gray-600 mt-2">We prioritize student success and well-being, ensuring a supportive learning environment.</p>
        </div>
        <div className="max-w-xs text-center">
          <h4 className="text-xl font-semibold mt-4">Campuses Across the UK</h4>
          <p className="text-gray-600 mt-2">With three strategic locations, we provide accessibility and top-tier education nationwide.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
