import React from "react";
import { Shield, Zap, Award, Clock } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-primary-500" />,
    title: "Safety Certified",
    description:
      "All our products meet international safety standards and certifications for reliable performance.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary-500" />,
    title: "Energy Efficient",
    description:
      "Our electrical goods are designed to optimize energy consumption and reduce electricity bills.",
  },
  {
    icon: <Award className="w-12 h-12 text-primary-500" />,
    title: "Premium Quality",
    description:
      "We source only the highest quality materials and components for durability and longevity.",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary-500" />,
    title: "Extended Warranty",
    description:
      "Enjoy peace of mind with our extended warranty coverage on all electrical products.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-primary-600">Aura Bliss</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We provide the best electrical solutions with a focus on quality,
            safety, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover-effect reveal-image"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 p-3 rounded-full bg-primary-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
