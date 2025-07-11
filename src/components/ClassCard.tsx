import { Link } from "react-router-dom";

type ClassCardProps = {
  title: string;
  desc: string;
  image: string;
  link?: string;
};
export default function
  ClassCard({ title, desc, image, link = "#" }: ClassCardProps) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
        <img src={image} alt={title}
          className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
          <a href={link} className="text-blue-500 hover:underline font-medium"></a>
        </div>
      </div>
    </Link>
  );
}
