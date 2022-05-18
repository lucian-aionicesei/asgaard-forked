import { Link } from "react-router-dom";

export default function Stages({ bgColor, stagesBG, stageName }) {
  return (
    <div
      className={`border-solid border-2 border-indigo-600 w-full items-center bg-${bgColor}`}
    >
      <Link to={"/lineup"}>
        <img
          className="w-full object-cover h-3/4"
          src={`${stagesBG}`} /*"../../images/party1.svg"*/
          alt=""
        ></img>
        <div className="flex w-full h-20 text-center justify-center">
          <h2 className="flex text-white font-acier text-4xl">
            {`${stageName}`}
          </h2>
        </div>
      </Link>
    </div>
  );
}
