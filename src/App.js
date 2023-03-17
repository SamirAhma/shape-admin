import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Test from "./pages/test/test";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
function App() {
  // const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <Routes>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Home />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <UserList />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/user/:userId"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <User />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/newUser"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <NewUser />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <ProductList />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/product/:productId"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Product />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      <Route
        path="/newproduct"
        element={
          // <PrivateRoute>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <NewProduct />
            </div>
          </>
          // <PrivateRoute>
        }
      />
      {/* {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </div>
        </>
      )} */}
    </Routes>
  );
}

export default App;
