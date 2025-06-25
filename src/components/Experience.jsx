// src/components/ExperienceSection.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Clari5 - A Perfios Company",
    subtitle: "SDE Intern",
    date: "Jan 2025 – Present",
    details: [
      "Working on the development of web applications using NextJS, ReactJS, Node.js, ExpressJs, and PostgreSQL.",
    ],
  },
  // Add more experiences here if needed
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-background text-foreground"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Work <span className="text-primary">Experience</span>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Long vertical center line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 transform md:-translate-x-1/2 border-l-2 border-muted" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative flex mb-16"
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 mt-2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10 transition-transform duration-300" />

              {/* Card aligned to right of the dot */}
              <div className="ml-[3.75rem] md:ml-[calc(50%+1rem)] w-full md:w-[calc(50%-2rem)]">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(80, 80, 200, 0.15)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="bg-muted rounded-xl shadow-md p-6 text-left border-2 border-primary card-hover transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-primary mb-1 group-hover:underline underline-offset-4 transition-all duration-300">{exp.title}</h3>
                  {exp.subtitle && (
                    <div className="text-base text-muted-foreground italic font-medium mb-1">{exp.subtitle}</div>
                  )}
                  <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
                  <div className="mt-3 space-y-2">
                    {exp.details.map((point, idx) => (
                      <p key={idx} className="text-base">
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
