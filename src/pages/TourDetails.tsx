import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin, Star, Check, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Tour data with detailed information
const tourDetails = {
  'muktinath-sacred-yatra': {
    title: "Muktinath Sacred Yatra",
    image: "/lovable-uploads/885a2ad3-f62f-44cd-a4c7-52a8a0089fa3.png",
    duration: "7 Days",
    groupSize: "10-15 People",
    price: "$899",
    rating: 4.9,
    location: "Muktinath, Nepal",
    category: "pilgrimage",
    description: "Experience the divine journey to Muktinath Temple, one of the most sacred pilgrimage sites for both Hindus and Buddhists. This sacred temple sits at an altitude of 3,710 meters in the Mustang district.",
    highlights: [
      "Visit the sacred Muktinath Temple",
      "Experience the eternal flame",
      "Panoramic views of Dhaulagiri and Annapurna ranges",
      "Cultural immersion in Mustang region",
      "Sacred bath in 108 water spouts"
    ],
    itinerary: [
      "Day 1: Arrive in Kathmandu",
      "Day 2: Fly to Pokhara, drive to Jomsom",
      "Day 3: Trek to Muktinath",
      "Day 4: Muktinath darshan and puja",
      "Day 5: Return to Jomsom",
      "Day 6: Fly back to Pokhara",
      "Day 7: Return to Kathmandu"
    ]
  },
  'mansarovar-yatra': {
    title: "Mansarovar Yatra",
    image: "/lovable-uploads/79fe9603-3a91-4169-bac4-3fceb2219bdd.png",
    duration: "12 Days",
    groupSize: "8-15 People",
    price: "$1,599",
    rating: 4.9,
    location: "Mount Kailash, Tibet",
    category: "pilgrimage",
    description: "Embark on the ultimate spiritual journey to Mount Kailash and Lake Mansarovar, considered the most sacred pilgrimage in Hinduism and Buddhism.",
    highlights: [
      "Kailash Parikrama (circumambulation)",
      "Holy dip in Lake Mansarovar",
      "Visit to ancient monasteries",
      "Spectacular Himalayan views",
      "Spiritual transformation experience"
    ],
    itinerary: [
      "Day 1-2: Kathmandu preparation",
      "Day 3: Fly to Lhasa",
      "Day 4-5: Lhasa sightseeing and acclimatization",
      "Day 6-7: Drive to Mansarovar",
      "Day 8-10: Kailash Parikrama",
      "Day 11: Return journey",
      "Day 12: Arrive in Kathmandu"
    ]
  },
  'everest-base-camp-trek': {
    title: "Everest Base Camp Trek",
    image: "/lovable-uploads/9ac76760-26c2-4f14-99cb-49caa194c195.png",
    duration: "14 Days",
    groupSize: "8-12 People",
    price: "$1,299",
    rating: 4.8,
    location: "Khumbu, Nepal",
    category: "trekking",
    description: "Trek to the base camp of the world's highest mountain and experience the legendary Sherpa culture in the Everest region.",
    highlights: [
      "Reach Everest Base Camp (5,364m)",
      "Climb Kala Patthar for sunrise views",
      "Visit Tengboche Monastery",
      "Experience Sherpa culture",
      "Stunning mountain panoramas"
    ],
    itinerary: [
      "Day 1: Fly to Lukla, trek to Phakding",
      "Day 2-3: Trek to Namche Bazaar",
      "Day 4: Acclimatization in Namche",
      "Day 5-8: Trek via Tengboche to Dingboche",
      "Day 9-11: Trek to Everest Base Camp",
      "Day 12-14: Return via Namche to Lukla"
    ]
  },
  'thailand-paradise-package': {
    title: "Thailand Paradise Package",
    image: "/lovable-uploads/11e48830-2563-44a8-b0a9-23ba5a900b71.png",
    duration: "6 Days",
    groupSize: "Family Friendly",
    price: "$799",
    rating: 4.7,
    location: "Phuket, Thailand",
    category: "international",
    description: "Discover the tropical paradise of Thailand with pristine beaches, vibrant culture, and delicious cuisine in this family-friendly package.",
    highlights: [
      "Phi Phi Island excursion",
      "James Bond Island tour",
      "Traditional Thai massage",
      "Street food tours",
      "Beach relaxation time"
    ],
    itinerary: [
      "Day 1: Arrival in Phuket",
      "Day 2: Phi Phi Island tour",
      "Day 3: James Bond Island excursion",
      "Day 4: Phuket city tour and shopping",
      "Day 5: Beach day and spa",
      "Day 6: Departure"
    ]
  },
  'gosainkunda-heli-tour': {
    title: "Gosainkunda Heli Tour",
    image: "/lovable-uploads/736eaddc-be69-4f4d-8657-44ea9885bcb7.png",
    duration: "1 Day",
    groupSize: "4-6 People",
    price: "$399",
    rating: 5.0,
    location: "Langtang, Nepal",
    category: "helicopter",
    description: "Experience the sacred lakes of Gosainkunda from above with this exclusive helicopter tour offering breathtaking aerial views of the Himalayas.",
    highlights: [
      "Helicopter flight over Gosainkunda",
      "Aerial views of sacred lakes",
      "Landing at Gosainkunda (weather permitting)",
      "Panoramic Himalayan vistas",
      "Quick darshan at sacred lakes"
    ],
    itinerary: [
      "Morning: Hotel pickup and transfer to airport",
      "09:00 AM: Helicopter departure from Kathmandu",
      "10:00 AM: Arrive at Gosainkunda",
      "11:00 AM: Exploration and darshan",
      "12:00 PM: Return flight to Kathmandu",
      "01:00 PM: Hotel drop-off"
    ]
  },
  'pashupatinath-darshan': {
    title: "Pashupatinath Darshan",
    image: "/lovable-uploads/c02b8e2c-2f08-44ed-ad5b-d6fc4d75d5e2.png",
    duration: "3 Days",
    groupSize: "15-20 People",
    price: "$299",
    rating: 4.8,
    location: "Kathmandu, Nepal",
    category: "pilgrimage",
    description: "Immerse yourself in the spiritual atmosphere of Pashupatinath Temple, one of the most sacred Hindu temples dedicated to Lord Shiva.",
    highlights: [
      "VIP darshan at Pashupatinath Temple",
      "Aarti ceremony participation",
      "Visit to Boudhanath Stupa",
      "Kathmandu Durbar Square tour",
      "Cultural performances"
    ],
    itinerary: [
      "Day 1: Arrival and Pashupatinath visit",
      "Day 2: Boudhanath and cultural sites",
      "Day 3: Morning aarti and departure"
    ]
  },
  'annapurna-base-camp': {
    title: "Annapurna Base Camp",
    image: "/lovable-uploads/a85aaa6e-1398-4c6e-860d-25814801247e.png",
    duration: "12 Days",
    groupSize: "10-14 People",
    price: "$999",
    rating: 4.9,
    location: "Annapurna, Nepal",
    category: "trekking",
    description: "Journey to the heart of the Annapurna Sanctuary and experience the amphitheater of towering peaks surrounding Annapurna Base Camp.",
    highlights: [
      "Reach Annapurna Base Camp (4,130m)",
      "360-degree mountain views",
      "Hot springs at Jhinu Danda",
      "Gurung and Magar culture",
      "Diverse landscapes and ecosystems"
    ],
    itinerary: [
      "Day 1: Drive to Pokhara",
      "Day 2-3: Trek to Ghandruk",
      "Day 4-6: Trek via Chhomrong to Bamboo",
      "Day 7-9: Trek to Annapurna Base Camp",
      "Day 10-12: Return via Jhinu to Pokhara"
    ]
  }
};

const TourDetails = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<any>(null);

  useEffect(() => {
    if (tourId && tourDetails[tourId as keyof typeof tourDetails]) {
      setTour(tourDetails[tourId as keyof typeof tourDetails]);
    }
  }, [tourId]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-foreground">Tour not found</h1>
          <Button onClick={() => navigate('/tours')} className="mt-4">
            Back to Tours
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    pilgrimage: 'bg-sacred-gold text-white',
    trekking: 'bg-earth-green text-white',
    international: 'bg-primary text-white',
    helicopter: 'bg-secondary text-white'
  };

  const categoryLabels = {
    pilgrimage: 'Sacred Journey',
    trekking: 'Adventure Trek',
    international: 'Global Tour',
    helicopter: 'Helicopter Tour'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/tours')}
            className="mb-6 text-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`mb-4 ${categoryColors[tour.category as keyof typeof categoryColors]}`}>
                {categoryLabels[tour.category as keyof typeof categoryLabels]}
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-foreground">{tour.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{tour.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{tour.duration}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Group Size</div>
                  <div className="font-semibold text-foreground">{tour.groupSize}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-semibold text-foreground">{tour.location}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Star className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Rating</div>
                  <div className="font-semibold text-foreground">{tour.rating}/5</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark"
                  onClick={() => navigate('/book-now', { state: { selectedTour: tour.title } })}
                >
                  Book Now - {tour.price}
                </Button>
                <Button variant="outline" size="lg">
                  Contact for Custom Package
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/20 text-white backdrop-blur-sm">
                  Starting from {tour.price}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Tour Highlights</h2>
              <div className="space-y-4">
                {tour.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-sacred-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Itinerary</h2>
              <div className="space-y-4">
                {tour.itinerary.map((day: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Book your {tour.title} today and create memories that will last a lifetime.
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90" 
              size="lg"
              onClick={() => navigate('/book-now', { state: { selectedTour: tour.title } })}
            >
              Book This Tour - {tour.price}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;