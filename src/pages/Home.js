import { IoMdBeer } from "react-icons/io";
import Content from "../components/Content";
import { Button2 } from "../components/Buttons"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="mx-8 mb-14">
        <h1 className="text-7xl flex items-center font-acier block px-1">
          Home page <IoMdBeer />
        </h1>
        <Link to={"/lineup"}>
          <Button2 bgcolor="concert-pink" label="See all arstists" />
        </Link>
      </header>
      <Content>
        <div>This is the content</div>
      </Content>
    </>
  );
}
