import { Button3 } from "./Buttons";

export default function LogoComp() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-l-green text-black ">
      <div className="flex flex-col mb-8 pt-4">
        <span className="font-acier text-5xl font-extralight mb-0">Asgård</span>
        <span className="font-bold p-0">FESTIVAL</span>
      </div>
      <div className="flex space-x-2 pb-8 pt-2">
        <div className="text-sm">
          <Button3 label="HOME" buttonThreeBg="concert-yellow" />
        </div>
        <div className="text-sm">
          <Button3 label="CONTACT" buttonThreeBg="concert-redish" />
        </div>
      </div>
    </article>
  );
}
