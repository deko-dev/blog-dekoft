import "./styles/LayoutMain.scss";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';

export const LayoutMain = () => {
  return (
    <main className="LayoutMain">
      <Header />
      <div id="LayoutContent">
        <Outlet/>
      </div>
      <Footer />
    </main>
  );
};
