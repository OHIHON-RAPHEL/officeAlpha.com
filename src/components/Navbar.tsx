import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-6 text-white z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <img src="/images/Contenth.png" alt="Logo" className="h-8 mr-2" />
          <span className="font-bold text-2xl">RaphKing University London</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Home</a>
          <a href="/courses" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Our Courses</a>
          <a href="/staff" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Staff</a>
          <a href="/contact" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Get in Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black p-4 flex flex-col items-start space-y-2 rounded shadow-lg">
              <a href="/" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Home</a>
              <a href="/courses" onClick={() => setIsOpen(false)} className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Our Courses</a>
              <a href="/staff" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Staff</a>
              <a href="/contact" className="hover:underline text-white no-underline hover:text-gray-300 block py-2">Get in Touch</a> 
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
