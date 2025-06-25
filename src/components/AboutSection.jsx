import { Briefcase, Code, User } from "lucide-react";
import { WhatIDo } from "./WhatIDo";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Card */}
        <div className="bg-muted rounded-2xl shadow-lg p-10 text-center space-y-6 mb-12">
          <h3 className="text-3xl font-semibold">
            Passionate Web Developer & Tech Creator
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web technologies. With a strong foundation in both frontend and backend development, I create seamless, responsive, and user-friendly applications that solve real-world problems.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            My journey in web development started with a curiosity about how things work on the internet, which led me to explore various technologies and frameworks. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            {/* Primary Button */}
            <a
              href="#contact"
              className="bg-primary text-background px-6 py-2 rounded-full shadow hover:bg-primary/90 transition duration-300 font-medium"
            >
              Get In Touch
            </a>

            {/* Outlined Button */}
            <a
              href="https://drive.google.com/file/d/1APiT-1qHezrh1Rx1WTHMPo4XRfe7rs3Y/view?usp=drive_link"
              className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition duration-300 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>

        <WhatIDo />
      </div>
    </section>
  );
};
