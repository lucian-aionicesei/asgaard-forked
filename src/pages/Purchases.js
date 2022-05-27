import Content from "../components/Content";
import { FaPen, FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import UserCart from "../components/UserCart"

export default function Purchases({savedItems, setUserCart}) {
  // console.log(savedItems)
  return (
    <Content>
      <h1 className="text-6xl md:text-7xl font-acier text-center pt-20">
        Do you have an account?
      </h1>
      <article className="bg-concert-yellow h-fit p-[4vw] flex flex-col-reverse items-center justify-center tablet:items-start tablet:flex-row phone:space-x-[2vw] gap-y-12">
        <UserLogin />
        <UserCart savedItems={savedItems} setUserCart={setUserCart}/>
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
        <div className="mb-4">
          <label className="block font-bold" htmlFor="username">
            E-mail
          </label>
          <input
            className="shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <button
          className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
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
