"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CyclingTypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  delay?: number
}

export function CyclingTypingAnimation({
  texts,
  className = "",
  typingSpeed = 30,
  deletingSpeed = 20,
  pauseDuration = 2000,
  delay = 0,
}: CyclingTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = texts[currentTextIndex]

    const timer = setTimeout(
      () => {
        if (isTyping) {
          // Typing phase
          if (displayedText.length < currentText.length) {
            setDisplayedText(currentText.slice(0, displayedText.length + 1))
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsTyping(false), pauseDuration)
          }
        } else {
          // Deleting phase
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            // Finished deleting, move to next text
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            setIsTyping(true)
          }
        }
      },
      delay + (isTyping ? typingSpeed : deletingSpeed),
    )

    return () => clearTimeout(timer)
  }, [displayedText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration, delay])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      className={className}
    >
      {displayedText}
      <span
        className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      />
    </motion.span>
  )
}
