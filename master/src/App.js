import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import CustomCursor from "./helper/CustomCursor";
import HomePageTwo from "./pages/HomePageTwo";
import BackToTop from "./helper/BackToTop";
import HomePageThree from "./pages/HomePageThree";
import AboutPage from "./pages/AboutPage";
import AuctionPage from "./pages/AuctionPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogGridPage from "./pages/BlogGridPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import CreateItemPage from "./pages/CreateItemPage";

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
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/auction' element={<AuctionPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/blog-grid' element={<BlogGridPage />} />
        <Route exact path='/blog-list' element={<BlogListPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/create-item' element={<CreateItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
