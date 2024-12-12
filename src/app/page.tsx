"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, Phone, HeartHandshake, Brain, Frown, Smile } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const [showHelpline, setShowHelpline] = useState(false)
  const words: string[] = ["METH", "ICE", "WEED"];
  return (
    <div>
      <div className="bg-no-repeat bg-fixed bg-cover bg-[url('/nodrug.jpg')]">
      <div className="flex flex-col justify-center h-dvh ">

        <p className="[text-shadow:_0_8px_8px_rgb(220_20_60_/_0.8)] text-white text-5xl leading-snug font-manrope font-extrabold font-bold text-5xl text-center">
          Do drugs if you want to end up like him
        </p>
        
        <div className="[text-shadow:_0_8px_8px_rgb(220_20_60_/_0.8)] text-white font-bold text-center text-2xl">
          Call us at +65 9123 4567 if you are currently consuming <FlipWords className="text-white" words={words}/>
        </div>

      </div>
      </div>
      
      <div className="min-h-screen bg-no-repeat bg-fixed bg-cover bg-[url('/scary.jpg')] p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl backdrop-blur-sm bg-white/90 shadow-xl">
        <CardHeader className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-lg" />
          <CardTitle className="text-3xl font-bold text-center text-white relative z-10">Substance Abuse in Singapore</CardTitle>
          <CardDescription className="text-center text-white relative z-10">Information, Help, and Alternatives</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="help">Seeking Help</TabsTrigger>
              <TabsTrigger value="reasons">Why Avoid</TabsTrigger>
              <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
            </TabsList>
            <ScrollArea className="h-[400px] mt-4 rounded-md border p-4">
              <TabsContent value="info">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><AlertCircle className="mr-2" /> Substance Abuse in Singapore</h2>
                <p className="mb-4">Substance abuse is a significant concern in Singapore, affecting individuals, families, and communities. Common substances of abuse include:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Alcohol</li>
                  <li>Methamphetamine (Ice)</li>
                  <li>Heroin</li>
                  <li>Cannabis</li>
                  <li>New Psychoactive Substances (NPS)</li>
                </ul>
                <p>Singapore has strict laws against drug use and trafficking, with severe penalties for offenders. However, the government also recognizes addiction as a medical condition and provides various rehabilitation programs.</p>
              </TabsContent>
              <TabsContent value="help">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><HeartHandshake className="mr-2" /> Seeking Help</h2>
                <p className="mb-4">If you or someone you know is struggling with substance abuse, there are several avenues for help in Singapore:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>National Addictions Management Service (NAMS)</li>
                  <li>Singapore Anti-Narcotics Association (SANA)</li>
                  <li>We Care Community Services</li>
                  <li>Alcoholics Anonymous Singapore</li>
                  <li>Narcotics Anonymous Singapore</li>
                </ul>
                <Button 
                  onClick={() => setShowHelpline(!showHelpline)}
                  className="w-full mt-4"
                >
                  {showHelpline ? 'Hide Helpline' : 'Show NAMS Helpline'}
                </Button>
                {showHelpline && (
                  <div className="mt-4 p-5 bg-green-100 text-green-800 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="mr-2" />
                      <span>NAMS Helpline: 6732 6837</span> 
                    </div>
                    <Button variant="outline" onClick={() => setShowHelpline(false)}>
                      Close
                    </Button>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="reasons">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Brain className="mr-2" /> Why Avoid Substance Abuse</h2>
                <p className="mb-4">There are numerous reasons to avoid substance abuse:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Health risks: substance abuse can lead to serious physical and mental health problems.</li>
                  <li>Legal consequences: Singapore has strict laws against drug use and possession.</li>
                  <li>Social impact: Addiction can strain relationships with family and friends.</li>
                  <li>Financial burden: Substance abuse can be expensive and impact your financial stability.</li>
                  <li>Career implications: Drug use can negatively affect job performance and career prospects.</li>
                  <li>Quality of life: Addiction can significantly reduce overall life satisfaction and well-being.</li>
                  <li>Death penalty: People convicted of trafficking more than 15 grams of heroin, 30 grams of cocaine, 250 grams of meth, or 500 grams of cannabis</li>
                </ul>
                <p>By avoiding substance abuse, you protect your health, relationships, and future opportunities.</p>
              </TabsContent>
              <TabsContent value="alternatives">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Smile className="mr-2" /> Healthy Alternatives</h2>
                <p className="mb-4">Instead of turning to substances, consider these healthier ways to cope with stress and societal pressures:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Exercise: Regular physical activity can reduce stress and improve mood.</li>
                  <li>Meditation and mindfulness: These practices can help manage anxiety and promote relaxation.</li>
                  <li>Hobbies: Engage in activities you enjoy to relieve stress and find fulfillment.</li>
                  <li>Social connections: Build and maintain strong relationships with friends and family.</li>
                  <li>Professional help: Seek counseling or therapy to address underlying issues.</li>
                  <li>Healthy lifestyle: Maintain a balanced diet, regular sleep schedule, and avoid excessive caffeine.</li>
                  <li>Volunteering: Helping others can provide a sense of purpose and fulfillment.</li>
                  <li>Learning new skills: Challenge yourself and boost confidence by acquiring new abilities.</li>
                </ul>
                <p>Remember, it's okay to ask for help when you're struggling. These alternatives can lead to a healthier, more fulfilling life.</p>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>
    </div>

      
    </div>
  );
}