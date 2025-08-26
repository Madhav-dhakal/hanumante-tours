import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Award, Shield, Phone, Heart, CreditCard, Calendar, Users, CheckCircle } from 'lucide-react';

const BookNow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sacred-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white">
              Instant Booking
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-black">Book Your Adventure Today</h1>
            <p className="text-xl text-black/90 mb-8">
              Ready to embark on your journey? Secure your spot with our easy booking process and flexible payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Simple Booking Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose Your Package</h3>
                <p className="text-muted-foreground">
                  Select from our curated tours or request a custom package tailored to your needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sacred-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sacred-gold font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Your Dates</h3>
                <p className="text-muted-foreground">
                  Reserve your preferred travel dates with a small deposit to guarantee availability.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prepare & Depart</h3>
                <p className="text-muted-foreground">
                  Get your travel documents ready and embark on your unforgettable adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Benefits */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Book Your Journey</h2>
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Select Package</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Choose your tour package</option>
                        <option>Muktinath Sacred Yatra - $899</option>
                        <option>Mansarovar Yatra - $1,599</option>
                        <option>Everest Base Camp Trek - $1,299</option>
                        <option>Thailand Paradise Package - $799</option>
                        <option>Gosainkunda Heli Tour - $399</option>
                        <option>Custom Package - Contact for Quote</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Departure Date
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Payment Option</label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
                          <input type="radio" name="payment" value="full" className="text-primary" />
                          <div>
                            <div className="font-medium">Pay Full Amount</div>
                            <div className="text-sm text-muted-foreground">Complete payment now and save 5%</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
                          <input type="radio" name="payment" value="deposit" className="text-primary" defaultChecked />
                          <div>
                            <div className="font-medium">Pay Deposit (30%)</div>
                            <div className="text-sm text-muted-foreground">Secure your booking with a deposit</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <Button className="w-full bg-sacred-gold hover:bg-sacred-gold/90" size="lg">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Payment
                    </Button>
                  </form>
                </div>
              </div>

              {/* Booking Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Why Book With Us?</h2>
                
                <div className="space-y-6">
                  <div className="travel-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                        <p className="text-muted-foreground">
                          We guarantee the best prices for all our tours. Find a lower price elsewhere and we'll match it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="travel-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sacred-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-sacred-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Travel Insurance Included</h3>
                        <p className="text-muted-foreground">
                          Comprehensive travel insurance coverage included with every booking for your peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="travel-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-muted-foreground">
                          Round-the-clock assistance during your journey with our dedicated support team.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="travel-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/40 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Flexible Cancellation</h3>
                        <p className="text-muted-foreground">
                          Free cancellation up to 30 days before departure. Life happens, we understand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Trusted by 10,000+ Travelers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;