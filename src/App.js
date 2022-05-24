import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lineup from "./pages/Lineup";
import Artist from "./pages/Artist";
import Schedule from "./pages/Schedule";
import Shop from "./pages/Shop";
import Purchases from "./pages/Purchases";
import Account from "./pages/Account";
import Whoups404 from "./pages/Whoups404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [bandsList, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://the-javascript-bar-project.herokuapp.com/bands");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  console.log(bandsList);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function getLineUp() {
      const res = await fetch("https://the-javascript-bar-project.herokuapp.com/schedule");
      const data = await res.json();
      setSchedule(data);
    }
    getLineUp();
  }, []);

  console.log(schedule);

  return (
    <div className="App bg-black font-montserrat">
      <Header bgColor="bg-concert-pink" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="lineup" element={<Lineup schedule={schedule} bands={bandsList} />} />
        <Route path="artist/:id" element={<Artist bands={bandsList} />} />
        <Route path="schedule" element={<Schedule schedule={schedule} bands={bandsList} />} />
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
