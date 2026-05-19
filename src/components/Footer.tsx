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
          <a href="https://xhslink.com/m/8MdPi66kN4j" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">Xiaohongshu</a>
          <a href="https://weibo.com/u/6609239575" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">Weibo</a>
          <a href="https://www.douyin.com/user/MS4wLjABAAAAfzIi_OEG39A23slCXo6jN86xC9VBTv74DKhK1xASvPJwQuphGCWfEqoc9YBoDJl5?from_tab_name=main" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">Douyin</a>
        </div>
      </div>
    </footer>
  );
}
