import { Button3 } from "./Buttons";

export default function ThisIsUs() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-yellow text-black ">
      <h1 className="pt-8 font-acier text-5xl text-black whitespace-pre sm:text-5xl md:text-6xl">
        THIS IS US
      </h1>
      <div className="text-base md:text-xl 2xl:text-2xl p-8 px-16 align-center">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex space-x-2 pb-8 pt-2">
        <div className="text-sm">
          <Button3 label="SEE ALL ARTISTS" buttonThreeBg="concert-l-green" />
        </div>
        <div className="text-sm">
          <Button3 label="DAILY SCHEDULE" buttonThreeBg="concert-yellow" />
        </div>
      </div>
    </article>
  );
}
