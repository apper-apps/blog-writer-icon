import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import BlogOutput from '@/components/molecules/BlogOutput';
import EmptyState from '@/components/ui/Empty';
import { generateBlogPost } from '@/services/api/blogService';

const ToolInterfaceSection = ({ setIsLoading }) => {
  const [formData, setFormData] = useState({
    topic: '',
    category: '',
    wordCount: 500
  });
  const [generatedBlog, setGeneratedBlog] = useState(null);
  const [errors, setErrors] = useState({});

  const categories = [
    'Tech', 'Health', 'Travel', 'Business', 'Lifestyle', 'Food', 'Fashion', 'Sports'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.topic.trim()) {
      newErrors.topic = 'Topic is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (formData.wordCount < 100 || formData.wordCount > 2000) {
      newErrors.wordCount = 'Word count must be between 100 and 2000';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const blogData = await generateBlogPost(formData);
      setGeneratedBlog(blogData);
    } catch (error) {
      console.error('Error generating blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewBlog = () => {
    setGeneratedBlog(null);
    setFormData({
      topic: '',
      category: '',
      wordCount: 500
    });
    setErrors({});
  };

  return (
    <section id="tool-interface" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Create Your <span className="gradient-text">Blog Post</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill in the details below and let our AI create a professional blog post with images for you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-premium border border-gray-100 p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Blog Configuration
              </h3>
              
              <div className="space-y-6">
                <Input
                  label="Blog Topic"
                  placeholder="Enter your blog topic (e.g., 'Benefits of Remote Work')"
                  value={formData.topic}
                  onChange={(e) => handleInputChange('topic', e.target.value)}
                  error={errors.topic}
                  icon="PenTool"
                />
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                      errors.category ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-sm text-red-600">{errors.category}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Word Count: {formData.wordCount}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={formData.wordCount}
                    onChange={(e) => handleInputChange('wordCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>100 words</span>
                    <span>2000 words</span>
                  </div>
                  {errors.wordCount && (
                    <p className="text-sm text-red-600">{errors.wordCount}</p>
                  )}
                </div>
                
                <Button
                  size="lg"
                  icon="Sparkles"
                  onClick={handleGenerate}
                  className="w-full"
                  disabled={!formData.topic || !formData.category}
                >
                  Generate Blog Post
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {generatedBlog ? (
              <div className="space-y-4">
                <BlogOutput
                  blogData={generatedBlog}
                  onCopy={() => console.log('Blog copied')}
                  onDownload={() => console.log('Blog downloaded')}
                  onShare={(platform) => console.log('Shared on:', platform)}
                />
                <Button
                  variant="outline"
                  size="md"
                  icon="Plus"
                  onClick={handleNewBlog}
                  className="w-full"
                >
                  Create New Blog Post
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-premium border border-gray-100 p-8">
                <EmptyState
                  title="Ready to Generate"
                  message="Fill in the form on the left and click 'Generate Blog Post' to create your AI-powered content with images."
                  actionLabel="Fill the Form"
                  onAction={() => document.querySelector('input[placeholder*="topic"]')?.focus()}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolInterfaceSection;