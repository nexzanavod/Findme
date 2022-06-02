import Header from "./components/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}
export default WebContent;
