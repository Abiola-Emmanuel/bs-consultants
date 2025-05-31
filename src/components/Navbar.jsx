"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

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
      <div className="container mx-auto px-4  md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-xl md:text-2xl font-bold">
              {/* B & S Consultants | */}
              <div className="flex items-center ">
                <img src="/logo5.svg" className="w-[85px]" alt="" /> <span>| B & S Consultants </span>
              </div>
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
              {isMobileMenuOpen ? <FaTimes /> : <CiMenuFries />}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu (Slides from right) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay (click to close) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sidebar Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeInOut" }}
                className="md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50"
              >
                {/* Close Button (Top-right inside menu) */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="h-5 w-5 text-gray-700" /> {/* React Icon */}
                </button>

                {/* Menu Links */}
                <div className="flex flex-col items-start gap-4 p-6 pt-20">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * link.id }}
                      className="w-full border-b border-gray-100"
                    >
                      <Link
                        href={link.path}
                        className="block py-3 text-gray-800 hover:text-blue-700 text-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}