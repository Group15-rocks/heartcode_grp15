"use client"


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Heart, Laptop, Brush, Cake, Footprints } from "lucide-react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function group15profile() {
  const [currentCatIndex, setCurrentCatIndex] = useState(0)
  const testimonials = [
    {
      quote:
        "Participating in the high elements, managed to overcome my fear of height.",
      name: "Overcoming my fear",
      designation: "Outwards Bound Singapore",
      src: "/e3.jpg",
    },
    {
      quote:
        "Visted Singapore zoo on my school excursion see unique types of creatures.",
      name: "My homies",
      designation: "Singapore Zoo",
      src: "/e1.jpg",
    },
    {
      quote:
        "These are the souvenirs I have bought from my first school trip away from my family.",
      name: "Being Independent",
      designation: "Training to be a man",
      src: "/e2.jpg",
    },
 ];
  return (
    <div className="min-h-screen bg-[url('/brawl.png')] p-4 bg-no-repeat bg-cover bg-center bg-auto flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCatIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center"
          
        />
      </AnimatePresence>
      <Card className="w-full max-w-4xl backdrop-blur-md bg-white/30 shadow-xl overflow-hidden relative z-10">
        <CardHeader className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75" />
          <CardTitle className="text-4xl font-bold text-center text-white relative z-10">Eugene</CardTitle>
          <CardDescription className="text-center text-white relative z-10 text-lg">Goal-oriented | Curious | Kind</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/50">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>
            <div className="mt-4 p-4 bg-white/50 rounded-md">
              <TabsContent value="about">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Code className="mr-2" /> About Me</h2>
                <p className="mb-4">
                  Hello! I am Eugene, a passionate Student at Yishun Secondary School. 
                  I love coding using the python language and hope to learn C++ soon!
                  I want to study in Singapore Management University in the future just like my buddy Yee Xian!
                </p>
              </TabsContent>
              <TabsContent value="education">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><GraduationCap className="mr-2" /> Education</h2>
                <p className="mb-4">
                  <strong>Serangoon Secondary School</strong><br />
                  Subject Combination: English | Chinese | Computing | E & A Math | Physics | Chemistry | Geography<br />
                  Expected Graduation: 2025
                </p>
                <p>
                  Currently aiming for Ngee Ann polytechnic Cybersecurity course 
                  to further expand on my knowledge!
                  
                </p>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Laptop className="mr-2" /> Skills</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Programming Languages: Python</li>
                  <li>Drawing</li>
                  <li>Receptive towards feedbacks</li>
                  <li>Communicating skills</li>
                  <li>HTML trained</li>
                </ul>
              </TabsContent>
              <TabsContent value="interests">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Heart className="mr-2" /> Interests</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li><Cake className="inline mr-2" /> Baking</li>
                  <li><Footprints className="inline mr-2" /> Hiking</li>
                  <li><Brush className="inline mr-2" /> Drawing</li>
                  
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>

    
   <AnimatedTestimonials testimonials={testimonials} />;
  </div>
    
  )
}