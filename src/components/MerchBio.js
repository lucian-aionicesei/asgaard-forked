import Tent from "../img/tent.png";
import { Button3 } from "./Buttons";

export default function MerchBio() {
  return (
    <article className="flex items-center justify-between w-full h-auto bg-concert-yellow text-black ">
      <div className="w-2/4 p-8 md:p-14  ">
        <h1 className="flex flex-col font-acier text-3xl text-black whitespace-pre sm:text-5xl md:text-6xl">
          GET HERE <br />
          STAY HERE
        </h1>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="text-sm pt-4">
          <Button3 label="SEE ALL CAMPS" buttonThreeBg="concert-redish" />
        </div>
      </div>
      <div className="w-2/4 p-4 sm:p-8 md:p-12 ">
        <img className="object-scale-down w-96" src={Tent} alt="" />
      </div>
    </article>
  );
}
