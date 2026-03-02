import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Terms & Conditions</h1>
          <p className="text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-neutral-700">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Rajesh Jewellery Mart. These terms and conditions outline the rules and regulations for the use of our services and purchase of our products. By accessing this website and making purchases from our store, you accept these terms and conditions in full. Do not continue to use Rajesh Jewellery Mart's website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Product Information</h2>
              <p className="leading-relaxed mb-4">
                We strive to provide accurate product descriptions, specifications, and pricing information. However:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All jewellery items are subject to availability</li>
                <li>Actual colors may vary slightly from images displayed on the website</li>
                <li>Weights mentioned are approximate and may vary by ±2%</li>
                <li>We reserve the right to modify product specifications without prior notice</li>
                <li>Prices are subject to change based on gold rates and market conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Pricing and Payment</h2>
              <p className="leading-relaxed mb-4">
                All prices are listed in Indian Rupees (INR) and include applicable taxes unless otherwise stated.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gold prices are calculated based on current market rates</li>
                <li>Making charges and GST are additional to the base price</li>
                <li>We accept cash, credit/debit cards, and digital payment methods</li>
                <li>Full payment is required at the time of purchase</li>
                <li>Invoices will be provided for all transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Quality Assurance</h2>
              <p className="leading-relaxed mb-4">
                All our jewellery comes with quality certifications:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hallmark certification for gold purity (BIS certified)</li>
                <li>Diamond grading certificates from recognized laboratories</li>
                <li>Gemstone authenticity certificates where applicable</li>
                <li>Quality guarantee as per industry standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Exchange and Return Policy</h2>
              <p className="leading-relaxed mb-4">
                We want you to be completely satisfied with your purchase:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exchange is available within 7 days of purchase with original invoice</li>
                <li>Products must be in original condition with tags and certificates</li>
                <li>Exchange value is calculated based on current gold rates</li>
                <li>Making charges on exchanged items are non-refundable</li>
                <li>Customized and engraved items cannot be exchanged or returned</li>
                <li>Return policy may vary for special occasion purchases</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Maintenance and Care</h2>
              <p className="leading-relaxed mb-4">
                To keep your jewellery looking beautiful:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free cleaning service available for lifetime</li>
                <li>Store jewellery separately to avoid scratches</li>
                <li>Remove jewellery before swimming, bathing, or exercising</li>
                <li>Avoid exposure to harsh chemicals and perfumes</li>
                <li>Regular professional inspection recommended</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Custom Orders</h2>
              <p className="leading-relaxed mb-4">
                We offer custom jewellery design services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>50% advance payment required for custom orders</li>
                <li>Design approval must be obtained before production</li>
                <li>Delivery time ranges from 15-30 days depending on complexity</li>
                <li>Custom orders are not eligible for return or exchange</li>
                <li>Final payment due upon completion and before delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="leading-relaxed">
                We respect your privacy and are committed to protecting your personal information. Customer data is collected only for transaction purposes and is never shared with third parties without consent. We maintain strict confidentiality of all customer information and purchase records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Liability</h2>
              <p className="leading-relaxed">
                Rajesh Jewellery Mart shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. Our liability is limited to the purchase price of the item. We are not responsible for loss or damage occurring after delivery of the product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from purchases or services will be resolved through mutual discussion. If a resolution cannot be reached, the matter will be subject to the jurisdiction of courts in Bangalore, Karnataka. We encourage customers to contact us first for any concerns before seeking legal recourse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Modifications</h2>
              <p className="leading-relaxed">
                Rajesh Jewellery Mart reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For any questions or concerns regarding these terms and conditions, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Rajesh Jewellery Mart</p>
                <p>123 Jewellery Street, MG Road</p>
                <p>Bangalore, Karnataka 560001</p>
                <p className="mt-3">Phone: +91 98765 43210</p>
                <p>Email: info@rajeshjewellery.com</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 text-center">
              By making a purchase from Rajesh Jewellery Mart, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Rajesh Jewellery Mart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
