"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaBrain, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const approaches = [
    {
      icon: <FaLeaf className="text-blue-600 text-3xl mb-4" />,
      title: "Natural Environment",
      desc: "Therapy in settings where your child feels most comfortable—home, school, or our welcoming clinic—to foster natural learning."
    },
    {
      icon: <FaHeart className="text-blue-600 text-3xl mb-4" />,
      title: "Child-Led & Play-Based",
      desc: "We follow your child's motivations using play-based strategies to build engagement and joy in learning."
    },
    {
      icon: <FaBrain className="text-blue-600 text-3xl mb-4" />,
      title: "Evidence-Based ABA",
      desc: "Methods grounded in the latest autism research, tailored to your child's unique needs."
    }
  ];

  const team = [
    {
      role: "BCBA",
      bio:
        "Behviour support program for children with autism and other developmental disabilities.",
      img: "/staff-3.png"
    },
    {
      role: "Behavior Technician",
      bio: "Specializes in communication skills development for nonverbal children.",
      img: "/staff-2.png"
    },
    {
      role: "RBT in-Training",
      bio: "Specializes in communication skills development for nonverbal children.",
      img: "/staff-1.png"
    }
  ];

  return (
    <main>
      {/* Hero Section - Aligned with Homepage */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Compassionate, Individualized ABA Therapy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {/* Mirror the homepage description */}
            Our team, led by a Board-Certified Behavior Analyst, helps children with autism develop essential life skills through <span className="font-semibold">play-based ABA therapy</span>, grounded in compassion and tailored to each child's unique needs.
          </motion.p>
        </div>
      </section>

      {/* Mission Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-blue-50 p-8 rounded-xl text-center border border-blue-100 shadow-sm hover:shadow-md transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-3 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Expanded */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* References "compassionate care" from homepage */}
              The passionate professionals behind our evidence-based, compassionate care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-40 h-40 rounded-full bg-gray-100 overflow-hidden mx-auto mb-6 border-4 border-blue-100">
                  <Image
                    src={member.img}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    alt="Team Member Image"
                  />
                </div>
                <div className="text-center">

                  <p className="text-blue-600 mb-3 flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" /> {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New CTA Section - Mirrors Homepage */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Help Your Child Thrive?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our evidence-based ABA therapy can make a difference.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}