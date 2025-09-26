'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Cloud, TestTube, GitBranch } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'React', 'Python'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Server,
      title: 'Frameworks & Runtime',
      skills: ['Node.js', 'NestJS', 'Express.js', 'Fastify'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'MsSQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Tools & Message Queues',
      skills: ['Kafka', 'RabbitMQ', 'Redis'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TestTube,
      title: 'Testing & API Tools',
      skills: ['Jest.js', 'Postman'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Version Control',
      skills: ['AWS', 'GitLab CI/CD', 'Git', 'Bitbucket', 'Jira'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive expertise across modern backend technologies and development tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: (skillIndex * 0.1) + (dotIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`w-2 h-2 rounded-full ${
                            dotIndex < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700"
              >
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${category.color} text-white`}>
                  {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-blue-200 dark:border-slate-600">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about staying current with emerging technologies and best practices. 
              Continuously expanding knowledge in cloud architecture, containerization (Docker, Kubernetes), 
              and modern development methodologies including TDD, Clean Architecture, and Domain-Driven Design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
