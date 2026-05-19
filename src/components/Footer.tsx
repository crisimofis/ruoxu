export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-display text-2xl font-semibold tracking-tighter">
          RUOXU
        </div>

        <div className="text-[10px] text-text-muted font-medium tracking-widest uppercase text-center md:text-left">
          © {new Date().getFullYear()} RUOXU. 版权所有. <br className="md:hidden" /> Crafted with Zen-Modernism.
        </div>

        <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-text-muted">
          <a href="#" className="hover:text-text-main transition-colors">Dribbble</a>
          <a href="#" className="hover:text-text-main transition-colors">Xiaohongshu</a>
          <a href="#" className="hover:text-text-main transition-colors">Weibo</a>
          <a href="mailto:contact@ruoxu.design" className="hover:text-text-main transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
