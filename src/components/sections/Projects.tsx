'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Workflow Engine',
      subtitle: 'Campaign Automation System',
      description: 'Flexible workflow engine for automating complex business processes and marketing campaigns. Features drag-and-drop workflow designer and real-time execution monitoring.',
      features: [
        'Visual workflow designer',
        'Conditional logic and branching',
        'Schedule-based triggers',
        'Integration with external APIs',
        'Real-time execution monitoring'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'AWS Lambda', 'GraphQL', 'TypeScript'],
      timeline: '2024 - Present',
      team: 'Platform Team (6 developers)',
      status: 'Development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Maybank Notification Engine',
      subtitle: 'Enterprise Messaging System',
      description: 'Scalable notification engine serving millions of banking customers with real-time alerts, transaction notifications, and marketing campaigns. Built with Kafka for high throughput and AWS for reliability.',
      features: [
        'Multi-channel notifications (SMS, Email, Push)',
        'Real-time transaction alerts',
        'Campaign automation workflow',
        'A/B testing for marketing messages',
        'Delivery tracking and analytics'
      ],
      technologies: ['Kafka', 'AWS', 'Node.js', 'NestJS', 'MySQL', 'Redis', 'TypeScript'],
      timeline: '2024 - Present',
      team: 'Backend Team (8 developers)',
      status: 'Production',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Nexfolio',
      subtitle: 'Cryptocurrency Trading Platform',
      description: 'High-performance crypto trading platform with real-time order matching, portfolio management, and advanced trading features. Built to handle thousands of concurrent users and high-frequency trading.',
      features: [
        'Real-time order matching engine',
        'Multi-currency wallet system',
        'Advanced charting and analytics',
        'Automated trading bots integration',
        'Secure custody solutions'
      ],
      technologies: ['Node.js', 'RabbitMQ', 'Redis', 'MongoDB', 'WebSockets', 'TypeScript'],
      timeline: '2020 - 2022',
      team: 'Core Team (5 developers)',
      status: 'Production',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Ravena Wallet',
      subtitle: 'Cryptocurrency Holding Wallet',
      description: 'Secure digital wallet for storing and managing multiple cryptocurrencies. Features include multi-signature support, cold storage integration, and comprehensive transaction history.',
      features: [
        'Support for 15+ cryptocurrencies',
        'Multi-signature security',
        'Cold storage integration',
        'Transaction history and analytics',
        'Mobile app API backend'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Blockchain APIs', 'Docker'],
      timeline: '2020 - 2022',
      team: 'Full-stack Team (3 developers)',
      status: 'Production',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcasing impactful backend systems and platforms built for scale and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Title and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.subtitle}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Production' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{project.team}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </motion.button>
                  
                  {project.status === 'Production' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      Case Study
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
