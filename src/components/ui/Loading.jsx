import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          >
            <ApperIcon name="Sparkles" className="w-8 h-8 text-white" />
          </motion.div>
          <div className="text-center">
            <h3 className="text-lg font-display font-semibold text-gray-900 mb-1">
              Generating Your Blog Post
            </h3>
            <p className="text-sm text-gray-600">
              AI is crafting your content with images...
            </p>
          </div>
          <motion.div
            className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;