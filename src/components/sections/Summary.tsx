'use client'

import { motion } from 'framer-motion'
import { Code, Server, Database, Zap } from 'lucide-react'

export function Summary() {
  const highlights = [
    {
      icon: Code,
      title: '5+ Years',
      description: 'Backend Development Experience'
    },
    {
      icon: Server,
      title: 'Microservices',
      description: 'Node.js & TypeScript Expert'
    },
    {
      icon: Database,
      title: 'Banking & Fintech',
      description: 'E-payments & P2P Systems'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Scalable System Architecture'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Passionate Backend Software Engineer with <strong>5 years of experience </strong> 
              specializing in building robust, scalable systems using <strong>Node.js</strong> and 
              <strong> TypeScript</strong>. Expert in designing and implementing microservices 
              architectures that power mission-critical applications.
            </p>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Proven track record in the <strong>fintech industry</strong>, with deep expertise 
              in e-payments, P2P transactions, and cryptocurrency platforms. Skilled at 
              architecting high-performance systems that handle millions of transactions 
              while maintaining security and reliability.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Experienced with modern technologies including Kafka, AWS, Redis, and various 
              database systems. Strong believer in clean code, test-driven development, 
              and continuous integration practices.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
