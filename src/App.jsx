import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    // Tarayıcıdaki url'ye göre sayfalama yapmamızı sağlar.
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfalar tarafından ortak olarak kullanılacak
         bileşenleri router dışına yazdırır. */}
        <Header />

        <Routes>
          {/*
           * Route: Projedeki her sayfa için tanımlanır
           * Route'a yol ve o yol için ekraa basılacak bileşeni veririz
           */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />

          {/* Dinamik route */}
          <Route path="/ürün/:id" element={<ProductDetail />} />

          {/* nested routes > iç içe yollar */}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>STORY</h1>} />
            <Route path="roman" element={<h1>NOVEL</h1>} />
          </Route>

          {/* Tanımsız bir Route'a yönlenirse */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
