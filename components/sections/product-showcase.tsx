"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../container";
import Image from "next/image";
import kioskImage from "../../public/Images/product.jpg";
export function ProductShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    "Secure Charging Compartments",
    "Fast Wireless & Wired Charging",
    "Universal Device Compatibility",
    "Premium Modern Design",
    "Real-Time Remote Monitoring",
    "Professional Maintenance & Support",
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Premium Charging Technology
          </p>

          <h2 className="text-4xl font-bold text-foreground mb-4">
            Designed to Elevate the Guest Experience
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fleur Charge combines premium hardware, secure charging, and fully
            managed service to help businesses provide a modern amenity their
            guests will appreciate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cursor-pointer relative group"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src={kioskImage}
                alt="Fleur Charge Kiosk"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-lg">
                    View Full Size
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Built for Modern Hospitality
            </h3>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Designed for hotels, fitness centers, universities, casinos,
              healthcare facilities, and retail environments, Fleur Charge
              delivers secure charging, premium design, and a fully managed
              experience that keeps guests connected while reducing operational
              effort for your team.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* <div className="bg-secondary rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Why Venue Owners Choose Fleur Charge
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-foreground">Fully Managed</p>
                  <p className="text-sm text-muted-foreground">
                    Installation & Maintenance
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">
                    Remote Monitoring
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Secure</p>
                  <p className="text-sm text-muted-foreground">
                    Device Charging
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Flexible</p>
                  <p className="text-sm text-muted-foreground">
                    Partnership Options
                  </p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </Container>

      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              ✕
            </button>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={kioskImage}
                alt="Premium Fleur Charge Kiosk"
                fill
                className="object-contain bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
