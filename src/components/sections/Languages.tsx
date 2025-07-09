'use client'

import { motion } from 'framer-motion'
import { Globe, MessageCircle } from 'lucide-react'

export function Languages() {
  const languages = [
    {
      language: 'English',
      proficiency: 'Fluent',
      level: 5,
      description: 'Professional working proficiency with excellent written and verbal communication skills.',
      flag: '🇺🇸',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      language: 'Malayalam',
      proficiency: 'Proficient',
      level: 5,
      description: 'Native language with complete fluency in speaking, reading, and writing.',
      flag: '🇮🇳',
      color: 'from-orange-500 to-red-500'
    },
    {
      language: 'Tamil',
      proficiency: 'Advanced',
      level: 4,
      description: 'Strong conversational and professional communication abilities.',
      flag: '🇮🇳',
      color: 'from-green-500 to-emerald-500'
    },
    {
      language: 'Hindi',
      proficiency: 'Intermediate',
      level: 3,
      description: 'Good conversational skills with basic reading and writing capabilities.',
      flag: '🇮🇳',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const getProficiencyWidth = (level: number) => {
    return `${(level / 5) * 100}%`
  }

  return (
    <section id="languages" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Multilingual communication skills enabling effective collaboration across diverse teams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Header Gradient */}
              <div className={`h-2 bg-gradient-to-r ${lang.color}`}></div>
              
              <div className="p-6">
                {/* Language Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{lang.flag}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {lang.language}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${lang.color} bg-clip-text text-transparent`}>
                        {lang.proficiency}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 * starIndex }}
                          viewport={{ once: true }}
                          className={`w-3 h-3 rounded-full ${
                            starIndex < lang.level
                              ? `bg-gradient-to-r ${lang.color}`
                              : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {lang.level}/5
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {lang.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Proficiency Level
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {lang.proficiency}
                    </span>
                  </div>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getProficiencyWidth(lang.level) }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${lang.color}`}
                    />
                  </div>
                </div>

                {/* Skills Badge */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <MessageCircle className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Professional Communication
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Communication Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-blue-200 dark:border-slate-600">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Global Communication
                </h3>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
                Multilingual abilities enable seamless communication with international teams, 
                clients, and stakeholders. Experience working in diverse cultural environments 
                across India, Singapore, and Malaysia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl mb-2">🌏</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Cross-Cultural
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Team Collaboration
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl mb-2">💼</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Professional
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Business Communication
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Client Relations
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    International Projects
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
