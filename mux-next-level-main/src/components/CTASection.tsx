import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignupModal } from "@/components/SignupModal";

export const CTASection = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Make Real Connections?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of people who are already discovering amazing 
              activities and building meaningful relationships with MeetMux.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setIsSignupOpen(true)}
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              Download For iOS
            </Button>
          </div>
        </div>
      </section>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
    </>
  );
};