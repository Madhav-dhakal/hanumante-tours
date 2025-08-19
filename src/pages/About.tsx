import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Shield, Heart, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold mb-6">About Hanumante Tours & Travels</h1>
            <p className="text-xl text-white/90 mb-8">
              Transforming travel into sacred and adventurous journeys since 2008, connecting souls with the mystical beauty of the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-6">
                Founded in 2008, Hanumante Tours & Travels began as a vision to bridge the gap between spiritual seekers and the sacred destinations of Nepal, Tibet, and India. Our name "Hanumante" is derived from the sacred Hanumante River, symbolizing our deep connection to Nepal's spiritual heritage.
              </p>
              <p className="text-lg mb-6">
                Over the years, we have grown from a small local operator to a trusted partner for thousands of travelers seeking authentic experiences in the Himalayas. Our expertise spans sacred pilgrimages, adventure trekking, cultural tours, and international packages.
              </p>
              <p className="text-lg mb-8">
                What sets us apart is our commitment to providing not just tours, but transformative experiences that honor local traditions while ensuring the highest standards of safety and comfort for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Respect</h3>
                <p className="text-muted-foreground">
                  Deep respect for local cultures, traditions, and the natural environment we explore.
                </p>
              </div>
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sacred-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safety</h3>
                <p className="text-muted-foreground">
                  Uncompromising commitment to the safety and well-being of every traveler.
                </p>
              </div>
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Supporting local communities and creating sustainable tourism opportunities.
                </p>
              </div>
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-accent/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Striving for excellence in every aspect of our service and experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let us help you create memories that will last a lifetime.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hanumante Tours & Travels</h3>
              <p className="text-gray-300 mb-4">
                Transforming travel into sacred and adventurous journeys since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/tours" className="hover:text-white">Tours & Packages</a></li>
                <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Maitidevi, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+977 9842290039 / 9842290280</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>hanumantetours@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Hanumante Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;