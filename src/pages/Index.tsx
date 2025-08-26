import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TourCard } from '@/components/TourCard';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Shield, Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Mountain, Compass, Camera, Globe } from 'lucide-react';

// Import tour images
import muktinathTemple from '@/assets/muktinath-temple.jpg';
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import thailandBeach from '@/assets/thailand-beach.jpg';
import helicopterTour from '@/assets/helicopter-tour.jpg';
import pashupatinath from '@/assets/pashupatinath.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';
import luxuryHotels from '@/assets/luxury-hotels.jpg';

const featuredTours = [
  {
    title: "Muktinath Sacred Yatra",
    image: "/lovable-uploads/885a2ad3-f62f-44cd-a4c7-52a8a0089fa3.png",
    duration: "7 Days",
    groupSize: "10-15 People",
    price: "$899",
    rating: 4.9,
    location: "Muktinath, Nepal",
    category: "pilgrimage" as const,
    featured: true
  },
  {
    title: "Mansarovar Yatra",
    image: "/lovable-uploads/79fe9603-3a91-4169-bac4-3fceb2219bdd.png",
    duration: "12 Days",
    groupSize: "8-15 People",
    price: "$1,599",
    rating: 4.9,
    location: "Mount Kailash, Tibet",
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
    <div className="min-h-screen bg-background" id="top">
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

      {/* Popular Hotels & Rooms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">
              Accommodation
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Popular Hotels & Rooms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully selected accommodations for your perfect stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Hotel Card 1 */}
            <div className="travel-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
                  alt="Luxury Hotel Kathmandu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Hotel, Kathmandu</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$45</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4].map(i => (
                    <Star key={i} className="h-3 w-3 fill-sacred-gold text-sacred-gold" />
                  ))}
                  <Star className="h-3 w-3 text-gray-300" />
                  <span className="text-sm text-muted-foreground ml-1">4</span>
                </div>
                <span className="text-xs text-muted-foreground">Rating</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  Far far away, behind the word mountains, far from the countries of comfort and luxury accommodations.
                </p>
                <Button className="w-full mt-3" size="sm">Book Now</Button>
              </div>
            </div>

            {/* Hotel Card 2 */}
            <div className="travel-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
                  alt="Resort Pokhara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Resort, Pokhara</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$65</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-3 w-3 fill-sacred-gold text-sacred-gold" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">5</span>
                </div>
                <span className="text-xs text-muted-foreground">Rating</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  Far far away, behind the word mountains, nestled by the serene lakes with mountain views.
                </p>
                <Button className="w-full mt-3" size="sm">Book Now</Button>
              </div>
            </div>

            {/* Hotel Card 3 */}
            <div className="travel-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
                  alt="Boutique Hotel Bhaktapur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Hotel, Bhaktapur</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$40</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4].map(i => (
                    <Star key={i} className="h-3 w-3 fill-sacred-gold text-sacred-gold" />
                  ))}
                  <Star className="h-3 w-3 text-gray-300" />
                  <span className="text-sm text-muted-foreground ml-1">4</span>
                </div>
                <span className="text-xs text-muted-foreground">Rating</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  Far far away, behind the word mountains, in the heart of ancient cultural heritage sites.
                </p>
                <Button className="w-full mt-3" size="sm">Book Now</Button>
              </div>
            </div>

            {/* Hotel Card 4 */}
            <div className="travel-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400&h=300&fit=crop"
                  alt="Mountain Lodge Namche"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Lodge, Namche</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$35</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4].map(i => (
                    <Star key={i} className="h-3 w-3 fill-sacred-gold text-sacred-gold" />
                  ))}
                  <Star className="h-3 w-3 text-gray-300" />
                  <span className="text-sm text-muted-foreground ml-1">4</span>
                </div>
                <span className="text-xs text-muted-foreground">Rating</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  Far far away, behind the word mountains, at the gateway to Everest with stunning views.
                </p>
                <Button className="w-full mt-3" size="sm">Book Now</Button>
              </div>
            </div>

            {/* Hotel Card 5 */}
            <div className="travel-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"
                  alt="Heritage Hotel Patan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Hotel, Patan</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$50</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-3 w-3 fill-sacred-gold text-sacred-gold" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">5</span>
                </div>
                <span className="text-xs text-muted-foreground">Rating</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  Far far away, behind the word mountains, experience traditional Newari architecture and hospitality.
                </p>
                <Button className="w-full mt-3" size="sm">Book Now</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Hotels
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-white">
                Adventure Awaits
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Unforgettable Travel Experiences</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From spiritual pilgrimages to adrenaline-pumping adventures, discover experiences that will transform your perspective and create memories for a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="travel-card p-6 text-center hover-scale">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Mountain Trekking</h3>
                <p className="text-muted-foreground text-sm">
                  Conquer majestic peaks and witness breathtaking sunrise views from the world's highest mountains.
                </p>
              </div>

              <div className="travel-card p-6 text-center hover-scale">
                <div className="w-16 h-16 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-sacred-gold" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Sacred Journeys</h3>
                <p className="text-muted-foreground text-sm">
                  Experience spiritual awakening through ancient temples and sacred sites across the Himalayas.
                </p>
              </div>

              <div className="travel-card p-6 text-center hover-scale">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Photography Tours</h3>
                <p className="text-muted-foreground text-sm">
                  Capture stunning landscapes and cultural moments with expert guidance and exclusive access.
                </p>
              </div>

              <div className="travel-card p-6 text-center hover-scale">
                <div className="w-16 h-16 bg-accent/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Cultural Immersion</h3>
                <p className="text-muted-foreground text-sm">
                  Live like a local and discover authentic traditions, cuisine, and customs of remote communities.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary-dark mr-4" size="lg">
                Explore Experiences
              </Button>
              <Button variant="outline" size="lg">
                Plan Custom Adventure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Our Commitment to Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Award-Winning Service</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in travel services with multiple industry awards and certifications.
                </p>
              </div>
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-sacred-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock assistance during your journey with dedicated support team available anytime.
                </p>
              </div>
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of local culture, customs, and hidden treasures for authentic experiences.
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


      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

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
            <p>&copy; 2024 Hanumante Adventures. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;