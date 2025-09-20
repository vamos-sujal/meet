import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Linkedin, Twitter } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import teamImage from "@/assets/team.jpg";

const FoundersDesk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              The Story Behind{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                MeetMux
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of resilience, passion, and the belief that real connections can change the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Founder's Photo */}
            <div className="relative">
              <img 
                src={founderImage} 
                alt="MeetMux Founder - Mani Ratna Monu" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <Card className="p-8 shadow-medium bg-gradient-card border-primary/20">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "MeetMux began as a vision to move beyond endless scrolling and help people connect through real activities. Built from persistence, lessons from setbacks, and the belief that technology should empower human connections, MeetMux is today evolving into a platform trusted by a growing community. Our journey reminds us that resilience and innovation can go hand in hand, and we're just getting started."
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      variant="hero" 
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://www.linkedin.com/in/mani-ratna-monu-303a662b2/', '_blank')}
                    >
                      <Linkedin className="w-5 h-5" />
                      Follow on LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://twitter.com/meetmux', '_blank')}
                    >
                      <Twitter className="w-5 h-5" />
                      Follow on Twitter
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals building the future of social connections
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={teamImage} 
              alt="MeetMux Team" 
              className="w-full h-auto rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center shadow-medium">
              <h3 className="text-xl font-bold text-foreground mb-3">Resilience</h3>
              <p className="text-muted-foreground">
                Building through challenges and learning from every setback
              </p>
            </Card>
            <Card className="p-6 text-center shadow-medium">
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Creating technology that truly serves human connection
              </p>
            </Card>
            <Card className="p-6 text-center shadow-medium">
              <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">
                Putting people and relationships at the center of everything
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersDesk;