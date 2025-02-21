"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

const projects = [
    {
        id: 1,
        title: "Ghost Night",
        description: "RPG game made in Unity 2D",
        images: ["/RPG_IdlePlayer.png", "/RPG_Battle.png"],
        gif: "/.gif",
    },
    {
        id: 2,
        title: "Infinit Runner",
        description:
            "3D game made in Unity.",
        images: ["/infiRunner1.png", "/infiRunner2.png", "/infiRunner3.png"],
        gif: "/tech-courses.gif",
    },
    {
        id: 3,
        title: "Crystal World Platformer Game",
        description:
            "Platformer game allows player to do various types of movements like - double jump, run, attack, etc. Includes multiple levels as level progresses the game gets more harder.",
        images: ["/platform_menu.png", "/platform_lvl1.png", "/platform_lvl2.png"],
        gif: "/crystal-world.gif",
    },
]

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [project, setProject] = useState<(typeof projects)[0] | null>(null)

    useEffect(() => {
        const projectId = Number.parseInt(id)
        const foundProject = projects.find((p) => p.id === projectId)
        setProject(foundProject || null)
    }, [id])

    if (!project) return <div>Project not found</div>

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono p-4">
            <Link href="/" className="text-green-400 hover:text-green-600">
                ← Back to Home
            </Link>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto mt-8"
            >
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="mb-8">{project.description}</p>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={400}
                                height={300}
                                className="rounded"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Gameplay</h2>
                    <Image
                        src={project.gif || "/placeholder.svg"}
                        alt={`${project.title} gameplay`}
                        width={600}
                        height={400}
                        className="rounded"
                    />
                </div>
            </motion.div>
        </div>
    )
}

