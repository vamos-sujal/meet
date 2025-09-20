import { Header } from "@/components/Header";
import { ChatBot } from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Host Memorable Events",
    excerpt: "Learn the secrets to creating events that people will talk about for years. From planning to execution, we cover everything.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Events", "Hosting", "Tips"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Future of Social Connections",
    excerpt: "Exploring how AI and technology are reshaping the way we meet and connect with like-minded people in our communities.",
    author: "MeetMux Team",
    date: "Dec 12, 2024", 
    readTime: "8 min read",
    tags: ["Technology", "AI", "Social"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Safety Tips for MeetMux Hosts",
    excerpt: "Essential safety guidelines for event organizers to ensure secure and enjoyable experiences for all participants.",
    author: "Security Team",
    date: "Dec 10, 2024",
    readTime: "6 min read", 
    tags: ["Safety", "Guidelines", "Hosting"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Building Authentic Connections",
    excerpt: "Why face-to-face interactions still matter in our digital world and how to foster genuine relationships.",
    author: "Dr. Emily Chen",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    tags: ["Psychology", "Relationships", "Social"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    title: "Event Photography Best Practices",
    excerpt: "Capture the magic of your MeetMux events with these professional photography tips and techniques.",
    author: "Mark Rodriguez",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    tags: ["Photography", "Events", "Tips"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop"
  },
  {
    id: 6,
    title: "Community Building Strategies",
    excerpt: "Proven methods for growing and nurturing engaged communities around shared interests and activities.",
    author: "Community Team",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    tags: ["Community", "Growth", "Strategy"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop"
  }
];

export default function Resources() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Resources & Insights
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover tips, guides, and insights to make the most of your MeetMux experience
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
              </div>
              
              <Card className="overflow-hidden shadow-strong max-w-4xl mx-auto bg-gradient-card border-primary/20">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-white">Featured</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors group">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-light/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest tips, trends, and insights from the MeetMux community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-primary/10 hover:border-primary/20 group cursor-pointer"
                >
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="border-primary/30 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <ChatBot />
    </div>
  );
}