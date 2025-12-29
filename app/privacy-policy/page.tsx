'use client';

import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
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
              SM Agency ("we", "us", or "our") operates the SM Agency website and related services 
              (the "Service"). This page informs you of our policies regarding the collection, use, 
              and disclosure of personal data when you use our Service and the choices you have 
              associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Information Collection and Use</h2>
            <p className="text-gray-600 mb-6">
              We collect several different types of information for various purposes to provide and 
              improve our Service to you.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Data Collected</h3>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Personal Data</h4>
            <p className="text-gray-600 mb-4">
              While using our Service, we may ask you to provide us with certain personally 
              identifiable information that can be used to contact or identify you ("Personal Data").
            </p>
            <p className="text-gray-600 mb-6">
              Personal Data may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code</li>
              <li>Company information</li>
              <li>Cookies and usage data</li>
            </ul>

            <h4 className="text-lg font-bold text-gray-900 mb-3">Usage Data</h4>
            <p className="text-gray-600 mb-6">
              We may also collect information that your browser sends whenever you visit our Service 
              or when you access the Service by or through a mobile device ("Usage Data"). This 
              Usage Data may include information such as your computer's Internet Protocol address 
              (e.g. IP address), browser type, browser version, the pages of our Service that you 
              visit, the time and date of your visit, the time spent on those pages, unique device 
              identifiers and other diagnostic data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Use of Data</h2>
            <p className="text-gray-600 mb-6">
              SM Agency uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide customer support and respond to your inquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Transfer of Data</h2>
            <p className="text-gray-600 mb-6">
              Your information, including Personal Data, may be transferred to — and maintained on — 
              computers located outside of your state, province, country or other governmental 
              jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p className="text-gray-600 mb-6">
              If you are located outside United States and choose to provide information to us, 
              please note that we transfer the data, including Personal Data, to United States and 
              process it there.
            </p>
            <p className="text-gray-600 mb-6">
              Your consent to this Privacy Policy followed by your submission of such information 
              represents your agreement to that transfer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Disclosure of Data</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Requirements</h3>
            <p className="text-gray-600 mb-6">
              SM Agency may disclose your Personal Data in the good faith belief that such action is 
              necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of SM Agency</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Security of Data</h2>
            <p className="text-gray-600 mb-6">
              The security of your data is important to us but remember that no method of transmission 
              over the Internet or method of electronic storage is 100% secure. While we strive to 
              use commercially acceptable means to protect your Personal Data, we cannot guarantee 
              its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Service Providers</h2>
            <p className="text-gray-600 mb-6">
              We may employ third party companies and individuals to facilitate our Service 
              ("Service Providers"), provide the Service on our behalf, perform Service-related 
              services or assist us in analyzing how our Service is used.
            </p>
            <p className="text-gray-600 mb-6">
              These third parties have access to your Personal Data only to perform these tasks on 
              our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Analytics</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Links to Other Sites</h2>
            <p className="text-gray-600 mb-6">
              Our Service may contain links to other sites that are not operated by us. If you click 
              on a third party link, you will be directed to that third party's site. We strongly 
              advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-gray-600 mb-6">
              We have no control over and assume no responsibility for the content, privacy policies 
              or practices of any third party sites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our Service does not address anyone under the age of 18 ("Children"). We do not 
              knowingly collect personally identifiable information from anyone under the age of 18. 
              If you are a parent or guardian and you are aware that your Children has provided us 
              with Personal Data, please contact us. If we become aware that we have collected 
              Personal Data from children without verification of parental consent, we take steps to 
              remove that information from our servers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600 mb-6">
              You are advised to review this Privacy Policy periodically for any changes. Changes to 
              this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicyPage;