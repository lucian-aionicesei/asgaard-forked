import { IoMdBeer } from "react-icons/io";
import Content from "../components/Content";
import { Button2 } from "../components/Buttons"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="mx-8 mb-14 relative">
        <img className="w-full object-cover max-h-[30rem]" src="./images/concert-main-img.png" alt="" />
        <div className="text-white absolute top-0 flex flex-col items-center justify-center h-full w-full text-center space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-acier ht-auto">20-27 Jul 2022</h1>
          <h3 className="text-xl sm:text-3xl font-aciersolid lg:text-4xl lg:font-acier">#Lorem #Ipsum #Dolor</h3>
          <p className="hidden sm:block text-xs sm:text-base lg:text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br> do eiusmod tempor </p>
        </div>
      </header>
      <Content>
        <div>This is the content</div>
      </Content>
    </>
  );
}
