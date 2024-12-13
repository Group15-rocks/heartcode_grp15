"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, HelpingHand, Pill, Activity } from "lucide-react"
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
const quizThemes = [
  {
    id: "common-drugs",
    title: "Common substance abuse and effects",
    icon: Pill,
    questions: [
      {
        question: "Which of these is NOT a common type of abused substance in Singapore?",
        options: [
          "Alcohol",
		  "Methamphetamine (Ice)",
		  "Heroin",
		  "Cannabis",
		  "New Psychoactive Substances (NPS)",
          "Broccoli"
        ],
        correctAnswer: 5
      },
      {
        question: "In Singapore, death penalty for people convicted of trafficking more than?",
        options: [
          "5 grams of heroin",
          "20 grams of cocaine",
          "200 grams of meth",
          "500 grams of cannabis"
        ],
        correctAnswer: 3
      },
      {
        question: "Why should you avoid drugs?",
        options: [
          "Health risks",
          "Legal consequences",
          "Social impact",
          "Financial burden",
		  "Career implications",
		  "Quality of life",
		  "All of the above",
        ],
        correctAnswer: 6
      },
      {
        question: "What is a common short-term effect of Cannabis use?",
        options: [
          "Increased energy",
          "Improved memory",
          "Altered sense of time",
          "Better decision-making"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of these is a prescription drug that's commonly abused?",
        options: [
			"Nausea", 
			"Vomiting", 
			"Constipation", 
			"Pruritus", 
			"Dizziness", 
			"Dry mouth", 
			"Sedation",
			"All of the above",
		  ],
        correctAnswer: 7
      }
    ]
  }
]


export default function ThematicSubstanceAbuseQuiz() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [previousScores, setPreviousScores] = useState<Record<string, number>>({})

  useEffect(() => {
    const storedScores = localStorage.getItem('quizScores')
    if (storedScores) {
      setPreviousScores(JSON.parse(storedScores))
    }
  }, [])

  const handleThemeSelection = (themeId: string) => {
    setSelectedTheme(themeId)
    resetQuiz()
  }

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null && selectedTheme) {
      setShowFeedback(true)
      const currentTheme = quizThemes.find(theme => theme.id === selectedTheme)
      if (currentTheme && selectedAnswer === currentTheme.questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setShowFeedback(false)
    if (selectedTheme) {
      const currentTheme = quizThemes.find(theme => theme.id === selectedTheme)
      if (currentTheme && currentQuestion < currentTheme.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setQuizCompleted(true)
        const newScores = { ...previousScores, [selectedTheme]: score }
        setPreviousScores(newScores)
        localStorage.setItem('quizScores', JSON.stringify(newScores))
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const renderThemeSelection = () => (
    <div className="">
      {quizThemes.map((theme) => (
        <Button
          key={theme.id}
          onClick={() => handleThemeSelection(theme.id)}
          className="flex flex-col items-center justify-center h-40 text-center"
          variant="outline"
        >
          <theme.icon className="w-8 h-8 mb-2 items-center" />
          <span className="font-semibold">{theme.title}</span>
          {previousScores[theme.id] !== undefined && (
            <span className="text-sm mt-2 items-center">
              Previous Score: {previousScores[theme.id]}/{quizThemes.find(t => t.id === theme.id)?.questions.length}
            </span>
          )}
        </Button>
      ))}
    </div>
  )

  const renderQuiz = () => {
    const currentTheme = quizThemes.find(theme => theme.id === selectedTheme)
    if (!currentTheme) return null

    return (
      <>
        <Progress value={(currentQuestion + 1) / currentTheme.questions.length * 100} className="mb-4" />
        <h2 className="inset-0 bottom-0 text-xl font-semibold mb-4">Question {currentQuestion + 1} of {currentTheme.questions.length}</h2>
        <p className="mb-4">{currentTheme.questions[currentQuestion].question}</p>
        <RadioGroup onValueChange={(value) => handleAnswerSelection(parseInt(value))} value={selectedAnswer?.toString()}>
          {currentTheme.questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showFeedback} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        {!showFeedback && (
          <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="mt-4 items-center">
            Submit Answer
          </Button>
        )}
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-md items-center ${selectedAnswer === currentTheme.questions[currentQuestion].correctAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {selectedAnswer === currentTheme.questions[currentQuestion].correctAnswer ? (
              <div className="flex items-center">
                <CheckCircle className="mr-2" />
                <span>Correct! Great job!</span>
              </div>
            ) : (
              <div className="flex items-center">
                <AlertCircle className="mr-2" />
                <span>Incorrect. The correct answer is: {currentTheme.questions[currentQuestion].options[currentTheme.questions[currentQuestion].correctAnswer]}</span>
              </div>
            )}
          </div>
        )}
      </>
    )
  }

  const renderQuizCompleted = () => {
    const currentTheme = quizThemes.find(theme => theme.id === selectedTheme)
    if (!currentTheme) return null

    return (
      <div className="inset-0 bottom-0 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">Your score: {score} out of {currentTheme.questions.length}</p>
        <Progress value={score / currentTheme.questions.length * 100} className="mb-4" />
        {score === currentTheme.questions.length ? (
          <p className="text-green-600 font-semibold">Perfect score! You have excellent knowledge about {currentTheme.title.toLowerCase()}.</p>
        ) : score >= currentTheme.questions.length / 2 ? (
          <p className="text-yellow-600 font-semibold">Good job! You have a solid understanding of {currentTheme.title.toLowerCase()}, but there's still room for improvement.</p>
        ) : (
          <p className="text-red-600 font-semibold">It looks like you could benefit from learning more about {currentTheme.title.toLowerCase()}. Consider reviewing some educational resources.</p>
        )}
      </div>
    )
  }

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-3 items-center bg-gradient-to-br py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-1x2"
      >
      <br />

      <div className="max-w-2xl items-center">
        <Card className="backdrop-blur-sm bg-white/80 shadow-xl items-center">
          <CardHeader className="relative items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg items-center" />
            <CardTitle className="text-3x1 font-bold text-center items-center text-white relative z-10">Common Drugs Abuse</CardTitle>
            <CardDescription className="text-center items-center text-white relative z-10">Test your knowledge</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 items-center">
            {!selectedTheme && renderThemeSelection()}
            {selectedTheme && !quizCompleted && renderQuiz()}
            {quizCompleted && renderQuizCompleted()}
          </CardContent>
          <CardFooter className="flex justify-center relative z-10 items-center">
            {selectedTheme && (
              quizCompleted ? (
                <div className="space-x-4">
                  <a href="/quiz" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Choose Another Theme</a>
                  <Button onClick={resetQuiz}>Retake This Quiz</Button>
                </div>
              ) : (
                showFeedback && (
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion < quizThemes.find(theme => theme.id === selectedTheme)!.questions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </Button>
                )
              )
            )}
          </CardFooter>
        </Card>
      </div>
      </motion.h1>
      </LampContainer>    
  )
}
