import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects'

function ProjectDetailsPage() {
  const { id } = useParams()

  const project = projects.find((p) => p.id === id)
  const [activeImage, setActiveImage] = useState<number>(0)

  if (project) {
    return <div className="p-10 text-center">Project not found</div>
  }

  return (
    <section className="px-6 py-12 lg:px-10">
      {/* HERO */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden">
          <img
            src={project.images[activeImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {project.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-20 w-28 rounded-lg overflow-hidden border ${
                activeImage === index
                  ? 'border-gold'
                  : 'border-transparent'
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto mt-12 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>

          <p className="mt-4 text-gray-600">{project.description}</p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* RIGHT (STICKY) */}
        <div className="lg:sticky lg:top-24 h-fit bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-4">
            Project Overview
          </h3>

          <div className="space-y-3 text-sm">
            <p><strong>Category:</strong> {project.category}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Location:</strong> {project.location}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="max-w-7xl mx-auto mt-16 bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">
          Project Details
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <p><strong>Type:</strong> {project.category}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Location:</strong> {project.location}</p>
          <p><strong>Services:</strong> {project.services.join(', ')}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 bg-charcoal text-white py-16 px-6 text-center rounded-xl">
        <h2 className="text-2xl font-bold">
          Ready to start your own project?
        </h2>

        <p className="mt-3 text-white/70">
          Let’s bring your vision to life.
        </p>

        <button className="mt-6 bg-gold text-black px-6 py-3 rounded-md font-semibold">
          Book a Consultation
        </button>
      </div>
    </section>
  )
}

export default ProjectDetailsPage
