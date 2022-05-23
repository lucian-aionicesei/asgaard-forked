import { Link } from "react-router-dom";

export default function Stages({ bgColor, stagesBG, stageName }) {
  return (
    <div className={`bg-${bgColor} w-full items-center`}>
      <Link to={"/lineup"}>
        <img
          className="row-span-3 w-full object-cover"
          src={`${stagesBG}`} /*"../../images/party1.svg"*/
          alt=""
        ></img>
        <div className="flex w-full h-auto text-center justify-center items-center">
          <h2 className="flex text-white font-acier text-4xl p-">
            {`${stageName}`}
          </h2>
        </div>
      </Link>
    </div>
  );
}
