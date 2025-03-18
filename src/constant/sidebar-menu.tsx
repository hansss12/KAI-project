import { JSX } from "react";
import { Menu1 } from "../assets";
import { inputRencanaPath } from "../pages/input-rencana/index.page";
import SvgRecolor from "../components/SVGRecolor";
import { menu1 } from "./icon";

interface SubMenuItem {
  name: string;
  path: string;
}
interface MenuItem {
  name: string;
  path: string;
  activeIcon: JSX.Element;
  icon: JSX.Element;
  child?: SubMenuItem[];
  expand?: boolean;
}

export const menuItem: MenuItem[] = [
  {
    name: "Input Rencana",
    path: inputRencanaPath,
    activeIcon: <SvgRecolor svg={menu1} color="#7446CD" height="24" width="24" />,
    icon: <SvgRecolor svg={menu1} color="#000000" height="24" width="24" />,
  },
  {
    name: "Preparation",
    path: "/preparation",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "Prabidding",
    path: "/prabidding",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },

  {
    name: "Bidding",
    path: "/bidding",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "Kontrak",
    path: "/kontrak",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "Pelaksanaan",
    path: "/pelaksanaan",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "Pembayaran",
    path: "/pembayaran",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
]

export const otherMenuItem: MenuItem[] = [
  {
    name: "SN",
    path: "/sn",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "PII",
    path: "/pii",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
  {
    name: "HPS",
    path: "/hps",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },

  {
    name: "PBJ",
    path: "/pbj",
    activeIcon: <img src={Menu1} className="w-6 h-6" />,
    icon: <img src={Menu1} className="w-6 h-6" />,
  },
]