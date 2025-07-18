"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Building2,
  Shield,
  Clock,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("jobseekers");

  const stats = [
    { number: "2,500+", label: "Salary Data Points" },
    { number: "87%", label: "Accuracy Rate" },
    { number: "5,000+", label: "Companies" },
    { number: "15k+", label: "Happy Users" },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description:
        "Access comprehensive salary data and market trends to make informed decisions.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Comparisons",
      description:
        "Compare compensation packages across different companies and industries.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description:
        "Your data is encrypted and protected with enterprise-grade security.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Updates",
      description:
        "Get instant notifications about market changes and new opportunities.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Career Growth",
      description: "Track your career progression and salary growth over time.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "Get personalized advice from our team of compensation experts.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description:
        "Set up your professional profile with your experience, skills, and career goals. Our AI will analyze your background to provide personalized insights.",
    },
    {
      step: "02",
      title: "Input Your Data",
      description:
        "Enter your current compensation details, including salary, benefits, and equity. We'll compare it with real-time market data from similar roles.",
    },
    {
      step: "03",
      title: "Get Market Insights",
      description:
        "Receive comprehensive analysis of your market position, including salary ranges, benefits comparison, and industry trends specific to your role.",
    },
    {
      step: "04",
      title: "Take Action",
      description:
        "Use our AI-powered insights to negotiate better compensation or make informed career decisions. Get personalized recommendations for your next steps.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individuals just starting out",
      features: [
        "Basic salary insights",
        "Limited company data",
        "Basic market trends",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29/month",
      description: "Ideal for active job seekers",
      features: [
        "Advanced salary insights",
        "Full company database access",
        "Detailed market analysis",
        "Priority support",
        "Custom reports",
        "Interview preparation",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For companies and teams",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Training sessions",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-black text-black transform -skew-x-12 bg-blue-500 text-white px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                WORTHY.AI
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-black text-lg font-semibold hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#jobseekers"
                className="text-black font-semibold hover:text-blue-600 transition-colors"
              >
                For Job Seekers
              </a>
              <a
                href="#companies"
                className="text-black font-semibold hover:text-blue-600 transition-colors"
              >
                For Companies
              </a>
              <a
                href="#pricing"
                className="text-black font-semibold hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-2 border-black font-bold hover:bg-blue-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                LOG IN
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                SIGN UP
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 font-bold text-black hover:bg-blue-100"
              >
                FEATURES
              </a>
              <a
                href="#jobseekers"
                className="block px-3 py-2 font-bold text-black hover:bg-blue-100"
              >
                FOR JOB SEEKERS
              </a>
              <a
                href="#companies"
                className="block px-3 py-2 font-bold text-black hover:bg-blue-100"
              >
                FOR COMPANIES
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 font-bold text-black hover:bg-blue-100"
              >
                PRICING
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-2 border-black font-bold"
                >
                  LOG IN
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 border-b-4 border-black relative overflow-hidden">
        {/* Neo-brutalism geometric figures */}

        <div className="absolute top-1/2 right-10 w-24 h-12 bg-green-400 border-4 border-black transform skew-x-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-yellow-400 text-black border-2 border-black font-semibold text-lg px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Beta Release
          </Badge>

          <h2 className="text-4xl md:text-7xl font-black text-black mb-6 leading-tight">
            <span className="font-black">KNOW YOUR TRUE </span>
            <span className="bg-blue-500 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black">WORTH</span>
            </span>
            <br className="font-black" />
            <span className="font-black">IN THE JOB MARKET</span>
          </h2>

          <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto font-display font-semibold">
            Make data-driven decisions about your career. Get real-time market
            insights, salary benchmarks, and expert guidance to maximize your
            earning potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold text-lg px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-400 border-b-4 border-black relative overflow-hidden">
        {/* Abstract shapes for stats section */}
        <div className="absolute top-5 left-5 w-8 h-8 bg-black transform rotate-45"></div>
        <div className="absolute top-5 right-5 w-8 h-8 bg-black transform rotate-45"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-6xl font-black text-black mb-2 transform -skew-x-12 font-display">
                  {stat.number}
                </div>
                <div className="text-lg font-display font-semibold text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-white border-b-4 border-black relative overflow-hidden"
      >
        {/* Scattered geometric elements */}

        {/* Human figures working with data */}
        <div className="absolute top-32 left-20 flex flex-col items-center">
          {/* Person at computer */}
          <div className="w-10 h-10 bg-blue-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-6 h-14 bg-yellow-400 border-3 border-black mt-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Arms typing */}
          <div className="absolute top-12 -left-3 w-8 h-2 bg-red-500 border-2 border-black transform rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-12 -right-3 w-8 h-2 bg-red-500 border-2 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Computer screen */}
          <div className="absolute top-6 left-8 w-12 h-8 bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full h-2 bg-green-400 border-b-2 border-black"></div>
          </div>
        </div>

        {/* Person presenting */}
        <div className="absolute bottom-40 right-24 flex flex-col items-center">
          <div className="w-9 h-9 bg-purple-500 border-3 border-black transform rotate-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-5 h-12 bg-blue-600 border-3 border-black mt-1 transform skew-x-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* One arm pointing */}
          <div className="absolute top-10 -right-6 w-10 h-2 bg-yellow-500 border-2 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Chart being presented */}
          <div className="absolute top-2 right-8 w-16 h-12 bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute bottom-1 left-1 w-2 h-6 bg-blue-500 border border-black"></div>
            <div className="absolute bottom-1 left-4 w-2 h-8 bg-yellow-400 border border-black"></div>
            <div className="absolute bottom-1 left-7 w-2 h-4 bg-red-500 border border-black"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
              POWERFUL FEATURES FOR{" "}
              <span className="bg-blue-500 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                YOUR CAREER
              </span>
            </h3>
            <p className="text-xl text-black font-display font-semibold max-w-2xl mx-auto">
              Everything you need to understand and maximize your market value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-blue-100 transition-all"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-white relative">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-black font-display">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black font-display font-medium text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-purple-200 border-b-4 border-black relative overflow-hidden">
        {/* Journey path visual elements */}
        <div className="absolute top-10 left-20 w-16 h-2 bg-black transform rotate-12"></div>
        <div className="absolute top-20 left-32 w-2 h-16 bg-black transform rotate-45"></div>
        <div className="absolute top-32 right-24 w-12 h-12 bg-blue-400 border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

        <div className="absolute bottom-40 right-20 w-20 h-6 bg-red-400 border-4 border-black transform skew-y-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

        {/* Human figures on journey path */}
        <div className="absolute top-24 left-32 flex flex-col items-center">
          {/* Person walking forward */}
          <div className="w-8 h-8 bg-blue-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-4 h-10 bg-yellow-400 border-3 border-black mt-1 transform skew-x-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Walking arms */}
          <div className="absolute top-8 -left-2 w-6 h-2 bg-red-500 border-2 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-8 -right-2 w-6 h-2 bg-red-500 border-2 border-black transform -rotate-45 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Walking legs */}
          <div className="absolute top-16 -left-1 w-2 h-8 bg-green-400 border-2 border-black transform rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-16 right-1 w-2 h-6 bg-green-400 border-2 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        {/* Person climbing steps */}
        <div className="absolute bottom-32 right-32 flex flex-col items-center">
          <div className="w-7 h-7 bg-purple-500 border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-4 h-8 bg-blue-600 border-3 border-black mt-1 transform -skew-x-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Climbing arms */}
          <div className="absolute top-6 -left-3 w-8 h-2 bg-yellow-500 border-2 border-black transform -rotate-30 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-6 -right-3 w-8 h-2 bg-yellow-500 border-2 border-black transform rotate-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Steps */}
          <div className="absolute top-12 right-6 w-4 h-2 bg-gray-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-14 right-8 w-4 h-2 bg-gray-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-16 right-10 w-4 h-2 bg-gray-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
              YOUR JOURNEY TO{" "}
              <span className="bg-yellow-400 text-black px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                BETTER COMPENSATION
              </span>
            </h3>
            <p className="text-xl text-black font-display font-semibold max-w-3xl mx-auto">
              Follow these simple steps to understand your true market value and
              make data-driven career decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-white font-black text-xl relative">
                        {step.step}
                        {/* Step connector line */}
                        {index < steps.length - 1 && (
                          <div className="absolute top-8 left-8 w-1 h-8 bg-black transform rotate-45 hidden md:block"></div>
                        )}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-black font-display">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black font-poppins-600 font-medium text-md">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Section */}
      <section
        id="jobseekers"
        className="py-20 bg-white border-b-4 border-black relative overflow-hidden"
      >
        {/* Interactive section decorative elements */}
        <div className="absolute top-16 left-8 w-6 h-6 bg-blue-500 border-2 border-black transform rotate-45"></div>
        <div className="absolute top-32 right-12 w-4 h-12 bg-yellow-400 border-2 border-black transform -rotate-12"></div>

        {/* Human figures using the platform */}
        <div className="absolute top-16 right-20 flex flex-col items-center">
          {/* Person with laptop */}
          <div className="w-9 h-9 bg-blue-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-5 h-12 bg-yellow-400 border-3 border-black mt-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Arms on laptop */}
          <div className="absolute top-10 -left-2 w-6 h-2 bg-red-500 border-2 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-10 -right-2 w-6 h-2 bg-red-500 border-2 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Laptop */}
          <div className="absolute top-14 -left-1 w-8 h-6 bg-gray-300 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full h-2 bg-blue-400 border-b-2 border-black"></div>
          </div>
        </div>

        {/* Person giving thumbs up */}
        <div className="absolute bottom-24 left-24 flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-4 h-10 bg-purple-400 border-3 border-black mt-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Thumbs up */}
          <div className="absolute top-8 -right-4 w-3 h-6 bg-yellow-500 border-2 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-6 -right-5 w-2 h-3 bg-yellow-500 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
              TRY OUT{" "}
              <span className="bg-blue-500 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                WORTHY.AI
              </span>{" "}
              FOR FREE
            </h3>
            <p className="text-xl text-black font-display font-semibold max-w-2xl mx-auto">
              Log in or create an account to get started. Get one free report
              every week.
            </p>
          </div>

          <div className="flex justify-center mb-8 p-5">
            <div className="flex bg-gradient-to-r from-teal-200 to-blue-300 p-1 rounded-lg border-1 border-blue-300 h-12 w-70">
              <Button
                variant={activeTab === "jobseekers" ? "default" : "ghost"}
                onClick={() => setActiveTab("jobseekers")}
                className={`font-black font-display ${
                  activeTab === "jobseekers"
                    ? "bg-blue-600 font-bold text-white hover:bg-blue-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "font-bold text-black"
                }`}
              >
                For Job Seekers
              </Button>
              <Button
                variant={activeTab === "companies" ? "default" : "ghost"}
                onClick={() => setActiveTab("companies")}
                className={`font-black font-display ${
                  activeTab === "companies"
                    ? "bg-blue-600 font-bold text-white hover:bg-blue-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "font-bold text-black"
                }`}
              >
                For Companies
              </Button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {activeTab === "jobseekers" && (
              <Card className="border-4  border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-black font-bold  text-center font-display">
                    Quickly Assess Candidate Fit and Determine Appropriate
                    Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Company Name
                    </label>
                    <Input
                      placeholder="e.g., Google"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Offered Position
                    </label>
                    <Input
                      placeholder="e.g., Senior Frontend Developer"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Offered Salary (Optional)
                    </label>
                    <Input
                      placeholder="e.g., 120000"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Experience Asked (Years)
                    </label>
                    <Input
                      placeholder="e.g., 5"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Skills Asked
                    </label>
                    <Input
                      placeholder="e.g., React, TypeScript, Node.js"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button className="w-1/2 mt-6 mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold font-display text-lg py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                      CHECK IF IT'S WORTH IT
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "companies" && (
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black text-center font-display">
                    Analyze Candidate Fit and Market Value
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-7">
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Resume Text
                    </label>
                    <Textarea
                      placeholder="Paste resume text here..."
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-h-[120px]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      GitHub Profile Link (Optional)
                    </label>
                    <Input
                      placeholder="GitHub profile URL"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      LinkedIn Profile Link (Optional)
                    </label>
                    <Input
                      placeholder="LinkedIn profile URL"
                      className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button className="w-1/2 mt-6 mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold font-display text-lg py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                      ANALYZE CANDIDATE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-blue-50 border-b-4 border-black relative overflow-hidden"
      >
        {/* Pricing section accent shapes */}
        <div className="absolute top-12 left-12 w-14 h-14 bg-yellow-400 border-4 border-black transform rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute top-24 right-16 w-10 h-10 bg-blue-600 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-18 bg-red-500 border-4 border-black transform -skew-y-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        
        <div className="absolute top-1/2 left-8 w-5 h-5 bg-purple-400 border-2 border-black transform rotate-45"></div>

        {/* Human figures representing different pricing tiers */}
        <div className="absolute top-20 left-16 flex flex-col items-center">
          {/* Basic user */}
          <div className="w-6 h-6 bg-gray-400 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-3 h-8 bg-gray-300 border-2 border-black mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Professional user */}
          <div className="w-10 h-10 bg-blue-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-6 h-14 bg-blue-400 border-3 border-black mt-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Professional badge */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        <div className="absolute top-20 right-16 flex flex-col items-center">
          {/* Enterprise user */}
          <div className="w-12 h-12 bg-purple-500 border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-8 h-16 bg-purple-400 border-4 border-black mt-1 transform skew-x-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Enterprise crown */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-yellow-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 border border-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
              SIMPLE,{" "}
              <span className="bg-yellow-400 text-black px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                TRANSPARENT
              </span>{" "}
              PRICING
            </h3>
            <p className="text-xl text-black font-display font-semibold max-w-2xl mx-auto mt-10">
              Choose the plan that best fits your needs and start your journey
              to better compensation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white relative ${
                  plan.popular ? "ring-6 ring-yellow-400" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-black border-2 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                      MOST POPULAR
                      {/* Popular badge accent */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border border-black rounded-full"></div>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-black text-black relative font-display">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-black text-blue-500 my-4 font-display">
                    {plan.price}
                  </div>
                  <CardDescription className="text-black font-display font-medium">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-black font-display font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-bold font-display text-lg py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-white hover:bg-gray-100 text-black"
                    }`}
                  >
                    GET STARTED
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-200 border-b-4 border-black relative overflow-hidden">
        {/* Newsletter decorative elements */}
        <div className="absolute top-10 left-16 w-12 h-3 bg-blue-400 border-2 border-black transform rotate-6"></div>
        <div className="absolute top-20 right-20 w-3 h-12 bg-yellow-400 border-2 border-black transform -rotate-12"></div>
       

        {/* Human figure reading newsletter */}
        <div className="absolute top-16 right-24 flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="w-4 h-10 bg-yellow-400 border-3 border-black mt-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Arms holding newsletter */}
          <div className="absolute top-8 -left-3 w-8 h-2 bg-red-500 border-2 border-black transform rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute top-8 -right-3 w-8 h-2 bg-red-500 border-2 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          {/* Newsletter/document */}
          <div className="absolute top-12 -left-1 w-8 h-10 bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full h-1 bg-black mt-1"></div>
            <div className="w-3/4 h-1 bg-black mt-1"></div>
            <div className="w-full h-1 bg-black mt-1"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
            STAY UPDATED WITH{" "}
            <span className="bg-blue-500 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              MARKET INSIGHTS
            </span>
          </h3>
          <p className="text-xl text-gray-800 font-display font-semibold mb-8 mt-5">
            Get weekly updates on salary trends, market analysis, and career
            tips
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="border-2 border-black font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold font-display border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              SUBSCRIBE
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-4 font-display font-medium">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-black mb-4 transform -skew-x-12 bg-blue-500 text-white px-3 py-1 inline-block border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] font-display">
                WORTHY.AI
              </h4>
              <p className="text-white font-display font-medium">
                Know your worth in the job market with data-driven insights.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-black mb-4 text-blue-400 font-display">
                FOR JOB SEEKERS
              </h5>
              <ul className="space-y-2 font-display font-medium">
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Salary Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Company Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Worth-It Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Job Matching
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-black mb-4 text-blue-400 font-display">
                FOR COMPANIES
              </h5>
              <ul className="space-y-2 font-display font-medium">
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Candidate Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Talent Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Skill Mapping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Compensation Tools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-black mb-4 text-blue-400 font-display">
                COMPANY
              </h5>
              <ul className="space-y-2 font-display font-medium">
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white font-display font-medium">
              © 2025 Worthy.ai, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white hover:text-blue-400 font-display font-medium"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 font-display font-medium"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 font-display font-medium"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
