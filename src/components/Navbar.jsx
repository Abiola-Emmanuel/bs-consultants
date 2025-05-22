"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-xl md:text-2xl font-bold">
              B & S Consultants |
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div key={link.id} whileHover={{ y: -2 }}>
                <Link
                  href={link.path}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 flex justify-center items-center rounded-full bg-blue-700 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown (Full-screen overlay) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 pt-20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.path}
                      className="text-white text-2xl font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}