import { motion } from "framer-motion";
import BenefitCard from "@/components/molecules/BenefitCard";
import Button from "@/components/atoms/Button";
import React from "react";
const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'Zap',
      title: 'Lightning Fast Generation',
      description: 'Create professional blog posts in under 30 seconds. No more hours of writing and researching - let AI do the heavy lifting.'
    },
    {
      icon: 'Search',
      title: 'SEO Optimized Content',
      description: 'Every blog post is automatically optimized for search engines with proper headings, keywords, and structure.'
    },
    {
      icon: 'Image',
      title: 'Auto Image Generation',
      description: 'Get contextually relevant images automatically placed throughout your blog post to enhance visual appeal.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Friendly Design',
      description: 'All generated content is responsive and looks perfect on any device - desktop, tablet, or mobile.'
    },
    {
      icon: 'Copy',
      title: 'Easy Copy & Share',
      description: 'One-click copying to clipboard and instant sharing across social media platforms like Facebook, Twitter, and WhatsApp.'
    },
    {
      icon: 'Download',
      title: 'Export as HTML',
      description: 'Download your blog posts as fully formatted HTML files ready to publish on any website or blog platform.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">AI Blog Writer Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of content creation with our advanced AI-powered blog writing tool.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Transform Your Content Creation?
            </h3>
            <p className="text-purple-100 mb-6">
              Join thousands of content creators who are already using AI to boost their productivity.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50"
              onClick={() => {
                const toolSection = document.getElementById('tool-interface');
                toolSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Creating Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;