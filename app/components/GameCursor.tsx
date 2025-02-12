import { motion, MotionValue } from 'framer-motion'

interface GameCursorProps {
  x: MotionValue<number>
  y: MotionValue<number>
}

export default function GameCursor({ x, y }: GameCursorProps) {
  return (
    <motion.div
      className="w-8 h-8 bg-green-400 rounded-full fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y }}
    >
      <div className="w-2 h-2 bg-black rounded-full" />
    </motion.div>
  )
}

