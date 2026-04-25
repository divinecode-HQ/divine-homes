import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '../data/projects'

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
    navigator.share?.({
      title: project.title,
      url: window.location.href,
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* HEADER SECTION */}
        <div className="mb-6">
          <Link
            to="/projects"
            className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            <Icon icon="mdi:chevron-left" className="text-xl" />
            Back to Search
          </Link>

          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h1>
                <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                  Sale
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-gray-500">
                <Icon icon="mdi:map-marker" className="text-lg text-gray-400" />
                <span className="text-xs font-semibold">{project.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
              >
                <Icon icon="mdi:share-variant-outline" className="text-base" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                <Icon icon="mdi:bookmark-outline" className="text-base" />
                Save
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY */}
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
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all opacity-0 group-hover:opacity-100 scale-90 hover:scale-100"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl text-gray-800" />
            </button>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all opacity-0 group-hover:opacity-100 scale-90 hover:scale-100"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl text-gray-800" />
            </button>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            {project.images.slice(0, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative h-[172px] w-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                  activeImage === i ? 'ring-4 ring-teal-500/30 scale-[0.98]' : 'hover:scale-[1.02]'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
            {project.images.length > 3 && (
              <button className="relative h-[172px] w-full rounded-2xl overflow-hidden group shadow-md hover:scale-[1.02] transition-transform">
                <img
                  src={project.images[3]}
                  className="w-full h-full object-cover blur-[1px]"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all">
                  <span className="text-white font-bold text-2xl">
                    +{project.images.length - 3}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            {/* PRICE & BASIC INFO */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-blue-600 font-bold text-xs flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  For sale
                </span>
                <div className="flex items-baseline gap-4 mt-3">
                  <h2 className="text-5xl font-black text-gray-900 tracking-tight">
                    {project.price || '$1,13,200'}
                  </h2>
                </div>
                <p className="text-gray-500 font-semibold mt-1">
                  Down payment <span className="text-gray-900 font-extrabold">{project.downPayment || '$20,216'}</span>
                </p>
              </div>

              <div className="mt-8 flex items-center gap-8 pt-8 border-t border-gray-50">
                <div className="flex items-center gap-2.5">
                  <Icon icon="mdi:bed-outline" className="text-2xl text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">{project.metrics?.beds || 0} Bed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon icon="mdi:shower-outline" className="text-2xl text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">{project.metrics?.baths || 0} Bath</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon icon="mdi:ruler-square" className="text-2xl text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">{project.metrics?.size || '0'}</span>
                </div>
              </div>
            </div>

            {/* OVERVIEW */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Overview</h3>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed text-base font-medium">
                  {isDescriptionExpanded 
                    ? (project.fullDescription || project.description)
                    : ((project.fullDescription || project.description).slice(0, 150) + '...')}
                  <button 
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="ml-2 text-teal-600 font-extrabold hover:text-teal-700 hover:underline transition-colors"
                  >
                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </p>
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:home-outline" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Type</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.type || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:hand-coin-outline" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">HOA</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.hoa || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:calendar-outline" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Building Year</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.buildingYear || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:city-variant-outline" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Outside</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.outside || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:sprout-outline" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Garden</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.garden || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon icon="mdi:parking" className="text-2xl text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Parking</p>
                    <p className="text-sm font-extrabold text-gray-900">{project.highlights?.parking || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCATION INFORMATION */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Location Information</h3>
              <div className="space-y-6">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {['Map', 'School', 'Shop & Restaurant', 'Commute location'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveLocationTab(tab)}
                      className={`px-6 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-300 ${
                        activeLocationTab === tab
                          ? 'bg-teal-600 text-white shadow-lg shadow-teal-200 translate-y-[-2px]'
                          : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50 hover:text-gray-700 shadow-sm'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="h-[450px] w-full rounded-[32px] overflow-hidden shadow-xl border border-gray-100 relative group bg-gray-100">
                  {/* Map Fallback/Placeholder since API key might not be available */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 border-4 border-teal-500/20">
                      <Icon icon="mdi:map-marker-radius" className="text-4xl text-teal-600" />
                    </div>
                    <h4 className="text-gray-900 font-black text-xl mb-2">{project.location}</h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                      Detailed location map for {project.title}. 
                      <span className="block mt-2 text-xs font-bold text-teal-600 uppercase tracking-widest cursor-pointer hover:underline">Open in Google Maps</span>
                    </p>
                  </div>
                  
                  {/* Real iframe - only visible if API key is provided */}
                  <iframe
                    title="location map"
                    src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${encodeURIComponent(
                      project.location
                    )}`}
                    className="w-full h-full border-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* LOCAL INFORMATION */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Local Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'School', value: project.localInfo?.school || 'N/A', icon: 'mdi:school', img: '/src/assets/images/optimized/elevation-modern-villa.png' },
                  { label: 'Crime', value: project.localInfo?.crime || 'N/A', icon: 'mdi:gavel', img: '/src/assets/images/optimized/contemporary-minimalist-villa.png' },
                  { label: 'Noise Level', value: project.localInfo?.noiseLevel || 'N/A', icon: 'mdi:megaphone', img: '/src/assets/images/optimized/modern-duplex.png' },
                  { label: 'Environment', value: project.localInfo?.environment || 'N/A', icon: 'mdi:tree', img: '/src/assets/images/optimized/duplex-mansion.png' },
                ].map((item) => (
                  <div key={item.label} className="group cursor-pointer">
                    <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-3 shadow-md border border-gray-100">
                      <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all" />
                      <div className="absolute bottom-3 left-3">
                        <Icon icon={item.icon} className="text-white text-xl" />
                      </div>
                    </div>
                    <p className="text-sm font-black text-gray-900 mb-0.5">{item.label}</p>
                    {item.label === 'Noise Level' ? (
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                        Noise Level: <span className="text-orange-500 font-black">{item.value}</span>
                      </p>
                    ) : (
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="space-y-8">
            {/* REQUEST A TOUR */}
            <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-black text-gray-900 mb-2">Request a tour</h3>
              <p className="text-sm font-semibold text-gray-400 mb-8 leading-relaxed">Get a tour of the house as per your time.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:bg-white transition-all">
                  <Icon icon="mdi:calendar-month-outline" className="text-2xl text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="text"
                    defaultValue="24 Jul, 2023"
                    className="bg-transparent border-none focus:ring-0 text-sm font-black text-gray-900 w-full p-0"
                  />
                  <span className="text-xs text-gray-300 font-black uppercase">at</span>
                  <Icon icon="mdi:clock-outline" className="text-2xl text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="text"
                    defaultValue="12:30 pm"
                    className="bg-transparent border-none focus:ring-0 text-sm font-black text-gray-900 w-full p-0"
                  />
                </div>

                <button className="w-full py-5 bg-teal-800 text-white rounded-2xl font-black text-sm hover:bg-teal-900 transition-all shadow-lg shadow-teal-900/20 active:scale-[0.98]">
                  Schedule a Tour
                </button>
                <button className="w-full py-5 bg-white text-teal-800 border-2 border-teal-800/10 rounded-2xl font-black text-sm hover:bg-gray-50 transition-colors active:scale-[0.98]">
                  Request Info
                </button>
              </div>

              {/* AGENT INFO */}
              <div className="mt-10 pt-10 border-t border-gray-50">
                <h3 className="text-xl font-black text-gray-900 mb-2">Agent Information</h3>
                <p className="text-sm font-semibold text-gray-400 mb-8 leading-relaxed">Get an insight of the house from agent</p>

                <div className="flex items-center gap-5 mb-8 p-1">
                  <div className="relative">
                    <img
                      src={project.agent?.photo || '/src/assets/images/optimized/agent-placeholder.png'}
                      alt="Agent"
                      className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-4 border-white flex items-center justify-center">
                      <Icon icon="mdi:check-decagram" className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">{project.agent?.name || 'Danial Doe'}</h4>
                    <p className="text-xs font-bold text-gray-400 leading-tight mt-1 max-w-[140px]">
                      {project.agent?.company || 'Exquisite Properties, LLC | Alabama'}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg uppercase tracking-tighter">Top Rated</span>
                      <span className="px-2.5 py-1 bg-orange-50 text-orange-600 text-[10px] font-black rounded-lg uppercase tracking-tighter">Pro Agent</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-1.5 px-1">
                    <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest">License</span>
                    <span className="text-sm font-black text-gray-900">Number: {project.agent?.license || '#580573'}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 px-1">
                    <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest">Contact</span>
                    <div className="flex items-center gap-3 text-sm font-black text-gray-900">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                        <Icon icon="mdi:phone-outline" className="text-gray-400" />
                      </div>
                      {project.agent?.phone || '+000 1234 123 123'}
                    </div>
                  </div>
                  <button className="w-full py-5 mt-4 bg-teal-50 text-teal-700 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-teal-100 transition-all group active:scale-[0.98]">
                    <Icon icon="mdi:phone-message-outline" className="text-2xl group-hover:animate-bounce" />
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
