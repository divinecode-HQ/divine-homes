import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '../data/projects'

function ProjectDetailsPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  const [activeImage, setActiveImage] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>
  }

  const isCompleted = project.status === 'Completed'

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* BACK */}
        <Link
          to="/projects"
          className="flex items-center text-sm font-medium text-teal-600 mb-6"
        >
          <Icon icon="mdi:chevron-left" className="text-xl" />
          Back to Projects
        </Link>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-gray-900">
                {project.title}
              </h1>

              {/* STATUS BADGE */}
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white animate-pulse'
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <Icon icon="mdi:map-marker" />
              <span className="text-sm font-medium">{project.location}</span>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid lg:grid-cols-4 gap-4 mb-10">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden">
            <img
              src={project.images[activeImage]}
              className="w-full h-[500px] object-cover"
            />

            {/* ARROWS */}
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" />
            </button>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-right" />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex lg:flex-col gap-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-24 rounded-lg overflow-hidden border ${
                  activeImage === i ? 'border-teal-600' : 'border-transparent'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">

            {/* SUMMARY */}
            <div className="bg-white p-6 rounded-xl border">
              <div className="flex flex-wrap gap-6 text-sm">

                <div className="font-semibold">
                  {isCompleted
                    ? `Completed in ${project.duration}`
                    : `${project.duration}`}
                </div>

                <div className="text-gray-500">
                  {project.yearCompleted}
                </div>
              </div>

              {/* METRICS */}
              <div className="flex gap-6 mt-6 text-sm flex-wrap">
                {project.metrics?.beds && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:bed" />
                    {project.metrics.beds} Beds
                  </div>
                )}

                {project.metrics?.baths && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:shower" />
                    {project.metrics.baths} Baths
                  </div>
                )}

                {project.metrics?.kitchens && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:silverware-fork-knife" />
                    {project.metrics.kitchens} Kitchens
                  </div>
                )}

                {project.metrics?.size && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:ruler-square" />
                    {project.metrics.size}
                  </div>
                )}
              </div>
            </div>

            {/* OVERVIEW */}
            <div>
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {isExpanded
                  ? project.fullDescription || project.description
                  : (project.fullDescription || project.description).slice(0, 150) + '...'}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-2 text-teal-600 font-semibold"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Services Rendered
              </h3>

              <ul className="space-y-2">
                {project.services.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle-outline" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* LOCATION */}
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <div className="flex items-center gap-2 mt-2 text-teal-600">
                <Icon icon="mdi:map-marker" />
                {project.location}
              </div>
            </div>
          </div>

          {/* RIGHT - YOUR CUSTOM CARD */}
          <div className="bg-white p-6 rounded-xl border h-fit sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Start Your Project
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Ready to build something like this? Let’s bring your vision to life.
            </p>

            <Link
              to="/#book-a-meeting"
              className="block w-full text-center bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
