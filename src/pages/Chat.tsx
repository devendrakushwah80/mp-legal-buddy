import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Mic, Download, UserCheck, Bot, Languages } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  citations?: string[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्कार! मैं NyaySathiAI हूं। मैं मध्य प्रदेश के कानूनी मामलों में आपकी सहायता कर सकता हूं। आप हिंदी या अंग्रेजी में प्रश्न पूछ सकते हैं।',
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('hi');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'hi' 
          ? 'यह एक नमूना उत्तर है। वास्तविक AI उत्तर के लिए, बैकएंड API से जुड़ाव आवश्यक है। आपका प्रश्न दर्ज किया गया है।'
          : 'This is a sample response. For actual AI responses, backend API integration is required. Your question has been recorded.',
        sender: 'ai',
        timestamp: new Date(),
        citations: ['MP Civil Procedure Code', 'Consumer Protection Act']
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const quickActions = [
    { text: 'Property Registration', action: () => setInputText('How to register property in MP?') },
    { text: 'Consumer Complaint', action: () => setInputText('How to file consumer complaint?') },
    { text: 'Employment Issues', action: () => setInputText('What are my rights as an employee?') },
    { text: 'Legal Notice', action: () => setInputText('How to send legal notice?') }
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">NyaySathiAI Chat</h1>
              <p className="text-sm text-muted-foreground">AI Legal Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
              className="flex items-center space-x-2"
            >
              <Languages className="h-4 w-4" />
              <span>{language === 'hi' ? 'हिं' : 'EN'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <Card
                className={`max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground'
                    : 'bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    {message.sender === 'ai' && (
                      <Bot className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <UserCheck className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className={`text-sm ${
                        message.sender === 'user' ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {message.text}
                      </p>
                      {message.citations && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {message.citations.map((citation, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {citation}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <Card className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-secondary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="border-t bg-muted/30 p-4">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm text-muted-foreground mb-3">Quick Questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="text-sm hover:bg-primary/10 hover:text-primary hover:border-primary"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t bg-card p-4 shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={language === 'hi' ? 'अपना कानूनी प्रश्न यहाँ लिखें...' : 'Type your legal question here...'}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="pr-20 py-6 text-base border-border focus:ring-primary focus:border-primary"
                disabled={isTyping}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-muted-foreground hover:text-primary"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-muted-foreground hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-6 py-6 bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {language === 'hi' 
              ? 'NyaySathiAI से कानूनी सलाह केवल सामान्य मार्गदर्शन के लिए है।'
              : 'Legal advice from NyaySathiAI is for general guidance only.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;