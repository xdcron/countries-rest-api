import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen overflow-auto  scrollbar-hide">
      <Header />
      <main className="overflow-auto  scrollbar-hide h-full bg-veryLightGrey dark:bg-veryDarkBlue dark:text-white transition-all duration-200 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
