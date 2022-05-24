import PassesLines from "./PassesLines";

export default function Passes() {
  return (
    <article className="w-full h-auto bg-concert-pink text-black ">
      <h1 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h1>
      <PassesLines
        passName="GENERAL ACCESS"
        passPrice="140$"
        bgPasses="concert-l-green"
      />

      <PassesLines
        passName="VIP"
        passPrice="140$"
        bgPasses="concert-yellowish"
      />
      <PassesLines
        passName="PREMIUM PASS"
        passPrice="140$"
        bgPasses="concert-redish"
      />
      <PassesLines
        passName="DAY PASS"
        passPrice="50$"
        bgPasses="concert-red-dark"
      />
      <PassesLines
        passName="3 DAY PASS"
        passPrice="120$"
        bgPasses="concert-b-green"
      />
    </article>
  );
}
