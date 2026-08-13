import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-30 flex w-full justify-center px-3 py-2">
      <nav className="relative flex w-full max-w-[500px] items-center rounded-full bg-white px-5 py-6 shadow-lg">
        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const section = item.href.replace("#", "");
            const isActive = activeSection === section;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => handleNavigation(section)}
                className="relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full bg-zinc-900"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className={`relative z-10 transition-colors ${isActive ? "text-white" : "text-zinc-900 hover:text-[var(--color-accent)]"}`}>{item.label}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button type="button" className="flex items-center md:hidden" onClick={() => setIsOpen(true)} whileTap={{ scale: 0.9 }} aria-label="Open navigation menu">
          <Menu className="h-6 w-6 text-zinc-900" />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[var(--color-background)] px-6 pt-24 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            {/* Close */}
            <motion.button type="button" className="absolute right-6 top-6 p-2" onClick={() => setIsOpen(false)} whileTap={{ scale: 0.9 }} aria-label="Close navigation menu">
              <X className="h-6 w-6 text-zinc-900" />
            </motion.button>

            {/* Mobile Navigation */}
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const section = item.href.replace("#", "");
                const isActive = activeSection === section;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavigation(section)}
                    className={`rounded-full px-5 py-3 text-base font-medium ${isActive ? "bg-zinc-900 text-white" : "text-zinc-900"}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.1,
                    }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
