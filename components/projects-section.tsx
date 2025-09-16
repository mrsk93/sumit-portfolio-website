"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Marketplace",
    description:
      "A comprehensive marketplace platform with vendor management, payment integration, and advanced analytics. Built with MERN stack and integrated with multiple payment gateways.",
    image: "/modern-ecommerce-marketplace-dashboard.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Full-featured LMS with course creation, student progress tracking, video streaming, and interactive assessments. Supports multiple content formats and real-time collaboration.",
    image: "/modern-learning-management-system-interface.jpg",
    technologies: ["Angular", "Python", "Django", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered CRM",
    description:
      "Custom CRM solution with AI-driven lead scoring, automated email campaigns, and predictive analytics. Integrates with multiple third-party services and APIs.",
    image: "/ai-powered-crm-dashboard-with-analytics.jpg",
    technologies: ["Vue.js", "FastAPI", "TensorFlow", "MySQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Contentful Marketplace App",
    description:
      "Marketplace application built on Contentful CMS with headless architecture, dynamic content management, and seamless user experience across multiple platforms.",
    image: "/contentful-headless-cms-marketplace.jpg",
    technologies: ["Next.js", "Contentful", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SAAS Analytics Platform",
    description:
      "Multi-tenant SAAS platform providing advanced analytics, real-time dashboards, and automated reporting. Features role-based access control and API integrations.",
    image: "/saas-analytics-platform-dashboard.jpg",
    technologies: ["React", "Express.js", "MongoDB", "Chart.js", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "WordPress Custom Solutions",
    description:
      "Collection of custom WordPress themes and plugins for various industries including healthcare, education, and finance. Focus on performance and SEO optimization.",
    image: "/custom-wordpress-website-design.jpg",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "SCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A showcase of diverse projects spanning e-commerce, education, AI, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
