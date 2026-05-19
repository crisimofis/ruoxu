import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { allWorks } from '../data/works';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const work = allWorks.find(w => w.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) return <div className="pt-40 text-center">作品未找到</div>;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-text-muted hover:text-accent-mint active:text-accent-mint transition-colors mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          返回主页
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent-mint text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                {work.tag} · {work.year}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
                {work.title}
              </h1>
              <p className="font-serif text-xl text-text-muted leading-relaxed">
                {work.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">角色</h4>
                <p className="text-sm font-medium">{work.details.role}</p>
              </div>
              {work.details.client && (
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">客户</h4>
                  <p className="text-sm font-medium">{work.details.client}</p>
                </div>
              )}
              <div className="col-span-2">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">工具</h4>
                <div className="flex flex-wrap gap-2">
                  {work.details.tools.map(tool => (
                    <span key={tool} className="text-xs bg-gray-50 px-3 py-1 rounded-full text-text-muted">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-xl overflow-hidden bg-gray-50"
          >
            <img 
              src={work.thumbnail} 
              alt={work.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-20 pt-20 border-t border-gray-100"
        >
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold">项目背景</h3>
            <p className="font-serif text-lg text-text-muted leading-relaxed">
              {work.details.content}
            </p>
          </div>

          <div className="space-y-12">
            {work.details.gallery.map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-gray-50">
                <img 
                  src={img} 
                  alt={`${work.title} detail ${idx + 1}`} 
                  className="w-full h-auto" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
