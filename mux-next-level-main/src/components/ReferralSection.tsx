import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy, Gift, Users, Star } from "lucide-react";
import referralImage from "@/assets/referral-rewards.jpg";

export const ReferralSection = () => {
  const [referralLink] = useState("https://meetmux.com/invite/USER123");
  const { toast } = useToast();

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Invite Friends,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Earn Rewards
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get credits when your friends join MeetMux events. The more you share, 
            the more you earn!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 shadow-medium bg-gradient-card border-primary/20">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Share & Earn</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Invite Friends</p>
                    <p className="text-sm text-muted-foreground">Share your unique link</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                  <Star className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Earn Credits</p>
                    <p className="text-sm text-muted-foreground">Get 50 credits per signup</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Your Referral Link:</label>
                <div className="flex space-x-2">
                  <Input 
                    value={referralLink} 
                    readOnly 
                    className="flex-1"
                  />
                  <Button 
                    variant="outline" 
                    onClick={copyReferralLink}
                    className="px-3"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Share Now
              </Button>
            </div>
          </Card>

          <div className="relative">
            <img 
              src={referralImage} 
              alt="Referral Rewards Program" 
              className="w-full h-auto rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};