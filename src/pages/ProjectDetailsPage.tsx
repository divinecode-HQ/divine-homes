import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '../data/projects'

function ProjectDetailsPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  const [activeImage, setActiveImage] = useState(0)
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
{/* IMAGE GALLERY (PREMIUM REFINED) */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
  
  {/* MAIN IMAGE */}
  <div className="lg:col-span-3 relative group rounded-3xl overflow-hidden shadow-lg border border-gray-100">
    <img
      src={project.images[activeImage]}
      alt={project.title}
      className="w-full h-[550px] object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
    />

    {/* LEFT ARROW */}
    <button
      onClick={() =>
        setActiveImage((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1
        )
      }
      className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
    >
      <Icon icon="mdi:chevron-left" className="text-2xl text-gray-800" />
    </button>

    {/* RIGHT ARROW */}
    <button
      onClick={() =>
        setActiveImage((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        )
      }
      className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
    >
      <Icon icon="mdi:chevron-right" className="text-2xl text-gray-800" />
    </button>

    {/* IMAGE COUNT BADGE */}
    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
      {activeImage + 1} / {project.images.length}
    </div>
  </div>

  {/* THUMBNAILS */}
  <div className="hidden lg:flex flex-col gap-3">
    {project.images.map((img, i) => (
      <button
        key={i}
        onClick={() => setActiveImage(i)}
        className={`relative h-[170px] w-full rounded-2xl overflow-hidden transition-all duration-300 group
          ${
            activeImage === i
              ? 'ring-2 ring-teal-500 scale-[0.98]'
              : 'opacity-80 hover:opacity-100 hover:scale-[1.02]'
          }`}
      >
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* ACTIVE OVERLAY */}
        {activeImage === i && (
          <div className="absolute inset-0 bg-teal-500/10 border-2 border-teal-500 rounded-2xl" />
        )}
      </button>
    ))}
  </div>
</div>
{/* PROJECT META (TRANSFORMED FROM PRICE UI) */}
<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">

  {/* STATUS */}
  <span className="text-teal-600 font-bold text-xs flex items-center gap-2 uppercase tracking-widest">
    {project.status === 'Completed' ? (
      <>
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Completed Project
      </>
    ) : (
      <>
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        Ongoing Project
      </>
    )}
  </span>

  {/* CATEGORY (REPLACES PRICE) */}
  <div className="flex items-baseline gap-4 mt-3">
    <h2 className="text-5xl font-black text-gray-900 tracking-tight">
      {project.category}
    </h2>
  </div>

  {/* YEAR (REPLACES DOWN PAYMENT) */}
  <p className="text-gray-500 font-semibold mt-1">
    Year Completed{' '}
    <span className="text-gray-900 font-extrabold">
      {project.yearCompleted || 'N/A'}
    </span>
  </p>

  {/* METRICS (REPLACES BEDS/BATHS UI BUT CLEANED) */}
  <div className="mt-8 flex items-center gap-8 pt-8 border-t border-gray-50">

    <div className="flex items-center gap-2.5">
      <Icon icon="mdi:bed-outline" className="text-2xl text-gray-400" />
      <span className="text-sm font-bold text-gray-800">
        {project.metrics?.beds || 0} Beds
      </span>
    </div>

    <div className="flex items-center gap-2.5">
      <Icon icon="mdi:shower-outline" className="text-2xl text-gray-400" />
      <span className="text-sm font-bold text-gray-800">
        {project.metrics?.baths || 0} Baths
      </span>
    </div>

    <div className="flex items-center gap-2.5">
      <Icon icon="mdi:ruler-square" className="text-2xl text-gray-400" />
      <span className="text-sm font-bold text-gray-800">
        {project.metrics?.size || 'N/A'}
      </span>
    </div>

  </div>
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
  )
}

export default ProjectDetailsPage
