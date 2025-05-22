"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaBrain } from "react-icons/fa";
import Image from "next/image";

export default function About() {

  const approaches = [
    {
      icon: <FaLeaf className="text-blue-600 text-3xl mb-4" />,
      title: "Natural Environment",
      desc: "Therapy in settings where your child feels most comfortable."
    },
    {
      icon: <FaHeart className="text-blue-600 text-3xl mb-4" />,
      title: "Child-Led",
      desc: "We follow your child's motivations to encourage engagement."
    },
    {
      icon: <FaBrain className="text-blue-600 text-3xl mb-4" />,
      title: "Evidence-Based",
      desc: "Methods backed by the latest autism research."
    }
  ]

  const team = [
    {
      role: "BCBA",
      bio: "Behviour support program for children with autism and other developmental disabilities.",
      img: "/staff-3.png"
    },
    {
      role: "Behaviour Technician",
      bio: "Specializes in communication skills development for nonverbal children.",
      img: "/staff-2.png"
    },
    {
      role: "RBT in-View",
      bio: "Specializes in communication skills development for nonverbal children.",
      img: "/staff-1.png"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Therapy Center</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Where science meets compassion to empower children with autism.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {approaches.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 p-6 rounded-lg text-center"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
/*                 viewport={{ once: true }}
 */                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mx-auto md:mx-0">

                  <Image src={member.img} alt="Staff" width={100} height={100} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}