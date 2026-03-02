import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { mockData } from '../utils/mock';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rajesh-gold/artifacts/ssaaavsn_WhatsApp%20Image%202026-03-02%20at%204.36.28%20PM.jpeg" 
                alt="Rajesh Jewellery Mart" 
                className="h-14 w-14 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Rajesh Jewellery Mart</h1>
                <p className="text-xs text-neutral-600 italic">Inspired by You</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-neutral-700 hover:text-amber-600 transition-colors font-medium">Home</a>
              <a href="#collections" className="text-neutral-700 hover:text-amber-600 transition-colors font-medium">Collections</a>
              <Link to="/about" className="text-neutral-700 hover:text-amber-600 transition-colors font-medium">About</Link>
              <a href="#contact" className="text-neutral-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={mockData.images.hero}
            alt="Luxury Jewellery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Timeless
              <span className="block text-amber-400">Elegance</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200">
              Discover exquisite jewellery crafted with love and precision. Each piece tells a story of tradition and luxury.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold"
              >
                Explore Collections
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Collections</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Explore our curated selection of fine jewellery, from traditional designs to contemporary masterpieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.collections.map((collection, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm text-neutral-200 mb-4">{collection.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-amber-600"
                    >
                      View Collection
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-10 w-10 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={mockData.images.craftsmanship}
                alt="Craftsmanship" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Rajesh Jewellery Mart</h2>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                With over three decades of excellence in the jewellery industry, Rajesh Jewellery Mart has been the trusted destination for fine jewellery in the region. Our commitment to quality, authenticity, and customer satisfaction has made us a household name.
              </p>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                Every piece in our collection is carefully selected and crafted by master artisans who bring centuries-old techniques together with contemporary designs. We believe that jewellery is not just an accessory, but a legacy that passes through generations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-neutral-800 rounded-lg">
                  <h3 className="text-3xl font-bold text-amber-400 mb-2">30+</h3>
                  <p className="text-neutral-300">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-neutral-800 rounded-lg">
                  <h3 className="text-3xl font-bold text-amber-400 mb-2">10k+</h3>
                  <p className="text-neutral-300">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-neutral-600">We'd love to hear from you. Visit our store or send us a message.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="p-8 border-0 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Your Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..." 
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Visit Our Store</h3>
                    <p className="text-neutral-600">BBMP KHATHA NO 786/L-377</p>
                    <p className="text-neutral-600">HSR LAYOUT SECTOR VI</p>
                    <p className="text-neutral-600">Bengaluru, Karnataka 560102</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Call Us</h3>
                    <p className="text-neutral-600">+91 9362320307</p>
                    <p className="text-neutral-600 text-sm mt-1">Available during business hours</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Email Us</h3>
                    <p className="text-neutral-600">rajeshsusheel@gmail.com</p>
                    <p className="text-neutral-600 text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Business Hours</h3>
                    <p className="text-neutral-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p className="text-neutral-600">Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_rajesh-gold/artifacts/ssaaavsn_WhatsApp%20Image%202026-03-02%20at%204.36.28%20PM.jpeg" 
                  alt="Rajesh Jewellery Mart" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">Rajesh Jewellery Mart</h3>
                  <p className="text-xs text-neutral-400 italic">Inspired by You</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Your trusted destination for fine jewellery since 1990. Quality, authenticity, and customer satisfaction guaranteed.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-neutral-400 hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#collections" className="text-neutral-400 hover:text-amber-400 transition-colors">Collections</a></li>
                <li><Link to="/about" className="text-neutral-400 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><a href="#contact" className="text-neutral-400 hover:text-amber-400 transition-colors">Contact</a></li>
                <li><Link to="/terms" className="text-neutral-400 hover:text-amber-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Stay updated with our latest collections and exclusive offers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Rajesh Jewellery Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
