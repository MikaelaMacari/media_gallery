import Logo from '@/assets/images/logo.png';

const SidebarHeaderContent = () => {
  return (
    <div className="h-20 flex items-center gap-2">
      <img src={Logo as string} alt="Logo" />
      <span className="text-slate-800 font-medium">Media gallery</span>
    </div>
  );
};

export default SidebarHeaderContent;
