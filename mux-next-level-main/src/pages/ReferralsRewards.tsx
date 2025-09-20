import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Copy, Gift, Users, Star, Trophy, Crown, Zap } from "lucide-react";

const ReferralsRewards = () => {
  const [referralLink] = useState("https://meetmux.com/invite/USER123");
  const { toast } = useToast();

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const rewards = [
    {
      icon: Gift,
      title: "Free Event Credit",
      description: "Get 50 credits for every friend who signs up",
      color: "text-primary"
    },
    {
      icon: Crown,
      title: "Premium Badge",
      description: "Unlock exclusive premium features and badges",
      color: "text-yellow-500"
    },
    {
      icon: Zap,
      title: "Discount on Hosting Fees",
      description: "Save up to 30% on event hosting fees",
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Invite Friends, Earn Rewards
            </h1>
            <p className="text-xl text-white/90">
              Grow the MeetMux community and get exclusive perks when your friends join.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start earning rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center shadow-medium">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Copy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Step 1</h3>
              <p className="text-muted-foreground">Copy your unique referral link</p>
            </Card>

            <Card className="p-8 text-center shadow-medium">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Step 2</h3>
              <p className="text-muted-foreground">Share with friends and family</p>
            </Card>

            <Card className="p-8 text-center shadow-medium">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Step 3</h3>
              <p className="text-muted-foreground">Earn credits when they join and attend events</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards Examples Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Exclusive Rewards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock amazing perks as you invite more friends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {rewards.map((reward, index) => {
              const IconComponent = reward.icon;
              return (
                <Card key={index} className="p-8 text-center shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/20">
                  <div className={`w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 ${reward.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reward.title}</h3>
                  <p className="text-muted-foreground">{reward.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referral Link Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-medium bg-gradient-card border-primary/20">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Your Referral Link</h3>
                  <p className="text-muted-foreground">
                    Share this link to start earning rewards
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Referral Link:</label>
                  <div className="flex space-x-2">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="flex-1"
                    />
                    <Button 
                      variant="outline" 
                      onClick={copyReferralLink}
                      className="px-4"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center p-4 bg-secondary/20 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-primary">12</p>
                    <p className="text-sm text-muted-foreground">Friends Invited</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">600</p>
                    <p className="text-sm text-muted-foreground">Credits Earned</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90">
              Join our referral program today and start building your rewards
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              Start Referring Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralsRewards;