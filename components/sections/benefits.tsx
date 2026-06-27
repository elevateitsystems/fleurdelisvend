"use client";

import { motion } from "framer-motion";
import { Container } from "../container";
import { Card } from "../card";

const benefits = [
  {
    title: "Premium Guest Experience",
    description:
      "Provide guests with secure, convenient phone charging that enhances every visit and leaves a lasting impression.",
    icon: "⭐",
  },
  {
    title: "Hands-Off Management",
    description:
      "From installation to maintenance and software updates, Fleur Charge manages everything for you.",
    icon: "⚙️",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Every kiosk is remotely monitored to ensure reliable performance and minimal downtime.",
    icon: "📡",
  },
  {
    title: "Professional Support",
    description:
      "Our dedicated support team is available to assist with technical issues, maintenance, and ongoing service.",
    icon: "🤝",
  },
  {
    title: "Premium Design",
    description:
      "Modern charging kiosks designed to complement hotels, fitness centers, universities, retail spaces, and more.",
    icon: "✨",
  },
  {
    title: "Flexible Partnership Options",
    description:
      "Choose a deployment model that fits your business. Revenue-sharing opportunities are available where applicable.",
    icon: "🔄",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-widest mb-3">
            Why Choose Fleur Charge
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Premium Amenity for Modern Venues
          </h2>

          <p className="text-lg text-muted-foreground">
            Deliver a better guest experience with secure phone charging,
            professional support, and a fully managed solution designed for
            today's hospitality and commercial environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col p-8 hover:border-accent transition-all duration-300">
                <div className="text-4xl mb-5">{benefit.icon}</div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
