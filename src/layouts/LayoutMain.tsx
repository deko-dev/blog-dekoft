import "./styles/LayoutMain.scss";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const LayoutMain = () => {
  return (
    <main className="LayoutMain">
      <Header />
      <div id="LayoutContent">
        <Outlet/>
      </div>
    </main>
  );
};
