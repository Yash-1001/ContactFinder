
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, User, LogIn, Search, Star, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState(null);

  const handleExtractContact = async () => {
    if (!linkedinUrl) return;
    
    setIsLoading(true);
    
    // Simulate API call - in real implementation, this would call your backend
    setTimeout(() => {
      setContactData({
        name: "John Doe",
        email: "john.doe@company.com",
        phone: "+1 (555) 123-4567",
        title: "Senior Software Engineer",
        company: "Tech Company Inc."
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-glow">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">ContactFinder</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/subscription">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all">
                Pricing
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all">
                <LogIn className="w-4 h-4 mr-2" />
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
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30 animate-fade-in" variant="secondary">
            <Star className="w-3 h-3 mr-1" />
            Extract LinkedIn Contacts Instantly
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Find Contact Details from
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> LinkedIn Profiles</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Extract email addresses and phone numbers from LinkedIn profiles instantly. 
            Perfect for sales teams, recruiters, and business development professionals.
          </p>

          {/* Main Input Section */}
          <div className="max-w-2xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Card className="p-6 shadow-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm animate-glow">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="Enter LinkedIn profile URL (e.g., linkedin.com/in/username)"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="flex-1 h-12 text-lg bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-all"
                />
                <Button 
                  onClick={handleExtractContact}
                  disabled={!linkedinUrl || isLoading}
                  className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold hover:scale-105 transition-all"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Extracting...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Extract Contact
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Results */}
          {contactData && (
            <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
              <Card className="shadow-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Contact Found!
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{contactData.name}</h3>
                      <p className="text-gray-300">{contactData.title} at {contactData.company}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="font-medium text-white">{contactData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                        <Phone className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="font-medium text-white">{contactData.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose ContactFinder?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional contact extraction with enterprise-grade accuracy and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all border border-gray-700 bg-gray-800/30 backdrop-blur-sm hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center animate-float">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
              <p className="text-gray-300">Extract contact information in seconds, not hours</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-all border border-gray-700 bg-gray-800/30 backdrop-blur-sm hover:scale-105 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mx-auto mb-4 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Secure & Compliant</h3>
              <p className="text-gray-300">GDPR compliant with enterprise-grade security</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-all border border-gray-700 bg-gray-800/30 backdrop-blur-sm hover:scale-105 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Team Collaboration</h3>
              <p className="text-gray-300">Share and manage contacts with your team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border-y border-gray-700 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Ready to Start Finding Contacts?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of professionals who trust ContactFinder for their lead generation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold hover:scale-105 transition-all">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/subscription">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-blue-500 px-8 py-3 text-lg font-semibold transition-all">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm text-white py-12 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 hover:scale-105 transition-transform">
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

export default Index;
