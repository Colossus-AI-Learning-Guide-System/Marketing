"use client";

import React from "react";
import { PageLayout } from "../components/layout/page-layout";
import { Particles } from "../components/ui/particles";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="min-h-screen w-full relative overflow-hidden">
        <Particles
          className="absolute inset-0 pointer-events-none z-10"
          quantity={700}
          staticity={30}
          ease={20}
          color="#FF4A8D"
          refresh={false}
          size={2}
          vx={0.5}
          vy={0.5}
        />

        <div className="container mx-auto px-4 py-12 relative z-20">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 -z-10"></div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <div className="space-y-6 text-white">
              <p className="text-gray-300">
                Please read our privacy policy carefully.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  1. Information We Collect
                </h2>
                <p className="text-gray-300">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>Create an account</li>
                  <li>Use our services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-300">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  3. Information Sharing
                </h2>
                <p className="text-gray-300">
                  We do not sell or rent your personal information to third
                  parties. We may share your information with:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisers</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  4. Data Security
                </h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  5. Your Rights
                </h2>
                <p className="text-gray-300">You have the right to:</p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  6. Contact Us
                </h2>
                <p className="text-gray-300">
                  If you have questions about this Privacy Policy, please
                  contact us at:
                  <br />
                  Email: colossus.ai.lk@gmail.com
                </p>
              </section>

              <div className="border-t border-white/10 pt-6 mt-8">
                <p className="text-gray-400 text-sm">Last updated: 2/24/2025</p>
                <p className="mt-4">
                  <Link
                    href="/"
                    className="bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Back to Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
