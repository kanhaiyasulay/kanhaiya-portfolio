import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailsProps {
  project: {
    id: number
    title: string
    description: string
    images: string[]
  }
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {project.description}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-48 sm:h-64 rounded overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${project.title} screenshot ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
          ← Back to Projects
        </Link>
      </motion.div>
    </div>
  )
}

