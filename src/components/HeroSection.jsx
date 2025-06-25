import { ArrowDown } from "lucide-react";
import ReactTypingEffect from "react-typing-effect";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sarvesh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Gupta
            </span>
          </h1>

          <div className="flex flex-row items-center justify-center gap-2 opacity-0 animate-fade-in-delay-3">
            <span className="opacity-0 animate-fade-in text-lg md:text-xl">I am a</span>
            <ReactTypingEffect
              className="text-primary text-lg md:text-2xl font-semibold"
              text={[
                "Fullstack Developer",
                "Web Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={cursor => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
              displayTextRenderer={(text, i) => <span>{text}</span>}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I craft impactful digital products with modern web technologies.<br />
            From intuitive front-ends to robust back-ends, I bring ideas to life with clean code and creative solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1APiT-1qHezrh1Rx1WTHMPo4XRfe7rs3Y/view?usp=drive_link"
              className="cosmic-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
