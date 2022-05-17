import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-black text-white">
      <nav className="font-bold text-lg">
          <div className="bg-concert-yellow text-black flex h-16 justify-between items-center">
              <p>20-27 JUL / <span>DARUPVEJ 4000 ROSKILDE</span></p>
              <ul className="flex space-x-1.5">
                  <li><Link to={"/account"}>ACCOUNT</Link></li>
                  <li><span>EN</span>/<span>DK</span></li>
              </ul>
          </div>
      </nav>
      <nav className="flex justify-around">
        <Link to={"/"} className="font-montserrat font-bold">Home</Link>
        <Link to={"/lineup"}>Lineup</Link>
        <Link to={"/artist"}>Artist</Link>
        <Link to={"/schedule"}>Schedule</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/purchases"}>Purchase</Link>
        <Link to={"/account"}>Account</Link>
      </nav>
    </div>
  );
}
