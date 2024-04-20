import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMetadata } from "@/utils";

import { Metadata } from "next";

export const metadata: Metadata = getMetadata("Terms of Service");

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of Service" description="20-04-2024" />
      <section id="main" className="pt-4 md:pt-6 lg:pt-8">
        <div className="container">
          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            Welcome to Trisandya!
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of our
            website [trisandya.com] (the &quot;Website&quot;) and any related
            services provided by Trisandya (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;).
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            By accessing or using our Website, you agree to be bound by these
            Terms. If you disagree with any part of these Terms, then you may
            not access the Website.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Accounts
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            When you create an account with us, you must provide us with
            information that is accurate, complete, and current at all times.
            Failure to do so constitutes a breach of the Terms, which may result
            in immediate termination of your account on our Website.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            You are responsible for safeguarding the password that you use to
            access the Website and for any activities or actions under your
            password, whether your password is with our Website or a third-party
            service.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Intellectual Property
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            The Website and its original content, features, and functionality
            are and will remain the exclusive property of Trisandya and its
            licensors. The Website is protected by copyright, trademark, and
            other laws of both the [Your Country] and foreign countries. Our
            trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of [Your
            Company Name].
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Links To Other Websites
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            Our Website may contain links to third-party websites or services
            that are not owned or controlled by Trisandya.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            Trisandya has no control over and assumes no responsibility for the
            content, privacy policies, or practices of any third-party websites
            or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            You acknowledge and agree that Trisandya shall not be responsible or
            liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with the use of or reliance
            on any such content, goods, or services available on or through any
            such third-party websites or services.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party websites or services that you visit.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Termination
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            We may terminate or suspend your account and bar access to the
            Website immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            If you wish to terminate your account, you may simply discontinue
            using the Website.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Governing Law
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            These Terms shall be governed and construed in accordance with the
            laws of [Your Country], without regard to its conflict of law
            provisions.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Website and supersede and replace any prior agreements we might have
            had between us regarding the Website.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Changes
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is a material, we will
            provide at least 30 day&spos;s notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            By continuing to access or use our Website after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            the Website.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Contact Us
          </h2>

          <p className="text-base  leading-relaxed  sm:text-lg sm:leading-relaxed">
            If you have any questions about these Terms, please contact us at
            [Your Contact Email].
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
