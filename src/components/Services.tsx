
import { Home, Building, Sparkles, Brush, Wind, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Deck - Fences - Carpentry",
      description: "Expert carpentry services including custom deck construction, fence installation, and general carpentry work.",
      features: ["Custom Deck Building", "Fence Installation & Repair", "Carpentry & Woodwork", "Outdoor Structures"],
      image: "/gallery-1.webp"
    },
    {
      icon: Brush,
      title: "Exterior & Interior Painting",
      description: "Professional painting services for both interior and exterior spaces with premium quality materials.",
      features: ["Interior Wall Painting", "Exterior House Painting", "Trim & Detail Work", "Color Consultation"],
      image: "/gallery-2.webp"
    },
    {
      icon: Sparkles,
      title: "Landscape",
      description: "Complete landscaping solutions to transform your outdoor space into a beautiful and functional area.",
      features: ["Garden Design & Installation", "Lawn Care & Maintenance", "Hardscape Installation", "Irrigation Systems"],
      image: "/gallery-3.webp"
    },
    {
      icon: Building,
      title: "Construction & Remodeling",
      description: "Full-scale construction and remodeling services to renovate and enhance your property.",
      features: ["Home Additions", "Kitchen & Bathroom Remodeling", "Structural Modifications", "Complete Renovations"],
      image: "/gallery-4.webp"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction and remodeling solutions tailored to meet your specific needs, 
            from carpentry to complete home renovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Imagem do serviço */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const current = e.currentTarget.src;
                    // Se falhar o webp, tenta o jpg; se já estiver em jpg, cai para placeholder
                    if (current.endsWith('.webp')) {
                      e.currentTarget.src = current.replace('.webp', '.jpg');
                    } else {
                      e.currentTarget.src = '/placeholder.svg';
                    }
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote for This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Construction Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We also provide customized construction and remodeling packages tailored to your specific requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us for Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
