import { motion } from 'framer-motion';
import ProcessCard from '@/components/molecules/ProcessCard';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: 'Type',
      title: 'Enter Your Topic',
      description: 'Simply type in the topic you want to write about. Our AI will understand your subject and create relevant content.',
      step: 1
    },
    {
      icon: 'Tags',
      title: 'Select Category',
      description: 'Choose from various categories like Tech, Health, Travel, Business, or Lifestyle to optimize your content.',
      step: 2
    },
    {
      icon: 'Sliders',
      title: 'Set Word Count',
      description: 'Adjust the word count slider to get the perfect length for your blog post, from short articles to long-form content.',
      step: 3
    },
    {
      icon: 'Sparkles',
      title: 'Get Your Blog',
      description: 'Receive a complete blog post with AI-generated images, SEO optimization, and professional formatting.',
      step: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating professional blog posts has never been easier. Follow these simple steps to generate amazing content in minutes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              {...step}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium">
            <span className="animate-pulse mr-2">✨</span>
            Complete process takes less than 30 seconds
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;