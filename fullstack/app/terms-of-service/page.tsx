"use client";

import React from "react";
import { PageLayout } from "../components/layout/page-layout";
import { Particles } from "../components/ui/particles";
import Link from "next/link";

const TermsOfService = () => {
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
              Terms of Service
            </h1>

            <div className="space-y-6 text-white">
              <p className="text-gray-300">
                Please read these terms and conditions carefully before using
                our service.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300">
                  By accessing and using Colossus.AI, you agree to be bound by
                  these Terms and Conditions. If you do not agree to these
                  Terms, you should not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  2. Use of Service
                </h2>
                <p className="text-gray-300">
                  You agree to use our service only for lawful purposes and in
                  accordance with these Terms. You are prohibited from:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>
                    Using the service in any way that violates applicable laws
                  </li>
                  <li>Attempting to interfere with or disrupt the service</li>
                  <li>
                    Attempting to access areas of the service not intended for
                    public use
                  </li>
                  <li>
                    Using automated means to access or use the service without
                    authorization
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  3. User Accounts
                </h2>
                <p className="text-gray-300">
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities under your
                  account. You agree to:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-300 space-y-1">
                  <li>
                    Provide accurate and complete information when creating an
                    account
                  </li>
                  <li>Update your information promptly if it changes</li>
                  <li>
                    Notify us immediately of any unauthorized access or use of
                    your account
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-300">
                  All content, features, and functionality of Colossus.AI are
                  owned by us and are protected by international copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-300 mt-2">
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store, or transmit any materials from our service
                  without our written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  5. Privacy
                </h2>
                <p className="text-gray-300">
                  Your use of Colossus.AI is also governed by our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#FF4A8D] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . By using our service, you consent to all actions we take
                  with respect to your information in compliance with our
                  Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  6. Modifications
                </h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time.
                  Continued use of the service after any modifications
                  constitutes your acceptance of the modified terms.
                </p>
                <p className="text-gray-300 mt-2">
                  We will make reasonable efforts to notify you of significant
                  changes to these Terms, but you are responsible for regularly
                  reviewing these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-300">
                  To the maximum extent permitted by law, Colossus.AI shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages resulting from your use of
                  or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  8. Termination
                </h2>
                <p className="text-gray-300">
                  We may terminate or suspend your account and access to the
                  service immediately, without prior notice or liability, for
                  any reason, including if you breach these Terms.
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

export default TermsOfService;
