import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const educationItems = [
    { 
      id: 1, 
      title: "Vishwakarma Institute of Information Technology", 
      cgpa : "8.07",
      year: "8.07/10 cgpa",
      details: "Focused on game development and computer graphics. Completed projects in Unity and Unreal Engine."
    },
    { 
      id: 2, 
      title: "Sanjivani Junior College Kopargaon, Ahmednagar", 
      year: "80.17%",
      details: "Intensive 12-week program covering advanced game design principles and industry-standard tools."
    },
    { 
      id: 3, 
      title: "Shri Sharda English Medium School, Kopargaon", 
      year: "81.6%",
      details: "Specializing in VR/AR game development and advanced AI for games."
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Education Skill Tree</h2>
      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
          >
            <FaGraduationCap className="text-2xl mb-2 sm:mb-0" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm">{item.year}</p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedItem === item.id ? 'auto' : 0,
                  opacity: expandedItem === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm">{item.details}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

