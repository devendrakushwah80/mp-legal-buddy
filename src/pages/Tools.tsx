import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, MapPin, FileSearch, Clock, Scale, Building } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "Fee Calculator",
      description: "Calculate court fees, stamp duty, and registration charges for MP",
      status: "Available",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: MapPin,
      title: "Court Locator",
      description: "Find nearby courts, registrar offices, and legal services",
      status: "Available",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: FileSearch,
      title: "RTI Tracker",
      description: "Track your Right to Information applications and deadlines",
      status: "Coming Soon",
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      icon: Clock,
      title: "Case Tracker",
      description: "Monitor your legal cases and court hearing dates",
      status: "Coming Soon",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Scale,
      title: "Legal Deadline Calculator",
      description: "Calculate important legal deadlines and limitation periods",
      status: "Available",
      color: "bg-orange-100 text-orange-700"
    },
    {
      icon: Building,
      title: "Government Directory",
      description: "Contact information for MP government departments and officials",
      status: "Available",
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Practical Legal Tools</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential tools and calculators for legal matters in Madhya Pradesh
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${tool.color} group-hover:scale-110 transition-transform`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tool.status === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <CardTitle className="text-foreground">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6">
                  {tool.description}
                </CardDescription>
                <Button 
                  className="w-full"
                  variant={tool.status === 'Available' ? 'default' : 'outline'}
                  disabled={tool.status !== 'Available'}
                >
                  {tool.status === 'Available' ? 'Use Tool' : 'Coming Soon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;