import { useState } from "react";
import { Header } from "@/components/Header";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  category: string;
  image?: string;
}

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Morning Jog at Central Park",
    description: "Join us for a refreshing morning jog around Central Park. Perfect for fitness enthusiasts!",
    date: new Date(2024, 2, 15),
    time: "7:00 AM",
    location: "Central Park, NYC",
    attendees: 12,
    maxAttendees: 20,
    category: "Sports"
  },
  {
    id: "2",
    title: "Coffee & Code Meetup",
    description: "Casual meetup for developers to share ideas and work on projects together.",
    date: new Date(2024, 2, 16),
    time: "2:00 PM",
    location: "Tech Hub Cafe",
    attendees: 8,
    maxAttendees: 15,
    category: "Tech"
  },
  {
    id: "3",
    title: "Weekend Movie Night",
    description: "Watch the latest blockbuster with fellow movie enthusiasts. Popcorn included!",
    date: new Date(2024, 2, 17),
    time: "7:30 PM",
    location: "Cineplex Theater",
    attendees: 25,
    maxAttendees: 30,
    category: "Entertainment"
  }
];

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Sports", "Tech", "Entertainment", "Food", "Travel"];

  const filteredEvents = sampleEvents.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesDate = !selectedDate || 
      event.date.toDateString() === selectedDate.toDateString();
    return matchesCategory && matchesDate;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Events Near You
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Join exciting activities, meet new people, and create meaningful connections through real-world events.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Select Date
              </h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
              
              {/* Category Filter */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="w-full justify-start"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {selectedDate ? `Events for ${selectedDate.toLocaleDateString()}` : 'Upcoming Events'}
              </h2>
              <p className="text-muted-foreground">
                {filteredEvents.length} events found
              </p>
            </div>

            <div className="grid gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <Badge variant="secondary" className="mb-2">
                              {event.category}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">
                              {event.date.toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {event.attendees}/{event.maxAttendees} attending
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="hero" size="sm">
                            Join Event
                          </Button>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-12 text-center">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground mb-4">
                    No events match your selected filters. Try selecting a different date or category.
                  </p>
                  <Button variant="hero" onClick={() => {
                    setSelectedDate(undefined);
                    setSelectedCategory("All");
                  }}>
                    View All Events
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;