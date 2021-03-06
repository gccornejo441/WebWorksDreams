import React from "react";
import Image from "next/image";
import Head from "next/head";
import Contacting from "../public/images/contacting.jpg";


const TITLE: string = "WebWorks Dreams support staff is available to assist you | WebWorks Dreams";

const Contact = () => {

  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Gabriel Cornejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />

        {/* OG */}
        <meta property="fb:app_id" content="254907099748012" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.webworksdreams.com/contact"
        />
        <meta property="og:title" content={TITLE} />
        <meta
          property="og:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta property="og:image:alt" content="A web developer hard at work" />
        <meta
          property="og:description"
          content="Do you find yourself daydreaming about your ideal website? Do you want to make it happen? Or do you just need to refresh your current site? Please do not hesitate to contact us."
        />
        <meta
          name="description"
          content="Do you find yourself daydreaming about your ideal website? Do you want to make it happen? Or do you just need to refresh your current site? Please do not hesitate to contact us."
        />
        <meta property="og:site_name" content="WebWorks Dreams" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WebWorksDreams" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Do you find yourself daydreaming about your ideal website? Do you want to make it happen? Or do you just need to refresh your current site? Please do not hesitate to contact us."
        />
        <meta
          name="twitter:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta name="twitter:image:alt" content="A web developer hard at work" />
      </Head>
      <div className="flex justify-center px-5 bg-gradient-to-t from-gray-50 to-white">
        <div className="container md:text-left block text-center md:flex py-12">
          <div className="container flex flex-col justify-center xl:px-40">
            <h1 className="text-gray-800 text-4xl sm:text-5xl md:text-5xl font-bold lg:text-5xl xl:text-5xl text-center">
              Schedule A Consultation
            </h1>
            <p className="text-xl md:text-2xl text-black font-light text-center">Need additional information? </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="hidden md:block col-span-2 md:p-5 mt-4 xl:mt-12">
                <Image
                  src={Contacting}
                  alt="Office hall"
                  layout="intrinsic"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className="rounded-md col-span-4 md:col-span-2 lg:p-10">
                <div className="mt-8">
                  <div className="mb-10">
                    <h2 className="text-xl md:text-2xl text-black font-light text-center">
                      Please click below to schedule a consultation with one of our Intake Specialist.
                    </h2>
                  </div>
                  <div className="mb-6 text-center">
                    <a
                      href="https://calendly.com/webworksdreams/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-12 py-4 text-white bg-greeny hover:bg-darkGreeny rounded-md focus:bg-lightGreeny focus:outline-none text-1xl sm:text-2xl md:text-2xl cursor-pointer block"
                    >Schedule</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
