
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Search, Zap, Shield, Users, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      icon: Search,
      description: "Perfect for individuals getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "50 LinkedIn extractions per month",
        "Basic contact information",
        "Email support",
        "Export to CSV",
        "30-day history"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      icon: Zap,
      description: "Best for growing teams and businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "500 LinkedIn extractions per month",
        "Advanced contact details",
        "Priority email & chat support",
        "Export to CSV, Excel & CRM",
        "90-day history",
        "Team collaboration (up to 5 users)",
        "Signal Hire API integration",
        "Custom integrations"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large organizations with custom needs",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited LinkedIn extractions",
        "Premium contact enrichment",
        "24/7 phone & chat support",
        "All export formats",
        "Unlimited history",
        "Unlimited team members",
        "Full Signal Hire API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training"
      ],
      color: "from-amber-500 to-orange-500",
      popular: false
    }
  ];

  const getPrice = (plan: any) => {
    return billingPeriod === "monthly" ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12);
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-glow">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">ContactFinder</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 transition-all">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 hover:from-purple-600/30 hover:to-pink-600/30 border-purple-500/30 animate-slide-up" variant="secondary">
            <Sparkles className="w-3 h-3 mr-1 animate-bounce-slow" />
            Choose Your Perfect Plan
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Supercharge Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Lead Generation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Unlock the power of LinkedIn contact extraction with Signal Hire API integration. 
            Start free and scale as your business grows.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gray-800/50 rounded-lg p-1 shadow-lg border border-gray-700 backdrop-blur-sm">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                  billingPeriod === "yearly"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-bounce-slow">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const PlanIcon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up hover:scale-105 ${
                    plan.popular ? "ring-2 ring-purple-500 ring-opacity-50 scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium animate-shimmer">
                      <Star className="w-4 h-4 inline-block mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`${plan.popular ? "pt-12" : "pt-8"} pb-8`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mx-auto mb-4 flex items-center justify-center animate-float`}>
                      <PlanIcon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-300 text-center">{plan.description}</p>
                    
                    <div className="text-center mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">
                          ${getPrice(plan)}
                        </span>
                        <span className="text-gray-400 ml-1">
                          /{billingPeriod === "monthly" ? "month" : "month"}
                        </span>
                      </div>
                      {billingPeriod === "yearly" && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                            Save {getSavings(plan)}% yearly
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 border border-green-500/30">
                            <Check className="w-3 h-3 text-green-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Button
                        className={`w-full h-12 font-semibold hover:scale-105 transition-all ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white animate-glow"
                            : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white"
                        }`}
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Why ContactFinder?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
              Trusted by thousands of professionals worldwide for accurate contact extraction with Signal Hire API
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-gray-700 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm hover:scale-105 transition-all animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Enterprise Security</h3>
              <p className="text-gray-300">GDPR compliant with bank-level encryption and security protocols</p>
            </Card>
            
            <Card className="text-center p-8 border-gray-700 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm hover:scale-105 transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-300">Extract contacts in seconds with Signal Hire API integration</p>
            </Card>
            
            <Card className="text-center p-8 border-gray-700 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm hover:scale-105 transition-all animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Team Collaboration</h3>
              <p className="text-gray-300">Share contacts and collaborate seamlessly with your entire team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is there a free trial available?",
                a: "Yes! All plans come with a 14-day free trial. No credit card required to get started."
              },
              {
                q: "How does Signal Hire API integration work?",
                a: "Our platform seamlessly integrates with Signal Hire API to provide accurate contact information from LinkedIn profiles."
              },
              {
                q: "How accurate is the contact extraction?",
                a: "With Signal Hire API integration, we achieve 95%+ accuracy rates for email extraction and 85%+ for phone numbers."
              },
              {
                q: "Is the service GDPR compliant?",
                a: "Yes, we are fully GDPR compliant and follow all data protection regulations strictly."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join thousands of professionals who trust ContactFinder for their lead generation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/signup">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-glow">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ContactFinder</span>
            </div>
            <p className="text-gray-400">© 2024 ContactFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Subscription;
