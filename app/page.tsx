"use client";

import { useState } from "react";

const NAV_LINKS = ["Fleet", "Performance", "Technology", "Roadmap"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-black">Velocity <span className="text-red-600">Auto</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors"
          >
            Reserve Now
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Reserve Now
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-red-100">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          Now taking reservations for 2026 delivery
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-black mb-6">
          Drive the
          <br />
          <span className="text-red-600">Future</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Premium electric vehicles built for those who demand more performance, more range, more intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#fleet"
            className="bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-red-700 transition-all hover:scale-105"
          >
            Explore Fleet
          </a>
          <a
            href="#contact"
            className="border-2 border-black text-black font-semibold px-8 py-4 rounded-full text-base hover:bg-black hover:text-white transition-all"
          >
            Reserve Yours
          </a>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: "0–60", unit: "2.9s", label: "Acceleration" },
            { value: "520", unit: "mi", label: "Range" },
            { value: "1,020", unit: "hp", label: "Peak Power" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-black">
                {stat.value}
                <span className="text-red-600 text-xl ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FLEET = [
  {
    name: "Apex Sedan",
    tagline: "The everyday icon",
    range: "420 mi",
    power: "670 hp",
    accel: "3.5s",
    price: "$72,900",
    color: "bg-slate-900",
    features: ["Autopilot Pro", "12\" Touchscreen", "Heated Seats", "OTA Updates"],
    emoji: "🚗",
    featured: false,
  },
  {
    name: "Apex SUV",
    tagline: "Space meets power",
    range: "390 mi",
    power: "780 hp",
    accel: "3.1s",
    price: "$89,900",
    color: "bg-red-600",
    features: ["7-Seat Config", "Air Suspension", "Panoramic Roof", "HEPA Filter"],
    emoji: "🚙",
    featured: true,
  },
  {
    name: "Apex Sport",
    tagline: "Track-ready. Street-legal.",
    range: "340 mi",
    power: "1,020 hp",
    accel: "2.9s",
    price: "$129,900",
    color: "bg-gray-800",
    features: ["Carbon Fiber Body", "Launch Control", "Track Mode", "Racing Seats"],
    emoji: "🏎️",
    featured: false,
  },
  {
    name: "Apex Truck",
    tagline: "Built to haul. Built to last.",
    range: "500 mi",
    power: "845 hp",
    accel: "3.8s",
    price: "$69,900",
    color: "bg-zinc-700",
    features: ["14,000 lb Towing", "Quad Motor", "Armor Glass", "120V Outlets"],
    emoji: "🛻",
    featured: false,
  },
];

function Fleet() {
  return (
    <section id="fleet" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Four vehicles. One vision. Choose the model that fits your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((car) => (
            <div
              key={car.name}
              className={`relative rounded-3xl p-6 flex flex-col ${
                car.featured
                  ? "ring-2 ring-red-600 shadow-2xl scale-105"
                  : "border border-gray-100 shadow-sm hover:shadow-md"
              } transition-all`}
            >
              {car.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div
                className={`${car.color} rounded-2xl h-32 flex items-center justify-center text-5xl mb-5`}
              >
                {car.emoji}
              </div>
              <h3 className="font-black text-xl text-black">{car.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-4">{car.tagline}</p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: "Range", val: car.range },
                  { label: "Power", val: car.power },
                  { label: "0-60", val: car.accel },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="text-center bg-gray-50 rounded-xl p-2"
                  >
                    <div className="font-bold text-xs text-black">{spec.val}</div>
                    <div className="text-xs text-gray-400">{spec.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-1.5 mb-6 flex-1">
                {car.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="text-2xl font-black text-black mb-3">
                  {car.price}
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-2.5 rounded-full font-semibold text-sm transition-all ${
                    car.featured
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border-2 border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Configure
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH_FEATURES = [
  {
    title: "Neural Autopilot",
    desc: "Our AI-powered driving system processes 40 sensor inputs per second, enabling full self-driving capability on highways and city streets.",
    icon: "🧠",
  },
  {
    title: "VelocityCharge",
    desc: "250 kW DC fast charging adds 200 miles in 15 minutes. Over 15,000 Supercharger-compatible stations across North America.",
    icon: "⚡",
  },
  {
    title: "Sentinel Safety",
    desc: "360-degree camera array and radar continuously monitor surroundings. Automatic emergency braking with pedestrian detection.",
    icon: "🛡️",
  },
  {
    title: "OTA Updates",
    desc: "Your car gets smarter over time. New features, performance improvements, and security patches delivered automatically overnight.",
    icon: "📡",
  },
  {
    title: "Connected Always",
    desc: "Built-in LTE + WiFi hotspot, voice-controlled navigation, and seamless smartphone integration via VelocityLink app.",
    icon: "🌐",
  },
  {
    title: "Zero Emissions",
    desc: "100% electric powertrain. No tailpipe, no oil changes, no emissions. Built with sustainably sourced materials inside and out.",
    icon: "🌱",
  },
];

function Technology() {
  return (
    <section id="technology" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Built Different
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Technology that anticipates every need, every mile, every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-5">{feat.icon}</div>
              <h3 className="font-black text-lg text-black mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section
      id="performance"
      className="py-24 px-6 bg-black text-white overflow-hidden relative"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #ef4444 0%, transparent 50%), radial-gradient(circle at 70% 50%, #dc2626 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Performance
              <br />
              <span className="text-red-500">Redefined</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              When engineers say &quot;limited by physics,&quot; we see an
              invitation. Our quad-motor architecture delivers instantaneous
              torque to all four wheels, achieving what combustion engines can
              only dream of.
            </p>

            <div className="space-y-4">
              {[
                { label: "Top Speed", value: "200 mph", pct: 85 },
                { label: "0 to 60 mph", value: "2.9 seconds", pct: 95 },
                { label: "Lateral G-Force", value: "1.1g", pct: 78 },
                { label: "Range at 70mph", value: "520 miles", pct: 90 },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">
                      {stat.label}
                    </span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-600 rounded-full"
                      style={{ width: `${stat.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Dual Motor AWD",
                desc: "Independent front and rear motors for optimal traction in all conditions",
              },
              {
                title: "Adaptive Air Suspension",
                desc: "Automatically adjusts ride height based on speed and terrain",
              },
              {
                title: "Regenerative Braking",
                desc: "Recover up to 30% of energy during braking, extending range",
              },
              {
                title: "Thermal Management",
                desc: "Battery preconditioning ensures peak performance in cold weather",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-bold text-white text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ROADMAP = [
  {
    quarter: "Q2 2025",
    status: "completed",
    title: "Apex Sedan Launch",
    desc: "First deliveries of the Apex Sedan to reservation holders across North America.",
  },
  {
    quarter: "Q4 2025",
    status: "completed",
    title: "SuperCharger Network — Phase 1",
    desc: "3,000 fast-charge stations deployed across 48 states and major Canadian cities.",
  },
  {
    quarter: "Q1 2026",
    status: "active",
    title: "Apex SUV & Sport",
    desc: "Simultaneous launch of the family SUV and performance Sport trim with Neural Autopilot.",
  },
  {
    quarter: "Q3 2026",
    status: "upcoming",
    title: "Apex Truck",
    desc: "Production begins for the Apex Truck, targeting fleet and commercial buyers first.",
  },
  {
    quarter: "Q4 2026",
    status: "upcoming",
    title: "Full Self-Driving — Level 4",
    desc: "Regulatory approval and rollout of Level 4 autonomous driving in 12 major metro areas.",
  },
  {
    quarter: "2027+",
    status: "upcoming",
    title: "International Expansion",
    desc: "European and Asian market entry with right-hand drive variants and local manufacturing.",
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Roadmap
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Where we&apos;ve been, where we are, and where we&apos;re taking you
            next.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {ROADMAP.map((item) => (
              <div key={item.quarter} className="relative flex gap-8 items-start">
                <div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    item.status === "completed"
                      ? "bg-green-500 text-white"
                      : item.status === "active"
                      ? "bg-red-600 text-white animate-pulse"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {item.status === "completed"
                    ? "✓"
                    : item.status === "active"
                    ? "●"
                    : "○"}
                </div>

                <div
                  className={`flex-1 p-6 rounded-2xl border ${
                    item.status === "active"
                      ? "border-red-200 bg-red-50"
                      : item.status === "completed"
                      ? "border-green-100 bg-green-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {item.quarter}
                    </span>
                    {item.status === "active" && (
                      <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold">
                        In Progress
                      </span>
                    )}
                    {item.status === "completed" && (
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold">
                        Done
                      </span>
                    )}
                  </div>
                  <h3 className="font-black text-lg text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 px-6 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "42,000+", label: "Reservations" },
          { value: "$2.4B", label: "Raised" },
          { value: "15,000+", label: "Charging Stations" },
          { value: "94%", label: "Customer Rating" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl md:text-5xl font-black mb-2">
              {stat.value}
            </div>
            <div className="text-red-200 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl text-red-200 mb-8 font-serif">&ldquo;</div>
        <blockquote className="text-2xl md:text-3xl font-black text-black leading-tight mb-8">
          We didn&apos;t build another electric car. We rebuilt the relationship
          between driver and machine from scratch.
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
            JC
          </div>
          <div className="text-left">
            <div className="font-bold text-black">Jordan Chen</div>
            <div className="text-gray-500 text-sm">
              CEO & Co-founder, VelocityAuto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Reserve Your Spot
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Join 42,000+ early adopters. Fully refundable $500 reservation — no
          commitment until delivery.
        </p>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-12">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-black text-green-400 mb-2">
              You&apos;re on the list!
            </h3>
            <p className="text-gray-400">
              We&apos;ll be in touch with your reservation details and delivery
              timeline.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500 transition-colors"
            />
            <select
              className="w-full bg-white/10 border border-white/20 text-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select a model</option>
              {FLEET.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name} — {car.price}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl text-lg transition-all hover:scale-[1.02]"
            >
              Reserve Now — $500 Refundable
            </button>
            <p className="text-gray-600 text-xs">
              By reserving, you agree to our Terms of Service. Reservation is
              fully refundable at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 text-gray-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <div className="text-2xl font-black text-white mb-2">
              Velocity<span className="text-red-600">Auto</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Premium electric vehicles engineered for the road ahead.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {[
              {
                heading: "Vehicles",
                links: ["Apex Sedan", "Apex SUV", "Apex Sport", "Apex Truck"],
              },
              {
                heading: "Company",
                links: ["About", "Careers", "Press", "Investors"],
              },
              {
                heading: "Support",
                links: ["FAQ", "Charging", "Service", "Contact"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <div className="text-white font-semibold mb-3">
                  {col.heading}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2026 VelocityAuto, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Technology />
        <Performance />
        <Stats />
        <Roadmap />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
