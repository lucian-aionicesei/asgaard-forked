import Content from "../components/Content";
import MerchOffer from "../components/MerchOffer";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  SeeDetailButton,
  SeeDetailButtonUp,
  Button2,
} from "../components/Buttons";
import useFetch from "../hooks/useFetch";
import Passes from "../components/Passes";
import useCountdown from "../hooks/useCountdown";
import { useState } from "react";

// const targetDate = this;
const targetDate = new Date("2022, 07, 20");

export default function Shop({userCart, setUserCart, countdown, setCountdown}) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/available-spots");

  return (
    <Content>
      <div className="font-acier text-center pt-20 pb-10">
      <p className="text-4xl font-aciersolid">
        {days} Days {hours}h {minutes}' {seconds}"
      </p>
      <h1 className="text-6xl md:text-7xl">
        until impact
      </h1>
      <p className="text-2xl ">HUSTON WE GOT THE TICKETS</p>
      </div>
      <Passes userCart={userCart} setUserCart={setUserCart} countdown={countdown} setCountdown={setCountdown}/>
      <CampContainer userCart={userCart} setUserCart={setUserCart}/>
      <MerchOffer />
    </Content>
  );
}

export function CampContainer({userCart, setUserCart}) {
  return (
    <div className={`w-full bg-concert-yellow text-black pb-[3vw]`}>
      <h1 className="text-5xl font-acier p-5">CAMPING ACCOMODATION</h1>
      <ul className="space-y-6 px-[5vw] max-w-[1200px]">
        <CampingLines userCart={userCart} setUserCart={setUserCart} accomodationArea="Svartheim" dropText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <CampingLines userCart={userCart} setUserCart={setUserCart} accomodationArea="Nilfheim" dropText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <CampingLines userCart={userCart} setUserCart={setUserCart} accomodationArea="Helheim" dropText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <CampingLines userCart={userCart} setUserCart={setUserCart} accomodationArea="Muspelheim" dropText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <CampingLines userCart={userCart} setUserCart={setUserCart} accomodationArea="Alfheim" dropText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </ul>
    </div>
  );
}

export function CampingLines({userCart, setUserCart, dropText, accomodationArea}) {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <li className="w-full h-fit">
      <div className="w-full h-36 md:h-32 bg-concert-bg border-[3px] border-black flex">
        <img
          src="./images/camping.jpg"
          className="hidden sm:block h-auto w-96 object-cover"
          alt=""
        ></img>
        <div className="w-full flex flex-col justify-between p-2">
          <div className="flex flex-col md:flex-row">
            <div>
              <h4 className="text-2xl font-bold">{accomodationArea}</h4>
              <p>
                Spots available: <span className="font-bold">10</span>
              </p>
            </div>
            <p className="font-bold md:m-auto">
              From <span className="text-lg">299 kr</span>
            </p>
          </div>
          <div className="flex h-fit w-full justify-between items-end">
            <button onClick={()=>{setShow(!show); setDropDown(false)}}>{show ? <SeeDetailButtonUp label="See details"/> : <SeeDetailButton label="See details"/>}</button>
            <button onClick={()=>{setDropDown(!dropDown); setShow(false)}}><Button2 label="Book" bgcolor="concert-pink" /></button>
          </div>
        </div>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="h-auto bg-yellow-50"
        >
          <p className="p-4 text-sm cursor-pointer sm:text-base font-semibold">
            {dropText}
          </p>
        </div>
      )}
      {dropDown && <div className="w-full items-center flex flex-col md:flex-row bg-yellow-50 px-[5vw] py-[4vw] gap-x-[5vw] gap-y-[7vw]">
        <CampingOption userCart={userCart} setUserCart={setUserCart}
          accomodationPrice={299}
          accomodationArea={accomodationArea}
          accomodationType="2 persons tent"
          cartItemId={`2pers-${accomodationArea}`}/>
        <CampingOption userCart={userCart} setUserCart={setUserCart}
          accomodationPrice={399}
          accomodationArea={accomodationArea}
          accomodationType="3 persons tent"
          cartItemId={`3pers-${accomodationArea}`}/>
      </div>}
    </li>
  );
}

const oneCartItem = {
  id: "",
  type: "",
  ticketType: "",
  area: "",
  label: "",
  price: 0,
  quantity: 0,
};

function CampingOption({userCart, setUserCart, cartItemId, accomodationPrice, accomodationArea, accomodationType}) {
  let [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted", itemQuantity);

    const accomodation = Object.create(oneCartItem);

    accomodation.id = cartItemId;
    accomodation.type = "accomodation";
    accomodation.area = accomodationArea;
    accomodation.label = `${accomodationType} - ${accomodationArea}`;
    accomodation.price = accomodationPrice;
    accomodation.quantity = itemQuantity;
    // console.log(countdown);

    addToCart(accomodation);
    // !countdown && setCountdown(true);
    setItemQuantity(1);
  }

  function addToCart(accomodation) {
    if (userCart.find((cartItem) => cartItem.id === accomodation.id)) {
      console.log("Item already added");
      setUserCart((old) =>
        old.map((item) => {
          if (item.id === accomodation.id) {
            const copy = { ...item };
            copy.quantity = copy.quantity + accomodation.quantity;
            return copy;
          } else {
            return item;
          }
        })
      );
    } else {
      setUserCart((oldArray) => [...oldArray, accomodation]);
    }
  }

  return (
    <div className=" md:w-full font-semibold bg-yellow-200 pb-2">
          <img src="./images/camping.jpg" alt="" className="w-full h-40 md:h-[16vw] object-cover border-black border-[2px]"/>
          <p className="text-base pt-2 px-2">{accomodationType}</p>
          <p className="text-base px-2">
              <span className="text-xl font-bold">{accomodationPrice}</span> DKK
            </p>
          <form
            className="flex items-center justify-center space-x-2 pt-4"
            onSubmit={handleSubmit}
          >
            <label className="flex items-center h-8 px-1 bg-concert-yellow border-black border-[2px] selectQuantity">
              <AiOutlineMinusCircle
                className="text-xl cursor-pointer"
                onClick={() =>
                  itemQuantity > 1 && setItemQuantity(itemQuantity - 1)
                }
              />
              <input
                type="number"
                min="1"
                max="100"
                required
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                onBlur={(e) => e.target.value === "" && setItemQuantity(1)}
                className="bg-concert-yellow text-center p-0 font-bold w-10 border-none"
              />
              <AiOutlinePlusCircle
                className="text-xl cursor-pointer"
                onClick={() =>
                  itemQuantity >= 1 && setItemQuantity(itemQuantity + 1)
                }
              />
            </label>
            <button className=" bg-black h-8 font-bold p-1 flex items-center text-white text-xs">
              ADD TO CHART
            </button>
          </form>
        </div>
  )
}