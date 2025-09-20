import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is MeetMux free to use?",
    answer: "Yes! MeetMux is completely free to download and use. All features are available to everyone at no cost."
  },
  {
    question: "How does the verification system work?",
    answer: "Our AI-powered verification system uses selfie matching technology to ensure users are authentic. You'll take a real-time selfie that's compared to your profile photo using advanced facial recognition."
  },
  {
    question: "Who can join MeetMux?",
    answer: "MeetMux is open to anyone aged 18 and above who wants to make meaningful connections through shared activities. We welcome people from all backgrounds and interests."
  },
  {
    question: "How do I stay safe while meeting new people?",
    answer: "MeetMux helps you make safer, smarter connections by showing each user's Social Score and feedback, giving insight into their trustworthiness. You can also view their Activity History to see if they genuinely share your interests, making it easier to connect with like-minded people."
  },
  {
    question: "Can I use MeetMux in my city?",
    answer: "MeetMux is currently available in major cities across India and expanding globally. Check the app store to see if we're available in your area, or join our waitlist for updates."
  },
  {
    question: "What are the available career opportunities?",
    answer: "We're always looking for passionate individuals to join our team! Current openings include Early Member positions, AIML Intern, Product Developer Intern, and Growth & Marketing Intern roles."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about MeetMux.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft bg-gradient-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};