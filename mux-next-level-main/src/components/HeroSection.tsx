import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignupModal } from "@/components/SignupModal";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/5" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight drop-shadow-sm">
                  Discover New{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Connections
                  </span>{" "}
                  Around You
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-200 max-w-lg drop-shadow-sm">
                  Find people who are engaged in the activities happening around you. 
                  Discover everything you need in one app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setIsSignupOpen(true)}
                  className="text-lg px-8 py-4"
                >
                  Download For iOS
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <span className="font-medium">4.95 out of 5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="MeetMux App Preview" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
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