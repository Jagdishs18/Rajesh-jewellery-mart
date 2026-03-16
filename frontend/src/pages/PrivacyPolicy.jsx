import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neutral-900">Privacy Policy</h1>
              <p className="text-neutral-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-8 text-neutral-700">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                RAJESH JEWELLERY MART ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, postal address, and other contact information you voluntarily provide</li>
                <li><strong>Purchase Information:</strong> Details about products you purchase, including transaction history and payment information</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing behavior on our website</li>
                <li><strong>Communication Data:</strong> Records of your correspondence with us through email, phone, or other channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process and fulfill your orders and transactions</li>
                <li>To communicate with you about your purchases, inquiries, and account</li>
                <li>To improve our website, products, and customer service</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To detect, prevent, and address technical issues and security concerns</li>
                <li>To comply with legal obligations and protect our legal rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (payment processors, shipping companies, etc.)</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell, trade, or rent your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Transaction records are maintained for accounting and legal compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Your Privacy Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and receive a copy of your personal data</li>
                <li>The right to rectify inaccurate or incomplete personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to object to or restrict processing of your personal data</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to data portability</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
