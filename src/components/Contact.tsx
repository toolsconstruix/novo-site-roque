
import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  useEffect(() => {
    // Carrega o script do LeadConnector
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpa o script quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience professional cleaning services? Contact us for a free, 
            no-obligation quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LeadConnector Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
            <div className="w-full h-[1176px] overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/iNYZMsogKJDG7kCAlImP"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-iNYZMsogKJDG7kCAlImP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="form_site_roque"
                data-height="1176"
                data-layout-iframe-id="inline-iNYZMsogKJDG7kCAlImP"
                data-form-id="iNYZMsogKJDG7kCAlImP"
                title="form_site_roque"
              ></iframe>
            </div>

            <p className="text-sm text-gray-600 mt-4 text-center">
              * We typically respond within 2 hours during business hours
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have questions or need immediate assistance? We're here to help! 
                Contact us through any of the methods below, and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                  <a href="tel:+15551234567" className="text-primary font-medium hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">Send us your questions anytime</p>
                  <a href="mailto:info@roquegservices.com" className="text-primary font-medium hover:underline">
                    info@roquegservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">We proudly serve the greater metropolitan area</p>
                  <p className="text-primary font-medium">
                    50-mile radius coverage
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency services only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Emergency Services Available</h4>
              <p className="text-gray-600 mb-4">
                Need urgent cleaning services? We offer 24/7 emergency cleaning for water damage, 
                post-event cleanup, and other urgent situations.
              </p>
              <a 
                href="tel:+15551234567" 
                className="text-green-600 font-medium hover:underline"
              >
                Call our emergency line: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
