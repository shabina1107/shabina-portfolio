// Updated PortfolioSite.tsx to improve user experience with a professional, user-friendly layout.
// Features: Tailwind-based responsive layout, sticky navigation, section cards, buttons, spacing, hover effects, and smooth scrolling.

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-blue-500 transition-colors duration-300">
      {children}
    </a>
  );
}

export default function PortfolioSite() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}>

      {/* Sticky Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-900 z-50 shadow-md">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="font-bold text-2xl">Shabina Bozai</h1>
          <nav className="flex gap-6 items-center">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 py-20"
        >
          <h2 className="text-5xl font-bold">Principal Software Engineer & Java Architect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Enterprise Modernization • Microservices • Cloud • AI Development
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Download Resume
          </button>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h3 className="text-3xl font-semibold border-b-2 pb-2">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Healthcare Modernization",
              "Secure API Platform",
              "Cloud Migration",
              "AI Automation",
            ].map((p) => (
              <div key={p} className="p-6 border rounded-lg hover:shadow-lg transition">
                <h4 className="font-semibold text-xl mb-2">{p}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A detailed case study highlighting architecture, performance, and outcomes.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-6">
          <h3 className="text-3xl font-semibold border-b-2 pb-2">Blog</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Scaling Java 21 Microservices with Virtual Threads
            </div>
            <div className="p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Legacy to Cloud-Native Architecture Patterns
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="space-y-4">
          <h3 className="text-3xl font-semibold border-b-2 pb-2">Resume</h3>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Download PDF
          </button>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h3 className="text-3xl font-semibold border-b-2 pb-2">Contact</h3>
          <form className="grid gap-4 max-w-md">
            <input className="p-3 rounded border" placeholder="Name" />
            <input className="p-3 rounded border" placeholder="Email" />
            <textarea className="p-3 rounded border" placeholder="Message" />
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Email: shabina.bozai@gmail.com</p>
        </section>
      </main>

      <footer className="text-center p-6 border-t mt-20 text-gray-500">
        © 2026 Shabina Bozai
      </footer>
    </div>
  );
}
