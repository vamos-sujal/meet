import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Shield, 
  Activity, 
  Building 
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Plan or Join Activities",
    description: "Create your own activities or discover exciting events happening around you. From sports to movies, find your tribe."
  },
  {
    icon: MapPin,
    title: "Discover Live Activities",
    description: "See what's happening right now in your area. Join spontaneous adventures and meet like-minded people instantly."
  },
  {
    icon: Users,
    title: "Match by Interest & Location",
    description: "Our AI matches you with people who share your interests and are nearby, making connections more meaningful."
  },
  {
    icon: Shield,
    title: "Verified User Profiles",
    description: "AI-powered selfie verification ensures authentic connections. Meet real people, not fake profiles."
  },
  {
    icon: Activity,
    title: "Activity-Based Feed",
    description: "No random content. Your feed shows only activities and events relevant to your interests and location."
  },
  {
    icon: Building,
    title: "Venue Booking Integration",
    description: "Seamlessly book restaurants, cafes, and event spaces directly through the app for your meetups."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              MeetMux?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to discover, connect, and build meaningful 
            relationships in the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-primary/10 hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};