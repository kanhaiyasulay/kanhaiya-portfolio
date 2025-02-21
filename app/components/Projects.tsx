"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import Link from "next/link"

export default function Projects() {
  const [gameScore, setGameScore] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Ghost Night",
      description: <p>
        A 2D RPG game made in unity <br />
        Allows player to move in the real world scenerio <br/>
        Includes enemies with the advance Enemy AI <br/>
        Allows player to kill ghost enemies, with the multiple attacking styles<br/>
        Includes a dedicated inventory system
      </p>

    },
    {
      id: 2,
      title: "Infinite Runner",
      description: <p>3D game made in Unity <br/> Allows player to enjoy the infinite challanges<br /> Tracks the score and increments the health on each pickup</p>
    },
    {
      id: 3,
      title: "Cristal World Platformer Game",
      description: <p>
        Platformer game allows player to do various types of movements like - double jump, run, attack, etc. <br />
        Includes multiple levels as level progresses the game gets more harder
      </p>
    }
  ]

  const handleStarClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setGameScore((score) => score + 1)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Project Levels</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <motion.div
              className="border border-green-400 p-4 rounded cursor-pointer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold flex items-center">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleStarClick}>
                  <FaStar className="mr-2 cursor-pointer" />
                </motion.div>
                Level {index + 1}: {project.title}
              </h3>
              <p>{project.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>Mini-Game Score: {gameScore}</p>
        <p className="text-sm">Click the stars to increase your score!</p>
      </motion.div>
    </div>
  )
}

