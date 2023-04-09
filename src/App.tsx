import { useEffect, useState } from "react";
//interface
import { IProduct } from "./interfaces/product";
//bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
//ant
import "antd/dist/reset.css";

import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layouts/Client/baseLayout";
import AdminLayout from "./components/layouts/Admin/adminLayout";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "./api/product";
import AdminProduct from "./pages/Admin/AdminProduct";
import Signin from "./pages/Client/Signin";
import Signup from "./pages/Client/Signup";
import AdminEditProduct from "./pages/Admin/AdminEditProduct";
import HomePages from "./pages/Client/HomePage";
import ProductDetail from "./pages/Client/ProductDetail";
import DashBoardPage from "./pages/Admin/DashBoardPage";
import Cart from "./pages/Client/Cart";
import AdminAddProduct from "./pages/Admin/AdminAddProduct";
import NotFound from "./pages/Client/NotFound";
import PrivateRouter from "./components/PrivateRouter";


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  // call api  lấy dữ liệu
  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  // xóa sản phẩm
  const onHandDeleteProduct = async (id: string) => {
    await deleteProduct(id).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };
  //add sản phẩm
  const onHandAddProduct = async (product: IProduct) => {
    await addProduct(product)
    await getAllProducts().then(({ data }) => {
      setProducts(data)
    })
  };
  // sửa sản phẩm
  const onHandEditProduct = async (data: IProduct, id: string | number) => {
    await updateProduct(id, data).then(() => {
      setProducts(
        products.map((product) => (product.id === data.id ? data : product))
      );
    });
  };
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePages />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* admin */}
        <Route path="/admin" element={
          <PrivateRouter>
            <AdminLayout />
          </PrivateRouter>}>
          <Route index element={<DashBoardPage />} />
          <Route
            path="products"
            element={
              <AdminProduct
                products={products}
                onRemove={onHandDeleteProduct}
              />
            }
          />
          <Route
            path="products/:id/update"
            element={<AdminEditProduct onEdit={onHandEditProduct} />}
          />
          <Route
            path="products/add"
            element={<AdminAddProduct onAdd={onHandAddProduct} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
