import {useState} from "react";  
import marketImg from "./images/step.png";
import financeImg from "./images/finance.png";
import analyticsImg from "./images/analytics.png";
import contentImg from "./images/content.png";
import customerImg from "./images/customer.png";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "./images/Logomark.png";
import logoMark1 from "./images/Logomark1.png";
import logoMark2 from "./images/Logomark2.png";
import logoMark3 from "./images/Logomark3.png";
import contenth from "./images/Contenth.png"



const sections = [
  {
    title: "Market Prediction",
    description: "Use AI insights for smarter business decisions and stay competitive.",
    buttonText: "Learn More",
    image: marketImg,
  },
  {
    title: "Finance",
    description: "Our AI models analyze data for confident investments.",
    buttonText: "Learn More",
    image: financeImg,
  },
  {
    title: "Data Analytics",
    description: "Transform data into insights with AI analytics that enhance decisions.",
    buttonText: "Learn More",
    image: analyticsImg,
  },
  {
    title: "Content Generation",
    description: "Create quality content easy with AI that knows your brand and audience.",
    buttonText: "Learn More",
    image: contentImg,
  },
  {
    title: "Customer Support",
    description: "Use AI chat bot for instant, personalized customer support.",
    buttonText: "Learn More",
    image: customerImg,
  }
];

const companyLogos = [
  { name: 'Layers', logo: logoMark },
  { name: 'Sisyphus', logo: logoMark },
  { name: 'Circooles', logo: logoMark1 },
  { name: 'Catalog', logo: logoMark2 },
  { name: 'Quotio', logo: logoMark3 },
  { name: 'Quotio', logo: logoMark3 },
  { name: 'Quotio', logo: logoMark3 },
  
];

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
    <div className="h-[32rem] bg-gradient-to-br from-black via-[#021026] to-[#002766] text-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-12">
        <img src={contenth} />
        <div className="hidden md:flex space-x-6 relative left-25">
          {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map((item) => (
            <a key={item} href="#" className="text-white text-base hover:text-gray-300">{item}</a>
          ))}
        </div>
        <div className="flex space-x-4">
          <button className="border border-white px-4 py-2 rounded-md">Login</button>
          <button className="bg-white text-black px-4 py-2 rounded-md">Get Started Now</button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h6 className="text-blue-400 text-base">Leverage on Automation</h6>
        <h1 className="text-5xl font-bold mt-4">AI Models for <br /> Business Solutions</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-lg mt-6">Get Started Now</button>
      </section>
    </div>

    <div className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Header with Company Logos */}
      <div className="w-full text-center py-2 text-gray-500 text-sm">
        Join 4,000+ companies already growing
      </div>
      
      <div className="w-full py-4 scrollbar-none">
        <div className=" ">
          <div className="inline-flex space-x-70">
          {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src={company.logo} alt={company.name} className="w-8 h-8" />
                {/* <div className="w-6 h-6 bg-gray-200 rounded-full" /> */}
                <span className="text-lg font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 mt-6">
        <h1 className="text-4xl font-bold">AI Models tailored for your <br /> business needs</h1>
        <p className="text-lg text-gray-500 mt-2 max-w-2xl">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex space-x-3 mt-4 bg-gray-100 p-2 rounded-lg mb-8">
          {['Market Prediction', 'Finance', 'Analytics', 'Content Generation', 'Customer Support'].map((tab, index) => (
            <button
             key={index}
             onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                activeIndex === index ? "bg-[#03217F] text-white" : "bg-gray-200 text-gray-700"
              }`}
             >
               {tab}
            </button>
          ))}
        </div>
      </section>
      
      {/* Content Section */}

      <div className="overflow-hidden w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[activeIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f8fafc] w-full max-w-3xl px-5 flex h-90 mb-10 rounded-md flex-col md:flex-row items-center shadow-md relative overflow-hidden"
          >
            <div className="md:w-1/3 py-20 px-10">
              <p className="text-gray-500 text-sm font-semibold">{sections[activeIndex].title}</p>
              <p className="text-3xl font-[600] text-gray-900 mt-2 w-70">
                {sections[activeIndex].description}
              </p>
              <button className="mt-4 px-4 py-2 bg-[#03217F] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
                {sections[activeIndex].buttonText}
              </button>
            </div>
            <div className="md:w-1/2 p-6 relative left-43 top-8">
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="rounded-lg shadow-md object-cover w-full h-93"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>

    </div>
  );
};

export default App;
