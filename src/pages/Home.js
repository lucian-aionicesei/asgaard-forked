import { IoMdBeer } from "react-icons/io";
import Content from "../components/Content";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-7xl flex items-center font-acier block px-1">
          Home page <IoMdBeer />
        </h1>
      </header>
      <Content>
          <div>This is the content</div>
      </Content>
    </>
  );
}
