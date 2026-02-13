import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mountain, Clock, Backpack, Thermometer } from 'lucide-react';
import everestBaseCamp from '@/assets/everest-base-camp.jpg';
import annapurnaBaseCamp from '@/assets/annapurna-base-camp.jpg';
import pashupatinath from '@/assets/pashupatinath.jpg';
import helicopterTour from '@/assets/helicopter-tour.jpg';
import muktinathTemple from '@/assets/muktinath-temple.jpg';
import heroTrekking from '@/assets/hero-trekking.jpg';

export interface ArticleData {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  heroImage: string;
  ctaTitle: string;
  ctaDescription: string;
  content: React.ReactNode;
}

const InfoGrid = ({ items }: { items: { icon: React.ElementType; label: string; value: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/30 border">
        <item.icon className="h-5 w-5 text-primary mt-0.5" />
        <div>
          <p className="font-semibold text-sm">{item.label}</p>
          <p className="text-muted-foreground text-sm">{item.value}</p>
        </div>
      </div>
    ))}
  </div>
);

export const articles: Record<string, ArticleData> = {
  "everest-base-camp-guide": {
    title: "Complete Guide to Everest Base Camp Trek",
    author: "Raj Shrestha",
    date: "2024-01-15",
    category: "Trekking",
    readTime: "8 min read",
    heroImage: everestBaseCamp,
    ctaTitle: "Ready to Trek to Everest Base Camp?",
    ctaDescription: "Let us help you plan the adventure of a lifetime.",
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
          <InfoGrid items={[
            { icon: MapPin, label: "Starting Point", value: "Lukla (2,860 m)" },
            { icon: Mountain, label: "Highest Point", value: "Kala Patthar (5,545 m)" },
            { icon: Clock, label: "Duration", value: "12–14 days" },
            { icon: Backpack, label: "Difficulty", value: "Moderate to Challenging" },
            { icon: Thermometer, label: "Best Season", value: "Mar–May & Sep–Nov" },
            { icon: MapPin, label: "Ending Point", value: "Lukla" },
          ]} />
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
          <p className="text-muted-foreground leading-relaxed mb-4">Two permits are required for the EBC trek:</p>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong>Sagarmatha National Park Entry Permit:</strong> NPR 3,000 for SAARC nationals / USD 30 for others.</li>
            <li><strong>Khumbu Pasang Lhamu Rural Municipality Fee:</strong> NPR 2,000. Collected at Lukla or Monjo checkpoint.</li>
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
            The Everest Base Camp trek is more than just a hike — it's a life-changing journey through some of the most spectacular landscapes on Earth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With proper preparation, the right gear, and respect for the mountains, this trek is achievable for anyone with a reasonable level of fitness and determination.
          </p>
        </section>
      </>
    ),
  },

  "sacred-temples-of-nepal-a-spiritual-journey": {
    title: "Sacred Temples of Nepal: A Spiritual Journey",
    author: "Sita Gurung",
    date: "2024-01-10",
    category: "Pilgrimage",
    readTime: "6 min read",
    heroImage: pashupatinath,
    ctaTitle: "Ready to Explore Nepal's Sacred Temples?",
    ctaDescription: "Let us craft a spiritual journey tailored just for you.",
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nepal is a land of deep spiritual significance, home to some of the most sacred Hindu and Buddhist temples in the world. From the banks of the Bagmati River to the hilltops of the Kathmandu Valley, every corner of Nepal holds centuries of devotion, mythology, and architectural wonder.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This guide takes you through the most revered temples and pilgrimage sites, offering insights into their history, rituals, and cultural importance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Must-Visit Temples</h2>
          <div className="space-y-6">
            {[
              { name: "Pashupatinath Temple", location: "Kathmandu", description: "One of the holiest Hindu temples dedicated to Lord Shiva. A UNESCO World Heritage Site on the banks of the Bagmati River, known for its stunning pagoda architecture and sacred cremation ghats.", significance: "The most important Shiva temple in Nepal, attracting thousands of devotees during Maha Shivaratri." },
              { name: "Boudhanath Stupa", location: "Kathmandu", description: "One of the largest spherical stupas in the world. This iconic Buddhist monument is surrounded by monasteries and is a center of Tibetan Buddhism in Nepal.", significance: "A UNESCO World Heritage Site and a symbol of peace, enlightenment, and Tibetan heritage." },
              { name: "Swayambhunath (Monkey Temple)", location: "Kathmandu", description: "An ancient religious complex atop a hill in Kathmandu Valley. The all-seeing eyes of Buddha painted on the stupa are an iconic symbol of Nepal.", significance: "Over 2,500 years old, it's one of the oldest religious sites in Nepal, sacred to both Hindus and Buddhists." },
              { name: "Muktinath Temple", location: "Mustang", description: "A sacred site for both Hindus and Buddhists, located at 3,710 m altitude. The temple features 108 water spouts and an eternal flame fueled by natural gas.", significance: "Considered one of the 108 Divya Desams (sacred Vishnu temples) and a mukti-kshetra (place of salvation)." },
              { name: "Manakamana Temple", location: "Gorkha", description: "Perched on a hilltop, this temple is dedicated to Goddess Bhagwati. Accessible by cable car with stunning views of the Trisuli River valley.", significance: "Believed to fulfill the wishes of devotees who visit with a pure heart." },
              { name: "Changu Narayan Temple", location: "Bhaktapur", description: "The oldest Hindu temple in Nepal, dating back to the 4th century. Known for its exquisite stone, wood, and metal carvings.", significance: "A UNESCO World Heritage Site showcasing the finest examples of Licchavi-era art and architecture." },
            ].map((temple, i) => (
              <div key={i} className="p-6 rounded-lg border bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold">{temple.name}</h3>
                  <Badge variant="outline">{temple.location}</Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{temple.description}</p>
                <p className="text-sm"><strong>Significance:</strong> <span className="text-muted-foreground">{temple.significance}</span></p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Visitor Guidelines & Etiquette</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Dress modestly:</strong> Cover shoulders and knees when visiting temples. Remove shoes before entering.</li>
            <li>• <strong>Ask before photographing:</strong> Some temples restrict photography inside the main shrine.</li>
            <li>• <strong>Walk clockwise:</strong> Around Buddhist stupas and monuments, always walk clockwise (right).</li>
            <li>• <strong>Respect rituals:</strong> Do not disturb ongoing ceremonies or puja. Observe quietly.</li>
            <li>• <strong>Non-Hindus restrictions:</strong> Some temples like Pashupatinath do not allow non-Hindus inside the main temple.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Temples can be visited year-round, but the best time is during <strong>October to April</strong> when the weather is clear and pleasant. Major festivals like <strong>Dashain</strong> (October), <strong>Tihar</strong> (November), and <strong>Maha Shivaratri</strong> (February/March) bring temples to life with vibrant celebrations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nepal's temples are not just architectural wonders — they are living centers of faith, community, and centuries-old traditions. Whether you seek spiritual solace, cultural immersion, or simply the beauty of ancient craftsmanship, Nepal's sacred sites will leave an indelible mark on your soul.
          </p>
        </section>
      </>
    ),
  },

  "monsoon-trekking-in-nepal-tips-and-best-routes": {
    title: "Monsoon Trekking in Nepal: Tips and Best Routes",
    author: "Pemba Sherpa",
    date: "2024-01-05",
    category: "Trekking",
    readTime: "5 min read",
    heroImage: heroTrekking,
    ctaTitle: "Want to Trek During Monsoon Season?",
    ctaDescription: "Our expert guides know the best monsoon-friendly routes.",
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nepal's monsoon season (June–September) is often overlooked by trekkers, but it offers a unique and rewarding experience. The trails are less crowded, the landscapes are lush and green, and wildflowers bloom across the hillsides. With the right preparation, monsoon trekking can be one of the most memorable adventures in Nepal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Trek During Monsoon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Fewer Crowds", desc: "Trails are significantly less crowded, giving you a more personal and peaceful experience." },
              { title: "Lush Landscapes", desc: "The hills turn emerald green, waterfalls cascade everywhere, and rhododendrons and wildflowers bloom." },
              { title: "Lower Costs", desc: "Accommodation and flight prices drop during the off-season, making it more budget-friendly." },
              { title: "Cultural Festivals", desc: "Experience local festivals like Janai Purnima and Gai Jatra celebrated in mountain communities." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Monsoon-Friendly Routes</h2>
          <div className="space-y-4">
            {[
              { name: "Upper Mustang Trek", days: "12–14 days", why: "Lies in the rain shadow of the Himalayas, receiving minimal rainfall even during monsoon. Desert-like landscapes, ancient caves, and Tibetan culture." },
              { name: "Nar Phu Valley Trek", days: "10–12 days", why: "Another rain-shadow region with restricted-area permits. Pristine valleys, remote monasteries, and minimal tourist traffic." },
              { name: "Dolpo Region Trek", days: "15–20 days", why: "One of the most remote and least-visited regions. The Trans-Himalayan location keeps it dry during monsoon." },
              { name: "Tsum Valley Trek", days: "12–15 days", why: "A sacred hidden valley in northern Gorkha. Rain shadow area with ancient Buddhist heritage and friendly Tsum people." },
              { name: "Annapurna Circuit (Upper Section)", days: "7–10 days", why: "The upper section from Manang to Jomsom is relatively dry. Combine with Tilicho Lake for an unforgettable experience." },
            ].map((route, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{route.name}</h3>
                  <Badge variant="outline">{route.days}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{route.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Essential Monsoon Trekking Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Waterproof everything:</strong> Use dry bags, rain covers for backpacks, and waterproof boots.</li>
            <li>• <strong>Pack quick-dry clothing:</strong> Cotton takes forever to dry — opt for synthetic or merino wool layers.</li>
            <li>• <strong>Carry leech socks:</strong> Leeches are common in lower elevations during monsoon. Salt or tobacco also helps deter them.</li>
            <li>• <strong>Start early:</strong> Rain typically intensifies in the afternoon. Start trekking by 6–7 AM.</li>
            <li>• <strong>Be flexible:</strong> Flights to remote areas may be delayed. Build buffer days into your itinerary.</li>
            <li>• <strong>Use trekking poles:</strong> Trails can be slippery — poles provide extra stability on wet terrain.</li>
            <li>• <strong>Insect repellent:</strong> Mosquitoes and other insects are more active during monsoon.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Monsoon trekking in Nepal is not for everyone, but for those willing to embrace the rain, it offers an incredibly rich and authentic experience. The landscapes are at their most vibrant, the trails are peaceful, and you'll have some of the most dramatic mountain scenery all to yourself. With the right gear and route selection, monsoon season can be the best time to trek in Nepal.
          </p>
        </section>
      </>
    ),
  },

  "helicopter-tours-seeing-the-himalayas-from-above": {
    title: "Helicopter Tours: Seeing the Himalayas from Above",
    author: "Kumar Tamang",
    date: "2023-12-28",
    category: "Helicopter Tours",
    readTime: "4 min read",
    heroImage: helicopterTour,
    ctaTitle: "Ready to Fly Over the Himalayas?",
    ctaDescription: "Book a helicopter tour for the experience of a lifetime.",
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For those who dream of seeing the Himalayas but can't commit to days of trekking, helicopter tours offer the perfect alternative. In just a few hours, you can soar above the world's highest peaks, land at Everest Base Camp, and witness sunrise over Annapurna — all from the comfort and safety of a helicopter.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Helicopter Tour Routes</h2>
          <div className="space-y-6">
            {[
              { name: "Everest Base Camp Heli Tour", duration: "4–5 hours", price: "$1,000–$1,500/person", highlights: "Fly over Lukla, Namche Bazaar, and Tengboche. Land at Kala Patthar (5,545 m) or EBC for photos. Breakfast at Everest View Hotel with panoramic mountain views.", bestFor: "Those wanting the EBC experience without the 12-day trek." },
              { name: "Annapurna Base Camp Heli Tour", duration: "3–4 hours", price: "$800–$1,200/person", highlights: "Scenic flight over Pokhara, Machapuchare (Fishtail), and the Annapurna massif. Land at ABC (4,130 m) surrounded by towering peaks.", bestFor: "Families, seniors, and those with limited time in Pokhara." },
              { name: "Langtang Valley Heli Tour", duration: "2–3 hours", price: "$600–$900/person", highlights: "Fly over the beautiful Langtang Valley, see Langtang Lirung (7,227 m), and experience the Tamang culture from above.", bestFor: "A quick mountain getaway close to Kathmandu." },
              { name: "Muktinath Heli Tour", duration: "3–4 hours", price: "$700–$1,000/person", highlights: "Visit the sacred Muktinath Temple at 3,710 m. Fly over Jomsom and the Kali Gandaki gorge, the deepest in the world.", bestFor: "Pilgrims and spiritual travelers seeking a quick temple visit." },
            ].map((tour, i) => (
              <div key={i} className="p-6 rounded-lg border bg-background">
                <h3 className="text-lg font-bold mb-3">{tour.name}</h3>
                <InfoGrid items={[
                  { icon: Clock, label: "Duration", value: tour.duration },
                  { icon: MapPin, label: "Price", value: tour.price },
                  { icon: Mountain, label: "Best For", value: tour.bestFor },
                ]} />
                <p className="text-sm text-muted-foreground mt-4"><strong>Highlights:</strong> {tour.highlights}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Early departure:</strong> Most tours start at sunrise (5:30–6:30 AM) for the clearest views.</li>
            <li>• <strong>Small groups:</strong> Helicopters typically carry 4–5 passengers for a more intimate experience.</li>
            <li>• <strong>Landing stops:</strong> Most tours include 15–30 minute landing stops at key viewpoints for photos.</li>
            <li>• <strong>Weather dependent:</strong> Tours may be rescheduled due to weather. Morning flights have the best visibility.</li>
            <li>• <strong>No fitness required:</strong> Unlike trekking, helicopter tours require no physical preparation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tips for the Best Experience</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Book during clear-sky months: <strong>October–December</strong> and <strong>March–May</strong>.</li>
            <li>• Bring a good camera with a polarizing filter to reduce glare from snow.</li>
            <li>• Wear layers — it's warm in Kathmandu but cold at altitude landing points.</li>
            <li>• Request a window seat when booking (or book a private charter for full flexibility).</li>
            <li>• Carry sunglasses and sunscreen — UV rays are intense at high altitude.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed">
            A helicopter tour over the Himalayas is one of the most awe-inspiring experiences you can have in Nepal. Whether you're short on time, unable to trek, or simply want a different perspective, flying among the world's highest peaks is an unforgettable adventure that will stay with you forever.
          </p>
        </section>
      </>
    ),
  },

  "cultural-etiquette-respecting-local-traditions": {
    title: "Cultural Etiquette: Respecting Local Traditions",
    author: "Maya Thapa",
    date: "2023-12-20",
    category: "Culture",
    readTime: "7 min read",
    heroImage: annapurnaBaseCamp,
    ctaTitle: "Plan a Culturally Immersive Trip",
    ctaDescription: "Experience Nepal's rich traditions with our guided cultural tours.",
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nepal is a culturally rich nation with over 125 ethnic groups and 123 languages spoken. When traveling through this diverse country, understanding and respecting local customs is not just polite — it enriches your experience and builds meaningful connections with the communities you visit.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This guide covers essential cultural etiquette for travelers visiting Nepal, from temple visits and dining customs to social interactions and photography.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Greetings & Social Customs</h2>
          <div className="space-y-4">
            {[
              { title: "Namaste", desc: "The traditional greeting — press your palms together at chest level and say 'Namaste.' It's used for hello, goodbye, and as a sign of respect." },
              { title: "Use Your Right Hand", desc: "The left hand is considered impure. Always eat, give, and receive with your right hand. When passing objects, use both hands for extra respect." },
              { title: "Remove Shoes", desc: "Always remove shoes before entering homes, temples, and some shops. Look for shoes lined up at the entrance as a cue." },
              { title: "Head is Sacred", desc: "The head is considered the most sacred part of the body. Never touch anyone's head, including children." },
              { title: "Feet are Impure", desc: "Avoid pointing your feet at people, religious objects, or the hearth. When sitting, tuck your feet under you or point them away." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Temple & Religious Site Etiquette</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Dress modestly:</strong> Cover your shoulders and knees. Avoid revealing clothing at religious sites.</li>
            <li>• <strong>Walk clockwise:</strong> Around Buddhist stupas and Hindu temples, always walk in a clockwise direction.</li>
            <li>• <strong>Don't touch offerings:</strong> Never touch religious offerings, prayer wheels (from the wrong direction), or sacred objects without permission.</li>
            <li>• <strong>Photography restrictions:</strong> Many temples prohibit photography inside the main shrine. Always ask before taking photos of rituals or monks.</li>
            <li>• <strong>Non-Hindu restrictions:</strong> Some Hindu temples (like the inner courtyard of Pashupatinath) don't allow non-Hindus to enter.</li>
            <li>• <strong>Silence and reverence:</strong> Speak softly and behave respectfully during ceremonies and prayers.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Dining Etiquette</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Dal Bhat culture:</strong> Dal Bhat (lentil soup with rice) is the staple meal. Seconds are always offered — it's polite to accept.</li>
            <li>• <strong>Jutho (contaminated food):</strong> Once you've touched food with your mouth or hand, it's considered 'jutho' (impure). Never offer bitten food to others.</li>
            <li>• <strong>Eat with right hand:</strong> Traditional meals are eaten with the right hand. Wash hands before and after eating.</li>
            <li>• <strong>Wait to be served:</strong> In traditional homes, the host serves food. Wait for everyone to be served before eating, or follow the host's lead.</li>
            <li>• <strong>Compliment the cook:</strong> Saying 'mitho chha' (it's delicious) is a wonderful way to show appreciation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Photography & Interaction Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Always ask permission:</strong> Before photographing people, especially monks, sadhus, and children, always ask first.</li>
            <li>• <strong>Avoid photographing cremations:</strong> At places like Pashupatinath, it's disrespectful to closely photograph cremation ceremonies.</li>
            <li>• <strong>Be wary of "photo fees":</strong> Some sadhus at tourist spots may ask for money after you photograph them. Decide beforehand.</li>
            <li>• <strong>Learn a few Nepali words:</strong> Simple phrases like 'dhanyabad' (thank you) and 'kasto cha' (how are you) go a long way.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Traveling respectfully in Nepal means more than following rules — it means approaching each interaction with curiosity, humility, and genuine interest. The Nepali people are renowned for their warmth and hospitality, and by respecting their traditions, you'll be welcomed as more than a tourist — you'll be welcomed as a guest.
          </p>
        </section>
      </>
    ),
  },

  "best-time-to-visit-tibet-for-mansarovar-yatra": {
    title: "Best Time to Visit Tibet for Mansarovar Yatra",
    author: "Tenzin Norbu",
    date: "2023-12-15",
    category: "Pilgrimage",
    readTime: "6 min read",
    heroImage: muktinathTemple,
    ctaTitle: "Plan Your Mansarovar Yatra",
    ctaDescription: "Join our guided pilgrimage to the sacred Lake Mansarovar.",
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Kailash Mansarovar Yatra is one of the most sacred pilgrimages in Hinduism, Buddhism, Jainism, and Bon. Mount Kailash (6,638 m) is believed to be the abode of Lord Shiva, while Lake Mansarovar is considered the holiest lake in the world. This journey through the Tibetan Plateau is both a spiritual and physical challenge that draws thousands of devotees each year.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Journey at a Glance</h2>
          <InfoGrid items={[
            { icon: MapPin, label: "Route", value: "Kathmandu → Kerung → Saga → Mansarovar → Kailash" },
            { icon: Mountain, label: "Highest Point", value: "Dolma La Pass (5,630 m)" },
            { icon: Clock, label: "Duration", value: "12–15 days" },
            { icon: Backpack, label: "Difficulty", value: "Challenging" },
            { icon: Thermometer, label: "Best Season", value: "May – September" },
            { icon: MapPin, label: "Permit Required", value: "Chinese Group Visa + Tibet Travel Permit" },
          ]} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
          <div className="space-y-4">
            {[
              { month: "May – June", weather: "Spring weather with clear skies and moderate temperatures. Roads open after winter. Ideal for the Kailash Parikrama.", rating: "Excellent" },
              { month: "July – August", weather: "Summer monsoon brings occasional rain but the Tibetan Plateau stays relatively dry. Warmest temperatures make the high-altitude trek more comfortable.", rating: "Good" },
              { month: "September", weather: "Post-monsoon with clear skies and stunning visibility. Cooler temperatures but less crowded than peak summer months.", rating: "Very Good" },
              { month: "October – April", weather: "Extremely cold with heavy snowfall. Dolma La Pass is often closed. Not recommended for the Yatra.", rating: "Not Recommended" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{item.month}</h3>
                  <Badge variant={item.rating === "Not Recommended" ? "destructive" : "outline"}>{item.rating}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.weather}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Kailash Parikrama (Kora)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The sacred circumambulation of Mount Kailash, known as <strong>Parikrama</strong> (Hindu) or <strong>Kora</strong> (Buddhist), is a 52 km trek around the mountain completed over 3 days:
          </p>
          <div className="space-y-4">
            {[
              { day: "Day 1", route: "Darchen to Dirapuk Monastery", distance: "20 km", altitude: "4,680 m → 5,080 m", detail: "Trek along the Lha Chu valley with views of the dramatic north face of Kailash." },
              { day: "Day 2", route: "Dirapuk to Zutulpuk via Dolma La Pass", distance: "18 km", altitude: "5,080 m → 5,630 m → 4,790 m", detail: "The most challenging day — crossing the Dolma La Pass at 5,630 m. Visit Gauri Kund, a sacred lake." },
              { day: "Day 3", route: "Zutulpuk to Darchen", distance: "14 km", altitude: "4,790 m → 4,560 m", detail: "A gentle descent back to Darchen, completing the sacred circuit." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border bg-background">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="font-bold">{item.day}</Badge>
                  <span className="text-xs text-muted-foreground">{item.distance} · {item.altitude}</span>
                </div>
                <h3 className="font-semibold mb-1">{item.route}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Permits & Documentation</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Chinese Group Visa:</strong> Individual tourist visas are not issued for Tibet. You must travel with an organized group.</li>
            <li>• <strong>Tibet Travel Permit:</strong> Required for all foreigners entering Tibet. Arranged by your travel agency.</li>
            <li>• <strong>Alien Travel Permit:</strong> Required for areas outside Lhasa, including Kailash and Mansarovar.</li>
            <li>• <strong>Military Permit:</strong> Required for border areas near Mount Kailash.</li>
            <li>• <strong>Valid Passport:</strong> Must have at least 6 months validity and not contain an Israeli visa stamp.</li>
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
                <tr><td className="p-3">Full Package (from Kathmandu)</td><td className="p-3">$2,500 – $4,000</td></tr>
                <tr><td className="p-3">Permits & Visa</td><td className="p-3">$200 – $350</td></tr>
                <tr><td className="p-3">Travel Insurance</td><td className="p-3">$150 – $300</td></tr>
                <tr><td className="p-3">Personal Gear</td><td className="p-3">$200 – $400</td></tr>
                <tr><td className="p-3">Pony/Porter for Parikrama</td><td className="p-3">$100 – $200</td></tr>
                <tr className="font-semibold bg-accent/30"><td className="p-3">Total Estimated</td><td className="p-3">$3,150 – $5,250</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Kailash Mansarovar Yatra is more than a pilgrimage — it's a profound journey of self-discovery. The stark beauty of the Tibetan Plateau, the spiritual energy of Mount Kailash, and the crystal-clear waters of Lake Mansarovar combine to create an experience that transcends the physical.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Plan carefully, respect the altitude, and approach the journey with an open heart. The rewards — both spiritual and personal — are immeasurable.
          </p>
        </section>
      </>
    ),
  },
};
