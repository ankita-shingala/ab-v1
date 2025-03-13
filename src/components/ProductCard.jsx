import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProductCard = ({ image, title, description, category, link }) => {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white reveal-image hover-effect">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-500/90 text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn More <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
