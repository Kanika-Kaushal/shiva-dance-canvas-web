import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Star, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

// Import generated images
import heroDance from "@/assets/hero-dance.jpg";
import kathakClass from "@/assets/kathak-class.jpg";
import odissiPerformance from "@/assets/odissi-performance.jpg";
import guruPortrait from "@/assets/guru-portrait.jpg";
import classGroup from "@/assets/class-group.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full animate-glow"></div>
              <h1 className="text-2xl font-bold font-playfair text-primary">Shiva Dance Academy</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
              <a href="#courses" className="text-muted-foreground hover:text-primary transition-smooth">Courses</a>
              <a href="#gallery" className="text-muted-foreground hover:text-primary transition-smooth">Gallery</a>
              <a href="#schedule" className="text-muted-foreground hover:text-primary transition-smooth">Schedule</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroDance} 
            alt="Classical dance pose" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 animate-slide-up">
            Shiva Dance Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
            Discover the grace and spirituality of Indian classical dance through Bharatanatyam, Kathak, and Odissi
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">About Our Academy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded with a passion for preserving and promoting Indian classical dance traditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-playfair text-primary">Our Heritage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shiva Dance Academy was established in 2010 with the vision of creating a sacred space 
                where students can connect with the divine through the ancient art of classical dance. 
                Our academy stands as a bridge between traditional wisdom and contemporary expression.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that dance is not merely movement but a spiritual journey that transforms 
                both the dancer and the audience. Through disciplined practice and devotion, our 
                students learn to embody the stories, emotions, and philosophy of our rich cultural heritage.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">500+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">13+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-elegant hover-glow">
                <img 
                  src={guruPortrait} 
                  alt="Guru portrait" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full animate-float"></div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-gold hover-lift bg-card/50">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">Our Founder & Guru</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Smt. Priya Sharma</strong> is a renowned classical dancer with over 25 years of 
                  experience in Bharatanatyam, Kathak, and Odissi. A disciple of legendary gurus, she has 
                  performed on prestigious stages worldwide and dedicated her life to nurturing the next 
                  generation of classical dancers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">Our Dance Forms</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the classical dance traditions of India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift shadow-subtle bg-card/80 animate-dance-pulse">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-full mb-4 animate-glow"></div>
                <CardTitle className="font-playfair text-primary text-2xl">Bharatanatyam</CardTitle>
                <CardDescription>The Divine Expression</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The ancient temple dance of Tamil Nadu, known for its precise movements, 
                  expressive storytelling, and spiritual depth. Perfect for building discipline and grace.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Beginner Friendly</Badge>
                  <Badge variant="outline">Traditional Techniques</Badge>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Adavu (Basic steps)</li>
                  <li>• Abhinaya (Expression)</li>
                  <li>• Margam (Traditional repertoire)</li>
                  <li>• Costume & Jewelry training</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift shadow-subtle bg-card/80 animate-dance-pulse">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-full mb-4 animate-glow"></div>
                <CardTitle className="font-playfair text-primary text-2xl">Kathak</CardTitle>
                <CardDescription>The Art of Storytelling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The classical dance of North India, characterized by intricate footwork, 
                  spins, and expressive gestures that bring stories to life.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">All Levels</Badge>
                  <Badge variant="outline">Rhythmic Mastery</Badge>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tatkar (Footwork patterns)</li>
                  <li>• Chakkars (Spins)</li>
                  <li>• Thumri & Bhajan</li>
                  <li>• Tabla accompaniment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift shadow-subtle bg-card/80 animate-dance-pulse">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-full mb-4 animate-glow"></div>
                <CardTitle className="font-playfair text-primary text-2xl">Odissi</CardTitle>
                <CardDescription>The Temple Dance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The classical dance of Odisha, known for its lyrical beauty, 
                  sculptural poses, and devotional themes inspired by temple carvings.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Intermediate+</Badge>
                  <Badge variant="outline">Sculptural Beauty</Badge>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tribhanga postures</li>
                  <li>• Pallavi compositions</li>
                  <li>• Moksha (Spiritual themes)</li>
                  <li>• Temple sculpture study</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">Our Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the beauty and grace of our students and performances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-elegant hover-lift">
              <img 
                src={kathakClass} 
                alt="Kathak class in session" 
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-semibold">Kathak Workshop</h3>
                  <p className="text-sm">Students mastering intricate footwork</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-elegant hover-lift">
              <img 
                src={odissiPerformance} 
                alt="Odissi performance" 
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-semibold">Odissi Recital</h3>
                  <p className="text-sm">Annual performance showcase</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-elegant hover-lift">
              <img 
                src={classGroup} 
                alt="Group class session" 
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-semibold">Group Session</h3>
                  <p className="text-sm">Students of all ages learning together</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-elegant hover-lift">
              <img 
                src={heroDance} 
                alt="Solo performance" 
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-semibold">Bharatanatyam Solo</h3>
                  <p className="text-sm">Traditional temple performance</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-elegant hover-lift lg:col-span-2">
              <img 
                src={guruPortrait} 
                alt="Guru teaching" 
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-semibold">Master Class</h3>
                  <p className="text-sm">Guru Priya Sharma guiding advanced students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Fees Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">Schedule & Fees</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible timings and affordable fees for all age groups
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-gold hover-lift bg-card/80">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-playfair text-primary text-2xl">Class Schedule</CardTitle>
                <CardDescription>Choose your convenient time slot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Morning Batch</h4>
                      <p className="text-sm text-muted-foreground">6:00 AM - 8:00 AM</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Evening Batch</h4>
                      <p className="text-sm text-muted-foreground">5:00 PM - 7:00 PM</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Weekend Special</h4>
                      <p className="text-sm text-muted-foreground">Saturday & Sunday 10:00 AM - 12:00 PM</p>
                    </div>
                    <Badge variant="outline">Limited Seats</Badge>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2">Private Lessons</h4>
                  <p className="text-sm text-muted-foreground">
                    One-on-one sessions available by appointment. Perfect for advanced students 
                    or those preparing for competitions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-gold hover-lift bg-card/80">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">₹</span>
                </div>
                <CardTitle className="font-playfair text-primary text-2xl">Monthly Fees</CardTitle>
                <CardDescription>Affordable pricing for quality education</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Beginner Level</h4>
                      <p className="text-sm text-muted-foreground">Basic techniques & fundamentals</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">₹2,500</span>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Intermediate Level</h4>
                      <p className="text-sm text-muted-foreground">Advanced techniques & compositions</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">₹3,500</span>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Advanced Level</h4>
                      <p className="text-sm text-muted-foreground">Professional training & performances</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">₹5,000</span>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Private Lessons</span>
                    <span className="text-xl font-bold text-accent">₹1,500/session</span>
                  </div>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Special Offers</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 10% discount for siblings</li>
                    <li>• 15% discount for annual payment</li>
                    <li>• Free trial class for new students</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to begin your classical dance journey? Get in touch with us today
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="shadow-subtle hover-glow bg-card/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold font-playfair text-primary mb-2">Visit Our Academy</h3>
                      <p className="text-muted-foreground">
                        Shiva Dance Academy<br />
                        Naya Nangal, Punjab<br />
                        Near Cultural Center
                      </p>
                      <a 
                        href="https://www.google.com/maps/place/Shiva+Dance+and+Fitness+Academy+Naya+Nangal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-accent hover:text-accent/80 transition-smooth"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-subtle hover-glow bg-card/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold font-playfair text-primary mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        +91 98765-43210<br />
                        +91 87654-32109
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available: Mon-Sat, 9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-subtle hover-glow bg-card/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold font-playfair text-primary mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@shivadanceacademy.com<br />
                        admissions@shivadanceacademy.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-inter"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
            </div>
            
            <Card className="shadow-gold hover-lift bg-card/80">
              <CardHeader>
                <CardTitle className="font-playfair text-primary text-2xl">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your interest in classical dance, previous experience, or any questions you have..."
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full hover-lift font-inter">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-accent rounded-full animate-glow"></div>
                <h3 className="text-xl font-bold font-playfair">Shiva Dance Academy</h3>
              </div>
              <p className="text-primary-foreground/80">
                Preserving and promoting the sacred art of Indian classical dance 
                through dedicated teaching and spiritual practice.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold font-playfair">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="#home" className="hover:text-accent transition-smooth">Home</a>
                <a href="#about" className="hover:text-accent transition-smooth">About</a>
                <a href="#courses" className="hover:text-accent transition-smooth">Courses</a>
                <a href="#gallery" className="hover:text-accent transition-smooth">Gallery</a>
                <a href="#schedule" className="hover:text-accent transition-smooth">Schedule</a>
                <a href="#contact" className="hover:text-accent transition-smooth">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold font-playfair">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/shiva_dance_academy____/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-smooth"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Stay updated with our latest performances, workshops, and events.
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Shiva Dance Academy. All rights reserved. | 
              <span className="text-accent"> Celebrating the divine through dance</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;