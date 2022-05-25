import Content from "../components/Content";
import { FaPen, FaFacebookSquare } from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io"

export default function Purchases() {
  return (
    <Content>
      <h1 className="text-6xl md:text-7xl font-acier text-center pt-20">
        Do you have an account?
      </h1>
      <article className="bg-concert-yellow h-fit p-[4vw] flex flex-col-reverse items-center justify-center tablet:items-start tablet:flex-row phone:space-x-[2vw] gap-y-12">
        <UserLogin />
        <UserCart />
      </article>
    </Content>
  );
}

export function UserLogin(props) {
  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">LOG IN</h3>
        <p className="text-sm font-semibold">
          You need to be loged-in to proceed to payment
        </p>
      </div>
      <form>
        <div class="mb-4">
          <label class="block font-bold" for="username">
            E-mail
          </label>
          <input
            class="shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-4">
          <label class="block font-bold" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <button
          class="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          LOG IN
        </button>
      </form>
      <p className="font-semibold">
        No account?
        <span className="underline pl-2 font-bold cursor-pointer">Sign up</span>
      </p>
      <div class="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <FaFacebookSquare className="text-4xl" /><p className="w-full">Sign up with Facebook</p>
      </div>
      <div class="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <IoLogoGoogle className="text-4xl" /><p className="w-full">Sign up with Google</p>
      </div>
    </section>
  );
}

export function UserCart(props) {
  return (
    <section className="w-full phone:min-w-[400px] max-w-[500px] h-fit text-black bg-concert-yellowish p-6 border-[3px] border-black">
      <h3 className="text-center text-2xl font-bold">YOUR ORDER</h3>
      <ul className="space-y-6 my-10 min-h-fit max-h-80 overflow-auto">
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <p className="flex justify-between border-b-[2px] border-black py-1">
        <span>Booking Fee*</span>
        <span className="font-semibold">DKK 99</span>
      </p>
      <p className="flex justify-between pt-3 pb-1">
        <span className="font-semibold text-xl">Total:</span>
        <span className="font-semibold text-xl">DKK 299,00</span>
      </p>
      <p className="text-gray-500 text-sm text-right pb-6 border-b-[1px] border-gray-300">
        (including booking fee*)
      </p>
      {/* <p className="text-gray-500 flex justify-center items-center space-x-2 pt-6">
        <FaPen />
        <span>delete your order</span>
      </p> */}
      <div className="text-gray-900 flex justify-center items-center space-x-2 pt-6 font-semibold bg-concert">
        <p className="flex flex-col phone:flex-row items-center gap-2">
          <span class="bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            LOG IN
          </span>
          <span> and proceed to payment</span>
        </p>
      </div>
    </section>
  );
}

function CartItem(props) {
  return (
    <li className="min-h-24 flex items-center border-t-[1px] border-gray-300">
      <img
        src="./images/t-shirt.png"
        alt="t-shirt"
        className="object-cover w-24 h-24 hidden phone:block"
      />
      <div className="w-full h-full pl-4 flex flex-col justify-between space-y-4">
        <div>
          <h5 className="font-bold">3 person tent - Muspelheim</h5>
          <p className="flex flex-col phone:flex-row justify-between">
            <span className="italic">DKK 200,00</span>
            <span className="text-red-300 hover:text-red-500 italic text-sm font-semibold text-right cursor-pointer">
              Delete
            </span>
          </p>
        </div>
        <div className="flex flex-col phone:flex-row justify-between ">
          <form action="" className="flex space-x-1">
            <input
              type="number"
              id="salary"
              name="salary"
              className="w-12 h-fit p-0 pl-2"
              min="0"
              max="100"
              onfocusout="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
            ></input>
            <label for="salary"> pcs.</label>
          </form>
          <p className="font-bold text-right">DKK 400,00</p>
        </div>
      </div>
    </li>
  );
}
