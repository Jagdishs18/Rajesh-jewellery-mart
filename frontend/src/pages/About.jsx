import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Shield, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rajesh-gold/artifacts/ssaaavsn_WhatsApp%20Image%202026-03-02%20at%204.36.28%20PM.jpeg" 
                alt="Rajesh Jewellery Mart" 
                className="h-14 w-14 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Rajesh Jewellery Mart</h1>
                <p className="text-xs text-neutral-600 italic">Inspired by You</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">About Us</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Crafting timeless elegance and creating precious memories since 1990. 
              At Rajesh Jewellery Mart, every piece tells a story of tradition, luxury, and love.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-neutral-50 rounded-2xl p-8 md:p-12 shadow-lg border border-amber-100">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                <p>
                  With over three decades of excellence in the jewellery industry, Rajesh Jewellery Mart has been the trusted destination for fine jewellery in Bengaluru. Our journey began with a simple vision: to bring the finest craftsmanship and authentic designs to customers who appreciate quality and elegance.
                </p>
                <p>
                  Every piece in our collection is carefully selected and crafted by master artisans who bring centuries-old techniques together with contemporary designs. We believe that jewellery is not just an accessory, but a legacy that passes through generations.
                </p>
                <p>
                  Our commitment to quality, authenticity, and customer satisfaction has made us a household name in the region. From traditional Indian designs to contemporary masterpieces, we offer a curated selection that celebrates every occasion and milestone in your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-neutral-600">Experience the difference of three decades of excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Certified Quality</h3>
              <p className="text-neutral-600">
                All our jewellery is hallmarked and comes with authenticity certificates. BIS certified gold purity guaranteed.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="h-10 w-10 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Trusted Since 1990</h3>
              <p className="text-neutral-600">
                Over 30 years of excellence in fine jewellery craftsmanship with 10,000+ satisfied customers.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Lifetime Support</h3>
              <p className="text-neutral-600">
                Free cleaning, maintenance, and exchange services for lifetime. We care for your precious jewellery.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Visit Us</h2>
            <p className="text-xl text-neutral-600">We'd love to welcome you to our store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Address</h3>
                  <p className="text-neutral-600 text-sm">BBMP KHATHA NO 786/L-377</p>
                  <p className="text-neutral-600 text-sm">HSR LAYOUT SECTOR VI</p>
                  <p className="text-neutral-600 text-sm">Bengaluru, Karnataka 560102</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Call Us</h3>
                  <p className="text-neutral-600 text-sm">+91 9362320307</p>
                  <p className="text-neutral-600 text-sm mt-2">Available during business hours</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Email Us</h3>
                  <p className="text-neutral-600 text-sm break-all">rajeshsusheel@gmail.com</p>
                  <p className="text-neutral-600 text-sm mt-2">We reply within 24 hours</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Business Hours</h3>
                  <p className="text-neutral-600 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-neutral-600 text-sm">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">30+</h3>
              <p className="text-neutral-300">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">10k+</h3>
              <p className="text-neutral-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">500+</h3>
              <p className="text-neutral-300">Unique Designs</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">100%</h3>
              <p className="text-neutral-300">Certified Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Piece?</h2>
          <p className="text-xl mb-8 text-amber-50">Visit our store or contact us today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-neutral-100 px-8 py-6 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link to="/#collections">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg font-semibold">
                View Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            <Link to="/" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              Home
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/about" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              About Us
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/terms" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-neutral-400 text-sm text-center mt-4">
            &copy; {new Date().getFullYear()} Rajesh Jewellery Mart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
