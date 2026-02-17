"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            River Labs
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#products"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            About
          </a>
          <a
            href="https://poker-prep.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Try PokerPrep →
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="https://poker-prep.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden px-3 py-1.5 bg-cyan-500 text-white text-sm font-medium rounded-lg"
        >
          Try Free
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Orbs */}
      <div className="orb orb-cyan w-96 h-96 top-1/4 -left-48 opacity-60" />
      <div className="orb orb-blue w-80 h-80 top-1/3 right-0 opacity-50" />
      <div className="orb orb-purple w-64 h-64 bottom-1/4 left-1/3 opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI-Native Micro-SaaS Studio
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Building AI Tools{" "}
          <span className="gradient-text">That Just Work</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Micro-SaaS products for poker players, job seekers, and developers.
          No bloat. No complexity. Just focused tools powered by modern AI.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200"
          >
            About Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { label: "Products", value: "2+" },
            { label: "AI-Powered", value: "100%" },
            { label: "Free to Try", value: "Always" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border border-slate-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-slate-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ─── Products ────────────────────────────────────────────────────────────────
const products = [
  {
    emoji: "🃏",
    name: "PokerPrep",
    tagline: "Master poker with AI-powered training",
    description:
      "Study preflop charts, analyze hands, and get personalized coaching from an AI poker expert. Built for players serious about improving their game — from beginners to seasoned grinders.",
    features: [
      "AI hand analysis with strategic feedback",
      "Interactive GTO preflop charts",
      "Personalized coaching sessions",
      "Progress tracking & analytics",
    ],
    status: "live",
    statusLabel: "Live",
    link: "https://poker-prep.vercel.app",
    linkLabel: "Start Training →",
    pricing: "Free · Premium $9.99/mo",
    gradient: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
    accentColor: "text-green-400",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  {
    emoji: "📄",
    name: "Resume Scorer",
    tagline: "Get your resume ATS-ready in minutes",
    description:
      "Upload your resume and get instant AI feedback on formatting, keywords, ATS compatibility, and impact. Stop guessing — get a score and actionable improvements before you apply.",
    features: [
      "AI scoring across 6 key criteria",
      "ATS compatibility analysis",
      "Keyword optimization tips",
      "Industry-specific recommendations",
    ],
    status: "beta",
    statusLabel: "Beta",
    link: "https://resume-scorer.vercel.app",
    linkLabel: "Score My Resume →",
    pricing: "Free · Pro $5/mo",
    gradient: "from-blue-500/20 to-indigo-600/20",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    emoji: "🎯",
    name: "Mission Control",
    tagline: "Project management meets AI intelligence",
    description:
      "Track your projects, get AI-driven interventions when you're stuck, and stay on top of everything that matters. Built for builders who move fast and need clarity at a glance.",
    features: [
      "Real-time project & task tracking",
      "AI-powered intervention system",
      "Activity timeline & history",
      "Multi-project organization",
    ],
    status: "internal",
    statusLabel: "Coming Soon",
    link: "#",
    linkLabel: "Join Waitlist",
    pricing: "TBD — Public beta soon",
    gradient: "from-purple-500/20 to-violet-600/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
];

function Products() {
  return (
    <section id="products" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tools Built to{" "}
            <span className="gradient-text">Make a Difference</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Each product solves one problem well. No subscriptions you forget
            about. No features you never use.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative rounded-2xl border ${product.borderColor} bg-gradient-to-br ${product.gradient} p-8 card-hover flex flex-col`}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{product.emoji}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${product.badgeColor}`}
                >
                  {product.statusLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {product.name}
              </h3>
              <p className={`text-sm font-medium mb-4 ${product.accentColor}`}>
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${product.accentColor}`}>✓</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <p className="text-slate-500 text-xs mb-4">{product.pricing}</p>

              {/* CTA */}
              {product.status !== "internal" ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 bg-white/10 hover:bg-white/20 text-white border border-white/10`}
                >
                  {product.linkLabel}
                </a>
              ) : (
                <button className="block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed">
                  {product.linkLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why ─────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: "⚡",
    title: "No Bloat",
    desc: "We build focused tools that do one thing exceptionally well. Every feature earns its place.",
  },
  {
    icon: "🤖",
    title: "AI-First",
    desc: "Every product is built around modern AI — GPT-4, Claude, and beyond. Not bolted on. Core.",
  },
  {
    icon: "💸",
    title: "Fair Pricing",
    desc: "Free tiers that actually work. Premium tiers that genuinely earn their price. No gotchas.",
  },
  {
    icon: "🚀",
    title: "Ship Fast",
    desc: "We iterate based on real user feedback. Small team means we move fast and stay nimble.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Your data is yours. We don't sell it, share it, or mine it for ads. Full stop.",
  },
  {
    icon: "🛠️",
    title: "Developer Built",
    desc: "Made by developers who use these tools themselves. The attention to detail shows.",
  },
];

function Why() {
  return (
    <section id="why" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Why River Labs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by Developers,{" "}
            <span className="gradient-text">Powered by AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We&apos;re not a VC-backed startup racing to scale. We&apos;re
            builders who make tools we&apos;d actually want to use.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/6 transition-colors group"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                {v.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stack ───────────────────────────────────────────────────────────────────
const stackItems = [
  { name: "Next.js", role: "Frontend Framework" },
  { name: "TypeScript", role: "Type Safety" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "OpenAI GPT-4", role: "AI Core" },
  { name: "Firebase", role: "Backend & Auth" },
  { name: "Polar.sh", role: "Payments (MoR)" },
  { name: "Vercel", role: "Hosting & Edge" },
  { name: "Claude", role: "AI Orchestration" },
];

function Stack() {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-10">
          How We Build
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8 bg-white/3"
            >
              <span className="text-white text-sm font-medium">{item.name}</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 p-12 text-center relative overflow-hidden">
          {/* Orb */}
          <div className="orb orb-cyan w-64 h-64 -top-32 left-1/2 -translate-x-1/2 opacity-30" />

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🌊</span>
            </div>

            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who&apos;s Behind This?
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              River Labs is a solo developer studio founded by{" "}
              <span className="text-white font-medium">Yair Hazan</span>, a
              full-stack developer passionate about AI, poker, and building
              tools that solve real problems.
            </p>

            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Started in 2026, River Labs is a collection of micro-SaaS
              experiments turned real products. We&apos;re not building the next
              unicorn — we&apos;re building useful tools, one at a time. Every
              product is tested in the real world and improved based on actual
              feedback.
            </p>

            <blockquote className="text-slate-400 italic text-lg max-w-xl mx-auto mb-10 border-l-4 border-cyan-500/50 pl-6 text-left">
              &quot;We&apos;re not building the next unicorn. We&apos;re
              building tools that solve real problems — one micro-SaaS at a
              time. No VC pressure, no bloat, just focused products that
              work.&quot;
            </blockquote>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://twitter.com/JarvisJame_jj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span>𝕏</span>
                <span>@JarvisJame_jj</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:yair99hazan@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span>✉</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="orb orb-blue w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          All products have free tiers. No credit card required to try. Just
          sign up and start improving.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://poker-prep.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            🃏 Start with PokerPrep
          </a>
          <a
            href="https://resume-scorer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200"
          >
            📄 Score My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <span className="font-bold text-white">River Labs</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI-powered tools for builders. Micro-SaaS that just works.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                { label: "PokerPrep", href: "https://poker-prep.vercel.app" },
                {
                  label: "Resume Scorer",
                  href: "https://resume-scorer.vercel.app",
                },
                { label: "Mission Control", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Changelog", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                {
                  label: "𝕏 Twitter",
                  href: "https://twitter.com/JarvisJame_jj",
                },
                {
                  label: "✉ Email",
                  href: "mailto:yair99hazan@gmail.com",
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 River Labs. Built with ❤️ and AI.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <Nav />
      <Hero />
      <Products />
      <Why />
      <Stack />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
