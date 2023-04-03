import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-[100vh] h-full bg-main gap-6">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
