import PassesLines from "./PassesLines";

export default function Passes() {
  return (
    <article className="w-full h-auto bg-concert-pink text-black ">
      <h1 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h1>
      <PassesLines
        passName="GENERAL ACCESS"
        passPrice="140$"
        bgPasses="concert-l-green"
        dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />

      <PassesLines
        passName="VIP"
        passPrice="140$"
        bgPasses="concert-yellowish"
        dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
      <PassesLines
        passName="PREMIUM PASS"
        passPrice="140$"
        bgPasses="concert-redish"
        dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
      <PassesLines
        passName="DAY PASS"
        passPrice="50$"
        bgPasses="concert-red-dark"
        dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
      <PassesLines
        passName="3 DAY PASS"
        passPrice="120$"
        bgPasses="concert-b-green"
        dropText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
    </article>
  );
}
