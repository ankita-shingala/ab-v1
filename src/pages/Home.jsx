import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const products = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Premium Switches & Sockets",
    description:
      "Elegant, durable, and safe switches designed for modern homes and offices.",
    category: "Switches",
    link: "/products#switches",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Electrical Wires & Cables",
    description:
      "High-quality, fire-resistant wires with premium insulation for safety.",
    category: "Wires",
    link: "/products#wires",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "MCB & Distribution Boxes",
    description:
      "Reliable circuit protection solutions for residential and commercial applications.",
    category: "MCB",
    link: "/products#mcb",
  },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    position: "Property Developer",
    company: "Ahmedabad Builders",
    content:
      "We've been using Aura Bliss products for all our residential projects. The quality and reliability of their electrical goods have helped us deliver premium homes to our customers.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    position: "Interior Designer",
    company: "Design Studio Ahmedabad",
    content:
      "As an interior designer, I highly recommend Aura Bliss for their aesthetically pleasing and functional electrical products. They truly enhance the overall look of any space.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Vikram Mehta",
    position: "Facilities Manager",
    company: "Gujarat Corporate Park",
    content:
      "The durability and performance of Aura Bliss products are exceptional. Their technical support team is always helpful and responsive to our needs.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />

      <FeatureSection />

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
            <span className="text-primary-600 font-medium">OUR PRODUCTS</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Featured Electrical Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our range of high-quality electrical products designed
              for safety, efficiency, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 hover-effect"
            >
              <Link to="/products">
                View All Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
            <span className="text-primary-600 font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from professionals who trust our products for their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all reveal-image"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal-image">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Power Your Projects with Quality?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your electrical requirements and get a
              personalized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover-effect"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-primary-700 hover-effect"
              >
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
