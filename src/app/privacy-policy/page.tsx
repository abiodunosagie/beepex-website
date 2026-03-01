import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - Beepex",
  description:
    "Learn how Beepex collects, uses, and protects your personal information.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-36 sm:pb-28 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <p className="text-sm font-medium text-primary-500 mb-3 mt-4">Legal</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] font-heading">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Last updated: February 17, 2026
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                When you use Beepex, we collect certain information to provide
                and improve our services. This includes:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">a.</span>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Account Information.</strong>{" "}
                    Your name, email address, phone number, and other details
                    you provide when creating an account.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">b.</span>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Transaction Data.</strong>{" "}
                    Records of your transactions, including airtime purchases,
                    bill payments, gift card trades, and wallet activity.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">c.</span>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Device Information.</strong>{" "}
                    Device type, operating system, app version, and unique
                    device identifiers to ensure security and optimize your
                    experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">d.</span>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Usage Data.</strong>{" "}
                    How you interact with the app, including features used,
                    pages visited, and session duration.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed list-disc list-inside">
                <li>Process your transactions and deliver services you request</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Send you transaction confirmations and receipts</li>
                <li>Improve our app, features, and overall user experience</li>
                <li>Communicate important updates about your account or our services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                3. How We Protect Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We take the security of your data seriously. All sensitive
                information is encrypted in transit using TLS and at rest using
                industry-standard encryption. We implement access controls,
                regular security audits, and monitoring to detect and respond to
                potential threats. Payment processing is handled through
                PCI-compliant third-party providers, so your full card details
                are never stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                4. Information Sharing
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data
                only in the following situations:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed list-disc list-inside">
                <li>
                  With payment processors and service providers necessary to
                  complete your transactions (e.g., Paystack, VTPass, Reloadly)
                </li>
                <li>
                  When required by law, regulation, or legal process
                </li>
                <li>
                  To protect the rights, safety, or property of Beepex, our
                  users, or the public
                </li>
                <li>
                  With your explicit consent
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain your personal information for as long as your account
                is active or as needed to provide you with our services. If you
                close your account, we will delete or anonymize your personal
                data within 90 days, unless we are required to retain it for
                legal, regulatory, or fraud prevention purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed list-disc list-inside">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Withdraw consent for optional data processing</li>
                <li>Export your transaction history</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:supportbeepex@gmail.com"
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  supportbeepex@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our mobile app does not use cookies. Our website may use
                essential cookies to maintain basic functionality and analytics
                cookies to understand how visitors use the site. We do not use
                cookies for advertising or tracking across other websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                8. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our app integrates with third-party services to process
                payments and deliver services. These providers have their own
                privacy policies governing how they handle your data. We
                encourage you to review their policies. We only share the
                minimum data necessary for them to complete transactions on
                your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beepex is not intended for children under the age of 18. We do
                not knowingly collect personal information from anyone under 18.
                If we discover that we have collected data from a minor, we will
                promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. When we
                make significant changes, we will notify you through the app or
                via email. Your continued use of Beepex after any changes
                indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have questions about this Privacy Policy or how we handle
                your data, reach out to us at{" "}
                <a
                  href="mailto:supportbeepex@gmail.com"
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  supportbeepex@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
