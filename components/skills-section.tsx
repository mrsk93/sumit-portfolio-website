"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Nuxt.js",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "FastAPI",
      "PHP",
      "Laravel",
      "Golang",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Langchain",
      "Computer Vision",
      "NLP",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "CMS & E-commerce",
    skills: [
      "WordPress",
      "Contentful",
      "Strapi",
      "Shopify",
      "WooCommerce",
      "Magento",
      "Custom CRM",
      "Payment Integration",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "GitLab", "CI/CD", "Jest", "Cypress", "Webpack", "Vite", "Linux", "Nginx"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
