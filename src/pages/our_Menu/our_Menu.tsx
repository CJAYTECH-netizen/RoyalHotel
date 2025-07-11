// import react from "react";
import { useState } from "react";
import MenuGrid from "../../components/MenuGrid";
import {
  intercontinentalItems,
  africanItems,
  champagneItems,
  assortedItems,
  beerItems,
} from "../../data/menuItems";
import kingroom from "../../assets/images/kingroom.jpg";

const Our_Menu = () => {
  const [openSection, setOpenSection] = useState<"meal"|"drinks" | null>("meal");
  const [selectedSub, setSelectedSub] = useState("intercontinental");

  const getGrid = () => {
    switch (selectedSub) {
      case "intercontinental":
        return <MenuGrid title="Intercontinental Dishes" items={intercontinentalItems} />;
      case "african":
        return <MenuGrid title="African Dishes" items=
          {africanItems} />;
      case "champagne": return <MenuGrid title="Champagnes" items={champagneItems} />;
      case "assorted":
        return <MenuGrid title="Assorted Drinks" items={assortedItems} />;
      case "beer":
        return <MenuGrid title="Beer" items={beerItems} />;
      default: return null;
    }
  };

  // Handle submenu clicks
  const handleSub = (main: "meal" | "drinks", sub: string) => {
    setOpenSection(main);
    setSelectedSub(sub);
  };
  
return (
  <div className="font-sans text-black">
    {/*Banner*/}
    <section className="relative h-[70vh] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[#131111] bg-capacity-500" />
      <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-center pt-32 mt-20">
        OUR ROYAL SERVICES
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
      src={kingroom}
      alt="premiumroom"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#807e7e] text-black p-4 mt-50">
        <h2 className="text-2xl font-bold mb-4">Our Menu</h2>

        {/* Meal */}
        <div> 
          <div
            className="py-2 cursor-pointer font-semibold hover:underline"
            onClick={() =>
              setOpenSection(openSection === "meal" ? null : "meal")
            }
          >
            Meal
          </div>
          {openSection === "meal" && (
            <ul className="ml-4 space-y-1">
              <li
                onClick={() => handleSub("meal", "intercontinental")}
                className="cursor-pointer hover:underline"
              >
                Intercontinental
              </li>
              <li
                onClick={() => handleSub("meal", "african")}
                className="cursor-pointer hover:underline"
              >
                African
              </li>
            </ul>
          )}
        </div>

        {/* Drinks */}
        <div className="mt-4">
          <div
            className="py-2 cursor-pointer font-semibold hover:underline"
            onClick={() =>
              setOpenSection(openSection === "drinks" ? null : "drinks")
            }
          >
            Drinks
          </div>
          {openSection === "drinks" && (
            <ul className="ml-4 space-y-1">
              <li
                onClick={() => handleSub("drinks", "champagne")}
                className="cursor-pointer hover:underline"
              >
                Champagne
              </li>
              <li
                onClick={() => handleSub("drinks", "assorted")}
                className="cursor-pointer hover:underline"
              >
                Assorted
              </li>
              <li
                onClick={() => handleSub("drinks", "beer")}
                className="cursor-pointer hover:underline"
              >
                Beer
              </li>
            </ul>
          )}
        </div>
      </aside>

      {/* Content area */}
      <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">{getGrid()}</main>
    </div>
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Ready to Be Treated Like Royalty?
      </h2>
      <a
        href="/booking"
        className="inline-block bg-gray-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition mb-4"
      >
        Book Your Stay Now
      </a>
    </div>
  </div>
);
};

export default Our_Menu;
