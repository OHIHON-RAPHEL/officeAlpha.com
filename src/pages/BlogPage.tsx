import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center p-10  rounded-lg">
      <h2 className="text-white font-bold">Latest On The Blog</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {[ 
          { title: "Blog 1", image: "/images/analytics.png" },
          { title: "Blog 2", image: "/images/content.png" },
          { title: "Blog 3", image: "/images/finance.png" }
        ].map((blog, index) => (
          <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 mt-2">Explore our latest programs designed to help you stay ahead in your career.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default BlogSection;
