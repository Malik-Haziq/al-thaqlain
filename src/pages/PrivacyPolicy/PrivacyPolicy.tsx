import { Header } from "../../components/header";
import { Join } from "../../components/join";

export function PrivacyPolicy() {
  return (
    <>
      <Header heading="Privacy Policy" img="headerBg" />
      <Outlet_Privacy />
      <Join />
    </>
  );
}

function Outlet_Privacy() {
  return (
    <>
      <section className="px-16">
        <div className="mb-12">
          <h2 className="text-secondary-400 text-2xl mb-12">
            Privacy Policy for Al Thaqlain Travel & Tours
          </h2>
          <p className="text-white-200">Effective Date: 8-06-2024</p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">1. Introduction:</h3>
          <p>
            Al Thaqlain Travel & Tours is committed to protecting the privacy
            and confidentiality of individuals who visit our website and utilize
            our services. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard personal information gathered through our
            website, particularly in relation to our services for Iraq Ziyarat.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">
            2. Information We Collect:
          </h3>

          <p className="mb-4">
            Personal Information: We may collect personal information such as
            names, contact details, passport information, and payment details
            when individuals book or inquire about our Iraq Ziyarat services.
          </p>
          <p className="mb-4">
            Communication Data: We may collect data generated from communication
            with us, including emails, messages, and inquiries made through our
            website or other communication channels.
          </p>
          <p className="mb-4">
            Usage Data: We may collect data on how our website is accessed and
            used, including IP addresses, browser types, and browsing activity.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">3. Use of Information:</h3>
          <p className="text-white-200 mb-8">
            We may use the collected information for the following purposes:
          </p>
          <li className="mb-4">
            To provide and maintain our services for Iraq Ziyarat.
          </li>
          <li className="mb-4">
            To process bookings, payments, and inquiries.
          </li>
          <li className="mb-4">
            To communicate with individuals regarding their bookings, inquiries,
            or updates about our services.
          </li>
          <li className="mb-4">
            To improve and personalize the user experience on our website.
          </li>
          <li className="mb-4">
            To analyze usage data and improve our website’s functionality and
            performance.
          </li>
          <li>To comply with legal obligations and regulations.</li>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">
            4. Disclosure of Information:
          </h3>
          <p className="text-white-200 mb-8">
            We may disclose personal information under the following
            circumstances:
          </p>
          <p className="mb-4">
            To third-party service providers who assist us in delivering our
            services, such as hotels, transportation providers, and tour guides.
            To comply with legal obligations or respond to lawful requests from
            authorities.
          </p>
          <p className="mb-4">
            To protect the rights, property, or safety of Al Thaqlain Travel &
            Tours, our customers, or others.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">5. Data Security:</h3>
          <p className="mb-8">
            We implement appropriate technical and organizational measures to
            safeguard personal information against unauthorized access,
            disclosure, alteration, or destruction. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security of data.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">6. Data Retention:</h3>
          <p className="mb-8">
            We will retain personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">7. Consent:</h3>
          <p className="mb-8">
            By using our website and submitting personal information to us,
            individuals consent to the collection, use, and disclosure of their
            information as described in this Privacy Policy.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">
            8. Changes to the Privacy Policy:
          </h3>
          <p className="mb-8">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on our
            website. We encourage individuals to review this Privacy Policy
            periodically for any updates.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary-400 mb-8">9. Contact Us:</h3>
          <p className="mb-12">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at
            <a href="info@althaqlain.com" className="text-secondary-400">
              info@althaqlain.com
            </a>
          </p>
          <p className="mb-8">
            By using our website and services, individuals acknowledge that they
            have read and understood this Privacy Policy and agree to its terms
            and conditions.
          </p>
          <p className="mb-8">
            ipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
        </div>
      </section>
    </>
  );
}
