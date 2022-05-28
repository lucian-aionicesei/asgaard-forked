import { useState } from "react";

export default function UserCart({ userCart, setUserCart }) {
  // const [tickets, setTickets] = useState(savedItems.filter());
  // const [accomodation, setAccomodation] = useState(savedItems.accomodation);
  // const [cartItems, setCartItems] = useState(savedItems);
  // console.log(cartItems);
  console.log(userCart.length);

  const initialValue = (userCart.length > 0) ? 99 : 0;
  const sumWithInitial = userCart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    initialValue
  );

  return (
    <section className="w-full phone:min-w-[400px] max-w-[500px] h-fit text-black bg-concert-yellowish p-6 border-[3px] border-black">
      <h3 className="text-center text-2xl font-bold">YOUR ORDER</h3>
      {(userCart.length > 0) ? <ul className="space-y-6 my-10 min-h-fit max-h-80 overflow-auto">
        {userCart.map((item, index) => {
          if (item.type === "ticket" && item.quantity > 0) {
            return (
              <CartItem
                key={`cart-item${index}`}
                label={item.label}
                item={item}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            );
          } else if (item.type === "accomodation") {
            return (
              <CartItem
                key={`cart-item${index}`}
                label={`${item.tent} - ${item.area}`}
                item={item}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            );
          }
        })}
      </ul> : <p className="text-center h-24 flex items-center justify-center">No items added to cart</p> }
      
      <p className="flex justify-between border-b-[2px] border-black py-1">
        <span>Booking Fee*</span>
        <span className="font-semibold">DKK 99</span>
      </p>
      <p className="flex justify-between pt-3 pb-1">
        <span className="font-semibold text-xl">Total:</span>
        <span className="font-semibold text-xl">DKK {sumWithInitial}</span>
      </p>
      <p className="text-gray-500 text-sm text-right pb-6 border-b-[1px] border-gray-300">
        (including booking fee*)
      </p>
      {/*  <p className="text-gray-500 flex justify-center items-center space-x-2 pt-6">
          <FaPen />
          <span>delete your order</span>
        </p> */}
      <div className="text-gray-900 flex justify-center items-center space-x-2 pt-6 font-semibold bg-concert">
        <p className="flex flex-col phone:flex-row items-center gap-2">
          <span className="bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            LOG IN
          </span>
          <span> and proceed to payment</span>
        </p>
      </div>
    </section>
  );
}

function CartItem({ label, item, userCart, setUserCart }) {

  function remove() {
    setUserCart((oldArray) =>
      oldArray.filter((cartItem) => cartItem.id !== item.id)
    );
  }

  function changeQuantity(targetValue) {
    setUserCart(old => old.map(cartItem =>{
      if (cartItem.id === item.id){
        const copy = {...cartItem};
        copy.quantity = targetValue;
        return copy;
      }
    }) 
    );
  }

  return (
    <li className="min-h-24 flex items-center border-t-[1px] border-gray-300">
      <img
        src="./images/t-shirt.png"
        alt="t-shirt"
        className="object-cover w-24 h-24 hidden phone:block"
      />
      <div className="w-full h-full pl-4 flex flex-col justify-between space-y-4">
        <div>
          <h5 className="font-bold">{label}</h5>
          <p className="flex flex-col phone:flex-row justify-between">
            <span className="italic">DKK {item.price}</span>
            <span
              onClick={() => remove()}
              className="text-red-300 hover:text-red-500 italic text-sm font-semibold text-right cursor-pointer"
            >
              Delete
            </span>
          </p>
        </div>
        <div className="flex flex-col phone:flex-row justify-between ">
          <form action="" className="flex space-x-1">
            <label>
              <input
                type="number"
                className="w-12 h-fit p-0 pl-2 font-bold"
                min="1"
                value={item.quantity}
                onChange={(e) => changeQuantity(e.target.value)}
              ></input>
              pcs.
            </label>
          </form>
          <p className="font-bold text-right">
            DKK {item.price * item.quantity}
          </p>
        </div>
      </div>
    </li>
  );
}
