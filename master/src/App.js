import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "animate.css";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import ReactLenisInit from "./helper/ReactLenisInit";
import CustomCursor from "./helper/CustomCursor";
import { useEffect } from "react";
import HomePageTwo from "./pages/HomePageTwo";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1200,
    });
    Aos.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <CustomCursor />
      <ReactLenisInit />

      <Routes>
        <Route exact path='/' element={<HomePageOne />} />
        <Route exact path='/index-2' element={<HomePageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
