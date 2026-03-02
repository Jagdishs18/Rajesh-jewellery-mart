import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Terms & Conditions</h1>
          <p className="text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-neutral-700">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed mb-4">
                For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean RAJESH JEWELLERY MART, whose registered/operational office is <strong>BBMP KHATHA NO 786/L-377, HSR LAYOUT SECTOR VI, Bengaluru KARNATAKA 560102</strong>. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
              </p>
              <p className="leading-relaxed">
                Your use of the website and/or purchase from us are governed by following Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Website Content and Liability</h2>
              <p className="leading-relaxed mb-4">
                The content of the pages of this website is subject to change without notice.
              </p>
              <p className="leading-relaxed mb-4">
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
              <p className="leading-relaxed">
                Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>
              <p className="leading-relaxed mb-4">
                All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
              </p>
              <p className="leading-relaxed">
                Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. External Links</h2>
              <p className="leading-relaxed mb-4">
                From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
              </p>
              <p className="leading-relaxed">
                You may not create a link to our website from another website or document without RAJESH JEWELLERY MART's prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Cancellation and Refund Policy</h2>
              <p className="leading-relaxed mb-4">
                RAJESH JEWELLERY MART believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
                <li>RAJESH JEWELLERY MART does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
                <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.</li>
                <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
                <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
                <li>In case of any Refunds approved by the RAJESH JEWELLERY MART, it'll take 1-2 days for the refund to be processed to the end customer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Shipping and Delivery Policy</h2>
              <p className="leading-relaxed mb-4">
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.
              </p>
              <p className="leading-relaxed mb-4">
                Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.
              </p>
              <p className="leading-relaxed mb-4">
                RAJESH JEWELLERY MART is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
              </p>
              <p className="leading-relaxed mb-4">
                Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration.
              </p>
              <p className="leading-relaxed">
                For any issues in utilizing our services you may contact our helpdesk on <strong>9362320307</strong> or <strong>rajeshsusheel@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Payment and Transaction Liability</h2>
              <p className="leading-relaxed">
                We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Governing Law</h2>
              <p className="leading-relaxed">
                Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For any questions or concerns regarding these terms and conditions, please contact us:
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
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Disclaimer</h2>
              <p className="leading-relaxed italic text-sm bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                The above content is created at RAJESH JEWELLERY MART's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
              </p>
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

export default Terms;
