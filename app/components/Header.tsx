import { motion } from 'framer-motion'
import { FaGamepad } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="text-center">
      <motion.h1 
        className="text-4xl font-bold mb-2"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Kanhaiya Sulay
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, delay: 0.2 }}
      >
        <FaGamepad className="text-6xl mx-auto" />
      </motion.div>
    </header>
  )
}

