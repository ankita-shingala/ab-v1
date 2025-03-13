import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-primary-500" />,
    title: "Our Location",
    details: "123 Electrical Lane, Navrangpura, Ahmedabad, Gujarat - 380009",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary-500" />,
    title: "Phone Number",
    details: "+91 98765 43210",
  },
  {
    icon: <Mail className="w-6 h-6 text-primary-500" />,
    title: "Email Address",
    details: "info@aurabliss.com",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary-500" />,
    title: "Business Hours",
    details: "Monday - Saturday: 9:00 AM - 7:00 PM",
  },
];

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center reveal-image">
            <span className="text-primary-600 font-medium">CONTACT US</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-600">
              Have questions about our products or services? We're here to help
              you find the perfect electrical solutions for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 hover:shadow-md transition-all reveal-image text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl shadow-lg reveal-image">
              <h2 className="text-2xl font-display font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            <div className="reveal-image">
              <h2 className="text-2xl font-display font-bold mb-6">
                Our Location
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59037.25845843391!2d72.54199391242303!3d23.022110452221026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1657012345678!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aura Bliss Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-image">
            <span className="text-primary-600 font-medium">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6 reveal-image">
            {[
              {
                question: "Do you offer product warranties?",
                answer:
                  "Yes, all our products come with a standard warranty. The warranty period varies by product category, ranging from 1 to 5 years depending on the type of product.",
              },
              {
                question: "Can you deliver products outside Gujarat?",
                answer:
                  "Absolutely! We deliver our products across India. For international shipping, please contact our customer service team for more information and shipping rates.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "We offer professional installation services for selected products within Ahmedabad and nearby areas. For other regions, we can recommend certified electricians in your area.",
              },
              {
                question: "How can I place a bulk order?",
                answer:
                  "For bulk orders, please contact our sales team directly via phone or email. We offer special pricing and dedicated support for large volume purchases.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal-image">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Discuss Your Electrical Needs?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to assist you with product selection,
              technical support, and custom solutions.
            </p>
            <div className="inline-flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-4 font-medium hover-effect transition-all">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
