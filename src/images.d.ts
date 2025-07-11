
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
};

<span className="ml-1 text-xl font-bold text-white">
            RoyalHotel
  </span>
          

  import {
    FaBed,
    FaUtensils,
    FaSpa,
    FaSwimmer,
    FaCar,
    FaBroom,
  } from "react-icons/fa";
  const Our_service = [
      {
        icon: <FaBed size={40} className="text-black mb-3" />,
        title: "Luxury Accommodation",
        desc: "Elegant rooms with vintage decor, royal bedding, and serene views.",
      },
      {
        icon: <FaUtensils size={40} className="text-black mb-3" />,
        title: "24/7 Room Service",
        desc: "Fine dining delivered to your door any time, day or night",
      },
      {
        icon: <FaSpa size={40} className="text-black mb-3" />,
        title: "Spa and Wellness",
        desc: "Relax in our full-service spa with massages, sauna, and more",
      },
      {
        icon: <FaSwimmer size={40} className="text-black mb-3" />,
        title: "Infinity Pool and Lounge",
        desc: "Swim and unwind in our rooftop pool with skyline views",
      },
      {
        icon: <FaCar size={40} className="text-blacck mb-3" />,
        title: "Airport Chauffeur Service",
        desc: "Arrive and leave in style with our premium airport transfers",
      },
      {
        icon: <FaBroom size={40} className="text-black mb-3" />,
        title: "Daily Housekeeping",
        desc: "Impeccable cleanliness with twice-a-day service",
      },
    ];

    <div className="min-h-screen text-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {Our_service.map((s, i) => (
            <div
              key={i}
              className="bg-[#807e7e] text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration"
            >
              {s.icon}
              <h2 className="text-xl font semibold mb-2">{s.title}</h2>
              <p className="text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Ready to Be Treated Like Royalty?
          </h2>
          <a
            href="/booking"
            className="inline-block bg-gray-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Book Your Stay Now
          </a>
        </div>
      </div>
    </div>;