import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="max-w-6xl mx-auto grid gap-10">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Shabina Khatoon Bozai</h1>
          <p className="text-xl">Lead / Principal Software Engineer • Java Architect</p>
          <p className="text-gray-600">Enterprise Modernization | Microservices | Cloud | AI-Assisted Development</p>
          <div className="flex justify-center gap-4">
            <Button>View Resume</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>

        {/* About */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              Senior technology leader with 20+ years of experience designing scalable Java platforms, modernizing legacy systems,
              and leading enterprise modernization initiatives in healthcare, telecom, and finance.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6">
          {["Java & Spring", "Microservices & Cloud", "DevOps & Kubernetes", "Security", "AI-Assisted Development", "Enterprise Modernization"].map(skill => (
            <Card key={skill} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 text-center font-medium">{skill}</CardContent>
            </Card>
          ))}
        </div>

        {/* Experience */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Featured Experience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lead Engineer at Delta Dental of Michigan – Java 21 microservices modernization</li>
              <li>Built high-volume messaging systems at Ericsson</li>
              <li>Led COBOL-to-Java transformations at Deloitte, Wipro, Infosys</li>
            </ul>
          </CardContent>
        </Card>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {["Healthcare Platform Modernization", "Secure API Platform", "Cloud Migration Initiative", "AI Productivity Automation"].map(project => (
            <Card key={project} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold text-lg">{project}</h3>
                <p className="text-gray-600">High-impact enterprise solution showcasing modern Java architecture.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Let’s Connect</h2>
            <p>Email: Shabina.bozai@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/shabina-bozai</p>
            <Button className="mt-2">Get In Touch</Button>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}
