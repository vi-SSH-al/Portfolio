"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Study Aura- An Edtech Startup Platform",
    description:
      "StudyAura is an ed-tech platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a dynamic learning experience for students and a robust course management system for instructors.",
    image: "/images/projects/1.png",
    tags: ["All", "Web"],
    gitUrl: "https://github.com/vi-SSH-al/Study-Aura",
    previewUrl: "https://study-aura.vercel.app",
  },
  {
    id: 2,
    title: "Dev Qubes - A Next.js QnA platform",
    description:
      "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    image: "/images/projects/2.png",
    tags: ["All", "Web"],
    gitUrl: "https://github.com/vi-SSH-al/DevQubes",
    previewUrl: "https://dev-qubes.vercel.app",
  },
  {
    id: 3,
    title: "Zenpay - A next.js Trasaction App",
    description:
      "ZenPay is a transaction app using Next.js and TypeScript with secure authentication via NextAuth. It features an Express.js webhook server for real-time transaction updates, uses Prisma with PostgreSQL, and is deployed on Amazon EC2 using Docker.",
    image: "/images/projects/3.png",
    tags: ["All", "Web"],
    gitUrl: "https://github.com/vi-SSH-al/ZenPay",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "LinkCraft AI - LinkedIn Post Automation Bot",
    description:
      "LinkCraft AI, an automated bot that generates and schedules LinkedIn posts using OpenAI for content creation and the LinkedIn API for seamless posting.",
    image: "/images/projects/4.png",
    tags: ["All", "AI"],
    gitUrl: "https://github.com/vi-SSH-al/LinkCraft-AI",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
