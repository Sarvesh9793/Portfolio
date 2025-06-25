import { Code, User, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const WhatIDo = () => (
  <section className="pt-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      What I <span className="text-primary">Do</span>
    </h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="gradient-border p-8 min-h-[320px]"
        variants={cardVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xl">Web Development</h4>
            <p className="text-muted-foreground text-lg">
              Creating responsive websites and web applications with modern frameworks.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="gradient-border p-8 min-h-[320px]"
        variants={cardVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xl">UI/UX Design</h4>
            <p className="text-muted-foreground text-lg">
              Designing intuitive user interfaces and seamless user experiences.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="gradient-border p-8 min-h-[320px]"
        variants={cardVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Server className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xl">Backend Development</h4>
            <p className="text-muted-foreground text-lg">
              Building robust and scalable server-side applications and APIs.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="gradient-border p-8 min-h-[320px]"
        variants={cardVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xl">Database Management</h4>
            <p className="text-muted-foreground text-lg">
              Designing and managing efficient and secure database systems.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
); 