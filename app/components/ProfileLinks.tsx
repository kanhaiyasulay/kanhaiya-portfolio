import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

export default function ProfileLinks() {
  const links = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/kanhaiya-sulay-42263a256/" },
    { icon: FaGithub, url: "https://github.com/kanhaiyasulay" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/KanhaiyaSulay333/" },
  ]

  return (
    <motion.div
      className="fixed bottom-2 sm:bottom-4 left-2 sm:left-4 flex space-x-2 sm:space-x-4"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl hover:text-green-600"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon />
        </motion.a>
      ))}
    </motion.div>
  )
}

