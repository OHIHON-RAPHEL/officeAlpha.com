import React from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Brown",
    role: "Web Designer",
    image: "/images/michael.jpg",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
  },
  {
    name: "John Mitchell",
    role: "Software Developer",
    image: "/images/john.jpg",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
  },
  {
    name: "Lisa Martin",
    role: "Android Developer",
    image: "/images/lisa.jpg",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
  },
];

const StaffProfilePage: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-white text-3xl font-bold">People Say</h2>
        <p className="text-gray-400 mt-2">Hear what our customers have to say about their experience with us. Real stories, real impact.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 shadow rounded-lg">
              <p className="text-lg font-serif">“{testimonial.quote}”</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffProfilePage;
