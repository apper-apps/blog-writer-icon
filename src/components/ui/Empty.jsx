import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const EmptyState = ({ title, message, actionLabel, onAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
        <ApperIcon name="FileText" className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">
        {title || "No content yet"}
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {message || "Generate your first AI-powered blog post to see it here with automatically placed images."}
      </p>
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-6 py-3 gradient-border hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-200 font-medium rounded-lg"
        >
          <ApperIcon name="Sparkles" className="w-4 h-4 mr-2" />
          {actionLabel || "Get Started"}
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;