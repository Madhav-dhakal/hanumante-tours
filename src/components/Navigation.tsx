import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Tours & Packages', 
    href: '/tours',
    dropdown: [
      'Nepal Spiritual Tours',
      'Nepal Trekking',
      'India Pilgrimage',
      'Tibet - Mansarovar',
      'International Packages',
      'Helicopter Tours'
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="bg-primary/90 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+977 9842290039 / 9842290280</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>hanumantetours@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Maitidevi, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2df12698-9722-4578-8439-376d8f8dfa62.png"
                alt="Hanumante Tours & Travels Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">Hanumante</h1>
                <p className="text-xs text-muted-foreground">Tours & Travels</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name === 'Home' ? (
                    <button
                      onClick={() => scrollToSection('top')}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {item.name}
                    </button>
                  ) : item.name === 'Contact' ? (
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-white shadow-travel border z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem}
                            to="/tours"
                            className="block px-4 py-2 text-sm hover:bg-accent hover:text-primary transition-smooth"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('plan-trip')}
              >
                Plan Your Trip
              </Button>
              <Button 
                className="bg-sacred-gold hover:bg-sacred-gold/90" 
                size="sm"
                onClick={() => scrollToSection('book-now')}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.name === 'Home' ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection('top');
                        setIsOpen(false);
                      }}
                      className="text-foreground hover:text-primary transition-smooth font-medium text-left"
                    >
                      {item.name}
                    </button>
                  ) : item.name === 'Contact' ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection('contact');
                        setIsOpen(false);
                      }}
                      className="text-foreground hover:text-primary transition-smooth font-medium text-left"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="pt-4 border-t flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      scrollToSection('plan-trip');
                      setIsOpen(false);
                    }}
                  >
                    Plan Your Trip
                  </Button>
                  <Button 
                    className="bg-sacred-gold hover:bg-sacred-gold/90" 
                    size="sm"
                    onClick={() => {
                      scrollToSection('book-now');
                      setIsOpen(false);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};