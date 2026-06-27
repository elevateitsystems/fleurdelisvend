"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../button";
import heroImage from "../../public/Images/hero.png";

export function Hero() {
  const [displayStats, setDisplayStats] = useState({
    revenue: 0,
    venues: 0,
    uptime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayStats((prev) => ({
        revenue: Math.min(prev.revenue + 45, 2800),
        venues: Math.min(prev.venues + 12, 450),
        uptime: Math.min(prev.uptime + 0.5, 99.9),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Phone Charging Kiosk"
        fill
        priority
        quality={100}
        className=""
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm">
              Premium Guest Amenity
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Keep Guests Connected.
            <br />
            Elevate Every Visit.
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Provide your guests with secure, premium phone charging while
            enhancing their overall experience. Fleur Charge delivers a fully
            managed charging solution with real-time monitoring, professional
            support, and flexible deployment options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToForm}>
              Host a Fleur Charge Kiosk
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {/* ${displayStats.revenue.toFixed(0)} */}
              Secure Charging
            </div>
            <p className="text-gray-300">
              Lockable charging compartments keep guest devices safe.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {/* {displayStats.venues.toFixed(0)}+ */}
              24/7 Remote Monitoring
            </div>
            <p className="text-gray-300">
              Our team continuously monitors every kiosk for optimal
              performance.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {/* {displayStats.uptime.toFixed(1)}% */}
              Fully Managed Service
            </div>
            <p className="text-gray-300">
              Installation, maintenance, software updates, and support are all
              handled by Fleur Charge.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
