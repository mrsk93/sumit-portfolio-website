"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "MERN/MEAN stack expertise with modern frameworks and libraries",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable and robust backend architectures with Python and Node.js",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing AI solutions and machine learning capabilities",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "PHP, WordPress, and exploring Golang ecosystem",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative solutions and staying at the forefront of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a dedicated Full Stack Developer with over 4 years of experience building comprehensive web
                solutions. My journey spans across multiple domains including
                <span className="text-primary font-medium">
                  {" "}
                  Portfolio projects, SAAS platforms, Learning Management Systems, E-Commerce sites, Custom CRM
                  solutions, and Marketplace Applications
                </span>
                .
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in the <span className="text-primary font-medium">MERN/MEAN stack</span>, with
                extensive experience in <span className="text-primary font-medium">Python development and AI integration </span>. My passion lies in building scalable,
                robust backend systems while staying current with trending technologies and state-of-the-art tools.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently exploring the <span className="text-primary font-medium">Golang ecosystem </span>
                and continuously learning new technologies to deliver cutting-edge solutions for complex business
                challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <highlight.icon className="text-primary" size={20} />
                      </div>
                      <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
