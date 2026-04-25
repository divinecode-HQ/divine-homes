import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

// Import a high-quality construction background image
import heroBg from '../assets/images/optimized/elevation-modern-villa.png'

const CATEGORIES = ['All', 'Building Construction', 'Residential Construction', 'Luxury Construction', 'Renovation']

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter out the "View More" card from the main projects data if it exists
  const displayProjects = useMemo(() => {
    return projects.filter(p => !p.isMoreCard && 
      (activeCategory === 'All' || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       p.location.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }, [activeCategory, searchQuery])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-950/80 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Showcasing Our <br />
            <span className="text-teal-400">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-teal-100/80 text-lg md:text-xl leading-relaxed font-medium"
          >
            Explore our diverse portfolio of residential and commercial projects. From foundation to finishing, we deliver excellence in every build.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-24 relative z-20">
        {/* FILTERS & SEARCH - Adjusted z-index and spacing to prevent overlapping issues */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 -mt-16 mb-12 border border-gray-100 relative z-30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-200 -translate-y-1'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative group min-w-[300px]">
              <Icon 
                icon="mdi:magnify" 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors text-xl" 
              />
              <input 
                type="text" 
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-500/20 focus:bg-white outline-none transition-all font-medium text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <AnimatePresence mode="popLayout">
          {displayProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          project.status === 'Completed' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-orange-500 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Hover Action */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Link 
                          to={`/projects/${project.id}`}
                          className="bg-white text-teal-900 px-8 py-3 rounded-2xl font-black text-sm shadow-xl hover:bg-teal-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-teal-600 text-[10px] font-black uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-lg">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 mb-6">
                        <Icon icon="mdi:map-marker" className="text-lg text-gray-400" />
                        <span className="text-xs font-bold">{project.location}</span>
                      </div>

                      {/* Quick Metrics */}
                      <div className="mt-auto pt-6 border-t border-gray-50 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Beds</p>
                          <p className="text-sm font-black text-gray-900">{project.metrics?.beds || '-'}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Baths</p>
                          <p className="text-sm font-black text-gray-900">{project.metrics?.baths || '-'}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Area</p>
                          <p className="text-sm font-black text-gray-900">{project.metrics?.size || '-'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-white rounded-[32px] border border-dashed border-gray-200"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon icon="mdi:home-search-outline" className="text-4xl text-gray-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500 font-medium">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('')}}
                className="mt-6 text-teal-600 font-black hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-teal-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Have a Project in Mind?
            </h2>
            <p className="text-teal-100/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Whether it's a dream home, a commercial complex, or a renovation, our team is ready to bring your vision to life with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/#book-a-meeting"
                className="w-full sm:w-auto px-10 py-5 bg-teal-400 text-teal-900 rounded-2xl font-black shadow-xl hover:bg-teal-300 transition-all transform hover:-translate-y-1"
              >
                Book a Meeting
              </Link>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all">
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
