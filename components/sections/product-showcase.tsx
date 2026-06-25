"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../container";
import Image from "next/image";
import kioskImage from "../../public/Images/kiosk-showcase-1.png";
export function ProductShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    "Ultra-Fast Wireless Charging",
    "Multiple Cable Options Included",
    "Sleek Stainless Steel Design",
    "Weather-Resistant Exterior",
    "Smart Usage Tracking",
    "Remote Diagnostics",
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
            The Fleur Charge Kiosk
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Premium Hardware Built to Last
          </h2>
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
            {/* <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">⚡</div>
                  <p className="text-muted-foreground">Fleur Charge Kiosk</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold">Click to enlarge</p>
                </div>
              </div>
            </div> */}
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
                    Click to Enlarge
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
              Built for Success
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Our kiosks are engineered for high-traffic venues with
              enterprise-grade durability and modern aesthetics that complement
              any environment.
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

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">
                Performance Metrics
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">15 min</p>
                  <p className="text-sm text-muted-foreground">Full Charge</p>
                </div>
              </div>
            </div>
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
            {/* <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-4">⚡</div>
                <p className="text-white text-xl">Premium Fleur Charge Kiosk</p>
              </div>
            </div> */}
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
