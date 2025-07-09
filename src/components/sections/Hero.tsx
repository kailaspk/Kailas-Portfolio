'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kailaspk7pk@gmail.com',
      href: 'mailto:kailaspk7pk@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone (IN)',
      value: '+91 8289853656',
      href: 'tel:+918289853656'
    },
    {
      icon: Phone,
      label: 'Phone (MY)',
      value: '+60 147384551',
      href: 'tel:+60147384551'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kailas-pk',
      href: 'https://linkedin.com/in/kailas-pk'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Kailas P K
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Backend Software Engineer
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building scalable backend systems that power millions.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  "group flex flex-col items-center p-6 rounded-xl",
                  "bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm",
                  "border border-slate-200 dark:border-slate-700",
                  "hover:bg-white dark:hover:bg-slate-800",
                  "hover:border-blue-300 dark:hover:border-blue-600",
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg"
                )}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <contact.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {contact.label}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  {contact.value}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <motion.a
              href="/resume-kailas-pk.pdf"
              download
              className={cn(
                "inline-flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold",
                "hover:from-blue-700 hover:to-purple-700",
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-slate-600 dark:bg-slate-400 rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
