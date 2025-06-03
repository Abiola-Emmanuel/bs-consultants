'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaChild, FaUsers, FaSchool } from "react-icons/fa";

export default function Hero() {

  const services = [
    {
      icon: <FaChild className="text-blue-600 mx-auto text-3xl mb-4" />,
      title: "Clinic-Based ABA Therapy ",
      description: " One on one ABA therapy provided in a supportive and nurturing environment, using reinforcement-based strategies to enhance communication skills, play and leisure skills, attention and focus, imitation skills, gross and fine motor skills, self help skills and reduction of challenging behaviors in children with autism and other developmental disorders.",
    },
    {
      icon: <FaUsers className="text-blue-600 mx-auto text-3xl mb-4" />,
      title: "Social Skills Program",
      description: "A weekly program aimed at helping children quickly develop social skills, interact better with peers, and increase their overall social competence. Children practice in a supportive environment that promotes social engagement, sharing, turn-taking, joint attention, understanding social cues and collaboration. Group sessions help generalize social skills and build friendships.",
    },
    {
      icon: <FaSchool className="text-blue-600 mx-auto text-3xl mb-4" />,
      title: "School Readiness Program",
      description: "Based on Applied Behavior Analysis (ABA), designed to help children develop the skills necessary for success in a school environment. These programs teach daily living skills that children need to be independent in a school setting, such as following routines, self-care, organization, reducing problem behavior, building foundational academic skills, transition support.",
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

            {/* Main Heading */}
            <motion.h1
              initial={{ opacit: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:tex-6xl font-bold text-gray-900 mb-6 line-he"
            >
              Applied Behaviour Analysis Therapy for children living With Autism And Other Developmental Disablities.
            </motion.h1>

            {/* Subheading */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              Facilitating growth and development through compassionate <span className="text-blue-800">care </span> and a tailored approach to address the distinctive needs of every child.
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
                Our Services
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
              About Us
            </motion.h2>

            <p className="text-lg text-gray-600 mb-8">
              Our team of professionals, led by a Board-Certified Behavior Analyst, is dedicated to assisting children with autism and other developmental disabilities in acquiring essential life skills that improve their quality of life through Applied Behaviour Analysis (ABA). Our approach is play-based and grounded in the principles of Applied Behavior Analysis, compassion, and individualized care.
            </p>

            <Link href="/about" className="px-6 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 inline-block">
              Learn More
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
                {service.icon}
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
              <p className="text-xl font-bold">B & S Consultants</p>
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