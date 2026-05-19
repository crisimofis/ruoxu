import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-2xl mx-auto space-y-16 text-center scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">联系合作</h2>
        <p className="font-serif text-text-muted">寻找新的合作机会？欢迎随时交流。</p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-left space-y-10"
      >
        <div className="relative group">
          <label className="text-[10px] font-bold tracking-widest uppercase text-text-muted group-focus-within:text-accent-mint transition-colors">姓名</label>
          <input 
            type="text" 
            placeholder="您的姓名"
            className="w-full bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-text-main transition-colors placeholder:text-gray-300 font-sans"
          />
        </div>

        <div className="relative group">
          <label className="text-[10px] font-bold tracking-widest uppercase text-text-muted group-focus-within:text-accent-mint transition-colors">邮箱</label>
          <input 
            type="email" 
            placeholder="您的邮箱地址"
            className="w-full bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-text-main transition-colors placeholder:text-gray-300 font-sans"
          />
        </div>

        <div className="relative group">
          <label className="text-[10px] font-bold tracking-widest uppercase text-text-muted group-focus-within:text-accent-mint transition-colors">留言</label>
          <textarea 
            placeholder="描述您的项目需求..."
            rows={4}
            className="w-full bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-text-main transition-colors placeholder:text-gray-300 font-sans resize-none"
          />
        </div>

        <div className="pt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-text-main text-white hover:bg-accent-mint hover:text-text-main text-[10px] font-bold tracking-widest uppercase px-12 py-5 rounded hover:shadow-xl transition-all"
          >
            发送信息
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
