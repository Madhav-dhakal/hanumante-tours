import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Everest Base Camp Trek",
    excerpt: "Everything you need to know about preparing for and completing the world's most famous trek to Everest Base Camp.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Raj Shrestha",
    date: "2024-01-15",
    category: "Trekking",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Sacred Temples of Nepal: A Spiritual Journey",
    excerpt: "Discover the most sacred temples and spiritual sites in Nepal, each with their own unique history and significance.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
    author: "Sita Gurung",
    date: "2024-01-10",
    category: "Pilgrimage",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Monsoon Trekking in Nepal: Tips and Best Routes",
    excerpt: "Learn how to safely trek during Nepal's monsoon season and discover the routes that are still accessible.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    author: "Pemba Sherpa",
    date: "2024-01-05",
    category: "Trekking",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Helicopter Tours: Seeing the Himalayas from Above",
    excerpt: "Experience the majesty of the Himalayas from a unique perspective with our helicopter tour guide.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    author: "Kumar Tamang",
    date: "2023-12-28",
    category: "Helicopter Tours",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Cultural Etiquette: Respecting Local Traditions",
    excerpt: "A comprehensive guide to cultural norms and respectful behavior when visiting sacred sites and local communities.",
    image: "https://images.unsplash.com/photo-1555400113-7c7c6fe14d33?w=600&h=400&fit=crop",
    author: "Maya Thapa",
    date: "2023-12-20",
    category: "Culture",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Best Time to Visit Tibet for Mansarovar Yatra",
    excerpt: "Detailed information about the ideal seasons and preparation needed for the sacred Mansarovar pilgrimage.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Tenzin Norbu",
    date: "2023-12-15",
    category: "Pilgrimage",
    readTime: "6 min read"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const categories = ['All', 'Trekking', 'Pilgrimage', 'Helicopter Tours', 'Culture'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 mountain-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-foreground">
            <Badge className="mb-4 bg-primary/20 text-foreground">
              Travel Insights
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Travel Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, travel tips, and inspiring stories from the Himalayas and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Featured Post</Badge>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-80 object-cover rounded-lg shadow-travel"
                />
              </div>
              <div>
                <Badge variant="outline" className="mb-4">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button className="bg-primary hover:bg-primary-dark" onClick={() => navigate('/blog/everest-base-camp-guide')}>
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="travel-card overflow-hidden hover-scale">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`)}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter for the latest travel tips, destination guides, and special offers.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;