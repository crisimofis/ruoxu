import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { allWorks } from '../data/works';

export default function Gallery() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const items = allWorks.filter(w => w.category === category);

  const galleryTitles = {
    illustration: { title: '插画作品', subtitle: 'Illustration Works' },
    uiux: { title: 'UI/UX作品', subtitle: 'Digital Experiences' },
    recent: { title: '近期作品', subtitle: 'Recent Works' },
  };

  const header = galleryTitles[category as keyof typeof galleryTitles] || { title: '作品集', subtitle: 'Gallery' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) return <div className="pt-40 text-center">作品集未找到</div>;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-text-muted hover:text-accent-mint active:text-accent-mint transition-colors mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        返回主页
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-heading text-5xl font-bold mb-3">{header.title}</h1>
        <p className="font-display text-sm tracking-[0.2em] uppercase text-text-muted">{header.subtitle}</p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(`/project/${item.id}`)}
            className="break-inside-avoid group relative rounded-lg overflow-hidden hover-lift cursor-pointer bg-gray-50"
          >
            <div className="overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-[2px]">
              <span className="text-accent-mint text-[10px] font-bold tracking-widest uppercase mb-2">{item.tag}</span>
              <h3 className="text-white font-heading text-2xl">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
