import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-6 mt-16 px-4 md:px-8">
      <p className="text-lg font-semibold">&copy; 2025 RaphKing University London. All Rights Reserved.</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
        <a href="#" className="hover:text-gray-400">Contact Us</a>
      </div>
    </footer>
  );
};

export default FooterSection;
