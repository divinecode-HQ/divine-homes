import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '../data/projects'

import schoolImg from '../assets/images/optimized/elevation-modern-villa.png'
import crimeImg from '../assets/images/optimized/contemporary-minimalist-villa.png'
import noiseImg from '../assets/images/optimized/modern-duplex.png'
import envImg from '../assets/images/optimized/duplex-mansion.png'
import agentPlaceholder from '../assets/images/optimized/agent-placeholder.png'

function ProjectDetailsPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  const [activeImage, setActiveImage] = useState(0)
  const [activeLocationTab, setActiveLocationTab] = useState('Map')
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied!')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="mb-6">
          <Link to="/projects" className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700">
            <Icon icon="mdi:chevron-left" className="text-xl" />
            Back to Search
          </Link>

          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h1>

                {/* ✅ STATUS BADGE */}
                {project.status === 'Completed' ? (
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500">
                    <Icon icon="mdi:check" className="text-white text-sm" />
                  </span>
                ) : (
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-gray-500">
                <Icon icon="mdi:map-marker" className="text-lg text-gray-400" />
                <span className="text-xs font-semibold">{project.location}</span>
              </div>
            </div>

            {/* ✅ SHARE ONLY (SAVE REMOVED) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 shadow-sm"
              >
                <Icon icon="mdi:share-variant-outline" className="text-base" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY (UNCHANGED STRUCTURE) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3 relative group rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="w-full h-[550px] object-cover"
            />

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl text-gray-800" />
            </button>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl text-gray-800" />
            </button>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-[172px] rounded-2xl overflow-hidden ${
                  activeImage === i ? 'ring-4 ring-teal-500/30' : ''
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-10">

            {/* PROJECT META (REPLACED PRICE) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-5xl font-black text-gray-900">
                {project.category}
              </h2>

              <p className="text-gray-500 font-semibold mt-2">
                Year Completed{' '}
                <span className="text-gray-900 font-extrabold">
                  {project.yearCompleted || 'N/A'}
                </span>
              </p>
            </div>

            {/* OVERVIEW */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Overview</h3>
              <p className="text-gray-600">
                {isDescriptionExpanded
                  ? project.fullDescription
                  : project.description}
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="ml-2 text-teal-600 font-bold"
                >
                  {isDescriptionExpanded ? 'Less' : 'More'}
                </button>
              </p>
            </div>

            {/* ✅ SCOPE OF PROJECT */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Scope of Project
              </h3>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">

                {/* TOP */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon icon="mdi:shape-outline" className="text-teal-600" />
                      <span className="text-xs text-gray-400 font-bold">Category</span>
                    </div>
                    <p className="font-extrabold">{project.category}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon icon="mdi:calendar" className="text-teal-600" />
                      <span className="text-xs text-gray-400 font-bold">Year Completed</span>
                    </div>
                    <p className="font-extrabold">{project.yearCompleted}</p>
                  </div>
                </div>

                {/* SERVICES */}
                <div>
                  <h4 className="font-black mb-4">Services Rendered</h4>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.services.map((service, i) => {
                      let icon = 'mdi:tools'

                      if (service.toLowerCase().includes('wiring')) icon = 'mdi:flash'
                      if (service.toLowerCase().includes('paint')) icon = 'mdi:brush'
                      if (service.toLowerCase().includes('roof')) icon = 'mdi:home-roof'
                      if (service.toLowerCase().includes('foundation')) icon = 'mdi:home-city'

                      return (
                        <div key={i} className="flex items-center gap-2">
                          <Icon icon={icon} className="text-teal-600" />
                          <span className="text-sm font-bold">{service}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE (UNCHANGED) */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
