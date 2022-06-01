import { Button2 } from "./Buttons";
import PassesLines from "./PassesLines";
import { useState } from "react";

export default function Passes({
  userCart,
  setUserCart,
  countdown,
  setCountdown,
}) {
  const [toggleHidden, setToggleHidden] = useState(false);

  return (
    <article className="w-full h-auto bg-concert-pink text-black pb-[3vw]">
      <h1 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h1>
      <ul className="space-y-6 px-[5vw] max-w-[1200px]">
        <PassesLines
          passName="Regular pass"
          passPrice={799}
          bgPasses="concert-l-green"
          dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket1"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/regularTicket.png"
        />

        <PassesLines
          passName="VIP pass"
          passPrice={1299}
          bgPasses="concert-yellow"
          dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket2"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/vipTicket.png"
        />
        <PassesLines
          passName="Premium pass"
          passPrice={1599}
          bgPasses="concert-redish"
          dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket3"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/premiumTicket.png"
        />
        {toggleHidden && (
          <>
            <PassesLines
              passName="Day pass"
              passPrice={130}
              bgPasses="concert-blue"
              dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
              userCart={userCart}
              setUserCart={setUserCart}
              cartItemId="ticket4"
              setCountdown={setCountdown}
              countdown={countdown}
              logo="./images/blueTicket.png"
            />
            <PassesLines
              passName="3 day pass"
              passPrice={400}
              bgPasses="concert-b-green"
              dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
              userCart={userCart}
              setUserCart={setUserCart}
              cartItemId="ticket5"
              setCountdown={setCountdown}
              countdown={countdown}
              logo="./images/lGreenTicket.png"
            />
          </>
        )}
      </ul>
      <button
        className="p-5"
        onClick={() => {
          setToggleHidden(!toggleHidden);
        }}
      >
        <Button2
          label={toggleHidden ? "Hide options" : "See all options"}
          bgcolor="concert-yellow"
        />
      </button>
    </article>
  );
}
