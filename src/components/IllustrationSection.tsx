import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { allWorks } from '../data/works';

export default function IllustrationSection() {
  const navigate = useNavigate();
  const illustrations = allWorks.filter(w => w.category === 'illustration').slice(0, 3);

  return (
    <section id="illustration" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <Link to="/gallery/illustration" className="group inline-block">
          <h2 className="font-heading text-4xl font-bold mb-2 group-hover:text-accent-mint transition-colors cursor-pointer">
            插画作品
            <svg className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </h2>
          <p className="font-display text-xs tracking-widest uppercase text-text-muted">Illustration Works</p>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {illustrations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(`/project/${item.id}`)}
            className="group relative rounded-lg overflow-hidden hover-lift cursor-pointer"
          >
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-[2px]">
              <span className="text-accent-mint text-xs font-medium tracking-widest uppercase mb-2">{item.tag}</span>
              <h3 className="text-white font-heading text-2xl">{item.title}</h3>
              <p className="text-white/70 text-sm mt-1">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
