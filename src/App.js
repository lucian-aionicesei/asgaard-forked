import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Lineup from "./pages/Lineup"
import Artist from "./pages/Artist"
import Schedule from "./pages/Schedule"
import Shop from "./pages/Shop"
import Purchases from "./pages/Purchases"
import Account from "./pages/Account"
import Whoups404 from "./pages/Whoups404";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css";
import { useState, useEffect } from "react"

function App() {
  const [bandsList, setProducts] = useState([]);

  useEffect(()=>{
    async function getProducts() {
      const res = await fetch("https://the-javascript-bar-project.herokuapp.com/bands")
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, [])

  console.log(bandsList);

  return (
    <div className="App bg-gray-200 font-montserrat">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="lineup" element={<Lineup bands={bandsList}/>} />
        <Route path="artist/:id" element={<Artist />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="shop" element={<Shop />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Whoups404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
