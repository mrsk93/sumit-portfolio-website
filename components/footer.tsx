"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Sumit Kumar Chalotra</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty">
              Building the future, bringing ideas to life, <br/> one line of code at a time. 
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/mrsk93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sumit-chalotra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kumar.sumit9981@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Crafted with lots of
              <Heart size={16} className="text-primary" fill="currentColor" />
              © {currentYear} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
