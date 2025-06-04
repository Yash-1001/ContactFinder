
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">ContactFinder</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/subscription">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                Pricing
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200" variant="secondary">
            <Star className="w-3 h-3 mr-1" />
            Extract LinkedIn Contacts Instantly
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Find Contact Details from
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> LinkedIn Profiles</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Extract email addresses and phone numbers from LinkedIn profiles instantly. 
            Perfect for sales teams, recruiters, and business development professionals.
          </p>

          {/* Main Input Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="Enter LinkedIn profile URL (e.g., linkedin.com/in/username)"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="flex-1 h-12 text-lg"
                />
                <Button 
                  onClick={handleExtractContact}
                  disabled={!linkedinUrl || isLoading}
                  className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
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
              <Card className="shadow-lg border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Contact Found!
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{contactData.name}</h3>
                      <p className="text-gray-600">{contactData.title} at {contactData.company}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium text-gray-900">{contactData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Phone className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium text-gray-900">{contactData.phone}</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ContactFinder?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional contact extraction with enterprise-grade accuracy and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Extract contact information in seconds, not hours</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">GDPR compliant with enterprise-grade security</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Share and manage contacts with your team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Finding Contacts?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust ContactFinder for their lead generation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/subscription">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
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
