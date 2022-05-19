import { IoMdBeer } from "react-icons/io";
import Content from "../components/Content";
<<<<<<< HEAD
import Stages from "../components/Stages";
=======
import { Button2 } from "../components/Buttons"
import { Link } from "react-router-dom";
>>>>>>> origin/buttons-and-ui-elements

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

          <div className="y-0 flex gap-x-5 py-4">
            <Stages
              bgColor="concert-blue"
              stagesBG="../../images/party2.svg"
              stageName="STAGE 2"
            />
            <Stages
              bgColor="concert-l-green"
              stagesBG="../../images/party3.svg"
              stageName="STAGE 3"
            />
          </div>
        </div>
      </Content>
    </>
  );
}
