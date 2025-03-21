
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

export const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <BackgroundPaths />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in text-slate-950">
              Your Trusted Partner in Advanced Cyber Security Solutions
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl mb-6 md:mb-8 animation-delay-200 animate-fade-in px-4 sm:px-6 md:px-0 text-gray-950">
              Specializing in Microsoft Azure, O365, and Intune with over 10 years of experience in securing and optimizing IT infrastructures.
            </p>
            
            <Button 
              size="lg" 
              className="animation-delay-400 animate-fade-in w-full sm:w-auto bg-green-900 hover:bg-green-800"
              onClick={() => window.open('https://cal.com/cloudvanguard-it/15min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get a Free IT Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
