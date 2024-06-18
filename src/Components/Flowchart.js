import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const benefits = [
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Engaging Learning",
    description: "Interactive classes to captivate students."
  },
  {
    icon: "fas fa-business-time",
    title: "Business-Oriented",
    description: "Solutions designed to solve real business problems."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Data Security",
    description: "Top-notch data protection measures in place."
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Insight",
    description: "Tools that enhance understanding of data."
  },
  {
    icon: "fas fa-robot",
    title: "Advanced Tools",
    description: "Access to cutting-edge machine learning applications."
  },
  {
    icon: "fas fa-laptop-code",
    title: "Hassle-Free Setup",
    description: "No need for a complex development environment."
  },
  {
    icon: "fas fa-universal-access",
    title: "Easy Access",
    description: "Seamlessly log in and launch ML applications."
  },
  {
    icon: "fas fa-chalkboard",
    title: "Expert Guidance",
    description: "Classes managed by experienced instructors."
  },
  {
    icon: "fas fa-lock",
    title: "Secure Environment",
    description: "Enjoy a safe and secure learning experience."
  },
  {
    icon: "fas fa-eye",
    title: "Performance Monitoring",
    description: "Keep track of class progress and performance."
  },
  {
    icon: "fas fa-tasks",
    title: "Activity Tracking",
    description: "Monitor user activities and assignment progress."
  },
  {
    icon: "fas fa-code",
    title: "No Coding Needed",
    description: "Analyze data without writing a single line of code."
  },
];

const Flowchart = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 mt-12 ">
      <div className="text-center py-2 mt-2">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-[#25d366]">Why Choose Our Tools</h2>
        <p className="text-lg text-gray-600">Discover the advantages of our advanced machine learning solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 py-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 h-12 p-4 bg-black border text-white rounded-full flex items-center justify-center mr-4">
              <i className={benefit.icon}></i>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#25d366]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowchart;
