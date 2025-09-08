import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Download, Star, Eye, Languages } from "lucide-react";

interface Template {
  id: string;
  title: string;
  description: string;
  category: 'registry' | 'complaint' | 'employment' | 'business';
  language: 'hi' | 'en' | 'both';
  rating: number;
  downloads: number;
  tags: string[];
}

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates: Template[] = [
    {
      id: '1',
      title: 'Property Registration Application',
      description: 'Complete form for property registration in Madhya Pradesh with all required fields',
      category: 'registry',
      language: 'both',
      rating: 4.8,
      downloads: 1234,
      tags: ['Property', 'Registration', 'MP', 'Real Estate']
    },
    {
      id: '2',
      title: 'Consumer Complaint Format',
      description: 'Standard format for filing consumer complaints under Consumer Protection Act',
      category: 'complaint',
      language: 'both',
      rating: 4.6,
      downloads: 987,
      tags: ['Consumer', 'Complaint', 'Protection Act']
    },
    {
      id: '3',
      title: 'Employment Contract Template',
      description: 'Standard employment agreement template compliant with MP labor laws',
      category: 'employment',
      language: 'en',
      rating: 4.7,
      downloads: 756,
      tags: ['Employment', 'Contract', 'Labor Law']
    },
    {
      id: '4',
      title: 'Partnership Deed Format',
      description: 'Partnership agreement template for business partnerships in MP',
      category: 'business',
      language: 'both',
      rating: 4.9,
      downloads: 543,
      tags: ['Partnership', 'Business', 'Agreement']
    },
    {
      id: '5',
      title: 'RTI Application Template',
      description: 'Right to Information application format for MP government departments',
      category: 'complaint',
      language: 'both',
      rating: 4.5,
      downloads: 2134,
      tags: ['RTI', 'Information', 'Government']
    },
    {
      id: '6',
      title: 'Rent Agreement Format',
      description: 'Standard rental agreement template as per MP Rent Control Act',
      category: 'registry',
      language: 'both',
      rating: 4.4,
      downloads: 1876,
      tags: ['Rent', 'Agreement', 'Property']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'registry', name: 'Registry & Property', count: templates.filter(t => t.category === 'registry').length },
    { id: 'complaint', name: 'Complaints & RTI', count: templates.filter(t => t.category === 'complaint').length },
    { id: 'employment', name: 'Employment', count: templates.filter(t => t.category === 'employment').length },
    { id: 'business', name: 'Business', count: templates.filter(t => t.category === 'business').length },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'registry': return 'bg-primary/10 text-primary border-primary/20';
      case 'complaint': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'employment': return 'bg-accent/10 text-accent-foreground border-accent/20';
      case 'business': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getLanguageBadge = (language: string) => {
    switch (language) {
      case 'hi': return { text: 'हिंदी', color: 'bg-orange-100 text-orange-700' };
      case 'en': return { text: 'English', color: 'bg-blue-100 text-blue-700' };
      case 'both': return { text: 'Bilingual', color: 'bg-green-100 text-green-700' };
      default: return { text: 'Unknown', color: 'bg-gray-100 text-gray-700' };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Legal Templates Library</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use legal documents and forms for Madhya Pradesh
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search templates by name, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-6 text-base border-border focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Categories Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="w-full justify-start bg-muted/30 h-12 p-1 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center space-x-2 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template, index) => (
                <Card
                  key={template.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getCategoryColor(template.category)}>
                        {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground">{template.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {template.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {template.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {template.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{template.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Languages className="h-4 w-4" />
                          <Badge className={getLanguageBadge(template.language).color} variant="outline">
                            {getLanguageBadge(template.language).text}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{template.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Fill & Generate
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No templates found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Templates;