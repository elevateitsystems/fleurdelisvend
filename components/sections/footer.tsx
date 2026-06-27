"use client";

import { Container } from "../container";
import { Button } from "../button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        {/* CTA Section */}
        <div className="border-b border-primary-foreground/10 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Guest Experience?
          </h2>

          <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8 text-lg">
            Discover how Fleur Charge can help your business provide a premium
            phone charging amenity with professional installation, real-time
            monitoring, and fully managed support.
          </p>

          <Button
            size="lg"
            onClick={() => {
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Request a Consultation
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14">
          {/* Brand */}
          <div>
            {/* <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-bold">
                ✦
              </div>

              <span className="text-2xl font-bold">Fleur Charge</span>
            </div> */}

            <Image
              src="/Images/footerLogo.png"
              alt="Fleur Charge Logo"
              width={100}
              height={50}
              className=" h-26 w-auto hover:scale-105 transition-transform duration-300 ease-in-out hover:pointer-none:*:**: cursor-pointer"
            />
            <p className="text-sm leading-7 text-primary-foreground/75">
              Premium charging kiosk solutions designed to help businesses
              deliver a seamless, modern guest experience through secure
              charging technology and fully managed support.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Solutions</h4>

            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li>
                <a
                  href="#product"
                  className="hover:text-accent transition-colors"
                >
                  Charging Kiosks
                </a>
              </li>

              <li>
                <a
                  href="#benefits"
                  className="hover:text-accent transition-colors"
                >
                  Guest Experience
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-accent transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>

            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About Fleur Charge
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact-form"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact Us</h4>

            <p className="text-sm text-primary-foreground/75 mb-6 leading-6">
              Interested in bringing Fleur Charge to your business? Get in touch
              with our team to schedule a consultation.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-primary-foreground">Email</p>
                <a
                  href="mailto:Info@fleurcharge.com"
                  className="text-primary-foreground/75 hover:text-accent transition-colors"
                >
                  Info@fleurcharge.com
                </a>
              </div>

              <div>
                <p className="font-medium text-primary-foreground">Phone</p>
                <a
                  href="tel:+13372845877"
                  className="text-primary-foreground/75 hover:text-accent transition-colors"
                >
                  (337) 284-5877
                </a>
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center font-semibold text-accent hover:underline pt-2"
              >
                Request a Consultation →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Fleur Charge. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
