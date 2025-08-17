import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TourCard } from '@/components/TourCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Shield, Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

// Import tour images
import muktinathTemple from '@/assets/muktinath-temple.jpg';
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import thailandBeach from '@/assets/thailand-beach.jpg';
import helicopterTour from '@/assets/helicopter-tour.jpg';
import pashupatinath from '@/assets/pashupatinath.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';

const featuredTours = [
  {
    title: "Muktinath Sacred Yatra",
    image: muktinathTemple,
    duration: "7 Days",
    groupSize: "10-15 People",
    price: "$899",
    rating: 4.9,
    location: "Muktinath, Nepal",
    category: "pilgrimage" as const,
    featured: true
  },
  {
    title: "Everest Base Camp Trek",
    image: everestBaseCamp,
    duration: "14 Days",
    groupSize: "8-12 People",
    price: "$1,299",
    rating: 4.8,
    location: "Khumbu, Nepal",
    category: "trekking" as const
  },
  {
    title: "Thailand Paradise Package",
    image: thailandBeach,
    duration: "6 Days",
    groupSize: "Family Friendly",
    price: "$799",
    rating: 4.7,
    location: "Phuket, Thailand",
    category: "international" as const
  },
  {
    title: "Gosainkunda Heli Tour",
    image: helicopterTour,
    duration: "1 Day",
    groupSize: "4-6 People",
    price: "$399",
    rating: 5.0,
    location: "Langtang, Nepal",
    category: "helicopter" as const
  },
  {
    title: "Pashupatinath Darshan",
    image: pashupatinath,
    duration: "3 Days",
    groupSize: "15-20 People",
    price: "$299",
    rating: 4.8,
    location: "Kathmandu, Nepal",
    category: "pilgrimage" as const
  },
  {
    title: "Annapurna Base Camp",
    image: annapurnaBaseCamp,
    duration: "12 Days",
    groupSize: "10-14 People",
    price: "$999",
    rating: 4.9,
    location: "Annapurna, Nepal",
    category: "trekking" as const
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    tour: "Muktinath Yatra",
    rating: 5,
    text: "An absolutely transformative spiritual journey. The team's knowledge of sacred sites and attention to detail made this pilgrimage unforgettable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ee7aef?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "David Chen",
    country: "Australia",
    tour: "Everest Base Camp Trek",
    rating: 5,
    text: "Professional guides, excellent safety standards, and the adventure of a lifetime. Highly recommended for serious trekkers.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Priya Sharma",
    country: "India",
    tour: "Thailand Package",
    rating: 5,
    text: "Perfect family vacation with seamless planning. Every detail was handled professionally. Our kids loved every moment!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Brand Introduction */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-sacred-gold text-white">
              Transforming Travel Since 2008
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Sacred Journeys & Thrilling Adventures
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              At Hanumante Adventures, we specialize in creating transformative travel experiences that blend spiritual discovery with adventurous exploration. From sacred pilgrimages in the Himalayas to thrilling treks and international getaways, every journey is crafted with care, safety, and respect for local cultures.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-sacred-gold" />
                <span className="font-medium">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-secondary" />
                <span className="font-medium">Personalized Care</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary-dark" size="lg">
              Explore Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">
              Popular Destinations
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Featured Tours & Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved journeys, from sacred pilgrimages to epic adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="mr-4">
              View All Tours
            </Button>
            <Button className="bg-sacred-gold hover:bg-sacred-gold/90" size="lg">
              Request Custom Package
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-12">Why Choose Hanumante Adventures?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Local Guides</h3>
                <p className="text-white/90">
                  Our experienced guides are passionate locals who know every trail, temple, and hidden gem.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p className="text-white/90">
                  Comprehensive insurance, emergency protocols, and safety equipment for worry-free adventures.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
                <p className="text-white/90">
                  Every journey is tailored to your interests, pace, and spiritual or adventure goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">
              Happy Travelers
            </Badge>
            <h2 className="text-4xl font-bold mb-6">What Our Guests Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="travel-card p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.country} • {testimonial.tour}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sacred-gold text-sacred-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sacred-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us craft your perfect journey. Whether it's a spiritual pilgrimage or an epic adventure, we're here to make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hanumante Adventures</h3>
              <p className="text-gray-300 mb-4">
                Transforming travel into sacred and adventurous journeys since 2008.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Tours & Packages</a></li>
                <li><a href="#" className="hover:text-white">Gallery</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Tour Categories */}
            <div>
              <h4 className="font-semibold mb-4">Tour Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Nepal Spiritual Tours</a></li>
                <li><a href="#" className="hover:text-white">Adventure Trekking</a></li>
                <li><a href="#" className="hover:text-white">International Packages</a></li>
                <li><a href="#" className="hover:text-white">Helicopter Tours</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Maitidevi, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+977 9841234567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@hanumanteadventures.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Hanumante Adventures. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;