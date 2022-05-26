import { useState } from "react";

export default function UserCart({ savedItems }) {
  const [tickets, setTickets] = useState(savedItems.tickets);
  const [accomodation, setAccomodation] = useState(savedItems.accomodation);
  const [total, setTotal] = useState(0);
  console.log(tickets);

  return (
    <section className="w-full phone:min-w-[400px] max-w-[500px] h-fit text-black bg-concert-yellowish p-6 border-[3px] border-black">
      <h3 className="text-center text-2xl font-bold">YOUR ORDER</h3>
      <ul className="space-y-6 my-10 min-h-fit max-h-80 overflow-auto">
        {tickets.map((ticket, index) => {
          return (
            <CartItem
              label={ticket.label}
              price={parseFloat(ticket.price).toFixed(2)}
              quantity={ticket.quantity}
              key={`ticket#${index}`}
            />
          );
        })}
        {accomodation.tents.map((booking, index) => {
          return (
            booking.twoPersonTent && (
              <CartItem
                label={`2 person tent - ${booking.area}`}
                price={parseFloat(299.0).toFixed(2)}
                quantity={booking.twoPersonTent}
                key={`2p-tent-${booking.area}#${index}`}
              />
            )
          );
        })}
        {accomodation.tents.map((booking, index) => {
          return (
            booking.threePersonTent && (
              <CartItem
                label={`3 person tent - ${booking.area}`}
                price={parseFloat(399.0).toFixed(2)}
                quantity={booking.threePersonTent}
                key={`3p-tent-${booking.area}#${index}`}
              />
            )
          );
        })}
      </ul>
      <p className="flex justify-between border-b-[2px] border-black py-1">
        <span>Booking Fee*</span>
        <span className="font-semibold">DKK 99</span>
      </p>
      <p className="flex justify-between pt-3 pb-1">
        <span className="font-semibold text-xl">Total:</span>
        <span className="font-semibold text-xl">DKK {total}</span>
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

function CartItem({ label, price, quantity }) {
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
            <span className="italic">DKK {price}</span>
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
              value={quantity}
              onfocusout="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
            ></input>
            <label htmlFor="salary"> pcs.</label>
          </form>
          <p className="font-bold text-right">
            DKK {parseFloat(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  );
}
