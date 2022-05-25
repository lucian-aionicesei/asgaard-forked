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
    <section className="w-full p-2 font-bold">
      <div className="w-full h-14 bg-concert-bg border-[3px] border-black flex">
        <div
          className={`h-full w-10 bg-${bgPasses} border-r-[2px] border-black`}
        ></div>
        <div className="px-2 justify-between w-full flex h-full">
          <div className="pt-2 flex text-xs items-center pb-1 space-x-[5vw] sm:text-sm">
            <div className="w-28">
              <h4 className="whitespace-pre">{`${passName}`}</h4>

              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="mt-1 mb-1"
              >
                <SeeDetailButton label="See Details" />
              </button>
            </div>
            <p className="pr-2">{`${passPrice}`}</p>
          </div>
          <div className="flex h-full items-center space-x-2">
            <div className="flex items-center h-fit space-x-2 px-1 bg-concert-yellow border-black border-[3px]">
              <AiOutlineMinusCircle />
              <p>1</p>
              <AiOutlinePlusCircle />
            </div>
            <div className="text-xs bg-black h-fit text-bold p-1 text-center text-white">
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
          className="h-28 bg-yellow-50"
        >
          <p className="p-4 text-xs cursor-pointer sm:text-base">
            {`${dropText}`}
          </p>
        </div>
      )}
    </section>
  );
}
