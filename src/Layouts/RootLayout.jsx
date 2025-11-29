import { Outlet } from "react-router";
import Navber from "../components/Navber/Navber";

const RootLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default RootLayout;
