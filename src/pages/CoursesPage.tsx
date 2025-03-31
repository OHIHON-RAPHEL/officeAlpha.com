import React from "react";

interface Course {
  title: string;
  instructor: string;
  image: string;
  students: number;
  duration: string;
  price: string;
}

const courses: Course[] = [
  {
    title: "Data Science",
    instructor: "Susan Taylor",
    image: "/images/finance.png",
    students: 113,
    duration: "6 Months",
    price: "$99.00",
  },
  {
    title: "Psychology",
    instructor: "Michael Brown",
    image: "/images/analytics.png",
    students: 150,
    duration: "6 Months",
    price: "$99.00",
  },
  {
    title: "Economics",
    instructor: "John Mitchell",
    image: "/images/finance.png",
    students: 140,
    duration: "6 Months",
    price: "$99.00",
  },
  {
    title: "Biology",
    instructor: "Lisa Martin",
    image: "/images/analytics.png",
    students: 170,
    duration: "6 Months",
    price: "$99.00",
  },
];

const CoursesPage: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 p-20">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-white text-3xl font-bold">Our Popular Courses</h2>
        <p className="text-gray-400 mt-2">Discover a variety of courses to enhance your knowledge and skills.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {courses.map((course) => (
            <div key={course.title} className="bg-white p-4 shadow rounded-lg">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-2 font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-500">{course.instructor}</p>
              <div className="flex justify-between text-sm mt-2">
                <span>👨‍🎓 {course.students}</span>
                <span>📅 {course.duration}</span>
              </div>
              <span className="block mt-2 text-blue-500 font-bold">{course.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
