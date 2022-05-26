import Merch from "../img/merch.png";
import { Button3 } from "./Buttons";

export default function Merchandise() {
  return (
    <article className="flex items-center justify-between w-full h-auto bg-concert-redish text-black ">
      <div className=" w-2/4 p-4 sm:p-8 md:p-12 ">
        <img
          className="border-[2px] border-black object-scale-down w-96"
          src={Merch}
          alt=""
        />
      </div>
      <div className="w-2/4 p-2 md:p-14  ">
        <h1 className="flex flex-col text-[1.3rem] font-acier text-black whitespace-pre sm:text-5xl xs:text-2xl md:text-6xl">
          Merchandise
        </h1>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="text-sm pt-4">
          <Button3 label="GET MERCH" buttonThreeBg="concert-yellow" />
        </div>
      </div>
    </article>
  );
}
