"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../container";
const faqs = [
  {
    question: "What types of businesses can host a Fleur Charge kiosk?",
    answer:
      "Fleur Charge is designed for hotels, resorts, fitness centers, universities, healthcare facilities, casinos, retail locations, restaurants, and other high-traffic venues looking to enhance the guest experience.",
  },
  {
    question: "How does the installation process work?",
    answer:
      "Our team handles the entire process—from planning and delivery to professional installation and setup. We ensure your kiosk is ready with minimal disruption to your business.",
  },
  {
    question: "Who is responsible for maintenance and support?",
    answer:
      "Fleur Charge provides a fully managed solution. We handle ongoing maintenance, remote monitoring, software updates, and technical support so your team can stay focused on serving guests.",
  },
  {
    question: "Can the kiosk be customized for my venue?",
    answer:
      "Depending on your location and deployment requirements, we can discuss branding and configuration options to ensure the kiosk complements your venue and customer experience.",
  },
  {
    question: "What partnership options are available?",
    answer:
      "We offer flexible deployment and partnership models based on your business needs. Revenue-sharing opportunities may be available where appropriate, but our primary focus is delivering a premium charging amenity for your guests.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply request a consultation through our contact form. Our team will learn about your venue, discuss the best solution, and guide you through the next steps.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Know
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how Fleur Charge helps businesses provide a premium charging
            experience with fully managed installation, monitoring, and support.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-card hover:bg-secondary transition-colors flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-foreground">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-accent text-xl">▼</span>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border"
                  >
                    <p className="px-6 py-4 text-muted-foreground bg-background">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
