"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "Data Structure and Algorithms", level: 90, description: "Solved 500+ DS Algo problems on different platforms" },
    { name: "Design Patterns", level: 85, description: "Expert in C# programming" },
    { name: "Unity C#", level: 70, description: "Skilled in creating 3D and 2D games in Unity" },
    { name: "JavaScript", level: 90, description: "Experienced in making hightly engaging websites in javascript" },
    { name: "Phaser 3", level: 90, description: "Experienced in building 2D games using Phaser 3" },
    { name: "React", level: 80, description: "Experienced in making hightly engaging websites in react" },
    { name: "MySQL", level: 75, description: "Specialized in creating immersive VR experiences" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Character Attributes</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <span className="w-24">{skill.name}</span>
            <div className="flex-1 bg-green-900 rounded-full h-4">
              <motion.div
                className="bg-green-400 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.2 + 0.5 }}
              />
            </div>
            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 h-16 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredSkill ? 1 : 0 }}
      >
        {hoveredSkill && (
          <p className="text-sm text-center">{skills.find((s) => s.name === hoveredSkill)?.description}</p>
        )}
      </motion.div>
    </div>
  )
}

