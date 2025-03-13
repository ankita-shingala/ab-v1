import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-primary-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary-100 rounded-full opacity-40"></div>

      <div className="container mx-auto px-4 py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal-image">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium tracking-wider mb-2">
              PREMIUM ELECTRICAL SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              <span className="text-primary-700">Powering Innovations</span>{" "}
              With Premium Electrical Goods
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Aura Bliss provides high-quality electrical products that meet
              international safety standards for residential and commercial
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 hover-effect hover:shadow-lg"
              >
                <Link to="/products">
                  Explore Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-500 text-primary-500 hover:bg-primary-50 hover-effect"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative reveal-image">
            <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-3 opacity-10"></div>
            <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Aura Bliss Premium Electrical Products"
                className="w-full h-auto rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="px-3 py-1 bg-white/90 text-primary-700 rounded-full text-sm font-medium">
                  Quality Assured
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-semibold mt-3">
                  ISO Certified Products
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
