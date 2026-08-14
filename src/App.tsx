import React, { useState } from 'react'
import { Search, Calendar, CheckCircle, Star, Shield, Clock, Users, MapPin } from 'lucide-react'
import Logo from './components/Logo'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [bookingStep, setBookingStep] = useState(1)

  const services = [
    { id: 'premium-cleaning', name: 'Premium Cleaning', icon: '✨', price: 199, duration: '3 hours', rating: 4.9 },
    { id: 'personal-chef', name: 'Personal Chef', icon: '👨‍🍳', price: 299, duration: '4 hours', rating: 4.8 },
    { id: 'home-organizer', name: 'Home Organizer', icon: '🗄️', price: 249, duration: '3.5 hours', rating: 4.7 },
    { id: 'personal-trainer', name: 'Personal Trainer', icon: '💪', price: 179, duration: '1.5 hours', rating: 4.9 },
    { id: 'event-planner', name: 'Event Planner', icon: '🎉', price: 499, duration: 'Consultation', rating: 4.8 },
    { id: 'concierge', name: 'Premium Concierge', icon: '🎩', price: 399, duration: 'Custom', rating: 5.0 },
  ]

  const testimonials = [
    { name: 'Alex Morgan', role: 'CEO, TechStart', text: 'Kaamio made booking premium services effortless. The quality is unmatched.', rating: 5 },
    { name: 'Sarah Chen', role: 'Creative Director', text: 'Finally, a booking platform that feels premium and actually delivers premium results.', rating: 5 },
    { name: 'Marcus Rivera', role: 'Executive Producer', text: 'Trustworthy, simple, and the service quality exceeded expectations.', rating: 5 },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setBookingStep(2)
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setBookingStep(3)
  }

  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false)

  const handleBookNow = () => {
    setBookingStep(4)
    // Simulate booking process
    setTimeout(() => {
      setBookingStep(5)
      setShowBookingConfirmation(true)
    }, 2000)
  }

  const closeBookingConfirmation = () => {
    setShowBookingConfirmation(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" withText={true} />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-teal-500 transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-teal-500 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-500 transition-colors">Testimonials</a>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 rounded-2xl mb-6">
                <Logo size="lg" withText={false} className="justify-center" />
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
                FIND IT. <span className="text-teal-500">BOOK IT.</span> DONE.
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Premium services, minimal effort. Experience the simplest way to book trustworthy professionals.
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What premium service are you looking for today?"
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors font-medium"
                  >
                    Find Service
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="text-sm text-gray-500">Popular:</span>
                {['Cleaning', 'Chef', 'Organizer', 'Trainer', 'Planner'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSearchQuery(service)}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Carefully curated services from verified professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift transition-all ${selectedService === service.id ? 'ring-2 ring-teal-500' : ''}`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">{service.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-2xl text-gray-900">${service.price}</span>
                  <button className="px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">Simple Booking Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three steps to premium service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">1. Find</h3>
              <p className="text-gray-600">Search for the perfect premium service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">2. Book</h3>
              <p className="text-gray-600">Select your preferred time and date</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">3. Done</h3>
              <p className="text-gray-600">Relax while we handle everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">Trusted by Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our premium clients say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Trustworthy</h3>
              <p className="text-gray-600">Verified professionals with premium credentials</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600">Book in minutes, service delivered promptly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600">Exceptional quality at every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Logo size="sm" withText={true} />
              <p className="text-gray-400">Premium booking made simple</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">FIND IT. BOOK IT. DONE.</p>
              <p className="text-sm text-gray-500">© 2026 Kaamio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Confirmation Modal */}
      {showBookingConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in-up">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mb-4">
                <Logo size="lg" withText={false} />
              </div>
              <CheckCircle className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-6">
                Your premium service has been booked successfully. Our team will contact you shortly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Service</span>
                <span className="font-medium text-gray-900">
                  {services.find(s => s.id === selectedService)?.name || 'Premium Service'}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Estimated Time</span>
                <span className="font-medium text-gray-900">
                  {services.find(s => s.id === selectedService)?.duration || '3 hours'}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600">Total</span>
                <span className="font-display font-bold text-xl text-gray-900">
                  ${services.find(s => s.id === selectedService)?.price || '199'}
                </span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={closeBookingConfirmation}
                className="flex-1 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium"
              >
                View Booking Details
              </button>
              <button
                onClick={closeBookingConfirmation}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App