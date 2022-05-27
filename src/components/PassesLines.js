import { SeeDetailButton } from "./Buttons";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import React, { useState } from "react";

export default function PassesLines({
  passName,
  passPrice,
  bgPasses,
  dropText,
}) {
  const [show, setShow] = useState(false);
  return (
    <li className="w-full font-bold">
      <div className="w-full h-16 bg-concert-bg border-[3px] border-black flex">
        <div
          className={`h-full w-10 bg-${bgPasses} border-r-[2px] border-black`}
        ></div>
        <div className="px-3 justify-between w-full flex h-full">
          <div className=" flex text-xs items-center pb-1 space-x-[5vw] sm:text-sm">
            <div className="w-40">
              <h4 className="whitespace-pre text-lg">{`${passName}`}</h4>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                /* className="mt-1 mb-1" */
              >
                <SeeDetailButton label="See Details" />
              </button>
            </div>
            <p className="pr-2 text-base">{`${passPrice}`}</p>
          </div>
          <div className="flex h-full items-center space-x-2">
            <div className="flex items-center h-8 space-x-2 px-1 bg-concert-yellow border-black border-[2px] phone:space-x-5">
              <AiOutlineMinusCircle className="text-xl"/>
              <p>1</p>
              <AiOutlinePlusCircle className="text-xl"/>
            </div>
            <div className="text-[0.3rem] bg-black h-8 text-bold p-1 flex items-center text-white sm:text-xs">
              ADD TO CHART
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="h-auto bg-yellow-50"
        >
          <p className="p-4 text-xs cursor-pointer sm:text-base">
            {`${dropText}`}
          </p>
        </div>
      )}
    </li>
  );
}
