import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./scss/main.scss";
import Nav from "./components/nav/Nav";

// Pages
import Home from "./pages/home/Home";
import Marktplatz from "./pages/marktplatz/Marktplatz";
import Ueberuns from "./pages/ueberuns/Ueberuns";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddProduct from "./pages/addProduct/AddProduct";
import Wishlist from "./pages/wishlist/Wishlist";
import DetailPage from "./pages/detailPage/DetailPage";

const newToken = createContext({});
function App() {
    const [token, setToken] = useState(false);

    return (
        <>
            <newToken.Provider value={{ token, setToken }}>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marktplatz" element={<Marktplatz />} />
                        <Route path="/ueberuns" element={<Ueberuns />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/details/:id" element={<DetailPage />} />
                    </Routes>
                </Router>
            </newToken.Provider>
        </>
    );
}
export { newToken };
export default App;
