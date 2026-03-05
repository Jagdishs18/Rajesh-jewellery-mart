import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const RefundPolicy = () => {
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

      {/* Refund Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neutral-900">Cancellation & Refund Policy</h1>
              <p className="text-neutral-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-8 text-neutral-700">
            <section>
              <p className="leading-relaxed text-lg mb-6">
                RAJESH JEWELLERY MART believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="leading-relaxed">
                  <strong>Same-Day Cancellation:</strong> Cancellations will be considered only if the request is made within the same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                </li>
                <li className="leading-relaxed">
                  <strong>Perishable Items:</strong> RAJESH JEWELLERY MART does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Damaged or Defective Items</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="leading-relaxed">
                  In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.
                </li>
                <li className="leading-relaxed">
                  In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Warranty Items</h2>
              <p className="leading-relaxed">
                In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Refund Processing</h2>
              <p className="leading-relaxed mb-4">
                In case of any Refunds approved by RAJESH JEWELLERY MART, it'll take 1-2 days for the refund to be processed to the end customer.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                <p className="text-sm font-medium">
                  <strong>Note:</strong> Refunds will be processed to the original payment method used during purchase.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">How to Request Cancellation or Refund</h2>
              <p className="leading-relaxed mb-4">
                To request a cancellation or refund, please contact us immediately:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Contact Customer Service:</p>
                <p>Phone: +91 9362320307</p>
                <p>Email: rajeshsusheel@gmail.com</p>
                <p className="mt-3 text-sm text-neutral-600">Please have your order number ready when contacting us.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Exchange Policy</h2>
              <p className="leading-relaxed mb-4">
                For jewellery items, we offer exchange services subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exchange requests must be made within 7 days of purchase</li>
                <li>Products must be in original condition with tags and certificates</li>
                <li>Exchange value is calculated based on current gold rates</li>
                <li>Making charges on exchanged items are non-refundable</li>
                <li>Customized and engraved items cannot be exchanged</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For any questions or concerns regarding our Cancellation and Refund Policy, please contact us:
              </p>
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

export default RefundPolicy;
