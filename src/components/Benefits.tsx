
import { ShieldCheck, RefreshCw, Lock, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Proactive Security Monitoring",
    description: "24/7 endpoint security and threat detection."
  },
  {
    icon: RefreshCw,
    title: "Automated Patching & Updates",
    description: "Always up to date with the latest security patches."
  },
  {
    icon: Lock,
    title: "Compliance & Data Protection",
    description: "Ensure your business meets industry regulations."
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description: "Secure and manage company devices remotely."
  }
];

export const Benefits = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Key Benefits
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg animate-slide-up hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
