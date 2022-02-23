import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, createContext, useEffect } from "react";
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
const newUserId = createContext({});

function App() {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(false);

	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/api/products/allProducts")
			.then(fetchData => {
				setData(fetchData.data);
			});
	}, []);

	return (
		<>
			<newToken.Provider value={{ token, setToken }}>
				<newUserId.Provider value={{ userId, setUserId }}>
					<Router>
						<Nav />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/marktplatz' element={<Marktplatz data={data} />} />
							<Route path='/ueberuns' element={<Ueberuns />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/addproduct' element={<AddProduct />} />
							<Route path='/wishlist' element={<Wishlist data={data} />} />
							<Route path='/details/:id' element={<DetailPage data={data} />} />
						</Routes>
					</Router>
				</newUserId.Provider>
			</newToken.Provider>
		</>
	);
}
export { newToken, newUserId };
export default App;
