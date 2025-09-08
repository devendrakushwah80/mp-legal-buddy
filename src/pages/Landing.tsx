import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, FileText, Scale, Building2, MapPin, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-legal-ai.jpg";

const Landing = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Legal Guidance",
      description: "Get instant answers to your legal questions in Hindi and English",
      href: "/chat"
    },
    {
      icon: FileText,
      title: "Legal Templates",
      description: "Access registry forms, complaints, and business documents",
      href: "/templates"
    },
    {
      icon: Scale,
      title: "Practical Tools",
      description: "Fee calculators, court locators, and RTI tracking",
      href: "/tools"
    },
    {
      icon: Building2,
      title: "Lawyer Dashboard",
      description: "Professional workflow management for law firms",
      href: "/dashboard"
    },
    {
      icon: MapPin,
      title: "Registry Help",
      description: "Step-by-step guidance for property registrations",
      href: "/templates?category=registry"
    }
  ];

  const trustSignals = [
    "MP Laws Compliant",
    "Trusted by Law Firms",
    "Bilingual Support",
    "Professional Grade"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  NyaySathiAI
                  <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-2">
                    न्याय साथी - Your AI Legal Assistant
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Get instant legal guidance, templates, and professional support for Madhya Pradesh laws. 
                  Available in Hindi and English.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg"
                >
                  <Link to="/chat" className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Ask a Question</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Link to="/templates" className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>View Templates</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                >
                  <Link to="/dashboard" className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5" />
                    <span>Law Firm Login</span>
                  </Link>
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="AI Legal Assistant Interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Legal Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI guidance to document generation, everything you need for legal matters in MP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-primary hover:text-primary-hover hover:bg-primary/10 p-0"
                  >
                    <Link to={feature.href}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Legal Help?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with a simple question or browse our templates. NyaySathiAI is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-gray-100 shadow-lg"
            >
              <Link to="/chat" className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Start Chat Now</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/help">
                <span>Learn More</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;