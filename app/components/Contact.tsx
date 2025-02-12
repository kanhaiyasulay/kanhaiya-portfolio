'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to a server
    console.log('Message sent:', message)
    setMessage('')
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
  }

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Send a Message</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-24 sm:h-32 bg-green-900 text-green-400 border border-green-400 rounded p-2 text-sm sm:text-base"
          placeholder="Type your message here..."
        />
        <motion.button
          type="submit"
          className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 rounded flex items-center text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane className="mr-2" />
          Send Message
        </motion.button>
      </motion.form>
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="mt-4 text-center"
          >
            <p className="text-lg sm:text-xl">Message Sent! 🎉</p>
            <p className="text-sm sm:text-base">XP +100</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

