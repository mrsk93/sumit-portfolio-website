"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "kumar.sumit9981@gmail.com",
    href: "mailto:kumar.sumit9981@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
  },
]

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      // Success
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
                  developer for your team or want to discuss a custom solution for your business, I'd love to hear from
                  you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={info.href}
                      className="flex items-center p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <CheckCircle className="text-green-600 dark:text-green-400 mr-3" size={20} />
                      <p className="text-green-700 dark:text-green-300 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <AlertCircle className="text-red-600 dark:text-red-400 mr-3" size={20} />
                      <p className="text-red-700 dark:text-red-300 font-medium">{errorMessage}</p>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
