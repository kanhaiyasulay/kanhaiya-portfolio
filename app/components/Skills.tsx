import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "Data Structure and Algorithms", level: 90, description: "Proficient in creating 2D and 3D games using Unity engine" },
    { name: "Design Patterns", level: 85, description: "Expert in C# programming for game development" },
    { name: "Unity C#", level: 70, description: "Skilled in creating 3D models and environments for games" },
    { name: "JavaScript", level: 90, description: "Experienced in crafting engaging game mechanics and levels" },
    { name: "React", level: 80, description: "Experienced in crafting engaging game mechanics and levels" },
    { name: "MySQL", level: 75, description: "Specialized in creating immersive VR experiences" },
  ]

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Character Attributes</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center space-x-2 sm:space-x-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <span className="w-16 sm:w-24 text-xs sm:text-sm">{skill.name}</span>
            <div className="flex-1 bg-green-900 rounded-full h-3 sm:h-4">
              <motion.div
                className="bg-green-400 h-3 sm:h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.2 + 0.5 }}
              />
            </div>
            <span className="text-xs sm:text-sm">{skill.level}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 h-16 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredSkill ? 1 : 0 }}
      >
        {hoveredSkill && (
          <p className="text-xs sm:text-sm text-center">{skills.find(s => s.name === hoveredSkill)?.description}</p>
        )}
      </motion.div>
    </div>
  )
}

