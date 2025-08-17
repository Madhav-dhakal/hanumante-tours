import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, MapPin, Calendar } from 'lucide-react';
import heroHimalaya from '@/assets/hero-himalaya.jpg';
import heroTemple from '@/assets/hero-temple.jpg';
import heroTrekking from '@/assets/hero-trekking.jpg';

const heroSlides = [
  {
    image: heroHimalaya,
    title: "Sacred Himalayan Journeys",
    subtitle: "Experience the divine majesty of the world's highest peaks",
    cta1: "Explore Pilgrimage Tours",
    cta2: "View Trekking Routes"
  },
  {
    image: heroTemple,
    title: "Spiritual Pilgrimages",
    subtitle: "Connect with ancient wisdom at sacred temples and holy sites",
    cta1: "Muktinath Yatra",
    cta2: "India Pilgrimage"
  },
  {
    image: heroTrekking,
    title: "Adventure Awaits",
    subtitle: "Conquer legendary trails from Everest Base Camp to Annapurna",
    cta1: "Book Trekking",
    cta2: "Helicopter Tours"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay absolute inset-0" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="mb-8 text-xl md:text-2xl opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
              >
                <MapPin className="mr-2 h-5 w-5" />
                {heroSlides[currentSlide].cta1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {heroSlides[currentSlide].cta2}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-sacred-gold">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sacred-gold">500+</div>
                <div className="text-sm opacity-80">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sacred-gold">50+</div>
                <div className="text-sm opacity-80">Sacred Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-smooth hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-smooth hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-sacred-gold scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Auto-play control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-smooth hover:bg-white/30"
      >
        <Play className={`h-5 w-5 ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
      </button>
    </div>
  );
};