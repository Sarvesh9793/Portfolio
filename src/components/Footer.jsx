import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border pt-5 flex flex-wrap flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      {/* Left: Languages and tagline */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-xs text-muted-foreground">Languages: English, Hindi</div>
        <div className="text-sm text-muted-foreground italic">Building beautiful web experiences, one project at a time.</div>
      </div>

      {/* Center: Social links */}
      <div className="flex gap-4 items-center mb-2 md:mb-0">
        <a href="mailto:sarveshkumr333@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Email">
          <Mail size={20} />
        </a>
        <a href="https://github.com/Sarvesh9793" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sarvesh-gupta-a9222324b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>

      {/* Right: Copyright and scroll up */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
