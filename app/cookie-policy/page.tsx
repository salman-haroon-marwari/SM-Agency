'use client';

import { motion } from 'framer-motion';

const CookiePolicyPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies</h2>
            <p className="text-gray-600 mb-6">
              As is common practice with almost all professional websites, this site uses cookies, 
              which are tiny files that are downloaded to your computer, to improve your experience. 
              This page describes what information they gather, how we use it, and why we sometimes 
              need to store these cookies. We will also share how you can prevent these cookies from 
              being stored however this may downgrade or 'break' certain elements of the sites 
              functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies for a variety of reasons detailed below. Unfortunately in most cases 
              there are no industry standard options for disabling cookies without completely 
              disabling the functionality and features they add to this site. It is recommended that 
              you leave on all cookies if you are not sure whether you need them or not in case they 
              are used to provide a service that you use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Disabling Cookies</h2>
            <p className="text-gray-600 mb-6">
              You can prevent the setting of cookies by adjusting the settings on your browser 
              (see your browser Help for how to do this). Be aware that disabling cookies will 
              affect the functionality of this and many other websites that you visit. Disabling 
              cookies will usually result in also disabling certain functionality and features of 
              the this site. Therefore it is recommended that you do not disable cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">The Cookies We Set</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Site Preference Cookies</h3>
            <p className="text-gray-600 mb-4">
              In order to provide you with a great experience on this site we provide the functionality 
              to set your preferences for how this site runs when you use it. In order to remember your 
              preferences we need to set cookies so that this information can be called whenever you 
              interact with a page is affected by your preferences.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Third Party Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              In order to provide site owners with useful analytics on how their site is used we use 
              cookies that measure anonymous usage data. This data helps site owners to improve the 
              content and functionality of their sites.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Forms Related Cookies</h3>
            <p className="text-gray-600 mb-6">
              When you submit data to through a form such as those found on contact pages or comment 
              forms cookies may be set to remember your details for future correspondence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Third Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              In some special cases we also use cookies provided by trusted third parties. The following 
              section details which third party cookies you might encounter through this site.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                This site uses Google Analytics which is one of the most widespread and trusted analytics 
                solutions on the web for helping us to understand how you use the site and ways that we 
                can improve your experience. These cookies may track things such as how long you spend 
                on the site and the pages that you visit so we can continue to produce engaging content.
              </li>
              <li>
                From time to time we test new features and make subtle changes to the way that the site 
                is delivered. When we are still testing new features these cookies may be used to ensure 
                that you receive a consistent experience whilst on the site whilst ensuring we understand 
                which optimisations our users appreciate the most.
              </li>
              <li>
                As we sell products it's important for us to understand statistics about how many of the 
                visitors to our site actually make a purchase and as such this is the kind of data that 
                these cookies will track. This is important to you as it means that we can accurately 
                make business predictions that allow us to monitor our advertising and product costs to 
                ensure the best possible price.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">More Information</h2>
            <p className="text-gray-600 mb-6">
              Hopefully that has clarified things for you and as was previously mentioned if there is 
              something that you aren't sure whether you need or not it's usually safer to leave cookies 
              enabled in case it does interact with one of the features you use on our site. This Cookies 
              Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/" className="text-blue-600 hover:underline">Cookies Policy Template Generator</a> and the <a href="https://www.privacypolicytemplate.net/" className="text-blue-600 hover:underline">Privacy Policy Template Generator</a>.
            </p>
            <p className="text-gray-600 mb-6">
              However if you are still looking for more information then you can contact us by email at 
              smagencyglobal@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">EEA & UK Compliance</h2>
            <p className="text-gray-600 mb-6">
              For users in the European Economic Area (EEA) and the United Kingdom, we comply with the 
              General Data Protection Regulation (GDPR) and the UK GDPR respectively. This means we only 
              use cookies that are necessary for the provision of our services or that you have explicitly 
              consented to.
            </p>
            <p className="text-gray-600 mb-6">
              We implement a consent management platform that allows you to control which cookies you 
              consent to. You can change your preferences at any time by contacting us or using the 
              cookie settings link on our website.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;