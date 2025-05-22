'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {

  const services = [
    {
      title: "ABA Therapy",
      description: "One-on-one sessions to improve communication, social, and behavioral skills.",
    },
    {
      title: "Parent Training",
      description: "Empowering parents with strategies to support their child’s development.",
    },
    {
      title: "School Support",
      description: "Collaborating with educators to create inclusive learning environments.",
    },
  ]

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="container mx-uto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* TagLine */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-blue-700 font-medium mb-4"
            >
              Personalized Therapy for Children with Autism
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacit: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:tex-6xl font-bold text-gray-900 mb-6"
            >
              Nurturing Growth Through <span className="text-blue-800">Education and Compassion</span>
            </motion.h1>

            {/* Subheading */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              Evidence-based ABA therapies designed to help your child thrive
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Our Therapies
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-10 blur-xl"
        />
      </section>

      {/* ABOUT SECTION  */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Behaviour Therapy
            </motion.h2>

            <p className="text-lg text-gray-600 mb-8">
              We’re a team of certified therapists dedicated to helping children with autism develop essential life skills through Applied Behaviour Analysis (ABA). Our approach is rooted in education, compassion, and individualized care.
            </p>

            <Link href="/about" className="px-6 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 inline-block">
              Learn More Abut US
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE PREVIEW SECTION */}

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>

                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="px-6 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold">Behavior Therapy</p>
              <p className="text-gray-400 mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/bandsbehaviorconsultants?igsh=MXVkN2k5OHZxZm96bw==" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/posts/abiola-ahmed-m-a-bcba-b546a034_yay-bs-consultants-is-5-we-started-bs-activity-7310797745240317953-elFn?utm_source=share&utm_medium=member_android&rcm=ACoAABynMAYBl7TAopgSBDZOAvmg9Jm0bNvxDqY " className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}