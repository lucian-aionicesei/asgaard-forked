import Content from "../components/Content";
import { FaPen, FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import UserCart from "../components/UserCart";
import { useState } from "react";
import axios from "axios";
import { usePaymentInputs } from 'react-payment-inputs';

export default function Purchases({
  userCart,
  setUserCart,
  userAuthenticated,
  setUserAuthenticated,
  countdown,
  setCountdown,
}) {
  const [purchasingPhase, setPurchasingPhase] = useState(false);

  return (
    <Content>
      <h1 className="text-6xl md:text-7xl font-acier text-center pt-20">
        Do you have an account?
      </h1>
      <article className="bg-concert-yellow h-fit p-[4vw] flex flex-col-reverse items-center justify-center tablet:items-start tablet:flex-row phone:space-x-[2vw] gap-y-12">
        {/* {purchasingPhase ? (
          <PaymentForm />
        ) : userAuthenticated ? (
          <UserLogedIn setUserAuthenticated={setUserAuthenticated} />
        ) : (
          <UserLogin
            userAuthenticated={userAuthenticated}
            setUserAuthenticated={setUserAuthenticated}
          />
        )} */}
        {/* {((userAuthenticated) ? <UserLogedIn setUserAuthenticated={setUserAuthenticated}/> : 
          <UserLogin
            userAuthenticated={userAuthenticated}
            setUserAuthenticated={setUserAuthenticated}
          />)
        } */}
        <PaymentForm />

        <UserCart
          userCart={userCart}
          setUserCart={setUserCart}
          userAuthenticated={userAuthenticated}
          setUserAuthenticated={setUserAuthenticated}
          countdown={countdown}
          setCountdown={setCountdown}
          purchasingPhase={purchasingPhase}
          setPurchasingPhase={setPurchasingPhase}
        />
      </article>
    </Content>
  );
}

export function UserLogin({ setUserAuthenticated }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(typeof event.target.email.value);
    let userEmail = event.target.email.value;
    console.log(typeof event.target.password.value);
    let userPassword = event.target.email.value;

    setLoading(true);

    const getData = axios
      .post("https://asgaard-userdb.herokuapp.com/api/auth/local", {
        identifier: "christian@kea.dk",
        password: "lucian123",
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setUserAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        setUserAuthenticated(false);
        setLoading(false);
      });

    getData();
  }

  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">LOG IN</h3>
        <p className="text-sm font-semibold">
          You need to be loged-in to proceed to payment
        </p>
      </div>
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="username">
            E-mail
          </label>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="shadow font-bold appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            type="password"
            placeholder="******************"
          />
        </div>
        <button className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          LOG IN
        </button>
      </form>
      <p className="font-semibold">
        No account?
        <span className="underline pl-2 font-bold cursor-pointer">Sign up</span>
      </p>
      <div className="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <FaFacebookSquare className="text-4xl" />
        <p className="w-full">Sign up with Facebook</p>
      </div>
      <div className="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <IoLogoGoogle className="text-4xl" />
        <p className="w-full">Sign up with Google</p>
      </div>
    </section>
  );
}

export function UserLogedIn({ setUserAuthenticated }) {
  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">Hey there!</h3>
        <div className="flex justify-center pt-4">
          <img
            src="./images/user-picture.jpg"
            alt=""
            className="rounded-full border-[3px] border-black w-40 h-40 object-cover"
          />
        </div>
        <p className="font-semibold text-lg text-center py-4">
          You are logged in as <span className="font-bold">Christian</span>
        </p>
        <p className=" pt-6">
          Don't forget to add your ticket details, after you complete the
          purchase.
        </p>
      </div>
      <div className="flex justify-around items-center flex-col">
        <button className="bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
          Add ticket details
        </button>
        <p
          className="underline pt-4 font-bold cursor-pointer"
          onClick={() => setUserAuthenticated(false)}
        >
          Log out
        </p>
      </div>
    </section>
  );
}

function PaymentForm(props) {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

function handleSubmit(event) {
  event.preventDefault();
}

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto bg-yellow-500 p-5 text-black">
      <div className="mb-10">
        <h1 className="text-center font-bold text-xl uppercase">
          Secure payment info
        </h1>
      </div>
      <div className="mb-3 flex -mx-2">
        <div className="px-2">
          <label htmlFor="type1" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-indigo-500"
              name="type"
              id="type1"
              checked
            />
            <img
              src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
              className="h-8 ml-3"
              alt="shipments"
            />
          </label>
        </div>
        <div className="px-2">
          <label htmlFor="type2" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-indigo-500"
              name="type"
              id="type2"
            />
            <img
              src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
              className="h-8 ml-3"
              alt="shipments"
            />
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold mb-2 text-sm phone:text-base ml-1">Name on card</label>
        <div>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="John Smith"
            type="text"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm phone:text-base mb-2 ml-1">Card number</label>
        <div>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="0000 0000 0000 0000"
            type="text"
            required
          />
        </div>
      </div>
      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label className="font-bold text-sm phone:text-base mb-2 ml-1">Expiration date</label>
          <div>
            <select required className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
              <option value="01">01 - January</option>
              <option value="02">02 - February</option>
              <option value="03">03 - March</option>
              <option value="04">04 - April</option>
              <option value="05">05 - May</option>
              <option value="06">06 - June</option>
              <option value="07">07 - July</option>
              <option value="08">08 - August</option>
              <option value="09">09 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </select>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <select required className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2029">2030</option>
            <option value="2029">2031</option>
          </select>
        </div>
      </div>
      <div className="mb-10">
        <label className="font-bold text-sm phone:text-base mb-2 ml-1">Security code</label>
        <div>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-32 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="000"
            type="text"
            required
          />
        </div>
      </div>
      <div>
      <button className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Pay now
        </button>
      </div>
    </form>
  );
}
