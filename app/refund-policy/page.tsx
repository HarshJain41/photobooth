import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="June 14, 2026">
      <LegalSection title="1. Overview">
        <p>
          Gangaur Photobooth operates a photo booth service near Gangaur
          Ghat, Udaipur, Rajasthan, India. This policy explains how we handle
          cancellations and refunds for walk-in sessions and advance
          bookings.
        </p>
      </LegalSection>

      <LegalSection title="2. Walk-In Services">
        <p className="font-semibold text-slate-900">Standard Photo Sessions</p>
        <LegalList
          items={[
            "No refunds once a session is completed and prints or digital copies are delivered",
            "Any technical issues must be reported to our staff immediately",
            "Pre-paid sessions that have not been rendered are eligible for a same-day refund",
          ]}
        />

        <p className="mt-4 font-semibold text-slate-900">Quality Guarantee</p>
        <LegalList
          items={[
            "A full refund is provided if photos are not delivered due to a technical failure on our part",
            "Free reprints or a partial refund are offered for compromised print quality",
            "Issues must be reported before leaving our premises",
          ]}
        />

        <p className="mt-4">
        Digital copies will be stored on{" "}
        <a
          href="https://picabot.club"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pink-600 hover:underline"
        >
          picabot.club
        </a>{" "}
        /{" "}
        <a
          href="https://picabot.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pink-600 hover:underline"
        >
          Picabot.in
        </a>{" "}
        servers for 24 hours to generate sharing links and will be
        automatically deleted after 24 hours for data privacy.
      </p>
      </LegalSection>

      <LegalSection title="3. Advance Bookings and Event Packages">
        <p className="font-semibold text-slate-900">
          Cancellation by Customer
        </p>
        <LegalList
          items={[
            "More than 7 days before the event: 100% refund (minus payment gateway charges)",
            "3–7 days before the event: 50% refund",
            "Less than 3 days before the event: no refund, but one free rescheduling within 30 days is available",
            "Same-day cancellation: no refund and no rescheduling",
          ]}
        />

        <p className="mt-4 font-semibold text-slate-900">Rescheduling</p>
        <LegalList
          items={[
            "One free rescheduling is allowed with at least 3 days' advance notice",
            "Subsequent rescheduling requests incur a charge of 10% of the booking amount",
            "Rescheduled bookings must be used within 30 days of the original date",
          ]}
        />

        <p className="mt-4 font-semibold text-slate-900">
          Cancellations by Gangaur Photobooth
        </p>
        <p>
          If we need to cancel a booking, you will receive a full refund or
          priority rescheduling with a 10% discount on your next booking.
        </p>
      </LegalSection>

      <LegalSection title="4. Refund Process">
        <p className="font-semibold text-slate-900">Request Method</p>
        <p>
          To request a refund, contact us via email at
          Photoboothmango@gmail.com or call +91 7426937749 with your booking
          details and transaction ID.
        </p>

        <p className="mt-4 font-semibold text-slate-900">Timeline</p>
        <LegalList
          items={[
            "Review: 2–3 business days",
            "Processing: 5–7 business days",
            "Bank processing: an additional 3–5 business days",
          ]}
        />

        <p className="mt-4 font-semibold text-slate-900">Method</p>
        <p>
          Refunds are issued to your original payment method via Razorpay.
        </p>
      </LegalSection>

      <LegalSection title="5. Non-Refundable Items">
        <p>
          Completed sessions with delivered photographs, add-on services,
          dissatisfaction with personal appearance in photos, delays caused by
          the customer, and discounted or promotional service offerings are
          not eligible for refunds.
        </p>
      </LegalSection>

      <LegalSection title="6. Payment Gateway Charges">
        <p>
          Payment gateway charges (typically 2–3% of the transaction value)
          levied by Razorpay are non-refundable, except in the case of failed
          transactions.
        </p>
      </LegalSection>

      <LegalSection title="7. Partial Refunds">
        <p>
          Partial refunds are issued proportionately for incomplete delivery,
          substandard quality on part of an order, or partial fulfilment of a
          package.
        </p>
      </LegalSection>

      <LegalSection title="8. Disputes and Chargebacks">
        <p>
          If you have a concern, please contact us directly before initiating
          a chargeback with your bank. Invalid chargebacks may result in
          suspension of service and liability for any associated processing
          fees.
        </p>
      </LegalSection>

      <LegalSection title="9. Failed Transactions">
        <p>
          Failed transactions are auto-refunded within 5–7 business days. If
          not processed automatically, the full amount, including any charges,
          will be refunded upon request.
        </p>
      </LegalSection>

      <LegalSection title="10. Special Circumstances">
        <p className="font-semibold text-slate-900">Force Majeure</p>
        <p>
          In the event of circumstances beyond our control, rescheduling is
          available for up to 90 days without penalty. A full refund will be
          provided if rescheduling is not possible.
        </p>

        <p className="mt-4 font-semibold text-slate-900">
          Health or Emergency Situations
        </p>
        <p>
          Free rescheduling or a partial refund is available with valid
          supporting documentation.
        </p>
      </LegalSection>

      <LegalSection title="11. Gift Vouchers and Promotional Codes">
        <p>
          Gift vouchers and promotional codes are non-refundable but
          transferable. Their validity periods cannot be extended.
        </p>
      </LegalSection>

      <LegalSection title="12. Policy Modifications">
        <p>
          We may update this Refund & Cancellation Policy from time to time.
          Changes take effect immediately upon posting to this page.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Information">
        <p className="font-semibold text-slate-900">Gangaur Photobooth</p>
        <p>
          Address: Near Gangaur Ghat, Udaipur, Rajasthan, India
          <br />
          Email: Photoboothmango@gmail.com
          <br />
          Phone: +91 7426937749
          <br />
          Hours: 8:00 AM – 11:00 PM (Daily)
        </p>
      </LegalSection>

      <LegalSection title="14. Our Commitment">
        <p>
          Your satisfaction matters to us. If something didn&apos;t go as
          planned, reach out and we&apos;ll do our best to make it right.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
