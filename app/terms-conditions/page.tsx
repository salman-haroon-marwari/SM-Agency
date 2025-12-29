'use client';

import { motion } from 'framer-motion';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">
            Last updated: December 27, 2025
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-6">
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship 
              with the SM Agency website and services (the "Service") operated by SM Agency.
            </p>
            <p className="text-gray-600 mb-6">
              Your access to and use of the Service is conditioned on your acceptance of and compliance 
              with these Terms. These Terms apply to all visitors, users and others who access or use 
              the Service.
            </p>
            <p className="text-gray-600 mb-6">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
              with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The Service and its original content, features and functionality are and will remain the 
              exclusive property of SM Agency and its licensors. The Service is protected by copyright, 
              trademark, and other laws of both the United States and foreign countries. Our trademarks 
              and trade dress may not be used in connection with any product or service without the 
              prior written consent of SM Agency.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Links To Other Web Sites</h2>
            <p className="text-gray-600 mb-6">
              Our Service may contain links to third-party web sites or services that are not owned or 
              controlled by SM Agency.
            </p>
            <p className="text-gray-600 mb-6">
              SM Agency has no control over, and assumes no responsibility for, the content, privacy 
              policies, or practices of any third party web sites or services. You further acknowledge 
              and agree that SM Agency shall not be responsible or liable, directly or indirectly, for 
              any damage or loss caused or alleged to be caused by or in connection with use of or 
              reliance on any such content, goods or services available on or through any such web sites 
              or services.
            </p>
            <p className="text-gray-600 mb-6">
              We strongly advise you to read the terms and conditions and privacy policies of any 
              third-party web sites or services that you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend access to our Service immediately, without prior notice or 
              liability, for any reason whatsoever, including without limitation if you breach the 
              Terms.
            </p>
            <p className="text-gray-600 mb-6">
              All provisions of the Terms which by their nature should survive termination shall survive 
              termination, including, without limitation, ownership provisions, warranty disclaimers, 
              indemnity and limitations of liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Limitation Of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall SM Agency, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from (i) your access to or use of or inability to access or 
              use the Service; (ii) any conduct or content of any third party on the Service; (iii) any 
              content obtained from the Service; and (iv) unauthorized access, use or alteration of your 
              transmissions or content, whether based on warranty, contract, statute, tort (including 
              negligence) or any other legal theory, whether or not we have been informed of the 
              possibility of such damage, and even if a remedy set forth herein is found to have failed 
              of its essential purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and 
              "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether 
              express or implied, including, but not limited to, implied warranties of merchantability, 
              fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p className="text-gray-600 mb-6">
              SM Agency, its subsidiaries, affiliates, and its licensors do not warrant that a) the 
              Service will function uninterrupted, secure or available at any particular time or 
              location; b) any errors or defects will be corrected; c) the Service is free of viruses 
              or other harmful components; or d) the results of using the Service will meet your 
              requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed and construed in accordance with the laws of the United 
              States and the State of Delaware, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600 mb-6">
              Our failure to enforce any right or provision of these Terms will not be considered a 
              waiver of those rights. If any provision of these Terms is held to be invalid or 
              unenforceable by a court, the remaining provisions of these Terms will remain in effect. 
              These Terms constitute the entire agreement between us regarding our Service, and 
              supersede and replace any prior agreements we might have between us regarding the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Changes</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any 
              time. If a revision is material we will try to provide at least 30 days' notice prior 
              to any new terms taking effect. What constitutes a material change will be determined 
              at our sole discretion.
            </p>
            <p className="text-gray-600 mb-6">
              By continuing to access or use our Service after those revisions become effective, you 
              agree to be bound by the revised terms. If you do not agree to the new terms, please 
              stop using the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>By email: smagencyglobal@gmail.com</li>
              <li>By visiting this page on our website: https://sm-agency.vercel.app/contact</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;