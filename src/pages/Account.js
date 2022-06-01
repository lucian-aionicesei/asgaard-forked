import Content from "../components/Content";
import { UserLogin, UserLogedIn, RegisterUser } from "./Purchases";
import { useState } from "react";

export default function Account({
  userCart,
  setUserCart,
  userAuthenticated,
  setUserAuthenticated,
  countdown,
  setCountdown,
  user,
  setUser,
}) {
  const [registerPhase, setRegisterPhase] = useState(false);

  return (
    <Content>
      <h1 className="text-6xl md:text-7xl font-acier text-center pt-12 pb-8">
        Your purchases
      </h1>
      <div className="w-full pb-2 phone:p-8 h-fit bg-concert-yellow flex items-center justify-center">
        {userAuthenticated ? (
          <UserLogedIn
            setUserAuthenticated={setUserAuthenticated}
            user={user}
            setUser={setUser}
          />
        ) : registerPhase ? (
          <RegisterUser
            userAuthenticated={userAuthenticated}
            setUserAuthenticated={setUserAuthenticated}
            user={user}
            setUser={setUser}
            setRegisterPhase={setRegisterPhase}
          />
        ) : (
          <UserLogin
            userAuthenticated={userAuthenticated}
            setUserAuthenticated={setUserAuthenticated}
            user={user}
            setUser={setUser}
            setRegisterPhase={setRegisterPhase}
          />
        )}
      </div>
      {userAuthenticated && (
        <article className="w-full h-auto bg-concert-pink text-black pb-[3vw]">
          <h1 className="font-acier p-5 text-6xl text-black">MY Tickets</h1>
          {console.log(user)}
          {user &&
            (user.user.purchases !== null ? (
              <ul className="space-y-6 px-[5vw] max-w-[1200px]">
                {user.user.purchases.tickets.map((purchasedTicket, index) => {
                  return (
                    <Ticket
                      purchasedTicket={purchasedTicket}
                      number={index + 1}
                    />
                  );
                })}
                {console.log(user.user.purchases.tickets.length)}
              </ul>
            ) : (
              <p className="text-center font-bold text-xl py-10 mx-10 bg-concert-yellow">No tickets bought..</p>
            ))}
        </article>
      )}
    </Content>
  );
}

// const ticketDetails = {
//   label: "",
//   ticketOwner: "",
//   ownerAge: 0,
//   nationality: "",
//   city: "",
//   submitted: false,
// };

export function Ticket({ purchasedTicket, number }) {
  return (
    <li className="w-full border-[3px] border-black bg-concert-yellowish h-fit md:h-56 flex ">
      <div
        className={`h-full w-10 bg-${purchasedTicket.bgColor} border-r-[2px] border-black hidden md:block`}
      ></div>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold pb-4">{`${purchasedTicket.label} #${number}`}</h2>
        <form className="flex flex-wrap gap-x-4 gap-y-4 items-end w-full">
          <div className="flex flex-col">
            <label htmlFor="personName" className="font-bold">
              Ticket holder's name
            </label>
            <input
              type="text"
              name="personName"
              id="personName"
              className="font-semibold shadow appearance-none border border-[2px] border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-8"
              placeholder="John Smith"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="personNationality" className="font-bold">
              Nationality
            </label>
            <input
              type="text"
              name="personNationality"
              id="personNationality"
              className="font-semibold shadow appearance-none border border-[2px] border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-8"
              placeholder="Denmark"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="personAddress" className="font-bold">
              Ticket holder’s address
            </label>
            <input
              type="text"
              name="personAddress"
              id="personAddress"
              className="font-semibold shadow appearance-none border border-[2px] border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-8"
              placeholder="Holder's address from ID"
            />
          </div>
          <button className="bg-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-fit">
            Submit
          </button>
        </form>
      </div>
    </li>
  );
}
