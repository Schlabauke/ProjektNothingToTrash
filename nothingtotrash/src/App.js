import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import Nav from "./components/nav/Nav";

// Pages
import Home from "./pages/home/Home";
import Marktplatz from "./pages/marktplatz/Marktplatz";
import Ueberuns from "./pages/ueberuns/Ueberuns";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/marktplatz" element={<Marktplatz />} />
                    <Route path="/ueberuns" element={<Ueberuns />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/details/:id" element={<Detail />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
