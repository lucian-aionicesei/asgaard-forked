import Content from "../components/Content";
import MerchOffer from "../components/MerchOffer";
import { SeeDetailButton, DetailButton } from "../components/Buttons";
import {useState} from "react"

export default function Shop() {
  return (
    <Content>
      <h1 className="text-7xl font-acier">Shop page</h1>
      <CampContainer />
      <MerchOffer />
    </Content>
  );
}

export function CampContainer({ bgcolor }) {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(false);
  return (
    <div className={`p-4 w-full bg-${bgcolor} text-black`}>
      <h1 className="text-5xl font-acier">CAMPING ACCOMODATION</h1>
      <div className="mx-6 h-36 bg-yellow-50 grid grid-cols-4">
        <img src="./images/camping.jpg" className="h-36" alt=""></img>
        <div className="p-4 ">
          <h2 className="text-2xl">SVERTHEIM</h2>
          <p>Tents available:10</p>
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="mt-7"
          >
            <SeeDetailButton label="See Details" />
          </button>
        </div>
        <div className="p-7">
          <p>299-399 kr</p>
        </div>
        <button
          onClick={() => {
            setDetail(!detail);
          }}
          className="flex justify-end items-end p-2"
        >
          <DetailButton label="Book" />
        </button>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="mx-6 h-28 bg-yellow-50"
        >
          <p className="p-4 text-xl cursor-pointer">
            Svartheim, unlike the Finish Black metal album, is a clean and
            silence camping area. This means all the campers must clean up after
            themselves and no music after 22 p.m.{" "}
          </p>
        </div>
      )}
      {detail && (
        <div
          onClick={() => {
            setDetail(!detail);
          }}
          className="mx-6 py-10 h-42 bg-yellow-50 grid grid-cols-2"
        >
          <div className="flex justify-center">
            <ul className="p-2">
              <li>
                <img src="../images/camping.jpg" className="h-36" alt=""></img>
              </li>
              <li>
                <h2 className="text-xl pt-2">2 Persons Tent</h2>
              </li>
              <li>
                <p className="text-sm p-1">299 kr</p>
              </li>
              <li className="flex place-content-around p-2">
                <SeeDetailButton label="yoooo" className="flex-1" />{" "}
                <SeeDetailButton label="yoooo" className="flex-1" />
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="p-2">
              <li>
                <img src="../images/camping.jpg" className="h-36" alt=""></img>
              </li>
              <li>
                <h2 className="text-xl pt-2">3 Persons Tent</h2>
              </li>
              <li>
                <p className="text-sm p-1">399 kr</p>
              </li>
              <li className="flex place-content-around p-4">
                <SeeDetailButton label="yoooo" className="flex-1" />{" "}
                <SeeDetailButton label="yoooo" className="flex-1" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

CampContainer.defaultProps = {
  bgcolor: "concert-yellow",
};

