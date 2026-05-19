import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden scroll-mt-32">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1]">
              RUOXU
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl text-text-muted">
              平面设计师 × 插画师
            </h2>
          </div>
          
          <p className="font-serif text-lg md:text-xl text-text-muted max-w-lg leading-relaxed">
            专注品牌视觉与创意插画，用视觉语言讲述生长的故事。
          </p>

          <div className="flex items-center gap-6 pt-4 text-sm font-medium tracking-wider uppercase text-text-muted">
            <a href="#" className="hover:text-text-main transition-colors">Dribbble</a>
            <span>·</span>
            <a href="#" className="hover:text-text-main transition-colors">Xiaohongshu</a>
            <span>·</span>
            <a href="#" className="hover:text-text-main transition-colors">Weibo</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative group"
        >
          <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative">
            <img 
              src="images/hero.jpg"
              alt="Artistic Abstract"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-accent-mint rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}
