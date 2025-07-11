import kingroom from "../../assets/images/kingroom.jpg";
import poolside from "..//../assets/images/poolside.jpg";
type Props = {};

const Home = (_props: Props) => {
  return (
    <div className="flex flex-col mt-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-white">
      <div className="w-full space-y-6">
        <h2 className="text-4xl font-bold text-center">
          EXPERIENCE ROYALTY AT IT'S FINEST!!!
        </h2>
        <p className="text-black text-3xl">
          Discover timeless luxury, impeccable service, and unforgettable stays
          at RoyalHotel, where elegance meets comfort in every corner.
        </p>
        <div className="w-full pt-3 p-5 flex flex-col mt-10 md:flex-row gap-10 px-10 py-5 bg-white">
          <img
            src={kingroom}
            width={100}
            height={100}
            alt="Benefits illustration"
            className="w-[2000px] h-80 rounded-xl shadow-lg"
          />
          <img
            src={poolside}
            width={100}
            height={100}
            className="w-[2000px] h-80 rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center">
            Where Elegance Meets Tradition
          </h2>
          <p className="text-black text-2xl mt-5">
            Nestled in the heart of the city, RoyalHotel blends classic
            sophistication with modern comfort. Our vintage-styled rooms,
            exceptional cuisine, and personalized service create a sanctuary
            where every guest is treated like royalty.
          </p>
          <p className="text-black text-3xl font-semibold mt-10 text-center">
            Book Your Stay....Explore Rooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
