
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary block">Construction Services</span>
                You Can Trust
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your property with our reliable construction and remodeling solutions. 
                From deck building to complete renovations, we deliver excellence in every project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Get Free Quote Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 Rating</span>
              </div>
              <div className="text-gray-600">
                <span className="font-bold text-2xl text-primary">500+</span>
                <span className="ml-2">Happy Customers</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">Quality Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                alt="Professional construction team at work" 
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
