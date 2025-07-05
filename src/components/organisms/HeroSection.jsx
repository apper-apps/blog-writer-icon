import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const HeroSection = () => {
  const scrollToTool = () => {
    const toolSection = document.getElementById('tool-interface');
    toolSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-purple-700 font-medium"
          >
            <ApperIcon name="Sparkles" className="w-4 h-4 mr-2" />
            AI-Powered Content Creation
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight"
          >
            Create Amazing 
            <span className="gradient-text block">
              Blog Posts
            </span>
            in Seconds
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Generate SEO-optimized blog posts with AI-powered content and automatically placed images. 
            Perfect for bloggers, marketers, and content creators.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="xl"
              icon="PenTool"
              onClick={scrollToTool}
              className="transform hover:scale-105 shadow-glow"
            >
              Start Writing Now
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              icon="PlayCircle"
              onClick={scrollToTool}
            >
              See How It Works
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-8 text-sm text-gray-600"
          >
            <div className="flex items-center">
              <ApperIcon name="Zap" className="w-4 h-4 mr-2 text-purple-600" />
              Lightning Fast
            </div>
            <div className="flex items-center">
              <ApperIcon name="Search" className="w-4 h-4 mr-2 text-purple-600" />
              SEO Optimized
            </div>
            <div className="flex items-center">
              <ApperIcon name="Image" className="w-4 h-4 mr-2 text-purple-600" />
              Auto Images
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={scrollToTool}
        >
          <ApperIcon name="ChevronDown" className="w-8 h-8 text-purple-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;