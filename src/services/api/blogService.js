import mockBlogs from '@/services/mockData/blogs.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generateBlogContent = (topic, category, wordCount) => {
  const sampleContent = {
    Tech: {
      sections: [
        'Introduction to Technology',
        'Current Market Trends',
        'Technical Implementation',
        'Future Implications',
        'Best Practices'
      ],
      content: `
        <h1>${topic}</h1>
        <div class="image-placeholder">
          <p>🖼️ Hero Image: ${topic} - AI Generated</p>
        </div>
        
        <h2>Introduction</h2>
        <p>In today's rapidly evolving technological landscape, ${topic.toLowerCase()} has become increasingly important for businesses and individuals alike. This comprehensive guide will explore the various aspects of ${topic.toLowerCase()} and how it can benefit your organization.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Technology Overview - AI Generated</p>
        </div>
        
        <h2>Current Market Trends</h2>
        <p>The market for ${topic.toLowerCase()} is experiencing unprecedented growth. Recent studies show that organizations implementing ${topic.toLowerCase()} strategies are seeing significant improvements in efficiency and productivity. Key trends include automation, artificial intelligence integration, and enhanced user experiences.</p>
        
        <h2>Technical Implementation</h2>
        <p>Successfully implementing ${topic.toLowerCase()} requires careful planning and execution. Here are the key steps to consider:</p>
        <ul>
          <li>Assessment of current infrastructure</li>
          <li>Development of implementation roadmap</li>
          <li>Team training and skill development</li>
          <li>Gradual rollout and testing</li>
          <li>Continuous monitoring and optimization</li>
        </ul>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Implementation Process - AI Generated</p>
        </div>
        
        <h2>Future Implications</h2>
        <p>Looking ahead, ${topic.toLowerCase()} will continue to shape the future of technology. Emerging trends such as quantum computing, edge computing, and sustainable technology solutions will further enhance the capabilities and applications of ${topic.toLowerCase()}.</p>
        
        <h2>Conclusion</h2>
        <p>The importance of ${topic.toLowerCase()} cannot be overstated in today's digital age. By understanding its applications and implementing best practices, organizations can position themselves for success in the evolving technological landscape.</p>
      `
    },
    Health: {
      sections: [
        'Health Overview',
        'Scientific Research',
        'Practical Applications',
        'Lifestyle Integration',
        'Expert Recommendations'
      ],
      content: `
        <h1>${topic}</h1>
        <div class="image-placeholder">
          <p>🖼️ Hero Image: ${topic} - AI Generated</p>
        </div>
        
        <h2>Introduction</h2>
        <p>Understanding ${topic.toLowerCase()} is crucial for maintaining optimal health and wellness. This comprehensive guide explores the latest research and practical applications of ${topic.toLowerCase()} in daily life.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Health and Wellness - AI Generated</p>
        </div>
        
        <h2>Scientific Research</h2>
        <p>Recent scientific studies have shown remarkable benefits of ${topic.toLowerCase()}. Researchers have documented significant improvements in various health markers, including enhanced immune function, better sleep quality, and improved mental wellbeing.</p>
        
        <h2>Practical Applications</h2>
        <p>Incorporating ${topic.toLowerCase()} into your daily routine can be achieved through several practical approaches:</p>
        <ul>
          <li>Morning routine optimization</li>
          <li>Dietary modifications</li>
          <li>Exercise and movement practices</li>
          <li>Stress management techniques</li>
          <li>Sleep hygiene improvements</li>
        </ul>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Healthy Lifestyle - AI Generated</p>
        </div>
        
        <h2>Lifestyle Integration</h2>
        <p>Successfully integrating ${topic.toLowerCase()} into your lifestyle requires consistency and patience. Start with small, manageable changes and gradually build upon them. Remember that sustainable health improvements take time and dedication.</p>
        
        <h2>Conclusion</h2>
        <p>The journey toward better health through ${topic.toLowerCase()} is both rewarding and transformative. By following evidence-based practices and maintaining consistency, you can achieve significant improvements in your overall health and quality of life.</p>
      `
    },
    Travel: {
      sections: [
        'Destination Overview',
        'Travel Planning',
        'Cultural Experiences',
        'Practical Tips',
        'Final Recommendations'
      ],
      content: `
        <h1>${topic}</h1>
        <div class="image-placeholder">
          <p>🖼️ Hero Image: ${topic} - AI Generated</p>
        </div>
        
        <h2>Introduction</h2>
        <p>Exploring ${topic.toLowerCase()} offers incredible opportunities for adventure, cultural enrichment, and personal growth. This comprehensive travel guide will help you make the most of your journey.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Travel Destination - AI Generated</p>
        </div>
        
        <h2>Planning Your Trip</h2>
        <p>Successful travel planning for ${topic.toLowerCase()} involves several key considerations. From choosing the right time to visit to selecting appropriate accommodations, proper planning ensures a memorable and enjoyable experience.</p>
        
        <h2>Cultural Experiences</h2>
        <p>Immersing yourself in local culture is one of the most rewarding aspects of ${topic.toLowerCase()}. Engage with local communities, try traditional cuisine, and participate in cultural activities to gain authentic insights.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Cultural Activities - AI Generated</p>
        </div>
        
        <h2>Practical Tips</h2>
        <p>Here are essential tips for ${topic.toLowerCase()}:</p>
        <ul>
          <li>Research local customs and etiquette</li>
          <li>Pack appropriate clothing and gear</li>
          <li>Learn basic phrases in the local language</li>
          <li>Keep important documents secure</li>
          <li>Stay connected with family and friends</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Your journey exploring ${topic.toLowerCase()} will create lasting memories and broaden your perspective. Embrace the adventure, stay open to new experiences, and enjoy every moment of your travels.</p>
      `
    },
    Business: {
      sections: [
        'Business Overview',
        'Market Analysis',
        'Strategic Implementation',
        'Performance Metrics',
        'Future Growth'
      ],
      content: `
        <h1>${topic}</h1>
        <div class="image-placeholder">
          <p>🖼️ Hero Image: ${topic} - AI Generated</p>
        </div>
        
        <h2>Introduction</h2>
        <p>In today's competitive business environment, understanding ${topic.toLowerCase()} is essential for organizational success. This comprehensive analysis explores strategic approaches and best practices for implementation.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Business Strategy - AI Generated</p>
        </div>
        
        <h2>Market Analysis</h2>
        <p>The market landscape for ${topic.toLowerCase()} continues to evolve rapidly. Organizations that adapt quickly to changing conditions and leverage emerging opportunities are positioned for sustainable growth and competitive advantage.</p>
        
        <h2>Strategic Implementation</h2>
        <p>Successful implementation of ${topic.toLowerCase()} requires a structured approach:</p>
        <ul>
          <li>Define clear objectives and KPIs</li>
          <li>Allocate appropriate resources</li>
          <li>Develop comprehensive timelines</li>
          <li>Establish feedback mechanisms</li>
          <li>Monitor progress and adjust strategies</li>
        </ul>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Team Collaboration - AI Generated</p>
        </div>
        
        <h2>Performance Metrics</h2>
        <p>Measuring the success of ${topic.toLowerCase()} initiatives requires comprehensive tracking of key performance indicators. Regular assessment enables data-driven decision making and continuous improvement.</p>
        
        <h2>Conclusion</h2>
        <p>The strategic implementation of ${topic.toLowerCase()} can drive significant business value and competitive advantage. By following proven methodologies and maintaining focus on results, organizations can achieve their objectives and sustainable growth.</p>
      `
    },
    Lifestyle: {
      sections: [
        'Lifestyle Overview',
        'Personal Development',
        'Daily Habits',
        'Social Impact',
        'Long-term Benefits'
      ],
      content: `
        <h1>${topic}</h1>
        <div class="image-placeholder">
          <p>🖼️ Hero Image: ${topic} - AI Generated</p>
        </div>
        
        <h2>Introduction</h2>
        <p>Embracing ${topic.toLowerCase()} can transform your daily life and overall well-being. This comprehensive guide explores practical strategies for integrating meaningful changes into your lifestyle.</p>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Lifestyle Enhancement - AI Generated</p>
        </div>
        
        <h2>Personal Development</h2>
        <p>Personal growth through ${topic.toLowerCase()} involves continuous learning and self-improvement. By adopting new perspectives and challenging yourself, you can unlock your full potential and achieve greater fulfillment.</p>
        
        <h2>Daily Habits</h2>
        <p>Incorporating ${topic.toLowerCase()} into daily routines creates lasting positive change:</p>
        <ul>
          <li>Morning mindfulness practices</li>
          <li>Goal setting and planning</li>
          <li>Regular exercise and movement</li>
          <li>Healthy eating habits</li>
          <li>Evening reflection and gratitude</li>
        </ul>
        
        <div class="image-placeholder">
          <p>🖼️ Section Image: Daily Routine - AI Generated</p>
        </div>
        
        <h2>Social Impact</h2>
        <p>The positive effects of ${topic.toLowerCase()} extend beyond individual benefits. Your commitment to personal growth and positive lifestyle changes can inspire others and contribute to community well-being.</p>
        
        <h2>Conclusion</h2>
        <p>The journey of ${topic.toLowerCase()} is ongoing and rewarding. By maintaining consistency, staying open to growth, and celebrating progress, you can create a fulfilling and meaningful lifestyle that aligns with your values and aspirations.</p>
      `
    }
  };

  const categoryContent = sampleContent[category] || sampleContent.Lifestyle;
  return categoryContent.content;
};

export const generateBlogPost = async (formData) => {
  await delay(2000 + Math.random() * 1000); // 2-3 seconds delay
  
  const { topic, category, wordCount } = formData;
  
  const blogPost = {
    Id: Date.now(),
    title: topic,
    category: category,
    wordCount: wordCount,
    content: generateBlogContent(topic, category, wordCount),
    images: [
      `Hero image for ${topic}`,
      `Section image for ${category}`,
      `Conclusion image for ${topic}`
    ],
    createdAt: new Date().toISOString()
  };
  
  return blogPost;
};

export const getAllBlogs = async () => {
  await delay(300);
  return [...mockBlogs];
};

export const getBlogById = async (id) => {
  await delay(200);
  return mockBlogs.find(blog => blog.Id === parseInt(id));
};

export const saveBlog = async (blogData) => {
  await delay(500);
  const newBlog = {
    ...blogData,
    Id: Date.now(),
    createdAt: new Date().toISOString()
  };
  return newBlog;
};

export const deleteBlog = async (id) => {
  await delay(300);
  return { success: true, message: 'Blog deleted successfully' };
};