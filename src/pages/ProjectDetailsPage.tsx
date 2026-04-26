import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function ProjectDetailsPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  const [activeImage, setActiveImage] = useState(0)

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>
  }

  const isCompleted = project.status === 'Completed'

  // Related logic (improved)
  const relatedProjects = projects.filter(
    (p) =>
      p.id !== project.id &&
      p.category === project.category &&
      p.status === project.status
  )

  const handleShare = () => {
    navigator.share?.({
      title: project.title,
      url: window.location.href,
    })
  }

  return (
    <section className="bg-gray-50 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* BACK */}
        <Link
          to="/projects"
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-black"
        >
          <Icon icon="mdi:chevron-left" />
          Back to Project Page
        </Link>

        {/* HEADER */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold max-w-[70%]">
            {project.title}
          </h1>

          <button onClick={handleShare}>
            <Icon icon="mdi:share-variant" className="text-xl" />
          </button>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Icon icon="mdi:map-marker" />
          {project.location}
        </div>

        {/* IMAGE SECTION */}
        <div className="mt-6 grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden">
            <img
              src={project.images[activeImage]}
              className="w-full h-[420px] object-cover"
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
          <div className="flex lg:flex-col gap-3 overflow-x-auto">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-24 h-20 rounded-lg overflow-hidden border ${
                  activeImage === i ? 'border-gold' : ''
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* STATUS SUMMARY */}
            <div className="bg-white p-6 rounded-xl border">
              <div className="flex items-center gap-6 flex-wrap">

                {/* STATUS */}
                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      isCompleted ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="font-semibold">{project.status}</span>
                </div>

                {/* DURATION */}
                <div className="font-semibold">
                  {isCompleted
                    ? `Completed in ${project.duration}`
                    : `${project.duration} remaining`}
                </div>

                {/* YEAR */}
                <div className="text-gray-500">
                  {project.yearCompleted}
                </div>
              </div>

              {/* METRICS */}
              <div className="flex gap-6 mt-6 text-sm flex-wrap">

                {project.metrics?.bedrooms && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:bed" />
                    {project.metrics.bedrooms} Bedrooms
                  </div>
                )}

                {project.metrics?.rooms && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:floor-plan" />
                    {project.metrics.rooms} Rooms
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
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* SCOPE */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold">Scope of Projects</h3>

              <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Year Completed:</strong> {project.yearCompleted}</p>
              </div>

              {/* SERVICES */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">
                  Services Rendered
                </h4>

                <ul className="space-y-2">
                  {project.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon icon="mdi:check-circle-outline" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold">
                Location
              </h3>

              <div className="flex items-center gap-2 mt-3 text-gold">
                <Icon icon="mdi:map-marker" />
                {project.location}
              </div>
            </div>

            {/* RELATED */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">
                Related Projects
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.id}`}
                    className="block border rounded-lg overflow-hidden"
                  >
                    <img
                      src={p.images[0]}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:sticky lg:top-24 h-fit bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-lg mb-4">
              Book a Meeting
            </h3>

            <form className="space-y-4">
              <input placeholder="Name" className="w-full border p-2 rounded" />
              <input placeholder="Email" className="w-full border p-2 rounded" />
              <input placeholder="Phone Number" className="w-full border p-2 rounded" />

              <div className="flex gap-3">
                <input type="date" className="w-full border p-2 rounded" />
                <input type="time" className="w-full border p-2 rounded" />
              </div>

              <select className="w-full border p-2 rounded">
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>

              <button className="w-full bg-gold text-black py-3 rounded font-semibold">
                Schedule Meeting
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailsPage
