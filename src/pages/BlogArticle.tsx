import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Clock, MapPin, Mountain, Thermometer, Backpack } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';

const articles: Record<string, {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  heroImage: string;
  content: React.ReactNode;
}> = {
  "everest-base-camp-guide": {
    title: "Complete Guide to Everest Base Camp Trek",
    author: "Raj Shrestha",
    date: "2024-01-15",
    category: "Trekking",
    readTime: "8 min read",
    heroImage: everestBaseCamp,
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Everest Base Camp (EBC) trek is one of the most iconic trekking routes in the world. Located in the Khumbu region of northeastern Nepal, this trek takes you through stunning Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes to the foot of the world's tallest mountain — Mount Everest (8,848.86 m).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a seasoned trekker or an adventurous beginner, this guide covers everything you need to know to plan and complete the trek successfully.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trek at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: MapPin, label: "Starting Point", value: "Lukla (2,860 m)" },
              { icon: Mountain, label: "Highest Point", value: "Kala Patthar (5,545 m)" },
              { icon: Clock, label: "Duration", value: "12–14 days" },
              { icon: Backpack, label: "Difficulty", value: "Moderate to Challenging" },
              { icon: Thermometer, label: "Best Season", value: "Mar–May & Sep–Nov" },
              { icon: MapPin, label: "Ending Point", value: "Lukla" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/30 border">
                <item.icon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Day-by-Day Itinerary</h2>
          <div className="space-y-4">
            {[
              { day: "Day 1", title: "Kathmandu to Lukla, trek to Phakding", altitude: "2,610 m", detail: "A thrilling flight to Lukla followed by an easy trek along the Dudh Koshi river to Phakding." },
              { day: "Day 2", title: "Phakding to Namche Bazaar", altitude: "3,440 m", detail: "Cross suspension bridges and hike uphill through pine forests to the bustling Sherpa capital, Namche Bazaar." },
              { day: "Day 3", title: "Acclimatization Day in Namche", altitude: "3,440 m", detail: "Explore the Sherpa Museum, hike to the Everest View Hotel for panoramic views, and rest for acclimatization." },
              { day: "Day 4", title: "Namche to Tengboche", altitude: "3,860 m", detail: "Trek through rhododendron forests with stunning views of Ama Dablam and visit the famous Tengboche Monastery." },
              { day: "Day 5", title: "Tengboche to Dingboche", altitude: "4,410 m", detail: "Descend to Debuche, cross the Imja River, and climb gradually to the high-altitude village of Dingboche." },
              { day: "Day 6", title: "Acclimatization Day in Dingboche", altitude: "4,410 m", detail: "Hike to Nagarjun Hill for views of Makalu, Lhotse, and the Imja Valley. Rest and hydrate well." },
              { day: "Day 7", title: "Dingboche to Lobuche", altitude: "4,940 m", detail: "Pass the Thukla memorial for fallen climbers and traverse rocky terrain to the small settlement of Lobuche." },
              { day: "Day 8", title: "Lobuche to Gorak Shep, visit EBC", altitude: "5,164 m", detail: "Trek to Gorak Shep, drop your bags, and continue to Everest Base Camp (5,364 m). A truly unforgettable moment." },
              { day: "Day 9", title: "Gorak Shep to Kala Patthar, descend to Pheriche", altitude: "5,545 m → 4,240 m", detail: "Early morning hike to Kala Patthar for the best sunrise views of Everest, then descend to Pheriche." },
              { day: "Days 10–12", title: "Return trek to Lukla", altitude: "Various", detail: "Retrace your steps back through Namche Bazaar to Lukla, enjoying the scenery at a relaxed pace." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="font-bold">{item.day}</Badge>
                  <span className="text-xs text-muted-foreground">{item.altitude}</span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What to Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Clothing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Moisture-wicking base layers</li>
                <li>• Insulated down jacket</li>
                <li>• Waterproof outer shell jacket & pants</li>
                <li>• Thermal underwear</li>
                <li>• Warm fleece or wool mid-layers</li>
                <li>• Sun hat and warm beanie</li>
                <li>• Insulated gloves and liner gloves</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Gear & Essentials</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Sturdy trekking boots (broken in)</li>
                <li>• 40–50L trekking backpack</li>
                <li>• Sleeping bag rated to -15°C</li>
                <li>• Trekking poles</li>
                <li>• Headlamp with extra batteries</li>
                <li>• Sunglasses with UV protection</li>
                <li>• Water purification tablets or filter</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Permits Required</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Two permits are required for the EBC trek:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong>Sagarmatha National Park Entry Permit:</strong> NPR 3,000 for SAARC nationals / USD 30 for others. Obtained in Kathmandu or at the park entrance in Monjo.</li>
            <li><strong>Khumbu Pasang Lhamu Rural Municipality Fee:</strong> NPR 2,000. Collected at Lukla or Monjo checkpoint.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Health & Safety Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Acclimatize properly:</strong> Never ascend more than 300–500 m per day above 3,000 m.</li>
            <li>• <strong>Stay hydrated:</strong> Drink at least 3–4 liters of water daily.</li>
            <li>• <strong>Watch for AMS symptoms:</strong> Headache, nausea, dizziness — descend immediately if symptoms worsen.</li>
            <li>• <strong>Carry Diamox:</strong> Consult your doctor before the trip about altitude sickness medication.</li>
            <li>• <strong>Get travel insurance:</strong> Ensure it covers helicopter evacuation above 6,000 m.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Estimated Cost</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-accent/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">Approx. Cost (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-3">Guided Trek Package</td><td className="p-3">$1,200 – $2,500</td></tr>
                <tr><td className="p-3">Permits</td><td className="p-3">$50 – $60</td></tr>
                <tr><td className="p-3">Flights (Kathmandu–Lukla return)</td><td className="p-3">$350 – $400</td></tr>
                <tr><td className="p-3">Travel Insurance</td><td className="p-3">$100 – $200</td></tr>
                <tr><td className="p-3">Gear & Equipment</td><td className="p-3">$200 – $500</td></tr>
                <tr className="font-semibold bg-accent/30"><td className="p-3">Total Estimated</td><td className="p-3">$1,900 – $3,660</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Everest Base Camp trek is more than just a hike — it's a life-changing journey through some of the most spectacular landscapes on Earth. From the warmth of Sherpa hospitality to the awe-inspiring sight of Everest at sunrise from Kala Patthar, every moment is worth the effort.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With proper preparation, the right gear, and respect for the mountains, this trek is achievable for anyone with a reasonable level of fitness and determination. We at Hanumante Yatra hope this guide helps you plan the adventure of a lifetime!
          </p>
        </section>
      </>
    ),
  },
};

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
          <h2 className="text-3xl font-bold mb-4">Ready to Trek to Everest Base Camp?</h2>
          <p className="text-lg text-white/90 mb-8">Let us help you plan the adventure of a lifetime.</p>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg" onClick={() => navigate('/plan-trip')}>
            Plan Your Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
