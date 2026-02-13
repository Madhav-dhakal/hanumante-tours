import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { articles } from '@/data/blogArticles';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Badge className="mb-3 bg-primary text-white">{article.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center text-white/80 text-sm gap-4">
              <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString()}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" className="mb-8" onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
            {article.content}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{article.ctaTitle}</h2>
          <p className="text-lg text-white/90 mb-8">{article.ctaDescription}</p>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg" onClick={() => navigate('/plan-trip')}>
            Plan Your Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
