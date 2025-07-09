'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Bharathiar University',
      location: 'Coimbatore, India',
      period: '2020 - 2022',
      description: 'Advanced studies in computer science with focus on software engineering, database systems, and distributed computing.',
      highlights: [
        'Specialized in Advanced Database Management Systems',
        'Completed coursework in Distributed Systems Architecture',
        'Final project on Microservices Design Patterns',
        'Graduated with distinction'
      ],
      grade: 'First Class with Distinction',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'College of Applied Science',
      location: 'Kerala, India',
      period: '2017 - 2020',
      description: 'Comprehensive foundation in computer science fundamentals, programming languages, and software development methodologies.',
      highlights: [
        'Core studies in Data Structures and Algorithms',
        'Proficiency in Object-Oriented Programming',
        'Database Design and Management coursework',
        'Software Engineering principles and practices'
      ],
      grade: 'First Class',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="education" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strong academic foundation in computer science and software engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Header Gradient */}
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color}`}>
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                          {edu.degree}
                        </h3>
                        <div className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-3`}>
                          {edu.institution}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-600 dark:text-slate-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Grade Card */}
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${edu.color} p-6 rounded-xl text-white`}
                    >
                      <div className="text-center">
                        <div className="mb-4">
                          <GraduationCap className="h-8 w-8 mx-auto mb-2 opacity-80" />
                          <h4 className="font-semibold text-lg">Academic Performance</h4>
                        </div>
                        
                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold mb-1">
                            {edu.grade}
                          </div>
                          <div className="text-sm opacity-90">
                            Final Grade
                          </div>
                        </div>
                        
                        <div className="mt-4 text-sm opacity-90">
                          {edu.period.split(' - ')[1]} Graduate
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-blue-200 dark:border-slate-600">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Continuous Learning:</strong> Beyond formal education, actively pursuing knowledge through 
              online courses, technical conferences, and hands-on experimentation with emerging technologies 
              in the backend development ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
