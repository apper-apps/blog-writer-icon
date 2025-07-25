import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  icon,
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon name={icon} className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600 flex items-center"
        >
          <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;