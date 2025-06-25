import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiVscodium, SiGithub } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: <><FaHtml5 className='text-orange-500' /> <FaCss3Alt className='text-blue-500' /></>, level: 95, category: "frontend" },
  { name: "JavaScript", icon: <FaJs className='text-yellow-400' />, level: 90, category: "frontend" },
  { name: "React", icon: <FaReact className='text-cyan-400' />, level: 90, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className='text-blue-600' />, level: 85, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className='text-sky-400' />, level: 90, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs className='text-black dark:text-white' />, level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className='text-green-600' />, level: 80, category: "backend" },
  { name: "Express", icon: <SiExpress className='text-gray-800 dark:text-white' />, level: 75, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb className='text-green-700' />, level: 70, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql className='text-blue-800' />, level: 65, category: "backend" },
  { name: "GraphQL", icon: <SiGraphql className='text-pink-500' />, level: 60, category: "backend" },
  { name: "Spring Boot", icon: <SiVscodium className='text-green-700' />, level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: <><FaGitAlt className='text-orange-600' /> <SiGithub className='text-gray-900 dark:text-white' /></>, level: 90, category: "tools" },
  { name: "Docker", icon: <FaDocker className='text-blue-400' />, level: 70, category: "tools" },
  { name: "Figma", icon: <FaFigma className='text-pink-600' />, level: 85, category: "tools" },
  { name: "VS Code", icon: <SiVscodium className='text-blue-500' />, level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Animation variants for the container and cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated grid container */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ rotateZ: 6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center justify-center card-hover min-h-[100px] text-center border border-primary/10 hover:border-primary/40 transition-colors duration-200 cursor-pointer"
            >
              <span className="mb-2 text-3xl flex justify-center items-center gap-1">{skill.icon}</span>
              <span className="font-semibold text-lg md:text-xl text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
