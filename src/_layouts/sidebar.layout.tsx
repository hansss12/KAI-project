import { NavLink, useLocation } from "react-router";
import { DotsBottom, KAILogo, SidebarTrain } from "../assets";
import { menuItem, otherMenuItem } from "../constant/sidebar-menu";

interface SidebarProps {
  active: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const location = useLocation();
  return (
    <aside
      className={`z-[999] max-h-screen h-screen overflow-auto relative top-0 transition-all ${active ? "left-0 w-[20%]" : "-left-[20%] w-[0%]"}`}
    >
      <div className="flex justify-center py-8 w-full">
        <img src={KAILogo} alt="kai-logo" className="h-10 object-contain" />
      </div>
      <div className="w-full h-[1px] bg-gradient-to-b from-[#7446CD] to-[#D84186]"></div>

      <div className="mt-4">
        <h2 className="font-semibold text-xl px-4">Menu</h2>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-1">
          {menuItem.map((el) => {
            const active = location.pathname.includes(el.path)
            return (
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  `hover:text-[#7446CD] transition-all duration-500 p-2 cursor-pointer rounded-xl relative ${isActive ? "text-[#7446CD]" : "text-slate-800"}`
                }
              >
                {active ?
                  <div className="absolute left-0 h-full top-0 bg-gradient-to-b from-[#7446CD] to-[#D84186] w-2"></div>
                  : null}
                <div className="flex items-center gap-2 ml-4">
                  {active ? el.activeIcon : el.icon}
                  <p className="text-lg font-semibold">
                    {el.name}
                  </p>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-xl px-4">Lainnya</h2>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-1">
          {otherMenuItem.map((el) => {
            const active = location.pathname.includes(el.path)
            return (
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  `hover:text-[#7446CD] transition-all duration-500 p-2 cursor-pointer rounded-xl relative ${isActive ? "text-[#7446CD]" : "text-slate-800"}`
                }
              >
                {active ?
                  <div className="absolute left-0 h-full top-0 bg-gradient-to-b from-[#7446CD] to-[#D84186] w-2"></div>
                  : null}
                <div className="flex items-center gap-2 ml-4">
                  {active ? el.activeIcon : el.icon}
                  <p className="text-lg font-semibold">
                    {el.name}
                  </p>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#7446CD] h-[300px] relative">
          <img src={DotsBottom} alt="login-dots-1" className="absolute left-0 bottom-0 w-16 h-16" />
          <img src={SidebarTrain} alt="login-dots-1" className="absolute right-0 bottom-0 h-[180px]" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
