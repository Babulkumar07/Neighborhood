import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  MapPin,
  Brain,
  UserCheck,
  Globe
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/neighborhoods" className="text-gray-600 hover:text-gray-900">
                Browse
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Find Your Perfect Neighborhood
            <span className="text-blue-600"> Near LPU</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
            Stop guessing where to live. Our smart matching algorithm analyzes your lifestyle preferences and helps you discover the perfect neighborhood.
          </p>
          <div className="mt-6">
            <Link href="/questionnaire">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
                Start Matching
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Highlights Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose NeighborFit?</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <Card className="hover:shadow-lg transition-shadow rounded-2xl p-4">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Smart Matching Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 text-center">
                  Uses real-time data from census, crime stats, and walkability scores to suggest ideal neighborhoods.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-lg transition-shadow rounded-2xl p-4">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-3 mb-3">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Tailored Just for You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 text-center">
                  Personalized matches based on your lifestyle — student, family, or professional.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-lg transition-shadow rounded-2xl p-4">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-3 mb-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Comprehensive Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 text-center">
                  Factors like safety, cost, transport, amenities, and demographics — all in one match score.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="hover:shadow-lg transition-shadow rounded-2xl p-4">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-red-100 rounded-full p-3 mb-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Local Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 text-center">
                  Every neighborhood comes with detailed commute, amenities, hotspots and real local feel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About You",
                desc: "Complete our 4-step questionnaire about your lifestyle preferences and priorities.",
                color: "blue"
              },
              {
                step: "2",
                title: "We Analyze Data",
                desc: "Our algorithm processes real neighborhood data to find your best matches.",
                color: "green"
              },
              {
                step: "3",
                title: "Get Your Matches",
                desc: "Receive personalized neighborhood recommendations with detailed insights.",
                color: "purple"
              }
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="text-center">
                <div className={`bg-${color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold text-${color}-600`}>{step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Find Your Perfect Neighborhood?</CardTitle>
              <CardDescription>
                Join hundreds of students and families who’ve already matched with their ideal home near LPU.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/questionnaire">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Start Your Match Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
