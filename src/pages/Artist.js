import Content from "../components/Content";
import { useParams } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";
import { Button2 } from "../components/Buttons";

export default function Artist({ bands }) {
  let { id } = useParams();

  const MakeIDCapialLetter = id
    .toLowerCase()
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  console.log(bands);

  bands.map((band) => {
    // console.log(band);
    if (band.name == MakeIDCapialLetter) {
      console.log(band);
      return band;
    }
  });
  // console.log(newArray);

  // console.log("this is the new one :", newArray[0]);

  return (
    <Content>
      <CheckingBandPage bands={bands} />
      <div className="flex justify-center items-center ">
        <div className="w-2/3 lg:w-3/4 xl:w-4/5 ">
          <h1 className="text-2xl font-acier text-center xl:text-7xl">this is {MakeIDCapialLetter}</h1>
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex justify-center items-center text-black font-montserrat px-8 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2 lg:text-4xl">POP</div>
            </div>
            <div className="flex flex-row ">
              <BsInstagram />
              <BsSpotify />
              <ImSoundcloud />
            </div>
            <div className="border-t-4 border-concert-yellow">STAGE 1</div>
          </div>
          <div>
            <img></img>
          </div>
          <div>Spotify</div>
          <div>
            <section>
              <p>
                Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
              </p>
              <p>
                Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-pink flex justify-center py-2 px-2 lg:py-2 px-2 xl:text-[114px] xl:py-1 px-1">Jotunheim</h2>
      </div>
    </Content>
  );
}

function CheckingBandPage({ bands }) {
  console.log(bands);
}
