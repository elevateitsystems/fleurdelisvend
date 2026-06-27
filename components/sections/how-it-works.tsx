"use client";

import { motion } from "framer-motion";
import { Container } from "../container";

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description:
      "Tell us about your venue and business goals. We will recommend the ideal Fleur Charge solution for your space.",
  },
  {
    number: "02",
    title: "Professional Installation",
    description:
      "Our team delivers, installs, and configures your charging kiosk, ensuring everything is ready with minimal disruption.",
  },
  {
    number: "03",
    title: "Enhance the Guest Experience",
    description:
      "Guests enjoy secure, convenient phone charging while they shop, dine, work out, study, or relax at your venue.",
  },
  {
    number: "04",
    title: "We Handle the Rest",
    description:
      "Fleur Charge provides real-time monitoring, maintenance, software updates, and ongoing professional support. Flexible partnership options, including revenue sharing where applicable, are available.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bringing Premium Phone Charging to Your Venue
          </h2>

          <p className="text-lg text-muted-foreground">
            From consultation to ongoing support, Fleur Charge provides a
            seamless, fully managed solution that enhances your guests'
            experience while keeping operations effortless for your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-bold">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
