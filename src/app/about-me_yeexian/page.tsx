"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Bug, GraduationCap, Heart, Laptop, Headset, Brush } from 'lucide-react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { Boxes } from "@/components/ui/background-boxes";


export default function Group15Profile() {
  const [currentCatIndex, setCurrentCatIndex] = useState(0)
  const testimonials = [
    {
      quote: "Hiking Japan with my family thought me about resistence and never giving up.",
      name: "Never Say Never",
      designation: "Exploring Japan",
      src: "/yx2.jpeg",
    },
    {
      quote: "Drawing brings me peace and comfort, inspiring me to continuously nurture my creativity and strive for improvement.",
      name: "Gaining Serenity",
      designation: "Name of drawing",
      src: "/yx1.png",
    },
    {
      quote: "Gaming, especially Brawl Stars, keeps my mind active and engaged, fueling my competitive spirit as I always strive to win.",
      name: "Level Up My Mind",
      designation: "Brawl Stars and its benefits",
      src: "/yx3.png",
    },
  ]

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes/>

      <div className="flex flex-col items-start z-30 w-full max-w-7xl mx-auto py-12 px-4 relative">
        <div className="w-full space-y-8 relative ">
          <div className="flex flex-col gap-8 items-start relative ">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCatIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg relative"
                />
              </AnimatePresence>
            </div>
            <div className="w-full text-2xl text-white relative">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>

          <Card className="w-full backdrop-blur-md bg-white/10 shadow-xl overflow-hidden relative">
            <CardHeader className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75" />
              <CardTitle className="text-4xl font-bold text-center text-white relative z-10">Yee Xian</CardTitle>
              <CardDescription className="text-center text-white relative z-10 text-lg">Hardworking | Student | Dog lover</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="about" className="w-full relative">
                <TabsList className="grid w-full grid-cols-4 bg-white/20 relative ">
                  <TabsTrigger value="about">About Me</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="interests">Interests</TabsTrigger>
                </TabsList>
                <div className="mt-4 p-4 bg-white/20 rounded-md text-white">
                  <TabsContent value="about">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center"><Code className="mr-2" /> About Me</h2>
                    <p className="mb-4">
                      Hello! I am Yee Xian, a passionate Student at Serangoon Secondary School.<br />
                      I love playing different games such as Brawl Stars.<br />
                      I want to study in Singapore Management University in the future just like my buddy Eugene!
                    </p>
                  </TabsContent>
                  <TabsContent value="education">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center"><GraduationCap className="mr-2" /> Education</h2>
                    <p className="mb-4">
                      <strong>Serangoon Secondary School</strong><br />
                      Subject Combination: English | Chinese | Computing | E & A Math | Combine Physics & Chemistry<br />
                      Expected Graduation: 2025
                    </p>
                    <p>
                      Studying to go to polytechnic to study IT related courses to 
                      further improve myself.
                    </p>
                  </TabsContent>
                  <TabsContent value="skills">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center"><Laptop className="mr-2" /> Skills</h2>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Programming Languages: Python</li>
                      <li>Gaming</li>
                      <li>Drawing</li>
                      <li>Problem Solving</li>
                      <li>HTML trained</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="interests">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center"><Heart className="mr-2" /> Interests</h2>
                    <ul className="list-disc pl-6 mb-4">
                      <li><Headset className="inline mr-2" /> Gaming</li>
                      <li><Bug className="inline mr-2" /> Coding personal projects</li>
                      <li><Brush className="inline mr-2" /> Drawing</li>
                    </ul>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        
      </div>
    </div>
  </div>
  )
}



