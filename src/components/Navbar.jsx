import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 bg-background/80 dark:bg-background/90 backdrop-blur-md",
          isScrolled ? "py-3 shadow-xs" : "py-5"
        )}
      >
        <div className="container relative z-40 flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Sarvesh's </span>{" "}
              Portfolio
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* mobile nav toggle and theme toggle */}
          <div className="flex md:hidden items-center">
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-foreground z-50"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu - outside nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden h-screen overflow-y-auto flex flex-col items-center justify-center space-y-8 text-xl transition-all duration-300">
          {/* Close button at top right */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground z-50"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
