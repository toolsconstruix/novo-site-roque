
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Roque G Services has been cleaning our home for over two years now. They're always punctual, thorough, and professional. I love coming home to a spotless house!"
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "We've been using their commercial cleaning services for our office building. The team is reliable, and our workspace has never looked better. Highly recommend!"
    },
    {
      name: "Emma Davis",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "As a restaurant owner, cleanliness is crucial. Roque G Services understands our industry requirements and always delivers exceptional deep cleaning services."
    },
    {
      name: "David Rodriguez",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I manage multiple properties, and Roque G Services handles the cleaning for all of them. They're consistent, affordable, and their attention to detail is outstanding."
    },
    {
      name: "Lisa Thompson",
      role: "Busy Mom",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "With three kids and a full-time job, having Roque G Services clean our home weekly has been a lifesaver. They're trustworthy and do an amazing job every time."
    },
    {
      name: "Robert Wilson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Their post-construction cleanup service was phenomenal. After our office renovation, they made everything pristine and ready for business. Professional team!"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5.0 Average Rating</h3>
            <p className="text-gray-600">Based on 500+ customer reviews across Google, Yelp, and Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
};
