// ============================
// package.json (ROOT)
// ============================
{
  "name": "shabina-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jest": "^29.0.0"
  }
}

// ============================
// app/layout.tsx
// ============================

import "./globals.css";

export const metadata = {
  title: "Shabina Bozai | Principal Java Architect",
  description: "Enterprise modernization, Java 21, microservices, cloud architecture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// ============================
// app/page.tsx
// ============================

import PortfolioSite from "../components/PortfolioSite";

export default function Home() {
  return <PortfolioSite />;
}

// ============================
// components/PortfolioSite.tsx
// ============================

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function NavLink({ href, children }) {
  return <a href={href} className="hover:underline">{children}</a>;
}

export default function PortfolioSite() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}>

      <header className="flex justify-between p-6 max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">Shabina Bozai</h1>
        <nav className="flex gap-4">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </nav>
      </header>

      <main className="p-6 grid gap-16 max-w-6xl mx-auto">

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold">Principal Software Engineer & Java Architect</h2>
          <p>Enterprise Modernization • Microservices • Cloud</p>
        </motion.section>

        <section id="projects">
          <h3>Projects</h3>
          <ul>
            <li>Healthcare Modernization</li>
            <li>Secure API Platform</li>
            <li>Cloud Migration</li>
            <li>AI Automation</li>
          </ul>
        </section>

        <section id="blog">
          <h3>Blog</h3>
          <p>Scaling Java 21 Microservices</p>
        </section>

        <section id="resume">
          <h3>Resume</h3>
          <button>Download PDF</button>
        </section>

        <section id="contact">
          <h3>Contact</h3>
          <p>Email: shabina.bozai@gmail.com</p>
        </section>

      </main>

      <footer className="text-center p-6">© 2026 Shabina Bozai</footer>
    </div>
  );
}

// ============================
// __tests__/PortfolioSite.test.tsx
// ============================

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioSite from "../components/PortfolioSite";

test("renders navigation links", () => {
  render(<PortfolioSite />);
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("Blog")).toBeInTheDocument();
  expect(screen.getByText("Resume")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

test("renders section anchors", () => {
  render(<PortfolioSite />);
  expect(document.querySelector("#projects")).toBeTruthy();
  expect(document.querySelector("#blog")).toBeTruthy();
  expect(document.querySelector("#resume")).toBeTruthy();
  expect(document.querySelector("#contact")).toBeTruthy();
});

test("dark mode toggles", () => {
  render(<PortfolioSite />);
  const toggle = screen.getByText(/dark/i);
  fireEvent.click(toggle);
  expect(document.body.textContent).toContain("Light");
});
