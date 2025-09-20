import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ExternalLink, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  links?: Array<{ text: string; url: string; isExternal?: boolean }>;
}

interface FAQResponse {
  text: string;
  links?: Array<{ text: string; url: string; isExternal?: boolean }>;
  keywords: string[];
}

const FAQ_RESPONSES: Record<string, FAQResponse> = {
  roles: {
    text: "Great question! We have several exciting opportunities at MeetMux:\n\n• Early Member - Join our founding community\n• AIML Intern - Work on AI/ML features\n• Product Developer Intern - Build core platform\n• Growth & Marketing Intern - Scale our community\n\nWould you like to know more about any specific role?",
    links: [{ text: "Apply Now", url: "#signup", isExternal: false }],
    keywords: ["roles", "job", "intern", "career", "opportunity", "position", "work", "hiring", "employment"]
  },
  
  founder: {
    text: "Meet our inspiring founder! 🌟 From rural Karnataka to building MeetMux - it's a story of resilience, passion, and social innovation. Discover how humble beginnings led to revolutionizing digital connections.",
    links: [{ text: "Read Founder's Story", url: "/founders-desk", isExternal: false }],
    keywords: ["founder", "story", "founder's", "desk", "background", "origin", "creator", "ceo", "leadership"]
  },
  
  referral: {
    text: "Invite friends and earn amazing rewards! 🎁\n\n✨ Get 50 credits per friend signup\n🎉 Unlock exclusive perks\n💎 Premium badges & discounts\n📱 Easy sharing with unique link\n\nStart earning today!",
    links: [{ text: "Start Referring", url: "/referrals-rewards", isExternal: false }],
    keywords: ["referral", "invite", "friends", "rewards", "credits", "earn", "share", "program"]
  },
  
  contact: {
    text: "You can reach us through:\n\n📧 Email: hello@meetmux.com\n📱 Phone: +91-9876543210\n\nWe typically respond within 24 hours!",
    links: [
      { text: "Email Us", url: "mailto:hello@meetmux.com", isExternal: true },
      { text: "Call Us", url: "tel:+919876543210", isExternal: true }
    ],
    keywords: ["contact", "email", "phone", "reach", "support", "help", "talk", "call", "message"]
  },
  
  about: {
    text: "MeetMux is an AI-powered activity-first social platform connecting people through real-world events and activities. We help you discover people around you based on real-time and planned activities like sports, movies, or travel, bringing meaningful, in-person connections back into your life.",
    links: [{ text: "Learn More", url: "/", isExternal: false }],
    keywords: ["what", "meetmux", "about", "platform", "app", "social", "activities", "events", "connect", "ai"]
  },
  
  earlybird: {
    text: "Exciting! Join our Early Bird Program for exclusive benefits:\n\n✨ Early access to new features\n🎉 Exclusive community events\n💝 Special rewards and credits\n🚀 Direct feedback channel to founders\n\nSign up now to get started!",
    links: [
      { text: "Join Early Bird Program", url: "#signup", isExternal: false },
      { text: "Learn About Benefits", url: "/", isExternal: false }
    ],
    keywords: ["early", "bird", "program", "join", "signup", "register", "beta", "access", "exclusive"]
  },
  
  pricing: {
    text: "MeetMux is completely free to download and use! 🎉\n\n✅ All core features included\n✅ No hidden charges\n✅ Connect & chat for free\n✅ Join unlimited events\n\nWe believe in making authentic connections accessible to everyone.",
    links: [{ text: "Download App", url: "#signup", isExternal: false }],
    keywords: ["pricing", "cost", "price", "free", "payment", "money", "subscription", "plan"]
  },
  
  safety: {
    text: "Safety is our top priority! We ensure safe connections through:\n\n🔐 AI-powered selfie verification\n⭐ Social Score ratings\n📊 Activity history tracking\n💬 Community feedback system\n🚨 In-app reporting tools\n🛡️ 24/7 safety monitoring",
    keywords: ["safety", "safe", "secure", "verification", "trust", "protection", "security", "report"]
  },
  
  verification: {
    text: "Our advanced AI verification system ensures authenticity:\n\n📸 Real-time selfie verification\n🤖 AI facial recognition technology\n✅ Profile photo comparison\n🔄 Continuous trust scoring\n\nThis builds a trustworthy community for everyone!",
    keywords: ["verification", "verify", "selfie", "ai", "authentic", "trust", "photo", "facial", "recognition"]
  },

  features: {
    text: "MeetMux offers amazing features:\n\n🎯 Activity-based matching\n📍 Location-aware events\n💬 Real-time chat\n⭐ User ratings & reviews\n🎉 Event creation tools\n📱 Mobile-first experience",
    links: [{ text: "See All Features", url: "/", isExternal: false }],
    keywords: ["features", "functionality", "what", "can", "do", "matching", "events", "chat"]
  },

  blog: {
    text: "Check out our latest insights and tips:\n\n📝 Event hosting guides\n💡 Social connection tips\n🚀 Platform updates\n📊 Community stories\n\nStay updated with the latest!",
    links: [{ text: "Visit Blog", url: "/resources", isExternal: false }],
    keywords: ["blog", "resources", "articles", "tips", "guides", "news", "updates", "stories"]
  },
  
  download: {
    text: "Ready to join MeetMux? 📱\n\n🍎 iOS App - Coming Soon!\n🤖 Android App - In Development\n💻 Web Platform - Available Now\n\nSign up for early access and be the first to know when we launch!",
    links: [{ text: "Get Early Access", url: "#signup", isExternal: false }],
    keywords: ["download", "app", "ios", "android", "mobile", "install", "get", "launch"]
  },
  
  events: {
    text: "Discover amazing events on MeetMux! 🎉\n\n🏃‍♂️ Sports & Fitness activities\n🎬 Movies & Entertainment\n✈️ Travel & Adventures\n🍕 Food & Social gatherings\n🎨 Creative workshops\n\nJoin events or create your own!",
    links: [{ text: "Browse Events Calendar", url: "/events", isExternal: false }],
    keywords: ["events", "activities", "sports", "movies", "travel", "food", "social", "gathering", "create", "join", "calendar"]
  }
};

// Fuzzy matching function
const fuzzyMatch = (query: string, keywords: string[]): number => {
  const queryLower = query.toLowerCase();
  let score = 0;
  
  keywords.forEach(keyword => {
    if (queryLower.includes(keyword) || keyword.includes(queryLower)) {
      score += 10;
    }
    // Single word matches
    const queryWords = queryLower.split(' ');
    queryWords.forEach(word => {
      if (word.length > 2 && keyword.includes(word)) {
        score += 5;
      }
    });
  });
  
  return score;
};

export const ChatBot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [chatSize, setChatSize] = useState({ width: 320, height: 500 });
  const [isResizing, setIsResizing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your MeetMux assistant! 🚀 I know everything about MeetMux - ask me about:\n\n💼 Career opportunities & roles\n📞 Contact information\n🚀 Platform features & safety\n🎉 Early Bird Program benefits\n💰 Pricing & plans\n📝 Resources & blog\n🏆 Founder's story\n🎁 Referral rewards\n\nJust type what you want to know!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  // Initialize speech synthesis
  useState(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  });

  // Voice input functionality
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    }
  };

  // Text to speech functionality
  const speakText = (text: string) => {
    if (speechSynthesis) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      // Create new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.7;
      
      speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Find best matching FAQ response using fuzzy matching
    const query = inputText.toLowerCase();
    let bestMatch: { key: string; response: FAQResponse; score: number } | null = null;

    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      const score = fuzzyMatch(query, response.keywords);
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { key, response, score };
      }
    }

    let responseText = "I'm your comprehensive MeetMux guide! 🤖 Ask me about:\n\n💼 Careers & roles\n📞 Contact & support\n🚀 Platform features\n🎉 Early Bird Program\n💰 Pricing & safety\n📱 App download\n📝 Blog & resources\n🏆 Founder's story\n🎁 Referral rewards\n🎯 Events & activities\n\nJust type any topic!";
    let responseLinks: Array<{ text: string; url: string; isExternal?: boolean }> = [];

    if (bestMatch) {
      responseText = bestMatch.response.text;
      responseLinks = bestMatch.response.links || [];
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isBot: true,
        timestamp: new Date(),
        links: responseLinks
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Speak the response only if enabled
      if (speechEnabled) {
        speakText(responseText);
      }
    }, 500);

    setInputText("");
  };

  const handleLinkClick = (url: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(url, "_blank");
    } else if (url.startsWith("#")) {
      // Handle modal/signup triggers
      const signupEvent = new CustomEvent("openSignup");
      window.dispatchEvent(signupEvent);
    } else {
      navigate(url);
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-strong bg-gradient-primary hover:shadow-medium transition-all duration-300 z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
        variant="hero"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      <Card 
        className={`fixed bottom-6 right-6 shadow-strong transition-all duration-300 z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} bg-card border-primary/20 resize-both overflow-hidden min-w-[300px] min-h-[400px] max-w-[600px] max-h-[800px]`}
        style={{ 
          width: `${chatSize.width}px`, 
          height: `${chatSize.height}px`,
          resize: 'both'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">MeetMux Assistant</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-gradient-primary text-white'
                  }`}
                >
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>
                      {line}
                      {index < message.text.split('\n').length - 1 && <br />}
                    </div>
                  ))}
                  
                  {/* Render clickable links */}
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          onClick={() => handleLinkClick(link.url, link.isExternal)}
                          className={`text-xs w-full justify-between ${
                            message.isBot 
                              ? 'border-primary/30 hover:border-primary text-primary hover:bg-primary/10' 
                              : 'border-white/30 hover:border-white text-white hover:bg-white/10'
                          }`}
                        >
                          {link.text}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about MeetMux..."
                className="flex-1"
              />
              <Button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                variant={speechEnabled ? "default" : "outline"}
                size="sm"
                className="px-3"
                title={speechEnabled ? "Turn off speech" : "Turn on speech"}
              >
                {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </Button>
              <Button
                onClick={startListening}
                variant={isListening ? "default" : "outline"}
                size="sm"
                className="px-3"
                disabled={isListening}
                title="Voice input"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button
                onClick={handleSendMessage}
                variant="hero"
                size="sm"
                className="px-3"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            {isListening && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                🎤 Listening... Speak now
              </p>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};