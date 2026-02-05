'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LiveProjectsCounter = () => {
  const [projectsCount, setProjectsCount] = useState(33);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/projects');
        const data = await response.json();
        
        if (data.success) {
          setProjectsCount(data.data.currentProjects);
        } else {
          setError(data.error || 'Failed to fetch projects data');
        }
      } catch (err) {
        setError('Network error occurred');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    
    // Refresh every hour to check for updates
    const interval = setInterval(fetchProjects, 3600000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-xl">
        <div className="animate-pulse">
          <div className="h-6 bg-white/20 rounded w-32 mx-auto mb-2"></div>
          <div className="h-10 bg-white/20 rounded w-24 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 rounded-2xl p-6 text-center shadow-xl">
        <p className="text-white font-medium">Error loading projects</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-xl border border-white/20 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white/90 text-sm sm:text-base font-medium mb-2">
          Live Projects Queue
        </h3>
        
        <motion.div 
          className="flex items-center justify-center gap-2"
          key={projectsCount}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.6 
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
            <div className="relative bg-white text-blue-600 font-bold rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl shadow-lg">
              {projectsCount}
            </div>
          </div>
        </motion.div>
        
        <div className="mt-3">
          <div className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-xs font-medium">
              Live & Updating
            </span>
          </div>
        </div>
        
        <p className="text-white/70 text-xs mt-2">
          Updates every 24 hours
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LiveProjectsCounter;