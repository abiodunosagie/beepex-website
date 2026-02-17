import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service - Beepex",
  description:
    "Read the terms and conditions governing your use of the Beepex app and services.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms of Service" },
];

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <p className="text-sm font-medium text-primary-500 mb-3 mt-4">Legal</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] font-heading">
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Last updated: February 17, 2026
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By downloading, installing, or using the Beepex application
                (&quot;App&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree, do not use
                the App. These Terms constitute a legally binding agreement
                between you and Beepex.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                2. Eligibility
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 18 years old and a resident of Nigeria to
                use Beepex. By creating an account, you confirm that the
                information you provide is accurate and complete, and that you
                are legally authorized to enter into this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                3. Account Registration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To access our services, you must create an account. You are
                responsible for:
              </p>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Providing accurate, current, and complete registration details</li>
                <li>Keeping your login credentials secure and confidential</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately if you suspect unauthorized access</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that
                provide false information or violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                4. Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beepex provides the following services through the App:
              </p>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">a.</span>
                  <span>
                    <strong className="text-gray-900">Airtime and Data.</strong>{" "}
                    Purchase airtime and mobile data plans for any Nigerian
                    network directly from the App.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">b.</span>
                  <span>
                    <strong className="text-gray-900">Bill Payments.</strong>{" "}
                    Pay electricity, cable TV (DStv, GOtv, StarTimes), and
                    other utility bills.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">c.</span>
                  <span>
                    <strong className="text-gray-900">Gift Cards.</strong>{" "}
                    Buy and sell gift cards from supported brands and receive
                    the equivalent value in your Beepex wallet.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-500 font-semibold shrink-0">d.</span>
                  <span>
                    <strong className="text-gray-900">Wallet.</strong>{" "}
                    Fund your Beepex wallet and use it to pay for services
                    within the App.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                5. Payments and Transactions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All transactions processed through Beepex are subject to the
                following conditions:
              </p>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                <li>
                  Payments are processed through our authorized payment partners
                  (including Paystack) and are subject to their terms
                </li>
                <li>
                  Transaction fees, where applicable, will be displayed before
                  you confirm any payment
                </li>
                <li>
                  Once a transaction is completed, it cannot be reversed unless
                  required by law or at our sole discretion
                </li>
                <li>
                  We are not liable for delays caused by network providers,
                  banks, or other third-party services
                </li>
                <li>
                  All prices are displayed in Nigerian Naira (NGN)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                6. Gift Card Trading
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Gift card rates are determined at the time of the transaction
                and are subject to change based on market conditions. Once you
                submit a gift card for sale and the transaction is approved, the
                rate at the time of approval applies. Beepex reserves the right
                to reject gift cards that are invalid, already redeemed, or
                suspected of being obtained fraudulently.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                7. Prohibited Activities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Use the App for money laundering, fraud, or any illegal activity</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to other users&apos; accounts</li>
                <li>Reverse-engineer, decompile, or tamper with the App</li>
                <li>Use automated systems or bots to interact with the App</li>
                <li>Trade gift cards that were obtained illegally or without authorization</li>
                <li>Exploit bugs, errors, or vulnerabilities in the App</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Violation of these rules may result in immediate account
                suspension, forfeiture of wallet balance, and referral to law
                enforcement where necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                8. Wallet Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your Beepex wallet is not a bank account and is not covered by
                deposit insurance. Wallet balances do not earn interest. We
                reserve the right to place holds on wallet funds if we detect
                suspicious activity. Withdrawals are subject to identity
                verification and may take up to 24 hours to process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                9. Service Availability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to keep Beepex available at all times, but we do not
                guarantee uninterrupted service. The App may be temporarily
                unavailable due to maintenance, updates, or circumstances beyond
                our control. We will make reasonable efforts to notify users of
                planned downtime in advance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Beepex shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of the App. This includes, but is
                not limited to, loss of profits, data, or business
                opportunities. Our total liability for any claim related to the
                App shall not exceed the amount you paid to us in the 12 months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                11. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content, features, and functionality of the Beepex App,
                including but not limited to text, graphics, logos, icons, and
                software, are the exclusive property of Beepex and are protected
                by intellectual property laws. You may not copy, modify,
                distribute, or create derivative works from any part of the App
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from your use of Beepex shall first be
                resolved through good-faith negotiation. If a resolution cannot
                be reached within 30 days, either party may refer the dispute to
                arbitration in Lagos, Nigeria, under the Arbitration and
                Conciliation Act. The decision of the arbitrator shall be final
                and binding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                13. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You may close your account at any time by contacting our support
                team. We may suspend or terminate your access to Beepex at our
                discretion if you breach these Terms, engage in fraudulent
                activity, or for any other reason we deem necessary. Upon
                termination, any remaining wallet balance will be refunded to
                your registered bank account, subject to verification.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                14. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of the Federal Republic of Nigeria. Any legal proceedings
                shall be subject to the exclusive jurisdiction of the courts in
                Lagos, Nigeria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                15. Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. When we
                make material changes, we will notify you through the App or via
                email at least 14 days before the changes take effect. Your
                continued use of Beepex after the changes become effective
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 font-heading mb-4">
                16. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms, contact us at{" "}
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
