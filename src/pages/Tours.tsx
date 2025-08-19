import { Navigation } from '@/components/Navigation';
import { TourCard } from '@/components/TourCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

// Import tour images
import muktinathTemple from '@/assets/muktinath-temple.jpg';
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import thailandBeach from '@/assets/thailand-beach.jpg';
import helicopterTour from '@/assets/helicopter-tour.jpg';
import pashupatinath from '@/assets/pashupatinath.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';

const allTours = [
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

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Tours' },
    { value: 'pilgrimage', label: 'Pilgrimage' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'helicopter', label: 'Helicopter Tours' },
    { value: 'international', label: 'International' }
  ];

  const filteredTours = allTours.filter(tour => {
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white">
              Explore Destinations
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Tours & Packages</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our comprehensive collection of spiritual journeys, adventure treks, and cultural experiences across Nepal, Tibet, India, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search tours..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="whitespace-nowrap"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
          
          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No tours found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let us create a custom itinerary tailored to your preferences and budget.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90" size="lg">
              Request Custom Package
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;