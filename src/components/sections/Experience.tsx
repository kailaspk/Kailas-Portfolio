'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'Accenture (Maybank)',
      position: 'Backend Developer',
      location: 'Kuala Lumpur, Malaysia',
      period: 'July-2024 - Present',
      description: 'Leading backend development for critical banking systems and digital payment solutions.',
      achievements: [
        'Architected and implemented Kafka + AWS-based notification engine serving 1M+ daily transactions',
        'Developed workflow engine for campaign automation reducing manual effort by 80%',
        'Built microservices using NestJS and gRPC improving system response time by 40%',
        'Designed and implemented cron jobs for streamlined campaign workflows by automating repetitive tasks, reducing manual intervention and enhancing operational efficiency'
      ],
      technologies: ['Node.js', 'NestJS', 'Kafka', 'AWS', 'Microservices architecture', 'MsSQL', 'TypeScript']
    },
    {
      company: 'Flexm Private Limited',
      position: 'Software Engineer',
      location: 'Ernakulam, Kerala, India',
      period: 'May 2022 - July 2024',
      description: 'Contributed to development and maintenance of fintech and e-payment platforms serving 1000+ global users.',
      achievements: [
        'Led a 3-member development team and collaborated with stakeholders to deliver core features using High-Level Design (HLD)',
        'Handled end-to-end development, bug fixing, and support for key modules including remittance in the FlexBank application',
        'Supported and contributed to multiple fintech products including 6G Mustafa Pay, Connect Canada, PaasPay, and Jufu Remittance',
        'Participated in deployment and configuration of live servers across international locations',
        'Collaborated with senior developers to enhance user interfaces and features using HTML, CSS, JavaScript, and TypeScript'
      ],
      technologies: ['Node.js', 'NestJS', 'MySQL', 'gRPC', 'GitLab', 'TypeORM', 'Microservices', 'JavaScript', 'TypeScript']
    },    
    {
      company: 'Nextazy Solutions Private Limited',
      position: 'Junior Software Developer',
      location: 'Chennai, India',
      period: 'October-2020 - April-2022',
      description: 'Core team member building next-generation cryptocurrency trading platform.',
      achievements: [
        'Designed and built high-frequency trading engine handling 10K+ transactions per second',
        'Implemented robust order matching system using RabbitMQ and Redis for real-time processing',
        'Developed secure wallet management system and proficiency in utilizing Binance APIs and platforms',
        'Implemented user authentication and authorization system with JWT and OAuth2',
        'Created comprehensive REST APIs for trading, portfolio management, and analytics'
      ],
      technologies: ['Node.js', 'Express.js', 'RabbitMQ', 'Redis', 'MongoDB', 'HTML5', 'WebSockets']
    }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Building scalable backend systems across fintech, banking, and cryptocurrency domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                    {/* Company Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {exp.position}
                      </h3>
                      <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * achIndex }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                            viewport={{ once: true }}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
