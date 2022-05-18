import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button1 } from "./Buttons";

export default function Header() {
  return (
    <div className="w-full bg-black text-white">
      <nav className="font-bold text-lg">
        <div className="bg-concert-yellow text-black flex h-16 justify-between items-center px-8">
          <p>
            20-27 JUL / <span>DARUPVEJ 4000 ROSKILDE</span>
          </p>
          <ul className="flex space-x-8">
            <li>
              <Link to={"/account"}>ACCOUNT</Link>
            </li>
            <li>
              <span>EN</span>/<span>DK</span>
            </li>
          </ul>
        </div>
        <div className="text-concert-yellow px-8 py-3 h-26 flex items-end justify-between">
          <ul className="flex items-end space-x-12">
            <li>
              <Link to={"/"} className="text-xl">
                <span className="font-acier text-5.5xl font-extralight">
                  Asgård
                </span>
                <br /> FESTIVAL{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                className="underline decoration-2 leading-8 underline-offset-4"
              >
                Book
              </Link>
            </li>
            <li>
              <Link
                to={"/lineup"}
                className="decoration-2 leading-8 underline-offset-4"
              >
                Lineup
              </Link>
            </li>
          </ul>
          <div className="flex items-center leading-8 space-x-12">
            <Link to={"/shop"}>
              <Button1 label="Buy ticket" />
            </Link>
            <Link to={"/purchases"}>
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
      {/* <nav className="flex justify-around bg-gray-500">
        <Link to={"/"} className="font-montserrat font-bold">Home</Link>
        <Link to={"/lineup"}>Lineup</Link>
        <Link to={"/artist"}>Artist</Link>
        <Link to={"/schedule"}>Schedule</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/purchases"}>Purchase</Link>
        <Link to={"/account"}>Account</Link>
      </nav> */}
    </div>
  );
}
