import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const { toast } = useToast();

  const handleSocialSignup = (provider: string) => {
    toast({
      title: "Demo Mode",
      description: `${provider} signup would redirect to authentication in production.`,
    });
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Mode",
      description: "Email signup would create account in production.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {isLogin ? "Welcome Back!" : "Join MeetMux"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-center space-x-2"
              onClick={() => handleSocialSignup("Google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-center space-x-2"
              onClick={() => handleSocialSignup("LinkedIn")}
            >
              <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Continue with LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-center space-x-2"
              onClick={() => handleSocialSignup("Apple")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 8.039.016 6.835.048 5.634.08 4.797.207 4.075.344a5.023 5.023 0 0 0-1.814.785A5.015 5.015 0 0 0 .785 2.943 5.041 5.041 0 0 0 .344 4.075C.207 4.797.08 5.634.048 6.835.016 8.039 0 8.396 0 12.017c0 3.621.016 3.978.048 5.182.032 1.201.159 2.038.296 2.76a5.023 5.023 0 0 0 .785 1.814 5.015 5.015 0 0 0 1.814.785c.722.137 1.559.264 2.76.296 1.204.032 1.561.048 5.182.048 3.621 0 3.978-.016 5.182-.048 1.201-.032 2.038-.159 2.76-.296a5.023 5.023 0 0 0 1.814-.785 5.015 5.015 0 0 0 .785-1.814c.137-.722.264-1.559.296-2.76.032-1.204.048-1.561.048-5.182 0-3.621-.016-3.978-.048-5.182-.032-1.201-.159-2.038-.296-2.76a5.023 5.023 0 0 0-.785-1.814A5.015 5.015 0 0 0 19.925.344C19.203.207 18.366.08 17.165.048 15.961.016 15.604 0 11.983 0h.034zm-.717 10.377c0 3.708-3.005 6.713-6.713 6.713S-1.146 14.085-1.146 10.377c0-3.708 3.005-6.713 6.713-6.713S11.3 6.669 11.3 10.377zm-2.287 0c0-2.445-1.981-4.426-4.426-4.426S.161 7.932.161 10.377s1.981 4.426 4.426 4.426 4.426-1.981 4.426-4.426zM17.965 3.855c0 .867-.703 1.57-1.57 1.57s-1.57-.703-1.57-1.57.703-1.57 1.57-1.57 1.57.703 1.57 1.57z"/>
              </svg>
              Continue with Apple
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
            )}

            <Button type="submit" variant="hero" className="w-full">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};