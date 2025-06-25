// src/components/ExperienceSection.jsx
export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern - Clari5",
      date: "Jan 2025 – Present",
      details: [
        "Worked on an internal AI-powered chatbot using OpenAI API.",
        "Implemented secure access control with Google Auth.",
        "Used React, Node.js, and PostgreSQL for full-stack development.",
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 bg-background text-foreground"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary"> Projects </span>
      </h2>

      <div className="relative border-l-2 border-muted pl-6 ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-3 top-2 w-5 h-5 bg-primary rounded-full border-4 border-background" />

            {/* Card */}
            <div className="bg-muted rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.date}</p>
              <ul className="mt-3 list-disc list-inside">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
