import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-full ">
      <Header />
      <main className=" bg-veryLightGrey h-screen dark:bg-veryDarkBlue dark:text-white transition-all duration-200">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
