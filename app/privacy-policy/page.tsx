import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 14, 2026">
      <LegalSection title="1. Introduction">
        <p>
          Welcome to Gangaur Photobooth, located near Gangaur Ghat, Udaipur,
          Rajasthan, India. We are committed to protecting your privacy and
          personal information. This Privacy Policy explains how we collect,
          use, and safeguard your information when you use our photo booth
          services and visit our website.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p className="font-semibold text-slate-900">
          Personal Information includes:
        </p>
        <LegalList
          items={[
            "Name, email, and phone number",
            "Payment details processed via Razorpay",
            "Photographs taken at our photo booth",
            "Service usage timestamps",
            "Customer preferences and feedback",
          ]}
        />

        <p className="mt-4 font-semibold text-slate-900">
          Automatically Collected Information:
        </p>
        <LegalList
          items={[
            "Device data (IP address, browser type, operating system)",
            "Website usage metrics",
            "Cookies and similar tracking technologies",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>Your information is used to:</p>
        <LegalList
          items={[
            "Deliver our photo booth services",
            "Process payments securely",
            "Send service communications and promotions",
            "Respond to customer support requests",
            "Analyze usage to improve our services",
            "Comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. How We Share Your Information">
        <p>
          We do not sell your personal information. We may share information
          with:
        </p>
        <LegalList
          items={[
            "Payment processors such as Razorpay",
            "Legal authorities when required by law",
            "Relevant parties in the event of a business transfer",
            "Other parties with your explicit authorization",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Data Security">
        <p>
          Gangaur Photobooth implements appropriate technical and
          organizational security measures, including secure storage, regular
          security assessments, restricted personnel access, and PCI-DSS
          compliant payment gateways. However, no method of transmission over
          the internet is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>You have the right to:</p>
        <LegalList
          items={[
            "Access the personal information we hold about you",
            "Request corrections to your information",
            "Request deletion of your information, subject to legal requirements",
            "Object to the processing of your information",
            "Request your data in a portable format",
            "Withdraw marketing consent at any time",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Photographs and Image Rights">
        <p>
          You retain ownership of the photographs taken during your visit.
          Gangaur Photobooth may use your images for promotional purposes only
          with your explicit consent. You may request deletion of your
          photographs within 30 days of your visit; in the absence of such a
          request, photographs are automatically deleted after 90 days.
        </p>
      </LegalSection>

      <LegalSection title="8. Children's Privacy">
        <p>
          Our services are not directed at individuals under the age of 18. If
          we become aware that we have collected information from a minor
          without appropriate consent, parents or guardians may request that
          this information be deleted.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies and Tracking Technologies">
        <p>
          Our website uses cookies to enhance your browsing experience. You
          can control cookies through your browser settings, though disabling
          cookies may limit certain features of our website.
        </p>
      </LegalSection>

      <LegalSection title="10. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these external
          sites. We encourage you to review their privacy policies
          independently.
        </p>
      </LegalSection>

      <LegalSection title="11. Data Retention">
        <p>
          We retain your information only for as long as necessary to fulfil
          the purposes outlined in this policy or as required by law.
          Photographs are typically retained for 90 days unless deleted
          earlier at your request or extended storage is chosen.
        </p>
      </LegalSection>

      <LegalSection title="12. International Data Transfers">
        <p>
          Your information may be processed outside of India. Where this
          occurs, we apply appropriate safeguards in compliance with
          applicable data protection laws.
        </p>
      </LegalSection>

      <LegalSection title="13. Policy Changes">
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page along with a revised &ldquo;Last Updated&rdquo;
          date.
          Continued use of our services after changes are posted constitutes
          your acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact Information">
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

      <LegalSection title="15. Consent">
        <p>
          By using our services, you consent to the data practices described
          in this Privacy Policy.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
