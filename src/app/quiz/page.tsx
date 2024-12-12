"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, HelpingHand, Pill, Activity } from "lucide-react"

const quizThemes = [
  {
    id: "help",
    title: "How to Help Someone Suffering",
    icon: HelpingHand,
    questions: [
      {
        question: "What's the first step in helping someone with substance abuse?",
        options: [
          "Ignore the problem",
          "Confront them aggressively",
          "Show support and express concern",
          "Tell all their friends and family"
        ],
        correctAnswer: 2
      },
      {
        question: "Which approach is NOT recommended when talking to someone about their substance abuse?",
        options: [
          "Being judgmental and critical",
          "Listening without interrupting",
          "Offering specific examples of your concerns",
          "Suggesting professional help"
        ],
        correctAnswer: 0
      },
      {
        question: "What should you do if someone refuses help for their substance abuse?",
        options: [
          "Force them into treatment",
          "Give up and walk away",
          "Continue to offer support and resources",
          "Threaten to cut ties with them"
        ],
        correctAnswer: 2
      },
      {
        question: "Which is a good way to support someone in recovery?",
        options: [
          "Constantly check up on them",
          "Encourage them to stay busy with work",
          "Offer to attend support meetings with them",
          "Tell them to just stay strong"
        ],
        correctAnswer: 2
      },
      {
        question: "What are the avenue(s) for help in Singapore?",
        options: [
          "National Addictions Management Service (NAMS)",
          "Singapore Anti-Narcotics Association (SANA)t",
          "We Care Community Services",
          "Alcoholics Anonymous Singapore",
		  "Narcotics Anonymous Singapore",
          "All of the above"
        ],
        correctAnswer: 5
		},
		{
			question: "What is NAMS Helpline?",
			options: [
			  "6732 6837",
			  "6514 2037",
			  "6138 0397",
			  "6632 4717",
			  "None of the above"
			],
			correctAnswer: 0
			}
    ]
  },
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
  },
  {
    id: "alternatives",
    title: "Healthy Alternatives to Drug Use",
    icon: Activity,
    questions: [
      {
        question: "Which of these is a healthy way to manage stress instead of using drugs?",
        options: [
          "Binge-watching TV",
          "Regular exercise",
          "Isolating yourself",
          "Eating junk food"
        ],
        correctAnswer: 1
      },
      {
        question: "What's a good alternative to using drugs for socializing?",
        options: [
          "Staying home alone",
          "Joining a sports team or club",
          "Sleeping all day",
          "Spending all your time online"
        ],
        correctAnswer: 1
      },
      {
        question: "Which activity can help improve mood naturally?",
        options: [
          "Complaining to friends",
          "Spending time in nature",
          "Watching violent movies",
          "Eating lots of sugar"
        ],
        correctAnswer: 1
      },
      {
        question: "What's a healthy way to deal with emotional pain?",
        options: [
          "Using drugs to numb the pain",
          "Ignoring your feelings",
          "Talking to a therapist or counselor",
          "Getting into arguments"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of these is a positive way to find excitement in life?",
        options: [
          "Taking risks with illegal substances",
          "Learning a new skill or hobby",
          "Shoplifting for an adrenaline rush",
          "Picking fights with strangers"
        ],
        correctAnswer: 1
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {quizThemes.map((theme) => (
        <Button
          key={theme.id}
          onClick={() => handleThemeSelection(theme.id)}
          className="flex flex-col items-center justify-center h-40 text-center"
          variant="outline"
        >
          <theme.icon className="w-8 h-8 mb-2" />
          <span className="font-semibold">{theme.title}</span>
          {previousScores[theme.id] !== undefined && (
            <span className="text-sm mt-2">
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
        <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1} of {currentTheme.questions.length}</h2>
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
          <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="mt-4">
            Submit Answer
          </Button>
        )}
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-md ${selectedAnswer === currentTheme.questions[currentQuestion].correctAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
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
      <div className="text-center">
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
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-fixed bg-cover bg-[url('/quizbg.jpg')] p-5">
      <div className="w-full max-w-3xl">
        <Card className="backdrop-blur-sm bg-white/80 shadow-xl">
          <CardHeader className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg" />
            <CardTitle className="text-3xl font-bold text-center text-white relative z-10">Substance Abuse Awareness Quiz</CardTitle>
            <CardDescription className="text-center text-white relative z-10">Choose a theme to test your knowledge</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            {!selectedTheme && renderThemeSelection()}
            {selectedTheme && !quizCompleted && renderQuiz()}
            {quizCompleted && renderQuizCompleted()}
          </CardContent>
          <CardFooter className="flex justify-center relative z-10">
            {selectedTheme && (
              quizCompleted ? (
                <div className="space-x-4">
                  <Button onClick={() => setSelectedTheme(null)} variant="outline">Choose Another Theme</Button>
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
    </div>
  )
}
