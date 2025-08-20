import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Import images
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';
import muktinathTemple from '@/assets/muktinath-temple.jpg';
import pashupatinath from '@/assets/pashupatinath.jpg';
import helicopterTour from '@/assets/helicopter-tour.jpg';
import thailandBeach from '@/assets/thailand-beach.jpg';

const galleryImages = [
  {
    id: 1,
    src: everestBaseCamp,
    alt: "Everest Base Camp Trek",
    category: "trekking",
    title: "Everest Base Camp",
    description: "Stunning views from the world's highest mountain base camp"
  },
  {
    id: 2,
    src: annapurnaBaseCamp,
    alt: "Annapurna Base Camp",
    category: "trekking",
    title: "Annapurna Base Camp",
    description: "Majestic Annapurna range during sunrise"
  },
  {
    id: 3,
    src: muktinathTemple,
    alt: "Muktinath Temple",
    category: "pilgrimage",
    title: "Muktinath Temple",
    description: "Sacred temple in the Himalayas"
  },
  {
    id: 4,
    src: pashupatinath,
    alt: "Pashupatinath Temple",
    category: "pilgrimage",
    title: "Pashupatinath Temple",
    description: "Holy temple complex in Kathmandu"
  },
  {
    id: 5,
    src: helicopterTour,
    alt: "Helicopter Tour",
    category: "helicopter",
    title: "Helicopter Adventure",
    description: "Aerial views of the magnificent Himalayas"
  },
  {
    id: 6,
    src: thailandBeach,
    alt: "Thailand Beach",
    category: "international",
    title: "Thailand Paradise",
    description: "Beautiful beaches and crystal clear waters"
  },
  {
    id: 7,
    src: "/lovable-uploads/885a2ad3-f62f-44cd-a4c7-52a8a0089fa3.png",
    alt: "Muktinath Yatra",
    category: "pilgrimage",
    title: "Sacred Yatra",
    description: "Spiritual journey to sacred sites"
  },
  {
    id: 8,
    src: "/lovable-uploads/79fe9603-3a91-4169-bac4-3fceb2219bdd.png",
    alt: "Mount Kailash",
    category: "pilgrimage",
    title: "Mount Kailash",
    description: "Holy mountain and spiritual destination"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'pilgrimage', label: 'Pilgrimage' },
    { value: 'helicopter', label: 'Helicopter Tours' },
    { value: 'international', label: 'International' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-foreground">
            <Badge className="mb-4 bg-primary/20 text-foreground">
              Visual Journey
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the breathtaking beauty of our destinations through the eyes of fellow travelers and our expert guides.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-travel hover-scale">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Share Your Adventure</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of travelers who have captured unforgettable moments with us.
            </p>
            <Button className="bg-primary hover:bg-primary-dark" size="lg">
              Plan Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;