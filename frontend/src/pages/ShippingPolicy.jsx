import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Truck } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-amber-50/30 to-white backdrop-blur-md border-b-2 border-amber-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="bg-white p-2 rounded-lg shadow-md border border-amber-100 group-hover:shadow-lg transition-shadow">
                <img 
                  src="https://customer-assets.emergentagent.com/job_rajesh-gold/artifacts/0qemaafw_Gemini_Generated_Image_sw8u71sw8u71sw8u.png" 
                  alt="Rajesh Jewellery Mart" 
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Rajesh Jewellery Mart</h1>
                <p className="text-sm text-amber-700 italic font-medium">Inspired by You</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all font-semibold px-6 py-5">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Shipping Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <Truck className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neutral-900">Shipping & Delivery Policy</h1>
              <p className="text-neutral-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-8 text-neutral-700">
            <section>
              <p className="leading-relaxed text-lg">
                At RAJESH JEWELLERY MART, we are committed to delivering your precious jewellery safely and promptly. Please read our shipping and delivery policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Shipping Methods</h2>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <h3 className="font-semibold text-lg mb-2">International Buyers</h3>
                  <p className="leading-relaxed">
                    Orders are shipped and delivered through registered international courier companies and/or International speed post only.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-semibold text-lg mb-2">Domestic Buyers (India)</h3>
                  <p className="leading-relaxed">
                    Orders are shipped through registered domestic courier companies and/or speed post only.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Processing & Delivery Time</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="leading-relaxed">
                  <strong>Order Processing:</strong> Orders are shipped within 0-7 days from the date of order confirmation and payment, or as per the delivery date agreed at the time of order confirmation.
                </li>
                <li className="leading-relaxed">
                  <strong>Delivery Timeline:</strong> Delivery of the shipment is subject to Courier Company / post office norms. Actual delivery time may vary based on your location and courier service.
                </li>
                <li className="leading-relaxed">
                  <strong>Custom/Made-to-Order Items:</strong> Custom jewellery orders may require additional processing time of 15-30 days depending on design complexity.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Delivery Address</h2>
              <p className="leading-relaxed mb-4">
                Delivery of all orders will be to the address provided by the buyer at the time of order placement. Please ensure your delivery address is complete and accurate.
              </p>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Important:</strong> We are not responsible for orders delivered to incorrect addresses provided by the customer. Please verify your address carefully before completing your order.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Delivery Confirmation</h2>
              <p className="leading-relaxed">
                Delivery of our services will be confirmed on your mail ID as specified during registration. You will receive tracking information once your order has been shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Shipping Liability</h2>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <p className="leading-relaxed mb-4">
                  <strong>RAJESH JEWELLERY MART is not liable for any delay in delivery by the courier company / postal authorities.</strong>
                </p>
                <p className="leading-relaxed">
                  We only guarantee to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment, or as per the delivery date agreed at the time of order confirmation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Shipping Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping charges vary based on the weight of the package and delivery location</li>
                <li>Shipping costs will be calculated and displayed at checkout before payment</li>
                <li>Free shipping may be available for orders above a certain value (as per promotional offers)</li>
                <li>International shipping charges are calculated based on destination country</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Tracking Your Order</h2>
              <p className="leading-relaxed mb-4">
                Once your order has been shipped, you will receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping confirmation email with tracking number</li>
                <li>Courier company name and tracking link</li>
                <li>Expected delivery date (subject to courier company estimates)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Failed Delivery Attempts</h2>
              <p className="leading-relaxed mb-4">
                If the courier is unable to deliver your order due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incorrect or incomplete address</li>
                <li>Recipient unavailable after multiple attempts</li>
                <li>Refusal to accept delivery</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The order will be returned to us, and additional shipping charges may apply for re-delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Packaging</h2>
              <p className="leading-relaxed">
                All jewellery items are carefully packaged in secure, tamper-proof packaging to ensure safe delivery. Our packaging includes protective materials to prevent damage during transit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Issues with Delivery</h2>
              <p className="leading-relaxed mb-4">
                For any issues in utilizing our services or concerns about your delivery, you may contact our helpdesk:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Customer Service:</p>
                <p>Phone: <strong>9362320307</strong></p>
                <p>Email: <strong>rajeshsusheel@gmail.com</strong></p>
                <p className="mt-3 text-sm text-neutral-600">Available during business hours: Monday - Saturday, 10:00 AM - 8:00 PM</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Information</h2>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">RAJESH JEWELLERY MART</p>
                <p>BBMP KHATHA NO 786/L-377</p>
                <p>HSR LAYOUT SECTOR VI</p>
                <p>Bengaluru, Karnataka 560102</p>
                <p className="mt-3">Phone: +91 9362320307</p>
                <p>Email: rajeshsusheel@gmail.com</p>
              </div>
            </section>

            <section>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <p className="text-sm italic">
                  <strong>Disclaimer:</strong> The above content is created at RAJESH JEWELLERY MART's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

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
            <span className="text-neutral-600">•</span>
            <Link to="/privacy" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/refund" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              Refund Policy
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/shipping" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
              Shipping Policy
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

export default ShippingPolicy;
