import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import ServicesComp from "./components/ServicesComp";
// import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import EdukasiComp from "./components/EdukasiComp";
import MessageComp from "./components/MessageComp";


function App() {
  return(
  <div>
    <HeroComp />

    {/* Content */}
    <NavbarComp/>
    <GalleryComp/>
    <ServicesComp/>
    <EdukasiComp/>
    <MessageComp/>

    {/* <FaqComp/> */}
    {/* Content */}

    <FooterComp/>


  </div>
  );
}

export default App
