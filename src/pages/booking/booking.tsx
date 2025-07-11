// import React from 'react'
import premiumroom from "../../assets/images/premiumroom.jpg";

type Props = {};

const booking = (_props: Props) => {
  return (
    <div className="font-sans text-black">
      {/*Banner*/}
      <section className="relative h-[70vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#131111] bg-capacity-500" />
        <h1 className="relative z-10 text-5xl md:text-5xl font-bold text-center pt-32 mt-35">
          BOOK YOUR ROYAL STAY
        </h1>
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
        src={premiumroom}
        alt="premiumroom"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="flex px-6 py-12 bg-white min-h-screen mt-35">
        <div className="max-w-2xl mx-auto bg-[#14131377] rounded-2xl p-8 space-y-20 shadow-lg">
          <form className="space-y-6">
            {/*Room Selection*/}
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <label className="block text-white mb-1">Room Type</label>
                <select className="w-full p-3 rounded-lg bg-white text-black">
                  <option>Deluxe Suite</option>
                  <option>Executive Suite</option>
                  <option>Royal Penthouse</option>
                </select>
              </div>
              {/*Date Pickers*/}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1">Check-In</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1">Check-Out</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg bg-white"
                  />
                </div>
              </div>
            </div>
            {/*Guest Ifo*/}
            <div>
              <label className="block text-white mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Jay Jay"
                className="w-full p-3 rounded-lg bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  placeholder="JayJay@gmail.com"
                  className="w-full p-3 rounded-lg bg-white"
                />
              </div>
              <div>
                <label className="block text-white mb-1">Phone Number</label>
                <input
                  type="Tel"
                  placeholder="+234..."
                  className="w-full p-3 rounded-lg bg-white"
                />
              </div>
            </div>
            {/*Special Requests*/}
            <div>
              <label className="block text-white mb-1">Special Requests</label>
              <textarea
                placeholder="Any Special needs or notes...."
                className="w-full p-3 rounded-lg bg-white rows{3}"
              ></textarea>
            </div>
            {/*Submit Button*/}
            <button
              type="submit"
              className=" bg-gray-500 hover:bg-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default booking;
