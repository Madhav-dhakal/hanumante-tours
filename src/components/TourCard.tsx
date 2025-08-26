import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TourCardProps {
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  rating: number;
  location: string;
  category: 'pilgrimage' | 'trekking' | 'international' | 'helicopter';
  featured?: boolean;
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

export const TourCard: React.FC<TourCardProps> = ({
  title,
  image,
  duration,
  groupSize,
  price,
  rating,
  location,
  category,
  featured = false
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/tours', { state: { selectedTour: title } });
  };

  const handleBookNow = () => {
    navigate('/book-now', { state: { selectedTour: title } });
  };

  return (
    <div className={`travel-card group relative overflow-hidden ${featured ? 'md:col-span-1 md:row-span-1' : ''}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-sacred-gold text-white">
            Featured Tour
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={categoryColors[category]}>
            {categoryLabels[category]}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
          <Star className="h-4 w-4 fill-sacred-gold text-sacred-gold" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-bold text-foreground group-hover:text-primary transition-smooth ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Starting from</div>
            <div className="text-lg font-bold text-primary">{price}</div>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Tour Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>Year Round</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 hover:border-primary hover:text-primary"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button 
            size="sm"
            className="flex-1 bg-primary hover:bg-primary-dark"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};