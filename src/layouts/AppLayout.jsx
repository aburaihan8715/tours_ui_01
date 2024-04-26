import { Outlet } from "react-router-dom";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
