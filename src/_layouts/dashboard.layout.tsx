import { useCallback, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./sidebar.layout";
import Container from "./container.layout";
import { useAppDispatch, useAppSelector } from "../_store";
import { deleteTokenAuth } from "../_store/auth";
import { getInitials } from "../_utils/helper";
import { ChevronDown } from "lucide-react";

const DashboardLayout: React.FC = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(true);
  const dispatch = useAppDispatch()
  const toggleSidebar = (): void => {
    setNavbarActive((prev) => !prev);
  };
  const handleLogout = useCallback(() => {
    dispatch(deleteTokenAuth())
  }, []);
  const { user } = useAppSelector(state => state.auth)

  return (
    <div className="flex">
      <Sidebar active={navbarActive} toggleSidebar={toggleSidebar} />
      <Container className={`${navbarActive ? "w-[80%]" : "w-full"}`}>
        <div className="flex justify-between p-4">
          <h1 className="text-3xl font-bold">E-Monitoring IBE</h1>
          <div className="flex justify-start gap-4 items-center">
            <div className="flex items-center gap-2">
              <p>Dashboard</p>
              <ChevronDown />
            </div>
            <p>Monitoring</p>
            <p>Status</p>
            <p>Laporan</p>
            <div className="flex items-center gap-2">
              <p>Lainnya</p>
              <ChevronDown />
            </div>
          </div>
          <div className="flex justify-start items-center gap-3">
            <div className="flex justify-center p-2 rounded-full bg-gradient-to-b from-[#7446CD] to-[#D84186] min-w-[36px]">
              <p className="text-white font-semibold text-sm">{getInitials(user?.nama as string)}</p>
            </div>
            <p className="text-base font-semibold">{user?.nama}</p>
            <div className="h-full w-[1px] bg-[#D9D9D9]"></div>
            <button onClick={handleLogout} className="text-[#CF0606] cursor-pointer">Logout</button>
          </div>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default DashboardLayout;