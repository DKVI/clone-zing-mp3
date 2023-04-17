import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player } from "../../components";
export default function Public() {
  return (
    <div className="w-full flex justify-between flex-col min-h-screen bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] border-blue-700 border flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto border border-red-700">
          <Outlet />
        </div>
        <div className="w-[329px] flex-none border-black-50 border">
          <SidebarRight />
        </div>
      </div>
      <div className="flex-none h-[90px]">
        <Player />
      </div>
    </div>
  );
}
