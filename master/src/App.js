import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import ReactLenisInit from "./helper/ReactLenisInit";
import CustomCursor from "./helper/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <CustomCursor />
      <ReactLenisInit />

      <Routes>
        <Route exact path='/' element={<HomePageOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
