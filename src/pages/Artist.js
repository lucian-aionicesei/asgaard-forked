import Content from "../components/Content";
import { useParams } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";
import { Button2 } from "../components/Buttons";
// import { CheckingBands } from "./Lineup";
import { Link, useLocation } from "react-router-dom";
const urlSlugMatch = require("url-slug-match");

export default function Artist({ bands }) {
  let { id } = useParams();
  const thisBand = bands.find((elem) => elem.id === id);
  console.log(bands);
  console.log(thisBand);

  const NewArrayBands = [bands];
  const MakeIDCapialLetter = id
    .toLowerCase()
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  console.log(bands);

  // bands.map((band) => {
  //   if (band.name == MakeIDCapialLetter) {
  //     console.log(band);
  //     return band;
  //   }
  // });

  return (
    <Content>
      {/* <CheckingBandPage bands={bands} /> */}
      <div className="flex justify-center items-center pt-[4rem] ">
        <div className="w-[95%] sm:w-[90%]  lg:w-3/4 xl:w-[70%]  shadow-[0_4px_80px_35px_rgba(251,206,48,0.25)]">
          <h1 className="font-aciersolid  text-2xl lg:font-acier text-center py-4 hover:font-aciersolid  xl:text-8xl border-[2px] border-b-[0px] border-concert-yellow bg-concert-pink text-black "> {MakeIDCapialLetter}</h1>
          <div className=" p-2  flex flex-row justify-between border-[2px] border-concert-yellow lg:p-4 xl:p-4 2xl:p-6">
            <div className="flex justify-center items-center">
              <div className="px-3 sm:px-4 flex justify-center items-center text-black font-aciersolid lg:px-14 py-1 w-fit font-bold border-[3px] border-black text-lg bg-concert-yellow mr-2 2xl:text-4xl tracking-widest">{thisBand.genre}</div>
            </div>
            <div className=" flex flex-row  items-center m-2 w-[38%]  ">
              <BsInstagram size={32} className="mr-8 text-concert-pink size={40}" />
              <BsSpotify size={32} className="mr-8 text-concert-pink" />
              <ImSoundcloud size={48} className="mr-8 text-concert-pink" />
            </div>
            <div className=" text-xl flex items-center font-acier text-concert-pink xl:text-5xl p-2">STAGE 1</div>
          </div>
          <div>
            <div className="h-[17rem] lg:h-[30rem] border-[2px] border-b-[0px] border-t-[0px] border-concert-yellow ">
              <CheckingBands bgColor="concert-blue" band={thisBand} />
            </div>
          </div>
          <div className="border-[2px] border-b-[0px] border-concert-yellow flex items-center justify-center p-8">
            <div className="w-[70%] bg-concert-pink text-center h-20 flex items-center justify-center xl:text-4xl font-aciersolid text-black">SPOTIFY</div>
          </div>
          <div className="">
            <section>
              <p className="border-[2px] border-concert-yellow p-8 text-montserrat xl:text-2xl xl:font-semibold xl:leading-loose">{thisBand.bio}</p>
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

// function CheckingBandPage({ bands }) {
//   console.log(bands);
// }

function CheckingBands({ band, bgColor }) {
  console.log(band);
  if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
    return <ImgJPG band={band} bgColor={bgColor} />;
  }
  return <ImgSVG band={band} bgColor={bgColor} />;
}

function ImgJPG({ band, bgColor }) {
  return (
    <div className="h-[17rem] lg:h-[30rem] ">
      {console.log(`public/images/logos/${band.logo}`)}
      <img src={`/images/logos/${band.logo}`} className="object-cover w-full  h-[17rem] lg:h-[30rem]" alt={band.name}></img>
    </div>
  );
}

function ImgSVG({ band, bgColor }) {
  return (
    <div className="h-[17rem] lg:h-[30rem] ">
      <img src={band.logo} className="object-cover w-full  h-[17rem] lg:h-[30rem]" alt={band.name}></img>
    </div>
  );
}
