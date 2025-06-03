'use client'

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa"
import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react'
import { AnimatePresence } from 'framer-motion';



const page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/mgvkbood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaMailBulk className="w-5 h-5" />,
      url: 'mailto:abiolaahmed.b.sconsultants@gmail.com',
      handle: 'abiolaahmed.b.sconsultants@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/posts/abiola-ahmed-m-a-bcba-b546a034_yay-bs-consultants-is-5-we-started-bs-activity-7310797745240317953-elFn?utm_source=share&utm_medium=member_android&rcm=ACoAABynMAYBl7TAopgSBDZOAvmg9Jm0bNvxDqY s',
      handle: 'Abiola Ahmed'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/bandsbehaviorconsultants?igsh=MXVkN2k5OHZxZm96bw== ',
      handle: '@bandsbehaviorconsultants'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <section
        className="container mx-auto px-6 py-20 "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Positively Impacting Lives Of Children Living With Autism And Other Developmental Disabilities</h1>

          <p className="text-lg md:text-xl text-gray-900 max-w-2xl mx-auto">Evidence based intervention</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Send />
              Send a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300  bg-transparent focus:ring-2 focus:ring-black  focus:border-transparent"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="emil" className="block text-sm font-medium mb-2 text-gray-700 ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-black  focus:border-transparent"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="emil" className="block text-sm font-medium mb-2 text-gray-700 ">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder=" What program would you like to enroll your child in?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-black  text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className='w-4 h-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className='w-4 h-4' />
                  </>
                )}

              </motion.button>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-green-800 text-green-100 dark:text-green-200 rounded-lg"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-red-100  text-red-800  rounded-lg"
                >
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us Online</h2>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    href={social.url}
                    target="blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group:"
                  >
                    <div className="p-2 rounded-full bg-gray-100group-hover:bg-black transition-colors">
                      {social.icon}
                    </div>

                    <div>
                      <h3 className="font-medium">{social.name}</h3>

                      <p className="text-sm text-gray-600 ">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-8 border-t border-gray-200 "
            >
              <h3 className="text-lg font-medium mb-4">Based In</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-100  flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-black "
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Saskatoon, Canada</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default page
