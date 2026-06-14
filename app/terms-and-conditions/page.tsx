import Link from "next/link";
import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="June 14, 2026">
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using the services of Gangaur Photobooth, located
          near Gangaur Ghat, Udaipur, Rajasthan, India, you agree to be bound
          by these Terms & Conditions. If you do not agree with these terms,
          please refrain from using our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Service Description">
        <p>
          Gangaur Photobooth provides photo booth services including
          individual and group sessions, instant printed photo strips,
          digital copies, themed backgrounds, props, and event packages.
          Services may be modified, added, or discontinued at our discretion.
        </p>
      </LegalSection>

      <LegalSection title="3. User Eligibility">
        <p>
          Our services are available to adults aged 18 and above, to minors
          accompanied by a parent or guardian who has provided consent, and to
          corporate groups for events. Guardians are responsible for
          supervising minors and must authorize their photography.
        </p>
      </LegalSection>

      <LegalSection title="4. Booking and Payment">
        <p className="font-semibold text-slate-900">4.1 Booking Process</p>
        <p>
          Walk-ins are welcome daily from 8:00 AM to 11:00 PM. Advance booking
          is recommended for events and group sessions.
        </p>

        <p className="mt-4 font-semibold text-slate-900">4.2 Payment Terms</p>
        <p>
          Payment is due before or after your session via Razorpay. All prices
          are in Indian Rupees (INR) and include applicable taxes. Receipts
          are sent electronically.
        </p>

        <p className="mt-4 font-semibold text-slate-900">
          4.3 Failed Transactions
        </p>
        <p>
          Refunds for failed transactions are processed within 5–7 business
          days.
        </p>
      </LegalSection>

      <LegalSection title="5. Service Delivery">
        <p className="font-semibold text-slate-900">5.1 Photo Prints</p>
        <p>
          Printed photo strips are delivered immediately after your session.
          Print quality may vary depending on conditions. Reprints are
          available for an additional fee.
        </p>

        <p className="mt-4 font-semibold text-slate-900">5.2 Digital Copies</p>
        <p>
          Digital copies are delivered via email or QR code in standard
          resolution and remain accessible for 90 days from the date of
          service.
        </p>
      </LegalSection>

      <LegalSection title="6. User Conduct and Responsibilities">
        <p>Users are expected to:</p>
        <LegalList
          items={[
            "Treat our staff and equipment with respect",
            "Follow all posted safety guidelines",
            "Maintain appropriate behaviour at all times",
            "Supervise accompanying minors",
            "Avoid bringing outside food or hazardous materials near the booth",
          ]}
        />
        <p>
          We reserve the right to refuse service to anyone who violates these
          guidelines.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property Rights">
        <p className="font-semibold text-slate-900">
          7.1 Customer Photographs
        </p>
        <p>
          You retain ownership of your photographs. By using our services, you
          grant Gangaur Photobooth a non-exclusive licence to use your
          photographs for promotional purposes only with your consent. You
          may opt out of this in writing at any time.
        </p>

        <p className="mt-4 font-semibold text-slate-900">
          7.2 Company Property
        </p>
        <p>
          Our logos, backgrounds, templates, and props remain the property of
          Gangaur Photobooth and may not be reproduced for commercial purposes.
        </p>
      </LegalSection>

      <LegalSection title="8. Cancellation and Refund Policy">
        <p>
          Cancellations, rescheduling, and refunds are governed by our{" "}
          <Link
            href="/refund-policy"
            className="font-semibold text-pink-500 hover:text-pink-600"
          >
            Refund Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Liability and Disclaimers">
        <p className="font-semibold text-slate-900">9.1 Service Quality</p>
        <p>
          While we strive for excellent results, we do not guarantee
          perfection in every photograph, the availability of specific props,
          or uninterrupted service.
        </p>

        <p className="mt-4 font-semibold text-slate-900">
          9.2 Limitation of Liability
        </p>
        <p>
          Our total liability shall not exceed the amount paid for the
          specific service. We are not responsible for personal belongings or
          injuries not resulting from our negligence.
        </p>

        <p className="mt-4 font-semibold text-slate-900">9.3 Technical Issues</p>
        <p>
          We are not liable for equipment failures, power outages, or
          connectivity issues beyond our control, and will offer reasonable
          alternatives where possible.
        </p>
      </LegalSection>

      <LegalSection title="10. Privacy and Data Protection">
        <p>
          Please refer to our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-pink-500 hover:text-pink-600"
          >
            Privacy Policy
          </Link>{" "}
          for details on how we handle your personal information and
          photographs.
        </p>
      </LegalSection>

      <LegalSection title="11. Force Majeure">
        <p>
          We are not liable for delays or failures in service caused by
          circumstances beyond our reasonable control, including natural
          disasters, pandemics, government restrictions, premises closures, or
          civil unrest.
        </p>
      </LegalSection>

      <LegalSection title="12. Modifications to Terms">
        <p>
          We may update these Terms & Conditions at any time. Changes take
          effect immediately upon posting, and continued use of our services
          constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Governing Law and Jurisdiction">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of the courts of Udaipur,
          Rajasthan.
        </p>
      </LegalSection>

      <LegalSection title="14. Dispute Resolution">
        <p>
          In the event of a dispute, we encourage you to contact us directly
          first. If the matter cannot be resolved, it will proceed to
          mediation, and if necessary, legal action before the courts of
          Udaipur, Rajasthan.
        </p>
      </LegalSection>

      <LegalSection title="15. Severability">
        <p>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions will continue in full force
          and effect.
        </p>
      </LegalSection>

      <LegalSection title="16. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy and Refund Policy,
          constitute the entire agreement between you and Gangaur Photobooth.
        </p>
      </LegalSection>

      <LegalSection title="17. Contact Information">
        <p className="font-semibold text-slate-900">Gangaur Photobooth</p>
        <p>
          Location: Near Gangaur Ghat, Udaipur, Rajasthan, India
          <br />
          Email: Photoboothmango@gmail.com
          <br />
          Phone: +91 7426937749
          <br />
          Hours: 8:00 AM – 11:00 PM (Daily)
        </p>
      </LegalSection>

      <LegalSection title="18. Acknowledgment">
        <p>
          By using our services, you acknowledge that you have read,
          understood, and agree to be bound by these Terms & Conditions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
