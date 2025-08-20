import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Compass, Shield, Heart, Calendar, Users, MapPin, Plane } from 'lucide-react';

const PlanTrip = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-foreground">
            <Badge className="mb-4 bg-primary/20 text-foreground">
              Trip Planning
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Plan Your Perfect Journey</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts help you create a customized itinerary that matches your interests, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How We Plan Your Trip</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Itinerary</h3>
                <p className="text-muted-foreground">
                  Personalized travel plans designed around your preferences and interests.
                </p>
              </div>
              
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sacred-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Comprehensive safety planning and emergency support throughout your journey.
                </p>
              </div>
              
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Local guides with deep knowledge of culture, history, and hidden gems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Form */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Tell Us About Your Dream Trip</h2>
              <p className="text-xl text-muted-foreground">
                Share your preferences and we'll create a perfect itinerary for you
              </p>
            </div>

            <div className="travel-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <Input placeholder="Enter your country" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Preferred Travel Date
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Users className="h-4 w-4 inline mr-1" />
                      Number of Travelers
                    </label>
                    <Input type="number" placeholder="2" min="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input placeholder="e.g., 7 days" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Preferred Destinations
                  </label>
                  <Input placeholder="e.g., Nepal, Tibet, India" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range (USD)</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Select budget range</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,000</option>
                    <option>$2,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Trip Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Pilgrimage</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Trekking</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Cultural Tours</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Adventure</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requirements or Preferences</label>
                  <Textarea 
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                  <Plane className="mr-2 h-4 w-4" />
                  Submit Trip Planning Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold">We Review Your Request</h3>
                <p className="text-muted-foreground">Our travel experts will carefully review your preferences and requirements.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-sacred-gold font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold">Custom Itinerary Created</h3>
                <p className="text-muted-foreground">We'll create a detailed, personalized itinerary within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-secondary font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold">Consultation Call</h3>
                <p className="text-muted-foreground">We'll schedule a call to discuss details and finalize your perfect trip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanTrip;