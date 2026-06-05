'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  MapPin,
  Phone,
  Search,
  Star,
  TrendingUp,
  Users,
  Youtube,
  Linkedin,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const trustStats = [
  { value: '10K+', label: 'clients guided through key moves' },
  { value: '250+', label: 'active agents and advisors' },
  { value: '18', label: 'markets across growth corridors' },
];

const featuredHomes = [
  {
    title: 'Skyline Residences',
    place: 'Financial District',
    price: '$2.45M',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Northwood Townhomes',
    place: 'Westchester',
    price: '$1.18M',
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34c8c7f8f?auto=format&fit=crop&w=900&q=80',
  },
];

const steps = [
  'Talk to a real human about your goals and timing.',
  'Get clarity on what fits your lifestyle and budget.',
  'Move forward with guided touring, offers, and closing support.',
];

const testimonials = [
  {
    quote:
      'The process felt calm from day one. We were matched with an agent who understood exactly what kind of neighborhood and payment range we needed.',
    name: 'Aarav & Meera',
  },
  {
    quote:
      'Every shortlist felt intentional. Instead of sending random listings, the team focused on homes that genuinely matched our next chapter.',
    name: 'Nisha Rao',
  },
  {
    quote:
      'The UI and the guidance both felt premium. From search to paperwork, there was always someone prepared to move the deal forward.',
    name: 'Kiran Patel',
  },
];

const serviceCards = [
  {
    eyebrow: 'Buy',
    title: 'Buy smarter with local experts and sharper market signals.',
    body:
      'Explore verified homes, apartments, plots, and investments with advisors who understand pricing, negotiation, and timing.',
  },
  {
    eyebrow: 'Sell',
    title: 'Position your property to move faster and close stronger.',
    body:
      'We combine polished presentation, demand-aware pricing, and dedicated follow-through to attract serious buyers.',
  },
  {
    eyebrow: 'Rent',
    title: 'Find rental options without wasting time on mismatched listings.',
    body:
      'Shortlisted inventory, trusted area insight, and fast response loops make the rental search easier to navigate.',
  },
];

const supportCards = [
  {
    title: 'Mortgage Services',
    body: 'Financing guidance to help buyers compare options and act with confidence.',
  },
  {
    title: 'Property Management',
    body: 'Ongoing support for owners who want operations handled professionally.',
  },
  {
    title: 'Development Advisory',
    body: 'Practical guidance for land, construction planning, and long-term project vision.',
  },
];

const marketHighlights = [
  { label: 'Average Days on Market', value: '18' },
  { label: 'Buyer Satisfaction', value: '97%' },
  { label: 'Offer-to-Close Support', value: 'Full Service' },
];

const blogPosts = [
  {
    date: 'June 2026',
    title: 'What first-time buyers should watch before the monsoon market shifts',
    body: 'A simple breakdown of inventory pressure, pricing behavior, and how to prepare before peak movement begins.',
  },
  {
    date: 'May 2026',
    title: 'How to compare plotted developments beyond just the launch price',
    body: 'Road width, connectivity, approvals, and resale readiness all change the real value of a project.',
  },
  {
    date: 'April 2026',
    title: 'Rental demand trends in fast-growing city corridors',
    body: 'A look at how infrastructure growth and office clusters are changing rental demand across emerging zones.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-[2.5rem] pb-[8rem] pt-[13rem] md:px-[10rem] md:pb-[14rem] md:pt-[18rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.03),transparent_28%)]" />
          <div className="absolute right-[-12rem] top-[14rem] hidden h-[42rem] w-[42rem] rounded-full bg-[#d7d4cf] blur-3xl md:block" />
          <div className="relative mx-auto grid max-w-[192rem] gap-[6rem] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="find-fade-up">
              <p className="mb-[2rem] text-[1.2rem] font-medium uppercase tracking-[0.32em] text-[#8b8b8b]">
                Practice Replica for Your Real Estate Brand
              </p>
              <h1 className="max-w-[78rem] text-[5.6rem] font-medium leading-[0.95] tracking-[-0.05em] text-[#151717] md:text-[12rem]">
                Find what moves you.
              </h1>
              <p className="mt-[2.4rem] max-w-[62rem] text-[1.8rem] leading-[1.5] text-[#151717] md:text-[2.4rem]">
                Expert agents. Real guidance. A clear path to find what&apos;s next for buyers,
                sellers, renters, and investors on PlotFlow.
              </p>

              <div className="mt-[4rem] flex flex-col gap-[1.2rem] sm:flex-row">
                <Link
                  href="/explore"
                  className="find-button inline-flex items-center justify-center rounded-full bg-[#151717] px-[3rem] py-[1.54rem] text-[1.6rem] font-medium text-white transition hover:scale-x-[1.02] md:text-[1.8rem]"
                >
                  <span className="find-button-text">
                    <span data-text="Find Properties">Find Properties</span>
                  </span>
                </Link>
                <Link
                  href="/join"
                  className="find-button inline-flex items-center justify-center rounded-full border border-black/20 bg-white px-[3rem] py-[1.54rem] text-[1.6rem] font-medium text-[#151717] transition hover:scale-x-[1.02] md:text-[1.8rem]"
                >
                  <span className="find-button-text">
                    <span data-text="Join the Network">Join the Network</span>
                  </span>
                </Link>
              </div>

              <div className="mt-[5rem] grid gap-[1rem] sm:grid-cols-3">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="border border-black/10 bg-white p-[3rem]">
                    <p className="text-[4.4rem] font-medium leading-none tracking-[-0.04em] text-[#151717]">{stat.value}</p>
                    <p className="mt-[1.2rem] text-[1.4rem] leading-[1.5] text-[#6e6e6e]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative find-fade-up find-fade-delay-2">
              <div className="grid grid-cols-2 gap-[0.5rem] md:gap-[2rem]">
                <HeroImage
                  className="col-span-2 aspect-[1.2/0.92]"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern home exterior"
                />
                <HeroImage
                  className="aspect-[0.95/1.15]"
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80"
                  alt="Stylish apartment interior"
                />
                <HeroImage
                  className="aspect-[0.95/1.15]"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury residential building"
                />
              </div>

              <div className="absolute left-[1rem] top-[1rem] hidden border border-white/40 bg-white/85 px-[2rem] py-[1.4rem] backdrop-blur md:block">
                <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#6b6b6b]">Featured Listing</p>
                <p className="mt-[0.8rem] text-[2.2rem] font-medium text-[#151717]">Penthouse with skyline terrace</p>
              </div>

              <div className="absolute -bottom-[2rem] left-[1rem] right-[1rem] border border-black/10 bg-white p-[1rem] shadow-[0_1rem_4rem_rgba(21,23,23,0.08)] md:left-[4rem] md:right-[4rem]">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const query = formData.get('search');
                    window.location.href = `/explore?search=${query}`;
                  }}
                  className="flex flex-col gap-[1rem] md:flex-row"
                >
                  <div className="flex flex-1 items-center gap-[1.2rem] border border-black/10 bg-[#f6f6f6] px-[2rem] py-[1.8rem]">
                    <Search size={18} className="text-[#8d8d8d]" />
                    <input 
                      name="search"
                      type="text"
                      placeholder="City, locality, or property type"
                      className="w-full bg-transparent text-[1.6rem] text-[#151717] outline-none placeholder:text-[#6b6b6b]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="find-button inline-flex items-center justify-center rounded-full bg-[#151717] px-[2.4rem] py-[1.6rem] text-[1.6rem] font-medium text-white transition hover:scale-[1.02]"
                  >
                    <span className="find-button-text">
                      <span data-text="Start Your Search">Start Your Search</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[2.5rem] py-[8rem] md:px-[10rem] md:py-[10rem]">
          <div className="mx-auto grid max-w-[192rem] gap-[3rem] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="bg-white p-[4rem] md:p-[6rem]">
              <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b]">Why PlotFlow</p>
              <h2 className="font-secondary mt-[1.6rem] text-[4.4rem] font-medium leading-[1] tracking-[-0.04em] text-[#151717] md:text-[7.2rem]">
                This isn&apos;t just about real estate.
              </h2>
              <p className="mt-[2rem] max-w-[56rem] text-[2.2rem] leading-[1.3] text-[#151717]">
                It&apos;s about progress, clarity, and choosing a property that fits your life. We
                designed this homepage to mirror the structure and feel of the published reference
                while keeping your brand front and center.
              </p>

              <div className="mt-[3.6rem] space-y-[1.6rem]">
                {[
                  'Neighborhood-first property discovery',
                  'Human-led advisory at every major decision',
                  'Elegant search experience with premium listings',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[1.2rem] text-[1.6rem] text-[#151717]">
                    <span className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-[#151717] text-white">
                      <Check size={16} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="border border-black/10 bg-white p-[3rem] md:p-[4rem]">
                <p className="text-[1.2rem] uppercase tracking-[0.32em] text-[#8b8b8b]">Real Estate, Rewired</p>
                <ol className="mt-[2.4rem] space-y-[2rem]">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="mt-[0.2rem] flex h-[3.6rem] w-[3.6rem] shrink-0 items-center justify-center rounded-full bg-[#151717] text-[1.4rem] font-medium text-white">
                        {index + 1}
                      </span>
                      <p className="text-[1.8rem] leading-[1.5] text-[#151717]">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-6">
                <div className="overflow-hidden bg-[#151717] text-white">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                    alt="Real estate advisors"
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-7">
                    <p className="text-[1.2rem] uppercase tracking-[0.32em] text-[#b3b3b3]">For Agents</p>
                    <h3 className="font-secondary mt-[1.2rem] text-[4.4rem] font-medium leading-[1] tracking-[-0.04em]">
                      Don&apos;t rent your career. Own it.
                    </h3>
                    <p className="mt-[1.6rem] text-[1.6rem] leading-[1.5] text-[#ededed]">
                      Give top-performing agents a sharper brand, better support, and a homepage
                      experience that feels premium from the first scroll.
                    </p>
                    <Link href="/join" className="mt-[2.4rem] inline-flex items-center gap-2 text-[1.4rem] uppercase tracking-[0.24em] text-white">
                      Join the movement <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-[1px] bg-black/10 md:grid-cols-3">
                  {marketHighlights.map((item) => (
                    <div key={item.label} className="bg-white p-[2.4rem]">
                      <p className="text-[1.2rem] uppercase tracking-[0.26em] text-[#8b8b8b]">{item.label}</p>
                      <p className="mt-[1.4rem] text-[2.8rem] font-medium tracking-[-0.03em] text-[#151717]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#161616] px-5 py-20 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[#b8a18d]">Testimonials</p>
                <h2 className="font-secondary mt-4 text-[4.4rem] font-medium tracking-[-0.04em] md:text-[7.2rem]">
                  Don&apos;t take our word for it.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#d3c6bb]">
                The reference site uses social proof as a major trust section, so this replica keeps
                that rhythm with premium cards and editorial spacing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="border border-white/10 bg-white/5 p-[3.2rem] md:p-[4.8rem]">
                <div className="mb-8 flex items-center gap-[1rem] text-[#f0c590]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="font-secondary max-w-[82rem] text-[3.4rem] leading-[1.15] tracking-[-0.03em] text-white md:text-[5.2rem]">
                  &ldquo;PlotFlow turned a complicated property search into a clear, confident process
                  with real people behind every decision.&rdquo;
                </p>
                <div className="mt-[3rem] flex items-center justify-between border-t border-white/10 pt-[2rem] text-[1.3rem] uppercase tracking-[0.24em] text-[#c9c9c9]">
                  <span>Featured Review</span>
                  <span>Family Relocation</span>
                </div>
              </article>

              <div className="grid gap-6">
              {testimonials.map((item) => (
                <article key={item.name} className="border border-white/10 bg-white/5 p-7">
                  <div className="mb-6 flex gap-1 text-[#f0c590]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base leading-8 text-[#f1ebe5]">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-7 text-xs uppercase tracking-[0.28em] text-[#c4b6aa]">{item.name}</p>
                </article>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b]">Services</p>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="font-secondary max-w-3xl text-[4.4rem] font-medium tracking-[-0.04em] text-[#151717] md:text-[7.2rem]">
                How PlotFlow can help you.
              </h2>
              <Link href="/explore" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[#6f4a2d]">
                Get started <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-6 lg:grid-cols-2">
              {serviceCards.map((card) => (
                <article
                  key={card.eyebrow}
                  className="group border border-black/10 bg-white p-8 transition hover:-translate-y-[0.4rem] hover:shadow-[0_1.6rem_4rem_rgba(21,23,23,0.08)]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f1f1] text-[#151717]">
                    {card.eyebrow === 'Buy' ? <Home size={24} /> : card.eyebrow === 'Sell' ? <TrendingUp size={24} /> : <Users size={24} />}
                  </div>
                  <p className="text-[1.2rem] uppercase tracking-[0.32em] text-[#8b8b8b]">{card.eyebrow}</p>
                  <h3 className="font-secondary mt-4 text-[3.2rem] font-medium leading-tight tracking-[-0.03em] text-[#151717]">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-[1.6rem] leading-[1.5] text-[#5d534b]">{card.body}</p>
                  <div className="mt-[2.4rem] inline-flex items-center gap-[0.8rem] text-[1.2rem] uppercase tracking-[0.24em] text-[#151717]">
                    Learn more <ArrowRight size={14} className="transition group-hover:translate-x-[0.3rem]" />
                  </div>
                </article>
              ))}
              </div>

              <div className="overflow-hidden border border-black/10 bg-[#efebe5]">
                <div className="p-[3.2rem]">
                  <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#8b8b8b]">Curated Properties</p>
                  <h3 className="font-secondary mt-[1.4rem] text-[4rem] font-medium leading-[1] tracking-[-0.04em] text-[#151717]">
                    Properties worth watching right now.
                  </h3>
                </div>
                <div className="grid gap-[1px] bg-black/10">
                  {featuredHomes.map((home) => (
                    <article key={home.title} className="grid gap-0 bg-white md:grid-cols-[1fr_1.15fr]">
                      <img src={home.image} alt={home.title} className="h-full min-h-[22rem] w-full object-cover" />
                      <div className="flex flex-col justify-between p-[2.4rem]">
                        <div>
                          <p className="text-[1.2rem] uppercase tracking-[0.24em] text-[#8b8b8b]">{home.price}</p>
                          <h4 className="mt-[1rem] text-[2.6rem] font-medium tracking-[-0.03em] text-[#151717]">{home.title}</h4>
                          <p className="mt-[1rem] flex items-center gap-[0.8rem] text-[1.5rem] text-[#5d534b]">
                            <MapPin size={16} />
                            {home.place}
                          </p>
                        </div>
                        <span className="mt-[2rem] inline-flex items-center gap-[0.8rem] text-[1.2rem] uppercase tracking-[0.24em] text-[#151717]">
                          View details <ChevronRight size={14} />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#151717] px-5 py-20 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border border-white/10 bg-white/5 p-9 text-white">
                <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#b3b3b3]">Support Beyond Deals</p>
                <h2 className="font-secondary mt-4 text-[4.4rem] font-medium tracking-[-0.04em] md:text-[7.2rem]">
                  Beyond buying and selling.
                </h2>
                <p className="mt-5 max-w-xl text-[1.8rem] leading-[1.5] text-[#ededed]">
                  The published site continues with support-focused offerings, so this version does
                  the same with a darker panel and supportive service tiles.
                </p>
                <Link
                  href="/contact"
                  className="find-button mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[1.6rem] text-white"
                >
                  <span className="find-button-text">
                    <span data-text="Discover our services">Discover our services</span>
                  </span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {supportCards.map((card) => (
                  <article key={card.title} className="border border-white/10 bg-white/5 p-7 transition hover:bg-white/[0.08]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Phone size={20} />
                    </div>
                    <h3 className="font-secondary mt-6 text-[3.2rem] font-medium tracking-[-0.03em] text-white">{card.title}</h3>
                    <p className="mt-4 text-[1.6rem] leading-[1.5] text-[#d6d6d6]">{card.body}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[1.2rem] uppercase tracking-[0.26em] text-[#d6d6d6]">
                      Learn more <ChevronRight size={14} />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b]">Blog & Resources</p>
                <h2 className="font-secondary mt-4 text-[4.4rem] font-medium tracking-[-0.04em] text-[#151717] md:text-[7.2rem]">
                  Market ideas and practical guidance.
                </h2>
              </div>
              <Link href="/explore" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[#6f4a2d]">
                Visit our blog <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr_0.95fr]">
              {blogPosts.map((post) => (
                <article key={post.title} className="group border border-black/10 bg-white p-8 transition hover:-translate-y-[0.4rem] hover:shadow-[0_1.6rem_4rem_rgba(21,23,23,0.08)]">
                  <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#8b8b8b]">{post.date}</p>
                  <h3 className="font-secondary mt-4 text-[3.2rem] font-medium leading-tight tracking-[-0.03em] text-[#151717]">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-[1.6rem] leading-[1.5] text-[#5e554e]">{post.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[1.2rem] uppercase tracking-[0.28em] text-[#151717]">
                    Read more <ChevronRight size={14} className="transition group-hover:translate-x-[0.3rem]" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-12 pt-6 md:px-8 md:pb-20">
          <div className="mx-auto max-w-7xl overflow-hidden bg-[#151717] text-white shadow-[0_2rem_6rem_rgba(21,23,23,0.16)]">
            <div className="grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#b3b3b3]">Let&apos;s Get Started</p>
                <h2 className="font-secondary mt-4 text-[4.4rem] font-medium tracking-[-0.04em] md:text-[7.2rem]">
                  Find you. We&apos;ll help you get there.
                </h2>
                <p className="mt-5 max-w-xl text-[1.8rem] leading-[1.5] text-[#ededed]">
                  A footer CTA with newsletter, office details, and clear next actions keeps the
                  same polished finish as the reference homepage.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="bg-white/6 p-6">
                  <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#cdb9a7]">Subscribe</p>
                  <div className="mt-5 rounded-full bg-white px-2 py-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-transparent px-4 py-2 text-sm text-[#2b241f] outline-none"
                      />
                      <button className="rounded-full bg-[#151717] p-3 text-white transition hover:bg-[#2b2d2d]">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white/6 p-6">
                  <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#cdb9a7]">Head Office</p>
                  <p className="mt-4 text-[1.6rem] leading-[1.5] text-[#f1ebe5]">
                    PlotFlow Realty
                    <br />
                    Jubilee Hills, Hyderabad
                    <br />
                    Telangana, India
                  </p>
                  <p className="mt-4 text-sm text-[#d2c5ba]">hello@plotflow.example</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 px-6 py-6 text-sm text-[#d7cbc1] md:flex-row md:items-center md:justify-between md:px-10">
              <div className="flex flex-wrap gap-5">
                <Link href="/explore">Search</Link>
                <Link href="/agents">Agents</Link>
                <Link href="/join">Join</Link>
                <Link href="/login">Agent Portal</Link>
              </div>
              <div className="flex items-center gap-4">
                <Facebook size={18} />
                <Instagram size={18} />
                <Youtube size={18} />
                <Linkedin size={18} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeroImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={cn('overflow-hidden shadow-[0_2rem_6rem_rgba(21,23,23,0.1)]', className)}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </motion.div>
  );
}
