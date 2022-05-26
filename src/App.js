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
const urlSlugMatch = require("url-slug-match");

const cart = {
  tickets: [
    {
      label: "Regular Pass - ticket",
      price: 799,
      quantity: 2,
    },
    {
      label: "VIP Pass - ticket",
      price: 1299,
      quantity: 4,
    },
  ],
  accomodation: {
    tents: [
      {
        area: "Muspelheim",
        twoPersonTent: 1,
        threePersonTent: null,
      },
      {
        area: "Svartheim",
        twoPersonTent: 1,
        threePersonTent: 1,
      },
      {
        area: "Alfheim",
        twoPersonTent: 1,
        threePersonTent: 1,
      },
    ],
  },
};

// const cart2 = {
//   tickets: {
//     regular: {
//       label: "Regular Pass - ticket",
//       price: 799,
//       quantity: 2,
//     },
//     vip: {
//       label: "VIP Pass - ticket",
//       price: 1299,
//       quantity: 2,
//     },
//   },
//   accomodation: null,
// };

function App() {
  const [bandsList, setProducts] = useState([]);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userCart, setUserCart] = useState(cart);

  // console.log(userCart);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        "https://the-javascript-bar-project.herokuapp.com/bands"
      );
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  let updatedBandList = [];

  // console.log(bandsList);
  bandsList.map((band) => {
    // console.log(band.name);
    let thisBand = band;
    thisBand.id = urlSlugMatch(band.name.trim());
    updatedBandList = [...updatedBandList, thisBand];
  });

  // console.log(updatedBandList);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function getLineUp() {
      const res = await fetch(
        "https://the-javascript-bar-project.herokuapp.com/schedule"
      );
      const data = await res.json();
      setSchedule(data);
    }
    getLineUp();
  }, []);

  // console.log(schedule);

  return (
    <div className="App bg-black font-montserrat">
      <Header bgColor="bg-concert-pink" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="lineup"
          element={<Lineup schedule={schedule} bands={bandsList} />}
        />
        <Route path="artist/:id" element={<Artist bands={updatedBandList} />} />
        <Route
          path="schedule"
          element={<Schedule schedule={schedule} bands={bandsList} />}
        />
        <Route path="shop" element={<Shop />} />
        <Route path="purchases" element={<Purchases savedItems={userCart} />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Whoups404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
