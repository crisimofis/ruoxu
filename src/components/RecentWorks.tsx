import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { allWorks } from '../data/works';

export default function RecentWorks() {
  const navigate = useNavigate();
  const recentItems = allWorks.filter(w => w.category === 'recent');

  return (
    <section id="recent" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Link to="/gallery/recent" className="group inline-block">
          <h2 className="font-heading text-4xl font-bold mb-2 group-hover:text-accent-mint transition-colors cursor-pointer">
            近期作品
            <svg className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </h2>
          <p className="font-display text-xs tracking-widest uppercase text-text-muted">Recent Works</p>
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recentItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/project/${item.id}`)}
            className="aspect-square rounded-lg overflow-hidden hover-lift group cursor-pointer relative"
          >
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
              <p className="text-white font-heading text-lg">{item.title}</p>
              <p className="text-white/70 text-[10px] font-bold tracking-widest uppercase mt-1">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
