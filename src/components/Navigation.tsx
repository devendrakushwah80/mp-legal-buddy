import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Scale, MessageCircle, FileText, Building2, HelpCircle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Chat", href: "/chat", icon: MessageCircle },
    { name: "Templates", href: "/templates", icon: FileText },
    { name: "Tools", href: "/tools", icon: Scale },
    { name: "Law Firms", href: "/dashboard", icon: Building2 },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  return (
    <nav className="border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">NyaySathiAI</span>
              <span className="text-xs text-muted-foreground">न्याय साथी</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                <Link to={item.href} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
              <Link to="/chat">Ask AI Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <Link to={item.href} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                ))}
                <Button asChild className="mt-4 bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Link to="/chat" onClick={() => setIsOpen(false)}>Ask AI Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;