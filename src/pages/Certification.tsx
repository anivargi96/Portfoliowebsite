import React from "react";

const Certification: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft (2023)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_Azure_logo.svg/1200px-Microsoft_Azure_logo.svg.png",
      description: "Validates foundational knowledge of cloud services and how they are provided with Microsoft Azure."
    },
    {
      title: "Java Full Stack Development",
      issuer: "Accenture & TNSIF (2024)",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      description: "Comprehensive training on Java, Spring Boot, HTML, CSS, JavaScript, and full stack development."
    },
    {
      title: "AI & Cloud Internship",
      issuer: "Edunet Foundation - IBM (2024)",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      description: "Practical internship experience on AI, machine learning, and cloud technologies."
    },
    {
      title: "Microsoft Azure Hackathon Finalist",
      issuer: "Skill Development Program (2024)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_Azure_logo.svg/1200px-Microsoft_Azure_logo.svg.png",
      description: "Recognized as a finalist in a Microsoft Azure Hackathon for innovative cloud solutions."
    },
    {
      title: "NLP, Java Full Stack, MongoDB & Python",
      issuer: "Great Learning",
      img: "https://miro.medium.com/max/1400/1*dl1o0dS5lWIEjXj3v4zLwQ.png",
      description: "Completed training in NLP, full stack development with Java, MongoDB, and Python."
    }
  ];

  return (
    <section id="certification" className="py-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">Certifications</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img src={cert.img} alt={cert.title} className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500 object-cover" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{cert.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
