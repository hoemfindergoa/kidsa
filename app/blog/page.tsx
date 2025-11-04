'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  User, 
  Star, 
  Quote,
  Heart,
  ArrowRight,
  PlayCircle,
  Eye,
  MessageCircle,
  Share2
} from 'lucide-react';

// TypeScript interfaces
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  views?: number;
  comments?: number;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  procedure: string;
  date: string;
  avatar?: string;
}

interface VideoTestimonial {
  id: number;
  title: string;
  patientName: string;
  procedure: string;
  duration: string;
  thumbnail: string;
  views: number;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, isInView };
};

const BlogTestimonialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Why Non-Surgical Treatment is the Future of Healthcare',
      excerpt: 'Discover how minimally invasive procedures are revolutionizing patient care with faster recovery times and better outcomes.',
      category: 'Interventional Radiology',
      date: '2024-01-15',
      author: 'Dr. Bharat Gupta',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      views: 1245,
      comments: 23
    },
    {
      id: 2,
      title: 'Understanding FNAC: What You Need to Know',
      excerpt: 'A comprehensive guide to Fine Needle Aspiration Cytology and its importance in early cancer detection.',
      category: 'Diagnostics',
      date: '2024-01-10',
      author: 'Medical Team',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      views: 987,
      comments: 15
    },
    {
      id: 3,
      title: 'Varicose Veins: Modern Treatment Options',
      excerpt: 'Learn about laser ablation and other advanced treatments for varicose veins that require no surgery.',
      category: 'Treatment',
      date: '2024-01-05',
      author: 'Dr. Bharat Gupta',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      views: 2156,
      comments: 34
    },
    {
      id: 4,
      title: 'The Importance of Regular Health Checkups',
      excerpt: 'Early detection saves lives. Understand which tests you should get and when to get them.',
      category: 'Prevention',
      date: '2024-01-01',
      author: 'Medical Team',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      views: 756,
      comments: 12
    },
    {
      id: 5,
      title: 'Uterine Fibroid Embolization: A Non-Surgical Solution',
      excerpt: 'How UFE provides an effective alternative to hysterectomy for women with uterine fibroids.',
      category: "Women's Health",
      date: '2023-12-28',
      author: 'Dr. Bharat Gupta',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      views: 1876,
      comments: 28
    },
    {
      id: 6,
      title: 'Home Collection Services: Healthcare at Your Doorstep',
      excerpt: 'Learn about our convenient home collection services and how they make healthcare more accessible.',
      category: 'Services',
      date: '2023-12-25',
      author: 'Medical Team',
      readTime: '3 min read',
      image: '/api/placeholder/400/250',
      views: 654,
      comments: 8
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Udaipur',
      rating: 5,
      comment: 'The laser treatment for my varicose veins was amazing. No pain, no surgery, and I was walking normally the same day. Dr. Gupta and his team are incredible.',
      procedure: 'Varicose Vein Laser Ablation',
      date: '2024-01-20',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      location: 'Bhilwara',
      rating: 5,
      comment: 'I was scared about my liver problem, but the embolization procedure was so smooth. The team explained everything clearly and I felt confident throughout.',
      procedure: 'Liver Tumor Embolization',
      date: '2024-01-18',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Sunita Agarwal',
      location: 'Chittorgarh',
      rating: 5,
      comment: 'The diagnostic services are excellent. Home collection was so convenient, and the reports were accurate and delivered on time. Highly recommended!',
      procedure: 'Comprehensive Health Checkup',
      date: '2024-01-15',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Rajsamand',
      rating: 5,
      comment: 'Finally, world-class healthcare in Rajasthan! The fibroid embolization saved my wife from major surgery. We are forever grateful.',
      procedure: 'Uterine Fibroid Embolization',
      date: '2024-01-12',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Meera Jain',
      location: 'Udaipur',
      rating: 5,
      comment: 'The pathology lab results were so detailed and the staff explained everything. The NABL accreditation gives me confidence in the accuracy.',
      procedure: 'Histopathology Testing',
      date: '2024-01-10',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Arjun Malhotra',
      location: 'Bhilwara',
      rating: 5,
      comment: 'The dialysis access care has been life-changing. The procedure was quick and my quality of life has improved significantly.',
      procedure: 'Dialysis Access Care',
      date: '2024-01-08',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      title: 'Complete Recovery from Varicose Veins',
      patientName: 'Mrs. Kavita Sharma',
      procedure: 'Laser Ablation Treatment',
      duration: '3:45',
      thumbnail: '/api/placeholder/400/225',
      views: 15640
    },
    {
      id: 2,
      title: 'Life After Uterine Fibroid Embolization',
      patientName: 'Mrs. Anita Gupta',
      procedure: 'UFE Procedure',
      duration: '4:20',
      thumbnail: '/api/placeholder/400/225',
      views: 12890
    },
    {
      id: 3,
      title: 'Successful Liver Tumor Treatment',
      patientName: 'Mr. Ramesh Kumar',
      procedure: 'Tumor Embolization',
      duration: '5:15',
      thumbnail: '/api/placeholder/400/225',
      views: 9876
    },
    {
      id: 4,
      title: 'Early Cancer Detection Success',
      patientName: 'Mrs. Deepika Singh',
      procedure: 'FNAC & Treatment',
      duration: '6:30',
      thumbnail: '/api/placeholder/400/225',
      views: 18743
    },
    {
      id: 5,
      title: 'Dialysis Access Care Experience',
      patientName: 'Mr. Suresh Agarwal',
      procedure: 'Vascular Access',
      duration: '4:05',
      thumbnail: '/api/placeholder/400/225',
      views: 7654
    },
    {
      id: 6,
      title: 'Comprehensive Health Checkup Journey',
      patientName: 'Family Testimonial',
      procedure: 'Preventive Care',
      duration: '3:20',
      thumbnail: '/api/placeholder/400/225',
      views: 11234
    }
  ];

  const categories: string[] = ['All', 'Interventional Radiology', 'Diagnostics', 'Treatment', 'Prevention', "Women's Health", 'Services'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10"
        style={{ y }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Health Articles & Patient Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay informed with the latest in healthcare and read inspiring stories 
            from our patients who chose advanced medical care.
          </motion.p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            {...useScrollAnimation()}
            // variants={fadeInUp}
            initial="hidden"
            animate={useScrollAnimation().isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Health Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educational content to help you make informed healthcare decisions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category}
			//    variants={fadeInUp}
			   
			   
			   >
                <Badge 
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-300 px-6 py-3 text-sm font-medium ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-105'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={scaleIn}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-0 shadow-lg">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <Badge className="bg-white/90 text-gray-700 text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-600 text-white text-xs px-3 py-1">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button className="flex-1 mr-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 group-hover:shadow-lg">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="p-2">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            {...useScrollAnimation()}
            // variants={fadeInUp}
            initial="hidden"
            animate={useScrollAnimation().isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our patients share their recovery journeys and treatment experiences.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {videoTestimonials.map((video) => (
              <motion.div key={video.id} variants={scaleIn}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-0 shadow-lg">
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden cursor-pointer">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views.toLocaleString()}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Patient:</strong> {video.patientName}
                    </p>
                    <p className="text-blue-600 text-sm font-medium">
                      {video.procedure}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            {...useScrollAnimation()}
            // variants={fadeInUp}
            initial="hidden"
            animate={useScrollAnimation().isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Patient Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real patients who experienced our care.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={scaleIn}>
                <Card className="p-6 hover:shadow-2xl transition-all duration-500 group bg-white border border-gray-100 shadow-lg relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                      <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-blue-600">{testimonial.procedure}</p>
                          <p className="text-xs text-gray-500">{new Date(testimonial.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '100px 100px'
          }}
        />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="h-16 w-16 mx-auto mb-8 text-pink-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest health tips, medical advances, 
              and updates from Mega Diagnostics Udaipur.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Have Questions About Your Health?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our expert medical team is here to help. Schedule a consultation to discuss 
              your health concerns and treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogTestimonialsPage;