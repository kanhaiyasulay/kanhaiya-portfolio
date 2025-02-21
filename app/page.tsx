"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Header from "./components/Header"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ProfileLinks from "./components/ProfileLinks"
import GameCursor from "./components/GameCursor"
import FloatingCharacter from "./components/FloatingCharacter"

export default function Home() {
  const [currentSection, setCurrentSection] = useState("education")
  const [showCharacter, setShowCharacter] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [isMobile, cursorX, cursorY])

  useEffect(() => {
    const timer = setTimeout(() => setShowCharacter(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono p-4 ${!isMobile && "cursor-none"}`}>
      {!isMobile && <GameCursor x={cursorXSpring} y={cursorYSpring} />}
      <Header />
      <main className="mt-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {currentSection === "education" && <Education />}
          {currentSection === "projects" && <Projects />}
          {currentSection === "skills" && <Skills />}
          {currentSection === "contact" && <Contact />}
        </motion.div>
      </main>
      <nav className="mt-8 flex flex-wrap justify-center gap-4">
        {["education", "projects", "skills", "contact"].map((section) => (
          <motion.button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`px-4 py-2 bg-green-800 rounded ${currentSection === section ? "ring-2 ring-green-400" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </nav>
      <ProfileLinks />
      {showCharacter && !isMobile && <FloatingCharacter />}
    </div>
  )
}

