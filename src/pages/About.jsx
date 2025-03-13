import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Aura Bliss was established in Ahmedabad with a vision to provide premium electrical products.",
  },
  {
    year: "2012",
    title: "First Major Contract",
    description:
      "Secured our first major contract for a commercial building project in Gujarat.",
  },
  {
    year: "2015",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001:2015 certification for our quality management system.",
  },
  {
    year: "2018",
    title: "Product Line Expansion",
    description:
      "Expanded our product range to include smart electrical solutions and lighting products.",
  },
  {
    year: "2020",
    title: "New Headquarters",
    description:
      "Moved to our new state-of-the-art facility in Navrangpura, Ahmedabad.",
  },
  {
    year: "2023",
    title: "Pan-India Distribution",
    description:
      "Established distribution networks across all major cities in India.",
  },
];

const team = [
  {
    name: "Vikram Patel",
    position: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "With over 25 years of experience in the electrical industry, Vikram leads Aura Bliss with his vision and expertise.",
  },
  {
    name: "Meera Shah",
    position: "Technical Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "An electrical engineer with a passion for innovation, Meera oversees product development and quality assurance.",
  },
  {
    name: "Arjun Mehta",
    position: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    bio: "Arjun ensures that all operations run smoothly, from procurement to distribution and customer service.",
  },
  {
    name: "Priya Desai",
    position: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "With her creative approach, Priya has successfully established Aura Bliss as a premium brand in the market.",
  },
];

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 reveal-image">
              <span className="text-primary-600 font-medium">ABOUT US</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Powering Gujarat's Electrical Needs Since 2010
              </h1>
              <p className="text-lg text-gray-600">
                Aura Bliss is a leading electrical goods trading company based
                in Ahmedabad, Gujarat. We specialize in providing high-quality
                electrical products that meet international safety standards and
                cater to diverse customer needs.
              </p>
            </div>

            <div className="relative reveal-image">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-3 opacity-10"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Aura Bliss Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 reveal-image">
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2 reveal-image">
              <span className="text-primary-600 font-medium">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Elevating Electrical Standards
              </h2>
              <p className="text-lg text-gray-600">
                At Aura Bliss, our mission is to provide premium electrical
                solutions that prioritize safety, efficiency, and reliability.
                We aim to be the trusted partner for all electrical needs, from
                residential to industrial applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      All our products undergo rigorous testing to ensure they
                      meet the highest quality standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Customer Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      We prioritize customer needs and provide excellent service
                      throughout the purchase journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Innovation</h3>
                    <p className="text-gray-600">
                      We continuously update our product range to incorporate
                      the latest technological advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
            <span className="text-primary-600 font-medium">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Milestones That Define Us
            </h2>
            <p className="text-gray-600 text-lg">
              From our humble beginnings to becoming a leading electrical goods
              provider in Gujarat, here's our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative reveal-image"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="md:w-1/2 p-6">
                      <div
                        className={`${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-500 border-4 border-white items-center justify-center">
                      <span className="text-white font-semibold">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>

                    <div className="md:w-1/2 p-6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
            <span className="text-primary-600 font-medium">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              The People Behind Aura Bliss
            </h2>
            <p className="text-gray-600 text-lg">
              Meet our dedicated team of professionals who work tirelessly to
              ensure the best electrical solutions for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all reveal-image"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal-image">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join Us in Powering a Brighter Future
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking for reliable electrical products or want to
              partner with us, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover-effect"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-primary-700 hover-effect"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
