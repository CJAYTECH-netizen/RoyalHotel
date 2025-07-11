// import React from 'react'
import React from "react";

interface Item {
  name: string;
  image: string;
  description?: string;
}

interface MenuGridProps {
  title: string;
  items: Item[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mt-50">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            {item.description && (
              <p className="text-gray-600">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;