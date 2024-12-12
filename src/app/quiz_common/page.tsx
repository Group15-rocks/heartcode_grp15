"use client"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function how() {
  return (
    <div>
    <Card className="w-full max-w-4xl backdrop-blur-sm bg-white/90 shadow-xl">
    <CardHeader className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-lg" />
      <CardTitle className="text-3xl font-bold text-center text-white relative z-10">Substance Abuse in Singapore</CardTitle>
      <CardDescription className="text-center text-white relative z-10">Information, Help, and Alternatives</CardDescription>
    </CardHeader>
    </Card>
    </div>
)}