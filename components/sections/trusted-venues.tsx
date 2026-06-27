"use client";

import { motion } from "framer-motion";
import { Container } from "../container";

const venueTypes = [
  {
    title: "Hotels & Resorts",
    description:
      "Provide guests with a premium, secure charging experience that enhances their stay.",
  },
  {
    title: "Fitness Centers",
    description:
      "Help members stay connected while they focus on their workouts.",
  },
  {
    title: "Universities & Colleges",
    description:
      "Offer students, faculty, and visitors a convenient campus amenity.",
  },
  {
    title: "Casinos & Entertainment",
    description:
      "Keep guests engaged longer with secure phone charging solutions.",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Support patients and visitors with reliable charging when they need it most.",
  },
  {
    title: "Shopping Centers",
    description:
      "Increase customer convenience and create a more enjoyable shopping experience.",
  },
];

export function TrustedVenues() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Perfect for Every Venue
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Designed for Businesses That Value Exceptional Guest Experiences
          </h2>

          <p className="text-lg text-muted-foreground">
            Fleur Charge provides premium phone charging kiosks that enhance
            customer convenience while delivering a fully managed solution with
            installation, real-time monitoring, maintenance, and professional
            support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venueTypes.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {venue.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {venue.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
