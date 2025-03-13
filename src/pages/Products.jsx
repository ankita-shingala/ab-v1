import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productCategories = [
  {
    id: "switches",
    name: "Switches & Sockets",
    description:
      "High-quality switches and sockets that combine safety with elegant design.",
    products: [
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        title: "Premium Modular Switches",
        description:
          "Sleek, modern modular switches with customizable faceplates and LED indicators.",
        category: "Switches",
        link: "/products#switches",
      },
      {
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        title: "USB Power Sockets",
        description:
          "Integrated USB charging ports with traditional power sockets for modern convenience.",
        category: "Sockets",
        link: "/products#switches",
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        title: "Smart Touch Panels",
        description:
          "Touch-sensitive panels with remote control capabilities for smart homes.",
        category: "Smart Controls",
        link: "/products#switches",
      },
      {
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        title: "Designer Switch Plates",
        description:
          "Customizable designer plates in various finishes including wood, metal, and glass.",
        category: "Accessories",
        link: "/products#switches",
      },
    ],
  },
  {
    id: "wires",
    name: "Wires & Cables",
    description:
      "Premium wires and cables designed for safety, durability, and efficient power transmission.",
    products: [
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        title: "FRLS House Wires",
        description:
          "Fire resistant low smoke wires ideal for residential and commercial applications.",
        category: "House Wires",
        link: "/products#wires",
      },
      {
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        title: "Industrial Power Cables",
        description:
          "Heavy-duty power cables for industrial applications with enhanced durability.",
        category: "Industrial",
        link: "/products#wires",
      },
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        title: "Submersible Pump Cables",
        description:
          "Waterproof cables specially designed for underwater and wet environment applications.",
        category: "Specialized",
        link: "/products#wires",
      },
      {
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        title: "Data & Communication Cables",
        description:
          "High-speed data transmission cables for networking and communication systems.",
        category: "Communication",
        link: "/products#wires",
      },
    ],
  },
  {
    id: "mcb",
    name: "MCB & Distribution Boxes",
    description:
      "Reliable circuit protection devices to ensure electrical safety in all environments.",
    products: [
      {
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        title: "Miniature Circuit Breakers",
        description:
          "High-quality MCBs with precise tripping mechanisms for optimal circuit protection.",
        category: "MCB",
        link: "/products#mcb",
      },
      {
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        title: "Residual Current Devices",
        description:
          "RCDs designed to prevent electrical shocks by monitoring current imbalances.",
        category: "RCD",
        link: "/products#mcb",
      },
      {
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        title: "Distribution Boards",
        description:
          "Sleek, space-saving distribution boards for organized circuit management.",
        category: "DB",
        link: "/products#mcb",
      },
      {
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        title: "Surge Protection Devices",
        description:
          "Advanced SPDs to protect sensitive electronic equipment from voltage spikes.",
        category: "SPD",
        link: "/products#mcb",
      },
    ],
  },
  {
    id: "panels",
    name: "Panel Boards",
    description:
      "Customized electrical panels for efficient power distribution and control.",
    products: [
      {
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        title: "Main Distribution Panels",
        description:
          "High-capacity MDPs for primary power distribution in commercial buildings.",
        category: "MDP",
        link: "/products#panels",
      },
      {
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        title: "Power Control Centers",
        description:
          "Integrated PCCs with monitoring and control capabilities for industrial facilities.",
        category: "PCC",
        link: "/products#panels",
      },
    ],
  },
  {
    id: "lighting",
    name: "Lighting Solutions",
    description:
      "Energy-efficient lighting products for residential and commercial applications.",
    products: [
      {
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        title: "LED Panel Lights",
        description:
          "Slim, energy-efficient LED panels for uniform lighting in offices and homes.",
        category: "LED",
        link: "/products#lighting",
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        title: "Smart Lighting Systems",
        description:
          "Connected lighting solutions with remote control and automation capabilities.",
        category: "Smart Lighting",
        link: "/products#lighting",
      },
    ],
  },
];

const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("switches");

  // Handle hash in URL for direct navigation to a category
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && productCategories.some((cat) => cat.id === hash)) {
      setActiveTab(hash);

      // Scroll to the products section
      setTimeout(() => {
        document
          .getElementById("products-section")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center reveal-image">
            <span className="text-primary-600 font-medium">OUR PRODUCTS</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
              Premium Electrical Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive range of high-quality electrical
              products designed for safety, reliability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex overflow-x-auto lg:justify-center mb-8 category-tab">
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                {productCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary-500 data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="animate-fade-in"
              >
                <div className="max-w-3xl mx-auto text-center mb-12 reveal-image">
                  <h2 className="text-3xl font-display font-bold mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal-image">
            <h2 className="text-3xl font-display font-bold mb-4">
              Need Custom Electrical Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer customized electrical products tailored to your specific
              requirements. Contact us to discuss your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 hover-effect"
            >
              <a href="/contact">Request a Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
