import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import { getMetadata } from "@/utils";

import { Metadata } from "next";

export const metadata: Metadata = getMetadata("About");

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb pageName="About Us" description="" /> */}
      <section id="main" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                <SectionTitle
                  title="About Us"
                  paragraph="Welcome to Trisandya Technology Solutions, where innovation meets excellence. We are more than just a software development company – we are a team of passionate innovators dedicated to transforming ideas into impactful solutions. With a commitment to collaboration, creativity, and client satisfaction, we go beyond traditional software development by offering comprehensive services that encompass ideation, design, development, and ongoing support."
                  mb="44px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="">
            <SectionTitle
              title="Our Values"
              paragraph="At Trisandya, our values are at the core of everything we do."
              mb="44px"
              center
            />
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Excellence
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We strive for excellence in every aspect of our work,
                    setting high standards and continuously raising the bar for
                    ourselves.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Collaboration
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Collaboration is key to our success. We believe in the power
                    of teamwork and actively collaborate with our clients to
                    co-create solutions that meet their unique needs.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Innovation
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Innovation is in our DNA. We embrace new ideas,
                    technologies, and methodologies to deliver cutting-edge
                    solutions that drive tangible results.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Integrity
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Integrity is non-negotiable. We conduct ourselves with
                    honesty, transparency, and integrity in all our
                    interactions, earning the trust and respect of our clients
                    and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="main" className="pt-16 md:pt-20 lg:pt-28">
        <div
          className="container"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(/images/about/trisandya-team.jpeg)",
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <div className="min-h-auto -mx-4 flex items-center justify-center md:min-h-[480px] lg:min-h-[680px]">
              <div
                className="mx-auto w-full bg-[rgba(255,255,255,0.5)] p-4 text-center dark:bg-[rgba(0,0,0,0.5)]"
                style={{ maxWidth: 720 }}
              >
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Our Team
                </h2>
                <p
                  className="text-base font-medium !leading-relaxed md:text-lg"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  We have taken a unique approach to building our team by
                  pooling rural talent and providing them with the resources,
                  training, and mentorship needed to thrive in the tech
                  industry. Through our rigorous training programs and hands-on
                  experience, we have transformed individuals from diverse
                  backgrounds into skilled professionals proficient in
                  full-stack development and product design.
                  <br />
                  <br />
                  With a team of dedicated and passionate individuals, we are
                  ready to take on any challenge and turn ideas into reality.
                  Together, we are not just building software; we are building a
                  brighter future for ourselves, our community, and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
