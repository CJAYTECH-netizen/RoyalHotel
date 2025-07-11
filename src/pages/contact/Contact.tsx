// import React from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import poolside from "../../assets/images/poolside.jpg";


type Props = {};

const contact = (_props: Props) => {
  return (
    <div className="font-sans w-full text-black">
      {/*Banner*/}
      <section className="relative h-[70vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#131111] bg-capacity-500" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-center pt-32 mt-20">
          OUR CONTACT
        </h1>
        <p className="relative z-10 text-5xl md:text-xl font-bold text-center mt-5">
          Tel:08109639494
        </p>
        {/* V-shaped Curve */}
        <svg
          className="absolute bottom-0 w-full h-23"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,160L720,320L1440,160L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </section>
      <img
        src={poolside}
        alt="premiumroom"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="py-16 px- bg-white flex  justify-center">
        {/* Circle 1 */}
        <div className="grid grid-cols-2 gap-10">
          <div className="w-30 h-30 text-black flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration">
            <UserIcon className="w-30 h-30 size={40}" />
          </div>
        </div>

        {/* Circle 2 */}
        <div className="grid grid-cols-2 gap-10">
          <div className="w-30 h-30 text-black flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration">
            <QuestionMarkCircleIcon className="w-30 h-30 size{40}" />
          </div>
        </div>

        {/* Circle 3 */}
        <div className="grid grid-cols-2 gap-10">
          <div className="w-30 h-30 text-black flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration">
            <PhoneIcon className="w-20 h-20 {30}" />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Map */}
          <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3498321147927!2d3.4938891!3d6.4433824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf49a9627680b%3A0x3a69f396ba95fcf5!2sFreedom%20Way%2C%20Lekki%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1655831159243!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Info Text */}
          <div className="px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              HOW TO REACH US
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              You can contact us through any of the means provided below. You
              can also click to visit our social media pages.
            </p>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>Slavve Way, Ikom, Lekki, Lagos</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>Fanta & Coke Mall, First floor, Suite 4, Wuse 2, Abuja</p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>+2348109639494</p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>+234915879979</p>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>jude.joseph81@yahoo.com</p>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-yellow-600 mt-1" />
                <p>Open 24/7</p>
              </div>
            </div>
            <div className="bg-white sm:text-4xl font-bold text-yellow-600 py-5 px-6 w-full">
              <h3 className="font-semibold text-sm sm:text-base mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-8 h-8 hover:text-blue-500 transition" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-8 h-8 hover:text-blue-400 transition" />
                </a>

                <a
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="w-8 h-8 hover:text-blue-600 transition" />
                </a>

                <a
                  href="https://wa.me/2348123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-8 h-8 hover:text-green-300 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#B68D40] to-[#E0C08C] py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Text */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">CONTACT US</h2>
            <p className="text-white/90 text-sm sm:text-base">
              For any feedback, review, consultation, and more, you can reach us
              through this form. We will get back to you through the email
              address or phone number provided.
            </p>
          </div>

          {/* Right Side - Form */}
          <form className="bg-white text-black p-6 rounded-xl shadow-md w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+234..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Message
              </label>
              <textarea
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
