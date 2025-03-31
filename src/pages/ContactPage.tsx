import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 p-20">
      <div className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-6 shadow-lg border rounded-lg bg-gray-800 mt-10">
            <h3 className="text-white text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4 text-gray-300">We would love to hear from you. Reach out to us through the following channels:</p>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300"><FaPhone /> +1 234 567 890</p>
              <p className="flex items-center gap-2 text-gray-300"><FaEnvelope /> contact@company.com</p>
              <p className="flex items-center gap-2 text-gray-300"><FaMapMarkerAlt /> 123 Business St, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 shadow-lg border rounded-lg bg-gray-800 mt-10">
            <h3 className="text-white text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded bg-gray-700 text-white" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded bg-gray-700 text-white" />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded bg-gray-700 text-white" />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded bg-gray-700 text-white h-32"></textarea>
              <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
