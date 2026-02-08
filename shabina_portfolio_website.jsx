import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioSite() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}>
      <Head>
        <title>Shabina Bozai | Principal Java Architect</title>
        <meta name="description" content="Principal Software Engineer specializing in Java 21, microservices, cloud modernization, and AI-assisted development." />
      </Head>

      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">Shabina Bozai</h1>
        <div className="flex gap-4 items-center">
          <Link href="#projects">Projects</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#contact">Contact</Link>
          <Button variant="outline" onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"} Mode
          </Button>
        </div>
      </header>

      <main className="p-6 grid gap-16 max-w-6xl mx-auto">

        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Principal Software Engineer & Java Architect</h2>
          <p className="text-xl">Enterprise Modernization • Microservices • Cloud • AI Engineering</p>
          <Button>Download Resume</Button>
        </motion.section>

        {/* About */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p>20+ years modernizing large-scale enterprise platforms across healthcare, finance, and telecom using Java and cloud-native architecture.</p>
          </CardContent>
        </Card>

        {/* Projects */}
        <section id="projects" className="grid md:grid-cols-2 gap-6">
          {["Healthcare Modernization", "Secure API Platform", "Cloud Migration", "AI Dev Automation"].map(p => (
            <Card key={p} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">{p}</h4>
                <p className="text-gray-500 dark:text-gray-400">Case study with business metrics and architecture diagrams.</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Blog */}
        <section id="blog" className="space-y-4">
          <h3 className="text-2xl font-semibold">Engineering Blog</h3>
          <Card><CardContent className="p-4">Scaling Java 21 Microservices with Virtual Threads</CardContent></Card>
          <Card><CardContent className="p-4">Legacy to Cloud-Native Architecture Patterns</CardContent></Card>
        </section>

        {/* Resume */}
        <section id="resume" className="space-y-4">
          <h3 className="text-2xl font-semibold">Resume</h3>
          <p>Download full resume PDF or view experience timeline.</p>
          <Button>Download PDF</Button>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <form className="grid gap-3 max-w-md">
            <input className="p-2 rounded border" placeholder="Name" />
            <input className="p-2 rounded border" placeholder="Email" />
            <textarea className="p-2 rounded border" placeholder="Message" />
            <Button>Send Message</Button>
          </form>
          <p>Email: shabina.bozai@gmail.com</p>
        </section>

      </main>

      {/* Analytics placeholder */}
      <footer className="text-center text-sm p-6 text-gray-500">© 2026 Shabina Bozai • Analytics Enabled</footer>
    </div>
  );
}
