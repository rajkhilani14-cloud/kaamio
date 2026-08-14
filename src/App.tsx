import React, { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  ConciergeBell,
  Dumbbell,
  HeartHandshake,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  PartyPopper,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Logo from './components/Logo'

interface Service {
  id: string
  name: string
  category: string
  description: string
  price: number
  duration: string
  rating: number
  icon: LucideIcon
  accent: string
}

const services: Service[] = [
  {
    id: 'premium-cleaning',
    name: 'Premium cleaning',
    category: 'Home care',
    description: 'A considered reset for the spaces you live in.',
    price: 199,
    duration: '3 hours',
    rating: 4.9,
    icon: Sparkles,
    accent: 'bg-[#dff5ee] text-[#147b68]',
  },
  {
    id: 'personal-chef',
    name: 'Personal chef',
    category: 'Food & hosting',
    description: 'Thoughtful menus, prepared in your own kitchen.',
    price: 299,
    duration: '4 hours',
    rating: 4.8,
    icon: Utensils,
    accent: 'bg-[#fff0d6] text-[#a66116]',
  },
  {
    id: 'home-organizer',
    name: 'Home organizing',
    category: 'Home care',
    description: 'Bring calm and clarity to the places that matter.',
    price: 249,
    duration: '3.5 hours',
    rating: 4.7,
    icon: Home,
    accent: 'bg-[#e7e7fa] text-[#5c54ad]',
  },
  {
    id: 'personal-trainer',
    name: 'Personal training',
    category: 'Wellbeing',
    description: 'A personal plan that fits your pace and your day.',
    price: 179,
    duration: '1.5 hours',
    rating: 4.9,
    icon: Dumbbell,
    accent: 'bg-[#fbe3e2] text-[#b34c4a]',
  },
  {
    id: 'event-planner',
    name: 'Event planning',
    category: 'Events',
    description: 'From first idea to final detail, beautifully handled.',
    price: 499,
    duration: 'Consultation',
    rating: 4.8,
    icon: PartyPopper,
    accent: 'bg-[#e2eff9] text-[#32749f]',
  },
  {
    id: 'concierge',
    name: 'Premium concierge',
    category: 'Everyday help',
    description: 'The thoughtful extra pair of hands your week needs.',
    price: 399,
    duration: 'Custom',
    rating: 5.0,
    icon: ConciergeBell,
    accent: 'bg-[#e9f3dd] text-[#5c813d]',
  },
]

const testimonials = [
  {
    quote: 'Kaamio gives me back the time I thought I had lost for good. Every detail feels considered.',
    name: 'Alex Morgan',
    detail: 'Kaamio member · New York',
    initials: 'AM',
  },
  {
    quote: 'It feels less like booking a service and more like having someone quietly make life easier.',
    name: 'Sarah Chen',
    detail: 'Kaamio member · Austin',
    initials: 'SC',
  },
  {
    quote: 'The quality is exceptional, the process is effortless, and the people are genuinely lovely.',
    name: 'Marcus Rivera',
    detail: 'Kaamio member · Chicago',
    initials: 'MR',
  },
]

const faqs = [
  {
    question: 'What is Kaamio?',
    answer: 'Kaamio is a simpler way to find and book trusted professionals for the moments that keep your life moving. From home care to personal wellbeing, every service is selected for quality and care.',
  },
  {
    question: 'How do I book a service?',
    answer: 'Tell us what you need, explore a service that feels right, and choose your preferred time. Kaamio keeps the details clear so you can book with confidence.',
  },
  {
    question: 'Who are the professionals?',
    answer: 'We work with experienced, dependable professionals who share our standard for thoughtful service. Every category is curated with trust and consistency in mind.',
  },
  {
    question: 'Can I request something not listed?',
    answer: 'Absolutely. Our concierge team can help shape a custom request when your day needs something a little more specific.',
  },
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return services

    return services.filter((service) =>
      [service.name, service.category, service.description].some((value) => value.toLowerCase().includes(query)),
    )
  }, [searchQuery])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    scrollToServices()
  }

  const handlePopularSearch = (value: string) => {
    setSearchQuery(value)
    window.setTimeout(scrollToServices, 0)
  }

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
    setBookingStep(3)
    setShowBookingConfirmation(true)
  }

  const handleBookNow = () => {
    setBookingStep(4)
    window.setTimeout(() => setBookingStep(5), 1200)
  }

  const closeBookingConfirmation = () => {
    setShowBookingConfirmation(false)
    setBookingStep(1)
  }

  return (
    <div className="kaamio-site min-h-screen overflow-hidden bg-[#f6f7f3] text-[#172522]">
      <header className="site-header sticky top-0 z-40 border-b border-[#172522]/10 bg-[#f6f7f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" aria-label="Kaamio home" className="shrink-0">
            <Logo size="sm" withText />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#how-it-works">How it works</a>
            <a className="nav-link" href="#stories">Stories</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a className="header-help" href="#footer">Need a hand?</a>
            <button type="button" onClick={scrollToServices} className="button button-dark">
              Book a service <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)}>How it works</a>
            <a href="#stories" onClick={() => setMobileOpen(false)}>Stories</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
            <button type="button" onClick={scrollToServices} className="button button-dark w-full">
              Book a service <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(400px,0.97fr)] lg:gap-20">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Premium help, thoughtfully arranged</div>
              <h1 className="hero-title mt-7 max-w-3xl">
                Make room for the <span className="hero-title-accent">good stuff.</span>
              </h1>
              <p className="hero-description mt-7 max-w-xl">
                Kaamio brings trusted people and premium everyday services together, so your time can feel like yours again.
              </p>

              <form onSubmit={handleSearch} className="hero-search mt-9 max-w-2xl" role="search">
                <label htmlFor="service-search" className="sr-only">What can Kaamio help with?</label>
                <Search size={20} aria-hidden="true" className="hero-search-icon" />
                <input
                  id="service-search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="What can we help with?"
                  className="hero-search-input"
                />
                <button type="submit" className="button button-teal">
                  Find a service <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </form>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5b6b66]">
                <span className="mr-1 font-medium text-[#172522]">Try</span>
                {['Cleaning', 'Chef', 'Wellbeing', 'Concierge'].map((term) => (
                  <button
                    type="button"
                    key={term}
                    onClick={() => handlePopularSearch(term)}
                    className="tag-button"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#172522]/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="avatar-stack" aria-hidden="true">
                    <span>AM</span><span>SC</span><span>MR</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#172522]">
                      <Star size={14} className="fill-[#e4a835] text-[#e4a835]" aria-hidden="true" /> 4.9 / 5
                    </div>
                    <p className="text-xs text-[#6f7c78]">Loved by Kaamio members</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5b6b66]">
                  <MapPin size={16} className="text-[#159d8a]" aria-hidden="true" /> Serving your city, next.
                </div>
              </div>
            </div>

            <div className="hero-art" aria-label="Kaamio premium service experience">
              <div className="hero-art-topline">
                <span>KAAMIO / 01</span>
                <span>FIND IT. BOOK IT. DONE.</span>
              </div>
              <div className="hero-art-center">
                <div className="hero-orbit hero-orbit-one" />
                <div className="hero-orbit hero-orbit-two" />
                <div className="hero-logo-frame">
                  <Logo size="xl" withText={false} className="justify-center" tone="light" />
                </div>
                <p className="hero-art-note">A little more time<br />for what matters.</p>
              </div>
              <div className="hero-art-bottomline">
                <span>PREMIUM SERVICES</span>
                <span className="hero-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip border-y border-[#172522]/10 bg-[#edf0e9]">
          <div className="mx-auto grid max-w-[1320px] gap-6 px-5 py-7 sm:px-8 md:grid-cols-3 lg:px-10">
            <div className="trust-item"><ShieldCheck size={22} aria-hidden="true" /><span><strong>People you can trust</strong><small>Curated professionals, every time.</small></span></div>
            <div className="trust-item"><HeartHandshake size={22} aria-hidden="true" /><span><strong>Made around you</strong><small>Service that fits your real life.</small></span></div>
            <div className="trust-item"><Clock3 size={22} aria-hidden="true" /><span><strong>Simple from start to done</strong><small>Clear details. No unnecessary steps.</small></span></div>
          </div>
        </section>

        <section id="services" className="content-section mx-auto max-w-[1320px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">The Kaamio edit</p>
              <h2 className="section-title">A better way to get things done.</h2>
            </div>
            <p className="section-intro">From everyday essentials to thoughtful extras, choose the kind of help that makes your day feel lighter.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.id} className="service-card group">
                  <div className="flex items-start justify-between gap-5">
                    <div className={`service-icon ${service.accent}`}><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></div>
                    <span className="rating"><Star size={13} className="fill-[#e4a835] text-[#e4a835]" aria-hidden="true" /> {service.rating.toFixed(1)}</span>
                  </div>
                  <p className="service-category mt-8">{service.category}</p>
                  <h3 className="service-title mt-2">{service.name}</h3>
                  <p className="service-description mt-3">{service.description}</p>
                  <div className="mt-7 flex items-end justify-between gap-4 border-t border-[#172522]/10 pt-5">
                    <div><span className="service-from">From</span><strong className="service-price">${service.price}</strong><span className="service-duration"> / {service.duration}</span></div>
                    <button type="button" onClick={() => handleServiceSelect(service)} className="circle-arrow" aria-label={`Book ${service.name}`}><ArrowUpRight size={18} aria-hidden="true" /></button>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="empty-state mt-6">
              <Search size={22} aria-hidden="true" />
              <p>No services match “{searchQuery}”. Try a broader search or ask our concierge team.</p>
              <button type="button" onClick={() => setSearchQuery('')} className="text-link">View all services <ChevronRight size={16} aria-hidden="true" /></button>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#172522]/10 pt-6">
            <p className="text-sm text-[#65736e]">Six ways to make space in your day. More thoughtful help, coming soon.</p>
            <a href="#footer" className="text-link">Talk to our concierge <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="numbers-section bg-[#172522] text-[#f6f7f3]">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-10 lg:py-20">
            <div><p className="number-value">2,000<span>+</span></p><p className="number-label">moments made easier</p></div>
            <div><p className="number-value">4.9<span>/5</span></p><p className="number-label">average member rating</p></div>
            <div><p className="number-value">24<span>h</span></p><p className="number-label">to find your next helping hand</p></div>
          </div>
        </section>

        <section id="how-it-works" className="content-section mx-auto max-w-[1320px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="section-heading-row">
            <div><p className="section-kicker">How it works</p><h2 className="section-title">Less arranging.<br /><span>More living.</span></h2></div>
            <p className="section-intro">Kaamio takes the busywork out of finding great help. You bring the need; we make the next step feel easy.</p>
          </div>

          <div className="process-grid mt-14">
            <div className="process-visual">
              <div className="process-visual-label">Your time, returned</div>
              <div className="process-clock"><Clock3 size={38} strokeWidth={1.4} aria-hidden="true" /><span>02:47</span><small>hours back today</small></div>
              <div className="process-visual-stamp"><Check size={16} aria-hidden="true" /> beautifully handled</div>
            </div>
            <div className="process-list">
              <div className="process-step"><span className="step-number">01</span><div><h3>Tell us what you need</h3><p>Start with the thing taking up space in your head. A few words are all it takes.</p></div></div>
              <div className="process-step"><span className="step-number">02</span><div><h3>Choose what feels right</h3><p>Explore trusted professionals, clear pricing, and service details made easy to understand.</p></div></div>
              <div className="process-step"><span className="step-number">03</span><div><h3>Get on with your day</h3><p>Book it, breathe out, and let Kaamio take care of the details from there.</p></div></div>
            </div>
          </div>
        </section>

        <section id="stories" className="stories-section scroll-mt-24 bg-[#e7ebe3]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="section-heading-row">
              <div><p className="section-kicker">Member stories</p><h2 className="section-title">Good help changes<br /><span>the whole day.</span></h2></div>
              <div className="flex items-center gap-2 text-sm text-[#5c6c66]"><MessageCircle size={18} aria-hidden="true" /> Real words from real members</div>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="testimonial-card">
                  <div className="flex items-center justify-between"><div className="testimonial-avatar">{testimonial.initials}</div><span className="quote-mark">“</span></div>
                  <blockquote className="mt-10">{testimonial.quote}</blockquote>
                  <figcaption className="mt-10"><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="content-section mx-auto max-w-[1000px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center"><p className="section-kicker">Good to know</p><h2 className="section-title">Questions, answered.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#65736e]">Everything you need to know before making a little more room in your day.</p></div>
          <div className="faq-list mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button type="button" className="faq-trigger" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{faq.question}</span><ChevronDown size={20} aria-hidden="true" />
                  </button>
                  {isOpen && <div id={`faq-answer-${index}`} className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              )
            })}
          </div>
        </section>

        <section className="closing-section mx-5 mb-20 overflow-hidden rounded-[28px] bg-[#159d8a] sm:mx-8 lg:mx-auto lg:mb-28 lg:max-w-[1320px] lg:rounded-[36px]">
          <div className="relative grid items-center gap-10 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">
            <div className="relative z-10 max-w-2xl text-[#f6f7f3]"><p className="section-kicker light">Make space for what matters</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your next good day<br />starts with Kaamio.</h2><p className="mt-5 max-w-lg text-base leading-7 text-white/80">Premium services, minimal effort. Find the help that fits your life and feel the difference in the rest of your day.</p><button type="button" onClick={scrollToServices} className="button button-light mt-8">Explore services <ArrowUpRight size={16} aria-hidden="true" /></button></div>
            <div className="closing-mark" aria-hidden="true"><Logo size="xl" withText={false} tone="light" /><span>FIND IT.<br />BOOK IT.<br />DONE.</span></div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer-section bg-[#172522] text-[#f6f7f3]">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div><Logo size="md" withText tone="light" /><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Premium services, minimal effort. Make room for the good stuff.</p><a className="footer-contact mt-6" href="mailto:hello@kaamio.com">hello@kaamio.com <ArrowUpRight size={15} aria-hidden="true" /></a></div>
            <div><p className="footer-heading">Explore</p><div className="footer-links"><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#stories">Member stories</a></div></div>
            <div><p className="footer-heading">Kaamio</p><div className="footer-links"><a href="#faq">FAQ</a><a href="mailto:hello@kaamio.com">Contact us</a><a href="#top">Back to top</a></div></div>
            <div><p className="footer-heading">A little reminder</p><p className="footer-slogan">FIND IT.<br />BOOK IT.<br /><span>DONE.</span></p></div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row"><span>© 2026 Kaamio. All rights reserved.</span><span>Built with care for better everyday moments.</span></div>
        </div>
      </footer>

      {showBookingConfirmation && selectedService && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeBookingConfirmation() }}>
          <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
            <button type="button" onClick={closeBookingConfirmation} className="modal-close" aria-label="Close booking dialog"><X size={20} aria-hidden="true" /></button>
            {bookingStep === 4 ? (
              <div className="modal-state"><div className="loading-orbit"><Sparkles size={26} aria-hidden="true" /></div><h2 id="booking-title">Arranging the details…</h2><p>We are preparing your Kaamio booking.</p></div>
            ) : bookingStep === 5 ? (
              <div className="modal-state"><div className="success-icon"><CheckCircle2 size={30} aria-hidden="true" /></div><h2 id="booking-title">You’re all set.</h2><p>Your request for {selectedService.name.toLowerCase()} is in motion. Our team will contact you shortly.</p><button type="button" onClick={closeBookingConfirmation} className="button button-dark mt-7 w-full">Done <Check size={16} aria-hidden="true" /></button></div>
            ) : (
              <><div className="modal-kicker"><BriefcaseBusiness size={15} aria-hidden="true" /> Your Kaamio selection</div><h2 id="booking-title" className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Ready to make room?</h2><p className="mt-3 text-sm leading-6 text-[#65736e]">You selected {selectedService.name.toLowerCase()}. Review the details and let us handle the next step.</p><div className="modal-service-card mt-7"><div className={`service-icon ${selectedService.accent}`}><selectedService.icon size={21} aria-hidden="true" /></div><div><strong>{selectedService.name}</strong><span>{selectedService.duration} · from ${selectedService.price}</span></div></div><div className="mt-7 grid grid-cols-2 gap-3"><button type="button" onClick={handleBookNow} className="button button-teal">Book this service <ArrowUpRight size={16} aria-hidden="true" /></button><button type="button" onClick={closeBookingConfirmation} className="button button-outline">Not yet</button></div></>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
