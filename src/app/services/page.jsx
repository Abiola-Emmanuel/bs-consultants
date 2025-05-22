"use client";
import { motion } from "framer-motion";
import { FaChild, FaSchool, FaUserFriends } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaChild className="text-blue-600 text-4xl mb-4" />,
      title: "ABA Therapy",
      description: "One-on-one sessions targeting behavior, communication, and social skills.",
      details: [
        "Personalized behavior plans",
        "Positive reinforcement techniques",
        "Weekly progress tracking"
      ]
    },
    {
      icon: <FaUserFriends className="text-blue-600 text-4xl mb-4" />,
      title: "Parent Training",
      description: "Equip families with tools to support their child's development at home.",
      details: [
        "Monthly workshops",
        "Customized home strategies",
        "24/7 support line"
      ]
    },
    {
      icon: <FaSchool className="text-blue-600 text-4xl mb-4" />,
      title: "School Readiness",
      description: "Collaborate with educators to create IEPs and inclusive classrooms.",
      details: [
        "IEP meeting participation",
        "Teacher training sessions",
        "Classroom behavior plans"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Evidence-based programs tailored to your child's unique needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 rounded-xl p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="text-center md:text-left">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a free initial consultation to discuss your child's needs.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-bold shadow-lg"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </main>
  );
}