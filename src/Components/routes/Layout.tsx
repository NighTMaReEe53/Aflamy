import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Nav_Mobile from "../Navbar/Nav_Mobile";

const Layout = () => {

  return (
    <>
      <Nav />
      <Nav_Mobile />
      <Outlet />
    </>
  );
};

export default Layout;
