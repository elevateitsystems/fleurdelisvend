// @app/components/sections/contact-form.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Input } from "../input";
import { Button } from "../button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  venue: string;
  message: string;
  businessType: string;
  monthlyVisitors: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    venue: "",
    message: "",
    businessType: "",
    monthlyVisitors: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.match(/^\+?[\d\s\-()]{10,}$/)) {
      newErrors.phone = "Valid phone number is required";
    }
    if (!formData.venue.trim()) newErrors.venue = "Venue name is required";
    if (!formData.businessType)
      newErrors.businessType = "Please select a business type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          venue: "",
          businessType: "",
          message: "",
          monthlyVisitors: "",
        });
      }, 3000);
    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
              Host a Fleur Charge Kiosk
            </p>

            <h2 className="text-4xl font-bold text-foreground mb-4">
              Bring Premium Charging to Your Venue
            </h2>

            <p className="text-lg text-muted-foreground">
              Tell us about your business and our team will help you find the
              right Fleur Charge solution for your guests.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/10 border border-accent rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank you!
              </h3>
              <p className="text-muted-foreground">
                We&apos;ve received your information. Our team will reach out
                within 24 hours to discuss partnership opportunities.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="John Doe"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+1 (555) 123-4567"
                />
                <Input
                  label="Venue Name"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  error={errors.venue}
                  placeholder="Your Business or Venue Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="">Select your business type</option>
                    <option value="hotel">Hotel / Resort</option>
                    <option value="fitness">Fitness Center / Gym</option>
                    <option value="education">College / University</option>
                    <option value="healthcare">Healthcare Facility</option>
                    <option value="casino">Casino</option>
                    <option value="restaurant">Restaurant / Café</option>
                    <option value="retail">Retail Store</option>
                    <option value="office">Office Building</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.businessType}
                    </p>
                  )}
                </div>
                <Input
                  label="Estimated Monthly Visitors"
                  name="monthlyVisitors"
                  value={formData.monthlyVisitors}
                  onChange={handleChange}
                  placeholder="e.g., 5000+"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Venue
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your venue, customer traffic, or any questions you have..."
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request a Consultation"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We&apos;ll never share your information. Read our{" "}
                <a href="#" className="text-accent hover:underline">
                  privacy policy
                </a>
                .
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}