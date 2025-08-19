import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to start your adventure? We're here to help you plan the perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Contact;