"use client"


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Heart, Laptop, Cat, Coffee } from "lucide-react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function group15profile() {
  const [currentCatIndex, setCurrentCatIndex] = useState(0)
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: '',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "",
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
          <CardTitle className="text-4xl font-bold text-center text-white relative z-10">Yee Xian</CardTitle>
          <CardDescription className="text-center text-white relative z-10 text-lg">Hardworking | Student | Dog lover</CardDescription>
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
                  Hello! I am Yee Xian, a passionate Student at Serangoon Secondary School. 
                  I love playing different games such as Brawl Stars.
                  I want to study in Singapore Management University in the future!
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
                  <li><Cat className="inline mr-2" /> Gaming</li>
                  <li><Code className="inline mr-2" /> Coding personal projects</li>
                  <li><Coffee className="inline mr-2" /> Drawing</li>
                  
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