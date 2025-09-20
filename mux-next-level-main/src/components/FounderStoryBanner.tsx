import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import founderStoryImage from "@/assets/founder-story.jpg";

export const FounderStoryBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-light/10">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden shadow-strong bg-gradient-card border-primary/20">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  From Rural Karnataka to Building{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    MeetMux
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  A story of resilience, passion, and social innovation. 
                  Follow our founder's journey from humble beginnings to 
                  revolutionizing how people connect in the digital age.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero"
                  onClick={() => window.open('https://linkedin.com/company/meetmux', '_blank')}
                >
                  Follow on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://twitter.com/meetmux', '_blank')}
                >
                  Follow on Twitter
                </Button>
              </div>
            </div>

            <div className="relative h-64 lg:h-full">
              <img 
                src={founderStoryImage} 
                alt="Founder Story - From rural Karnataka to building MeetMux" 
                className="w-full h-full object-cover lg:rounded-r-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:rounded-r-lg" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};