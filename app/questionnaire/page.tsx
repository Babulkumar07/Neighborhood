"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface UserPreferences {
  budget: number[]
  walkability: number[]
  safety: number[]
  nightlife: number[]
  familyFriendly: number[]
  publicTransit: number[]
  lifestyle: string
  priorities: string[]
}

const steps = [
  {
    title: "Budget & Housing",
    description: "Tell us about your housing budget preferences",
  },
  {
    title: "Lifestyle Preferences",
    description: "What matters most in your daily life?",
  },
  {
    title: "Safety & Environment",
    description: "Your comfort and security preferences",
  },
  {
    title: "Priorities",
    description: "Rank what's most important to you",
  },
]

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [preferences, setPreferences] = useState<UserPreferences>({
    budget: [2500],
    walkability: [7],
    safety: [8],
    nightlife: [5],
    familyFriendly: [5],
    publicTransit: [6],
    lifestyle: "",
    priorities: [],
  })

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      localStorage.setItem("userPreferences", JSON.stringify(preferences))
      router.push("/results")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updatePreferences = (key: keyof UserPreferences, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8 text-lg">
            <div>
              <Label className="text-lg font-semibold">Monthly Housing Budget</Label>
              <div className="mt-4">
                <Slider
                  value={preferences.budget}
                  onValueChange={(value) => updatePreferences("budget", value)}
                  max={5000}
                  min={500}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-md text-gray-600 mt-3">
                  <span>₹500</span>
                  <span className="font-semibold">₹{preferences.budget[0]}</span>
                  <span>₹5000+</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold">Walkability Importance</Label>
              <p className="text-md text-gray-600 mb-4">How important is it to walk to daily amenities?</p>
              <Slider
                value={preferences.walkability}
                onValueChange={(value) => updatePreferences("walkability", value)}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-md text-gray-600 mt-3">
                <span>Not Important</span>
                <span className="font-semibold">{preferences.walkability[0]}/10</span>
                <span>Very Important</span>
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-8 text-lg">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What describes your lifestyle best?</Label>
              <RadioGroup
                value={preferences.lifestyle}
                onValueChange={(value) => updatePreferences("lifestyle", value)}
                className="space-y-3"
              >
                {[
                  { value: "young-professional", label: "Young Professional - Career focused, social" },
                  { value: "family", label: "Family - Schools, parks, family activities" },
                  { value: "student", label: "Student - Budget conscious, near campus" },
                  { value: "retiree", label: "Retiree - Quiet, accessible, healthcare" },
                  { value: "remote-worker", label: "Remote Worker - Home office, cafes, flexible" },
                ].map((item) => (
                  <div key={item.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={item.value} id={item.value} />
                    <Label htmlFor={item.value}>{item.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-lg font-semibold">Nightlife & Entertainment</Label>
              <p className="text-md text-gray-600 mb-4">How important are restaurants, bars, and nightlife?</p>
              <Slider
                value={preferences.nightlife}
                onValueChange={(value) => updatePreferences("nightlife", value)}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-md text-gray-600 mt-3">
                <span>Quiet Area</span>
                <span className="font-semibold">{preferences.nightlife[0]}/10</span>
                <span>Vibrant Scene</span>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-8 text-lg">
            <div>
              <Label className="text-lg font-semibold">Safety Priority</Label>
              <p className="text-md text-gray-600 mb-4">How important is low crime and safety?</p>
              <Slider
                value={preferences.safety}
                onValueChange={(value) => updatePreferences("safety", value)}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-md text-gray-600 mt-3">
                <span>Flexible</span>
                <span className="font-semibold">{preferences.safety[0]}/10</span>
                <span>Very Important</span>
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold">Family-Friendly Features</Label>
              <p className="text-md text-gray-600 mb-4">Schools, parks, family activities</p>
              <Slider
                value={preferences.familyFriendly}
                onValueChange={(value) => updatePreferences("familyFriendly", value)}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-md text-gray-600 mt-3">
                <span>Not Needed</span>
                <span className="font-semibold">{preferences.familyFriendly[0]}/10</span>
                <span>Essential</span>
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold">Public Transportation</Label>
              <p className="text-md text-gray-600 mb-4">Access to buses, trains, metro</p>
              <Slider
                value={preferences.publicTransit}
                onValueChange={(value) => updatePreferences("publicTransit", value)}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-md text-gray-600 mt-3">
                <span>Not Important</span>
                <span className="font-semibold">{preferences.publicTransit[0]}/10</span>
                <span>Essential</span>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-8 text-lg">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What are your top priorities? (Select up to 3)</Label>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Low cost of living",
                  "Short commute",
                  "Walkable amenities",
                  "Safe neighborhood",
                  "Good schools",
                  "Nightlife & dining",
                  "Public transportation",
                  "Parks & recreation",
                  "Cultural activities",
                  "Diverse community",
                ].map((priority) => (
                  <Label key={priority} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.priorities.includes(priority)}
                      onChange={(e) => {
                        if (e.target.checked && preferences.priorities.length < 3) {
                          updatePreferences("priorities", [...preferences.priorities, priority])
                        } else if (!e.target.checked) {
                          updatePreferences(
                            "priorities",
                            preferences.priorities.filter((p) => p !== priority),
                          )
                        }
                      }}
                      className="h-5 w-5"
                    />
                    <span>{priority}</span>
                  </Label>
                ))}
              </div>
              <p className="text-md text-gray-600 mt-3">Selected: {preferences.priorities.length}/3</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return preferences.lifestyle !== ""
      case 3:
        return preferences.priorities.length > 0
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <Progress value={((currentStep + 1) / steps.length) * 100} className="w-full h-3" />
          <div className="flex justify-between text-md text-gray-600 mt-2">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
        </div>

        <Card className="shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
            <CardDescription className="text-md">{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}

            <div className="flex justify-between mt-10">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 0} className="px-6 py-3 text-md">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>

              <Button onClick={handleNext} disabled={!canProceed()} className="px-6 py-3 text-md">
                {currentStep === steps.length - 1 ? "Find My Matches" : "Next"}
                {currentStep < steps.length - 1 && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
