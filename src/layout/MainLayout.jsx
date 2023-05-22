import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

/* eslint-disable react/prop-types */
const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
