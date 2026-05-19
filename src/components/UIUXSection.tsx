import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { allWorks } from '../data/works';

export default function UIUXSection() {
  const navigate = useNavigate();
  const projects = allWorks.filter(w => w.category === 'uiux');

  return (
    <section id="uiux" className="py-24 bg-gray-50/50 scroll-mt-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Link to="/gallery/uiux" className="group inline-block">
            <h2 className="font-heading text-4xl font-bold mb-2 group-hover:text-accent-mint transition-colors cursor-pointer">
              UI/UX作品
              <svg className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </h2>
            <p className="font-display text-xs tracking-widest uppercase text-text-muted">Digital Experiences</p>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => navigate(`/project/${item.id}`)}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover-lift group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-text-muted text-sm tracking-wide">{item.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 border border-accent-mint text-text-main text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="font-serif text-text-muted leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="h-[1px] w-full bg-gray-100 mb-8"></div>
                <button className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all">
                  查看详情 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
