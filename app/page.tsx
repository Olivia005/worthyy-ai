"use client";

import { useState, useEffect, useRef } from "react";
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
    { number: "2,500+", label: "Salary Data Points", value: 2500, suffix: "+" },
    { number: "87%", label: "Accuracy Rate", value: 87, suffix: "%" },
    { number: "5,000+", label: "Companies", value: 5000, suffix: "+" },
    { number: "15k+", label: "Happy Users", value: 15000, suffix: "+" },
  ];

  // Counter component for animated numbers
  const Counter = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (isVisible) {
        let startTime: number | undefined;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * value);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isVisible, value, duration]);

    const formatNumber = (num: number): string => {
      if (num >= 1000) {
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k";
      }
      return num.toLocaleString();
    };

    return (
      <span ref={counterRef}>
        {formatNumber(count)}{suffix}
      </span>
    );
  };

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description:
        "Access comprehensive salary data and market trends to make informed decisions.",
      color: "bg-white hover:bg-blue-100 transition-colors",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Comparisons",
      description:
        "Compare compensation packages across different companies and industries.",
      color: "bg-white hover:bg-red-200 transition-colors",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description:
        "Your data is encrypted and protected with enterprise-grade security.",
      color: "bg-white hover:bg-green-100 transition-colors",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Updates",
      description:
        "Get instant notifications about market changes and new opportunities.",
      color: "bg-white hover:bg-pink-200 transition-colors",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Career Growth",
      description: "Track your career progression and salary growth over time.",
      color: "bg-white hover:bg-yellow-200 transition-colors",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "Get personalized advice from our team of compensation experts.",
      color: "bg-white hover:bg-purple-300 transition-colors",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description:
        "Set up your professional profile with your experience, skills, and career goals. Our AI will analyze your background to provide personalized insights.",
      color: "bg-yellow-100 transition-colors",
    },
    {
      step: "02",
      title: "Input Your Data",
      description:
        "Enter your current compensation details, including salary, benefits, and equity. We'll compare it with real-time market data from similar roles.",
      color: "bg-blue-200 transition-colors",
    },
    {
      step: "03",
      title: "Get Market Insights",
      description:
        "Receive comprehensive analysis of your market position, including salary ranges, benefits comparison, and industry trends specific to your role.",
      color: "bg-pink-200 transition-colors",
    },
    {
      step: "04",
      title: "Take Action",
      description:
        "Use our AI-powered insights to negotiate better compensation or make informed career decisions. Get personalized recommendations for your next steps.",
      color: "bg-teal-200 transition-colors",
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
              <h1 className="text-2xl font-black transform -skew-x-12 bg-blue-500 text-white px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-yellow-400 text-black border-2 border-black font-semibold text-lg px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Beta Release
          </Badge>

          <h2 className="text-4xl md:text-7xl font-black text-black mb-6 leading-tight">
            <span className="font-black">KNOW YOUR TRUE </span>
            <span className="bg-blue-500 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse hover:animate-bounce transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-6xl font-black text-black mb-2 transform -skew-x-12 font-display">
                  <Counter value={stat.value} suffix={stat.suffix} />
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
                className={`border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1  transition-all ${feature.color}`}
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
      <section className="py-20 bg-purple-100 border-b-4 border-black relative overflow-hidden">
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
                className={`border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${step.color}`}
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
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Offered Position
                    </label>
                    <Input
                      placeholder="e.g., Senior Frontend Developer"
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md  font-bold text-black mb-2 font-display">
                      Offered Salary (Optional)
                    </label>
                    <Input
                      placeholder="e.g., 120000"
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Experience Asked (Years)
                    </label>
                    <Input
                      placeholder="e.g., 5"
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      Skills Asked
                    </label>
                    <Input
                      placeholder="e.g., React, TypeScript, Node.js"
                      className="border-2 border-black  py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button className="w-full mt-4 mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold font-display text-lg py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
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
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black mb-2 font-display">
                      LinkedIn Profile Link (Optional)
                    </label>
                    <Input
                      placeholder="LinkedIn profile URL"
                      className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                  <div className="flex justify-center">
                     <Button className="w-full mt-4 mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold font-display text-lg py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
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
                className={`border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] bg-white relative ${
                  plan.popular ? "ring-6 ring-yellow-400 " : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-black border-2 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                      MOST POPULAR
                      
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-black mb-4 font-display">
            STAY UPDATED WITH{" "}
            <span className="bg-blue-500 mt-4 text-white px-4 py-2 transform -skew-x-12 inline-block border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
              className="border-2 border-black py-5 font-display font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 font-display border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
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
