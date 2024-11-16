import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import CustomCursor from "./helper/CustomCursor";
import HomePageTwo from "./pages/HomePageTwo";
import BackToTop from "./helper/BackToTop";
import HomePageThree from "./pages/HomePageThree";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <CustomCursor />
      <BackToTop />

      <Routes>
        <Route exact path='/' element={<HomePageOne />} />
        <Route exact path='/index-2' element={<HomePageTwo />} />
        <Route exact path='/index-3' element={<HomePageThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
