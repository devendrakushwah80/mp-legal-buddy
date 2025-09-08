import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, BookOpen, ExternalLink, Phone, Mail } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How accurate is the AI legal advice?",
      answer: "NyaySathiAI provides general legal guidance based on Madhya Pradesh laws. While our AI is trained on comprehensive legal data, it's designed for informational purposes. For specific legal matters, we recommend consulting with qualified lawyers through our platform."
    },
    {
      question: "Can I use the generated documents in court?",
      answer: "Our templates are legally compliant and widely accepted, but we recommend having them reviewed by a qualified lawyer before submission. The AI-generated documents serve as strong starting points that often require minimal modifications."
    },
    {
      question: "Is my data secure on the platform?",
      answer: "Yes, we follow strict data protection protocols. All conversations and documents are encrypted, and we never share your personal information with third parties. Your privacy is our top priority."
    },
    {
      question: "How do I connect with a real lawyer?",
      answer: "If you need professional legal assistance, you can escalate any AI conversation to our network of verified lawyers. They can provide personalized advice and representation for your specific case."
    },
    {
      question: "What languages are supported?",
      answer: "NyaySathiAI supports both Hindi and English. You can switch between languages anytime during your conversation, and our AI will respond in your preferred language."
    },
    {
      question: "Are there any fees for using the service?",
      answer: "Basic AI guidance and templates are free for all users. Premium features like lawyer consultations, advanced document generation, and priority support require a subscription."
    }
  ];

  const resources = [
    {
      title: "Madhya Pradesh Legal Resources",
      description: "Official legal documents and acts specific to MP",
      icon: BookOpen,
      external: true
    },
    {
      title: "Consumer Protection Guidelines",
      description: "Comprehensive guide to consumer rights and complaint procedures",
      icon: BookOpen,
      external: true
    },
    {
      title: "Property Registration Process",
      description: "Step-by-step guide for property registration in MP",
      icon: BookOpen,
      external: false
    },
    {
      title: "RTI Application Guide",
      description: "How to file Right to Information requests effectively",
      icon: BookOpen,
      external: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Help & Support</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and access legal resources
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <HelpCircle className="h-6 w-6 mr-3 text-primary" />
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Legal Resources */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-primary" />
                  Legal Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <resource.icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-base">{resource.title}</CardTitle>
                          {resource.external && (
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm mb-4">
                          {resource.description}
                        </CardDescription>
                        <Button size="sm" variant="outline" className="text-sm">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Quick Help */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Need More Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? Get in touch with our support team.
                </p>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">Support Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-muted-foreground">Saturday: 10 AM - 4 PM</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">support@nyaysathiai.com</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91-755-XXX-XXXX</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Legal Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent legal matters requiring immediate attention.
                </p>
                <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  Emergency Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;