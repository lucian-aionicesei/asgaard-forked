import { IoMdBeer } from "react-icons/io";
import Content from "../components/Content";
import Stages from "../components/Stages";
import Passes from "../components/Passes";
import { Button2 } from "../components/Buttons";
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
        <div>
          <div className="py-4">
            <Stages
              bgColor="concert-pink"
              stagesBG="../../images/party1.svg"
              stageName="STAGE 1"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-x-5">
            <Stages
              bgColor="concert-blue"
              stagesBG="../../images/party2.svg"
              stageName="STAGE 2"
            />
            <Stages
              bgColor="concert-b-green"
              stagesBG="../../images/party3.svg"
              stageName="STAGE 3"
            />
          </div>
        </div>
        <div>
          <Passes />
        </div>
      </Content>
    </>
  );
}
