
import { Users, Award, Shield, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Roque G Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a passion for cleanliness and customer satisfaction, we've been serving 
            our community with professional cleaning services that exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Your Trusted Cleaning Partner Since 2015
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Roque G Services, we understand that a clean environment is essential for 
              productivity, health, and peace of mind. Our team of experienced professionals 
              is dedicated to delivering exceptional cleaning services that transform your 
              space into a spotless, welcoming environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on using eco-friendly products and modern cleaning techniques 
              that not only clean effectively but also protect your family, employees, and the 
              environment. Every member of our team is thoroughly trained, background-checked, 
              and committed to maintaining the highest standards of service.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-gray-600">Customer Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Trained and certified cleaning professionals</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Fully Insured</h4>
              <p className="text-gray-600">Licensed, bonded, and insured for your protection</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly</h4>
              <p className="text-gray-600">Safe, green products for a healthier environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
