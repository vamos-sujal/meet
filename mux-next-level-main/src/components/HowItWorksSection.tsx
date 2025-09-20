import { Card } from "@/components/ui/card";
import { UserPlus, Search, Heart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Sign Up & Complete Profile",
    description: "Create your account, add your interests, and verify your profile with our AI-powered selfie verification system."
  },
  {
    number: "2", 
    icon: Search,
    title: "Explore or Create Activities",
    description: "Browse activities happening around you or create your own events. From sports to movies, find your perfect match."
  },
  {
    number: "3",
    icon: Heart,
    title: "Connect, Meet & Share",
    description: "Connect with like-minded people, meet in person, and share amazing experiences together."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-primary/5 to-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with MeetMux in just three simple steps and start 
            building meaningful connections today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-primary/10"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-medium">
                  {step.number}
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="w-16 h-16 bg-secondary/50 rounded-lg flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};