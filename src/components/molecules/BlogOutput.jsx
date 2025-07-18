import { motion } from "framer-motion";
import { toast } from "react-toastify";
import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
const BlogOutput = ({ blogData, onCopy, onDownload, onShare, onRegenerateImages }) => {
  const [regeneratingImages, setRegeneratingImages] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blogData.content);
      toast.success('Blog content copied to clipboard!');
      onCopy && onCopy();
    } catch (error) {
      toast.error('Failed to copy content');
    }
  };
  
  const handleRegenerateImages = async () => {
    if (!onRegenerateImages) return;
    
    setRegeneratingImages(true);
    try {
      await onRegenerateImages();
      toast.success('Images regenerated successfully!');
    } catch (error) {
      toast.error('Failed to regenerate images');
    } finally {
      setRegeneratingImages(false);
    }
  };

const handleDownload = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${blogData.title}</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
          h2 { color: #374151; margin-top: 30px; }
          p { line-height: 1.6; color: #4b5563; }
          .generated-image { max-width: 100%; height: auto; margin: 20px 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .image-placeholder { background: #f3f4f6; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px; }
        </style>
      </head>
      <body>
        ${blogData.content}
      </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${blogData.title.replace(/[^a-zA-Z0-9]/g, '_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Blog downloaded successfully!');
    onDownload && onDownload();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this amazing blog post: ${blogData.title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    onShare && onShare(platform);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-premium border border-gray-100 overflow-hidden"
    >
<div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-display font-semibold text-gray-900">
              Generated Blog Post
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {blogData.category} • {blogData.wordCount} words
              {blogData.images && blogData.images.length > 0 && (
                <span> • {blogData.images.length} AI images</span>
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* Preview Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                  previewMode === 'desktop' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ApperIcon name="Monitor" size={16} className="mr-1" />
                Desktop
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                  previewMode === 'mobile' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ApperIcon name="Smartphone" size={16} className="mr-1" />
                Mobile
              </button>
            </div>
            
            {blogData.images && blogData.images.length > 0 && onRegenerateImages && (
              <Button
                variant="outline"
                size="sm"
                icon="RefreshCw"
                onClick={handleRegenerateImages}
                disabled={regeneratingImages}
              >
                {regeneratingImages ? 'Regenerating...' : 'Regenerate Images'}
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              icon="Copy"
              onClick={handleCopy}
            >
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon="Download"
              onClick={handleDownload}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
      
<div className="p-6 max-h-96 overflow-y-auto">
        <div className={`${previewMode === 'mobile' ? 'max-w-sm mx-auto' : 'max-w-none'}`}>
          <div 
            className={`prose prose-purple transition-all duration-200 ${
              previewMode === 'mobile' 
                ? 'prose-sm max-w-none text-sm' 
                : 'max-w-none'
            }`}
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Share this blog post:
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ApperIcon name="Facebook" className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
            >
              <ApperIcon name="Twitter" className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ApperIcon name="MessageCircle" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogOutput;