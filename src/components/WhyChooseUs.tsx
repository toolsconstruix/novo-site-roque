
import { CheckCircle, Clock, Shield, Users, Star, Phone } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "100% Satisfaction Guarantee",
      description: "We're not satisfied until you are. If you're not happy with our cleaning, we'll come back and make it right - at no extra cost."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with evening, weekend, and holiday availability. One-time or recurring services available."
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Our team is professionally trained, background-checked, and fully insured for your peace of mind and protection."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our cleaning professionals have years of experience and use proven techniques to deliver exceptional results every time."
    },
    {
      icon: Star,
      title: "Eco-Friendly Products",
      description: "We use environmentally safe, non-toxic cleaning products that are effective yet gentle on your family and pets."
    },
    {
      icon: Phone,
      title: "24/7 Customer Support",
      description: "Questions or concerns? Our customer service team is available around the clock to assist you with any needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Roque G Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With hundreds of satisfied customers and years of experience, we've built our reputation 
            on reliability, quality, and exceptional customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Roque G Services for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm opacity-90">Years in Business</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">5.0</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
