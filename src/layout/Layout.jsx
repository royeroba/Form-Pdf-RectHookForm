import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <main className="bg-gray-100 p-4 md:p-6 lg:p-8 xl:p-10 mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
