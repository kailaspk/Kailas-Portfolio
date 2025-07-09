'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Heart, ArrowUp } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

export function Footer() {
  const { theme, setTheme } = useTheme()

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

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Kailas P K
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Backend Software Engineer passionate about building scalable systems that make a difference. 
                  Always excited to discuss new opportunities and innovative projects.
                </p>
              </div>

              <div className="flex items-center gap-3 text-slate-400 mb-4">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Based in Kuala Lumpur, Malaysia</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/kailas-pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:kailaspk7pk@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/kailas-pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Download Resume */}
              <motion.div className="mt-8">
                <motion.a
                  href="/resume-kailas-pk.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs text-slate-500">{contact.label}</div>
                      <div className="text-sm">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Ready to discuss your next project? Let&apos;s build something amazing together!
                </p>
                <motion.a
                  href="mailto:kailaspk7pk@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <span>© 2025 Kailas P K. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & TailwindCSS</span>
            </motion.div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.button>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
