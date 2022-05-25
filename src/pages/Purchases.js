import Content from "../components/Content";
import { FaPen } from "react-icons/fa";

export default function Purchases() {
  return (
    <Content>
      <h1 className="text-7xl font-acier">Purchases page</h1>
      <article className="bg-concert-yellow h-fit p-[4vw] flex flex-col-reverse items-center tablet:flex-row space-x-[2vw] gap-y-12">
        <UserLogin />
        <UserCart />
      </article>
    </Content>
  );
}

export function UserLogin(props) {
  return (
    <section className="h-20 bg-slate-500 w-full">
      <form action=""></form>
    </section>
  );
}

export function UserCart(props) {
  return (
    <section className="w-full phone:min-w-[400px] max-w-[500px] h-fit text-black bg-concert-yellowish p-6 border-[3px] border-black">
      <h3 className="text-center text-2xl font-bold">YOUR ORDER</h3>
      <ul className="space-y-6 my-10 min-h-fit max-h-80 overflow-auto">
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </ul>
      <p className="flex justify-between border-b-[2px] border-black py-1">
        <span>Booking Fee*</span>
        <span className="font-semibold">DKK 99</span>
      </p>
      <p className="flex justify-between pt-3 pb-1">
        <span className="font-semibold text-xl">Total:</span>
        <span className="font-semibold text-xl">DKK 299,00</span>
      </p>
      <p className="text-gray-500 text-sm text-right pb-6 border-b-[1px] border-gray-300">(including booking fee*)</p>
      <p className="text-gray-500 flex justify-center items-center space-x-2 pt-6">
        <FaPen />
        <span>delete your order</span>
      </p>
    </section>
  );
}

function CartItem(props) {
    return (
        <li className="min-h-24 max-h-auto flex items-center border-y-[1px] border-gray-300">
          <img
            src="./images/t-shirt.png"
            alt="t-shirt"
            className="object-cover w-24 h-24"
          />
          <div className="w-full h-full pl-4 flex flex-col justify-between space-y-4">
            <div>
              <h5 className="font-bold">3 person tent - Muspelheim</h5>
              <p className="flex flex-col phone:flex-row justify-between">
                <span className="italic">DKK 200,00</span>
                <span className="text-red-300 italic text-sm font-semibold text-right">Delete</span>
              </p>
            </div>
            <div className="flex flex-col phone:flex-row justify-between ">
              <form action="" className="flex space-x-1">
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  className="w-12 h-fit p-0 pl-2"
                ></input>
                <label for="salary"> pcs.</label>
              </form>
              <p className="font-bold text-right">DKK 400,00</p>
            </div>
          </div>
        </li>
    )   
}
