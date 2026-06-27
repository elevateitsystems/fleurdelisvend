"use client";

import { motion } from "framer-motion";
import { Container } from "../container";

const features = [
  {
    title: "Fully Managed Solution",
    description:
      "From installation and setup to maintenance and software updates, Fleur Charge handles every aspect of your charging kiosk.",
  },
  {
    title: "Flexible Partnership Options",
    description:
      "We offer deployment and partnership models tailored to your venue and operational needs, including revenue-sharing opportunities where appropriate.",
  },
  {
    title: "Ongoing Professional Support",
    description:
      "Our team continuously monitors your kiosk, provides technical support, and ensures reliable performance so you can focus on your guests.",
  },
];

export function RevenueShare() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-8 md:p-12 text-primary-foreground">
            <div className="text-center max-w-3xl mx-auto">
              <p className="uppercase tracking-[0.2em] text-sm font-semibold opacity-90 mb-3">
                Flexible Partnership
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                A Solution That Fits Your Business
              </h2>

              <p className="text-lg opacity-90 leading-relaxed">
                Every venue is different. Fleur Charge offers flexible
                deployment and partnership options designed to help you provide
                a premium guest amenity with minimal operational effort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-primary-foreground/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-black/20 p-6 text-center">
              <p className="text-lg font-medium">
                Revenue-sharing opportunities may be available depending on your
                venue and partnership model, but our primary focus is helping
                businesses deliver an exceptional guest experience with a fully
                managed charging solution.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
