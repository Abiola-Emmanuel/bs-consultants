"use client";
import { motion } from "framer-motion";
import { FaChild, FaSchool, FaUserFriends, FaHome, FaUsers, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <FaChild className="text-blue-600 text-4xl" />,
      title: "Clinic-Based ABA Therapy",
      description: "One-on-one therapy in our nurturing clinic environment, uses reinforcement-based strategies to improve communication, social skills, and reduce challenging behaviors. Each program is tailored to meet the unique needs of every child, ensuring a personalized approach that maximizes growth and learning opportunities.",
      highlights: [
        "Individualized behavior intervention plans.",
        "Play-based learning.",
        "Daily progress tracking.",
        "Parent collaboration meetings."
      ],
      homepageQuote: "Enhances communication, play, attention, and self-help skills for children with autism."
    },
    {
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      title: "Social Skills Program",
      description: "Our weekly program aims to enhance children's peer interaction skills through structured play and collaboration in a group setting.",
      highlights: [
        "Peer interaction practice.",
        "Joint attention activities.",
        "Social cues training.",
        "Friendship-building exercises."
      ],
      homepageQuote: "Supports children's development of social skills and peer interaction."
    },
    {
      icon: <FaSchool className="text-blue-600 text-4xl" />,
      title: "School Readiness Program",
      description: "We prepare children for academic success by teaching classroom routines, foundational skills, and independence. This program aims to provide comprehensive support to children, ensuring they are well equipped to handle the challenges and expectations of school.",
      highlights: [
        "Pre academic skills.",
        "Adaptive skills training - folowing routines, self care and organization.",
        "Transition support- moving from therapy to school.",
        "Self-care skill development.",
        "Communication skills.",
        "Reducion of challenging behavior.",
      ],
      homepageQuote: "Teaches essesntial skils for school independence"
    },

    {
      icon: <FaHome className="text-blue-600 text-4xl" />,
      title: "In-Home ABA Therapy",
      description: "Therapy delivered in your child's natural environment to promote skill generalization.",
      highlights: [
        "Family-centered approach.",
        "Real-life skill practice.",
        "Behavior management at home.",
        "Parent coaching included."
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-blue-200">Evidence-Based</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {/* Direct quote from homepage */}
            "Compassionate care and a tailored approach to address the distinctive needs of every child"
          </motion.p>
        </div>
      </section>

      {/* Services List - Upgraded */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              High Quality <span className="text-blue-600">ABA Programs</span>
            </h2>
            <p className="text-lg text-gray-600">
              We provide high-quality Early intervention services based on the principles of ABA. Our programs are structured to support the development and well being of children from an early age by fostering essential skills such as communication, social interaction, and adaptive skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Added homepage reference */}
                    {service.homepageQuote && (
                      <div className="bg-blue-100/50 px-4 py-3 rounded-lg mb-4 border-l-4 border-blue-600">
                        <p className="text-blue-800 italic">"{service.homepageQuote}"</p>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex">
                          <FaChartLine className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA - Matches Homepage */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Begin Your Child's Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our evidence-based therapy can help your child thrive.
            </p>
            <div className="flex flex-wrap justify-center md:gap-4 gap-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg"
                >
                  Get Started Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="px-8 py-3  bg-white text-blue-700 border-2 border-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Learn About Our Approach
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}