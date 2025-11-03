import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      category: "Interior Remodeling",
      location: "Downtown Area",
      date: "2024",
      image: "/placeholder.svg",
      description: "Complete kitchen renovation with custom cabinets, granite countertops, and modern appliances.",
      features: ["Custom Cabinetry", "Granite Countertops", "LED Lighting", "Hardwood Flooring"]
    },
    {
      id: 2,
      title: "Outdoor Deck & Patio",
      category: "Carpentry & Landscaping",
      location: "Residential Area",
      date: "2024",
      image: "/placeholder.svg",
      description: "Beautiful outdoor living space with custom deck, patio, and landscape design.",
      features: ["Custom Deck", "Stone Patio", "Outdoor Lighting", "Garden Design"]
    },
    {
      id: 3,
      title: "Exterior House Painting",
      category: "Painting",
      location: "Suburban Home",
      date: "2023",
      image: "/placeholder.svg",
      description: "Complete exterior painting with premium materials and color consultation.",
      features: ["Pressure Washing", "Premium Paint", "Trim Work", "Color Matching"]
    },
    {
      id: 4,
      title: "Bathroom Renovation",
      category: "Interior Remodeling",
      location: "Family Home",
      date: "2023",
      image: "/placeholder.svg",
      description: "Luxury bathroom renovation with modern fixtures and custom tile work.",
      features: ["Custom Tile Work", "Modern Fixtures", "Vanity Installation", "Lighting Upgrade"]
    },
    {
      id: 5,
      title: "Fence Installation",
      category: "Carpentry",
      location: "Backyard Project",
      date: "2024",
      image: "/placeholder.svg",
      description: "Privacy fence installation with custom gate and professional finish.",
      features: ["Privacy Fencing", "Custom Gate", "Post Installation", "Staining & Sealing"]
    },
    {
      id: 6,
      title: "Landscape Design",
      category: "Landscaping",
      location: "Front Yard",
      date: "2024",
      image: "/placeholder.svg",
      description: "Complete landscape transformation with native plants and irrigation system.",
      features: ["Native Plants", "Irrigation System", "Mulching", "Seasonal Maintenance"]
    }
  ];

  const categories = ["All", "Interior Remodeling", "Carpentry", "Painting", "Landscaping"];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see the quality craftsmanship 
            that sets Roque General Services apart.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>

                <Button variant="outline" className="w-full">
                  View Project Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let us bring your vision to life with our expert craftsmanship and attention to detail. 
            Contact us today for a free consultation and estimate.
          </p>
          <Button size="lg" className="px-8 py-3">
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};