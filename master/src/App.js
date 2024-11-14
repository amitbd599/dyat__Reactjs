import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import CustomCursor from "./helper/CustomCursor";
import HomePageTwo from "./pages/HomePageTwo";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <CustomCursor />

      <Routes>
        <Route exact path='/' element={<HomePageOne />} />
        <Route exact path='/index-2' element={<HomePageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
