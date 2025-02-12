import { motion } from 'framer-motion'

interface FloatingCharacterProps {
  className?: string
}

export default function FloatingCharacter({ className = '' }: FloatingCharacterProps) {
  return (
    <motion.div
      className={`fixed bottom-10 sm:bottom-20 right-10 sm:right-20 text-3xl sm:text-4xl ${className}`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      🎮
    </motion.div>
  )
}

