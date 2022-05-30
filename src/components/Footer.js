import { Link } from "react-router-dom";
import { Button2 } from "../components/Buttons";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-concert-yellow p-24 ">
      <div className="flex flex-col justify-center items-center g-10 font-bold text-lg border-t-[2px] border-concert-yellow pt-8 md: grid-flow-col gap-4  lg:flex-row justify-between leading-8 xl: 2xl: ">
        <ul className="sm:m-1">
          <li className="">
            <Link to={"/"} className="text-base leading-extra-loose">
              <div className="flex flex-col mb-8">
                <span className="font-acier text-5xl font-extralight mb-0">Asgård</span>
                <span> FESTIVAL</span>
              </div>
            </Link>
          </li>
        </ul>

        <ul className="mt-2 mb-2 md:mt-0 mb-0">
          <a href="#">
            <li>Rules & Regulations</li>
          </a>
          <a href="#">
            <li>Terms of use</li>
          </a>
          <a href="#">
            <li>Privacy Policy</li>
          </a>
        </ul>

        <ul className="mt-2 mb-2 md:mt-0 mb-0">
          <a href="#">
            <li>Summer Well Shop</li>
          </a>
          <a href="#">
            <li>Delete personal data</li>
          </a>
          <a href="#">
            <li>ANPC</li>
          </a>
        </ul>

        <div className="mt-2 mb-2 md:mt-0 mb-0 ">
          <h3 className="font-acier font-normal text-3xl">NEWSLETTER</h3>
          <input className="text-black"></input>
            <Button2 label="SUBSCRIBE" bgcolor="concert-pink" />
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center lg:items-start">
        <p className=" font-bold text-[12px] lg:text-base ">Copyright © DRAGO Advertising SRL, Reg. Com. J40/7643/2003 </p>
      </div>
    </footer>
  );
}
