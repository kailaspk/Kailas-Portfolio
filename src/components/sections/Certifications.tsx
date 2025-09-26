'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

export function Certifications() {
  const certifications = [
    {
      title: 'Google IT Support Professional',
      issuer: 'Via Coursera',
      date: '2020',
      description: 'Comprehensive program covering IT fundamentals, system administration, security, networking, and troubleshooting.',
      skills: ['System Administration', 'Network Troubleshooting', 'Security Protocols', 'IT Support'],
      status: 'Verified',
      color: 'from-red-500 to-orange-500',
      logo: '🎯',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/PGJ9PB3DTUMZ?authType=google&completeMode=existingCourseraAccount&utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=prof&utm_source=ln'
    },
    {
      title: 'AWS Fundamentals',
      issuer: 'Amazon Web Services via Coursera',
      date: '2020',
      description: 'Foundational knowledge of AWS cloud services, including EC2, S3, RDS, and basic cloud architecture principles.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Scalability'],
      status: 'Verified',
      color: 'from-orange-500 to-yellow-500',
      logo: '☁️'
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'IETE Workshop',
      date: '2020',
      description: 'Hands-on workshop covering IoT fundamentals, sensor integration, data communication, and practical implementation.',
      skills: ['IoT Development', 'Sensor Networks', 'Data Communication', 'Embedded Systems'],
      status: 'Completed',
      color: 'from-blue-500 to-purple-500',
      logo: '🔗'
    }
  ]

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Committed to continuous learning and staying current with industry standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Header Gradient */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-2xl`}>
                      {cert.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className={`h-4 w-4 ${
                          cert.status === 'Verified' 
                            ? 'text-green-500' 
                            : 'text-blue-500'
                        }`} />
                        <span className={`text-xs font-semibold ${
                          cert.status === 'Verified'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                {/* Title and Issuer */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
                    Key Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block`}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg`}
                  >
                    <Award className="h-4 w-4" />
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-blue-200 dark:border-slate-600">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Professional Development
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Actively pursuing additional certifications in cloud architecture, DevOps practices, 
                and advanced backend technologies. Currently preparing for AWS Solutions Architect 
                certification and exploring Kubernetes administration credentials.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    3 Professional Certifications
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  <Award className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Continuous Learning
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
