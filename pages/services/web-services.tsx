import { Layout as div } from "../../components/panels/Layout";
import Image from "next/image";
import { FaTeamspeak } from "react-icons/fa";
import DesignImage from "../../public/images/Design-team.svg";
import WebDesign from "../../public/images/web-design-office.jpg"

const webServices = () => {
  return (
    <div>
      <main className="container sm:px-14 md:px-10 lg:px-10 xl:px-32 w-full mx-auto">
        <div className="w-full grid justify-items-center mt-20 md:mt-20 mb-14 md:mb-20">
          <div className="container">
            <h1 className="uppercase flex justify-center md:justify-start text-2xl md:text-4xl font-bold mt-20 text-regal-blue">
              Web Design Services
            </h1>
            <div className="md:h-1 md:w-56 md:bg-greeny"></div>
            <div>
              <div className="flex justify-center md:justify-end text-sm md:text-xl font-semibold">
                <a className="hover:text-regal-blue text-greeny" href="/">
                  Home
                </a>
                &nbsp;&nbsp;{">"}&nbsp;&nbsp;Overview
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="xl:mx-12 w-1/2 mx-auto md:w-3/4 animate-fade-in-left">
              <Image
                alt="Web Design Office"
                src={WebDesign}
                width={500}
                height={700}
              />
            </div>
            <div className="text-center md:text-left w-3/4 mx-auto xl:mx-12 md:w-full text-sm md:text-xl lg:text-2xl md:ml-12 leading-10 font-light">
              <span className="text-regal-blue font-bold">WebWorks Dreams</span>{" "}
              has captured modern tech tools to shape and engineer every clients
              vision into a reality. When the need arises, WebWorks Dreams is
              disposed to consult any of our clients needs. With our competitive
              pricing, we are better able to focus our attention on our clients
              needs.
            </div>
          </div>
          <div className="w-full flex my-12 md:hidden">
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
          </div>
          <div className="flex flex-col md:flex-row md:mt-32">
            <div className="text-center md:text-left w-3/4 mx-auto xl:mx-12 md:w-full text-sm md:text-xl lg:text-2xl leading-10 font-light">
              <div>
                <h3 className="text-regal-blue font-bold">
                  Why Professional Designs Matter
                </h3>
              </div>
              <div>
                A Website's design has many uses which extend beyond aesthetics
                and appearances. What does this exactly mean? This means that
                our team places a strong emphasis on the visual experience of
                the entire website, from the Landing page to the Frequently
                Asked Questions page. Here at WebWorks Dreams, we take design
                beyond looks to build websites that fit our clients' needs.{" "}
              </div>
            </div>
            <div className="pl-10">
              <Image src={DesignImage} alt="Design Team" />
            </div>
          </div>
          <div className="flex my-10 px-10">
            <ul>
              <li className="flex">
                <span className="text-regal-blue fo">
                  &nbsp;&nbsp;&nbsp;&nbsp;A user's first impression is what
                  makes or breaks a website.
                </span>
              </li>
              {/* <li className="flex">
              <AcademicCapIcon classNameName="w-7 h-7 text-yellow-500" />
                <span className="text-regal-blue fo">
                  &nbsp;&nbsp;&nbsp;&nbsp;A user's first impression is what
                  makes or breaks a website.
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </main>
      <div className="w-full md:mt-12">
        <div className="md:absolute w-full bg-greeny md:bg-transparent p-10">
          <div className="container xs:px-5 sm:px-14 md:px-0 xl:px-32 w-full mx-auto">
            <div className="md:grid grid-cols-2 gap-4">
              <div>
                <div className="p-2 md:mt-8 lg:mt-6 xl:mt-8"></div>
              </div>
              <div className="w-giga">
                <div className="p-2 md:mt-0 lg:mt-5 xl:mt-8 text-center md:text-left">
                  <h3 className="text-lg md:text-2xl font-bold text-regal-blue">
                    Web Design & Web Development
                  </h3>
                  <div className="text-sm sm:text-sm md:text-md lg:text-xl leading-6 lg:leading-10 text-blue-50 font-light">
                    We are fully committed to creating websites that go beyond
                    looks. In addition, we aim to build websites that generate
                    leads and growth for our customers. As a result, our team of
                    web designers practice an active approach when determining
                    which design layouts are a precise fit for our client's end
                    goals. This is to assure nothing is left on the table and
                    clients are satisfied with the results in action. Chiefly,
                    our expertise are dependent on modern tools such as Shopify,
                    Strapi, WordPress, and WooCommerce.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-greeny"></div>
        <div className="flex justify-center">
          <div className="my-20 text-center py-5">
            <h3 className="text-lg md:text-2xl font-bold text-regal-blue">
              Contact us to Schedule a consulting.
            </h3>
            <a
              href="../message"
              type="button"
              className="text-lg md:text-xl bg-regal-blue hover:bg-blue-900 text-blue-50 font-semibold p-3 md:p-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default webServices;