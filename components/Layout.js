import Footer from "./Footer";
import Navabar from "./Navabar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1100px] m-auto">
      <Navabar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
