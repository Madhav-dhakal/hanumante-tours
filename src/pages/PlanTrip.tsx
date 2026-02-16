import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Compass, Shield, Heart, Calendar, Users, MapPin, Plane, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_n4zhrmj';
const TEMPLATE_ID = 'template_je3ivxa';
const PUBLIC_KEY = 'nd19tv1YAclEo4UNp';

const PlanTrip = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelDate: '',
    travelers: '',
    duration: '',
    destinations: '',
    budget: '',
    tripTypes: [] as string[],
    specialRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      tripTypes: checked
        ? [...prev.tripTypes, type]
        : prev.tripTypes.filter(t => t !== type),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({ title: "Missing Information", description: "Please fill in your name, email, and phone number.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country || 'Not specified',
        travel_date: formData.travelDate || 'Flexible',
        travelers: formData.travelers || 'Not specified',
        duration: formData.duration || 'Not specified',
        destinations: formData.destinations || 'Not specified',
        budget: formData.budget || 'Not specified',
        trip_types: formData.tripTypes.length > 0 ? formData.tripTypes.join(', ') : 'Not specified',
        special_requirements: formData.specialRequirements || 'None',
        to_email: 'hanumantetours@gmail.com',
        message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏔️ NEW TRIP PLANNING REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION
• Full Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Country: ${formData.country || 'Not specified'}

✈️ TRIP DETAILS
• Preferred Travel Date: ${formData.travelDate || 'Flexible'}
• Number of Travelers: ${formData.travelers || 'Not specified'}
• Duration: ${formData.duration || 'Not specified'}
• Preferred Destinations: ${formData.destinations || 'Not specified'}
• Budget Range: ${formData.budget || 'Not specified'}

🎯 TRIP TYPE
• ${formData.tripTypes.length > 0 ? formData.tripTypes.join(', ') : 'Not specified'}

📝 SPECIAL REQUIREMENTS
${formData.specialRequirements || 'None'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via Hanumante Tours & Travels Website
Please respond within 24 hours.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({ title: "Request Sent! ✈️", description: "Our team will review your request and get back to you within 24 hours." });
      setFormData({
        fullName: '', email: '', phone: '', country: '', travelDate: '',
        travelers: '', duration: '', destinations: '', budget: '',
        tripTypes: [], specialRequirements: '',
      });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      toast({ title: "Submission Failed", description: "Something went wrong. Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <Input name="country" value={formData.country} onChange={handleChange} placeholder="Enter your country" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Preferred Travel Date
                    </label>
                    <Input name="travelDate" type="date" value={formData.travelDate} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Users className="h-4 w-4 inline mr-1" />
                      Number of Travelers
                    </label>
                    <Input name="travelers" type="number" value={formData.travelers} onChange={handleChange} placeholder="2" min="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g., 7 days" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Preferred Destinations
                  </label>
                  <Input name="destinations" value={formData.destinations} onChange={handleChange} placeholder="e.g., Nepal, Tibet, India" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range (USD)</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 border rounded-lg bg-background">
                    <option value="">Select budget range</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                    <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Trip Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Pilgrimage', 'Trekking', 'Cultural Tours', 'Adventure'].map(type => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={formData.tripTypes.includes(type)}
                          onChange={(e) => handleCheckbox(type, e.target.checked)}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requirements or Preferences</label>
                  <Textarea 
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark" size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Request...</>
                  ) : (
                    <><Plane className="mr-2 h-4 w-4" /> Submit Trip Planning Request</>
                  )}
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
