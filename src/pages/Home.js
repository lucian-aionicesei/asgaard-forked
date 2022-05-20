import Content from "../components/Content";
import { Link } from "react-router-dom";
const urlSlugMatch = require('url-slug-match');

export default function Home() {
  const homePageLineup =
    "Led Zeppelin * AC/DC | Terminalist * Tool * The Who | The Beatles * Pink Floyd * Queen * Metallica | The Rolling Stones * Guns N' Roses * Nirvana | Black Sabbath * Raised Fist* Refused * Steuber Group * Simonis Inc | Halvorson, Kertzmann and Predovic * Huels, Ratke and Fritsch * A Perfect Circle | Price, Grant and Bechtelar * Erdman - Casper * Nikolaus Inc * Schowalter, Satterfield and O'Reilly";

  return (
    <>
      <header className=" mx-4 phone:mx-8 mb-14 relative">
        <img
          className="w-full object-cover max-h-[30rem]"
          src="./images/concert-main-img.png"
          alt=""
        />
        <div className="text-white absolute top-0 flex flex-col items-center justify-center h-full w-full text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-acier ht-auto">
            20-27 Jul 2022
          </h1>
          <h3 className="text-md sm:text-3xl font-aciersolid lg:text-4xl lg:font-acier">
            #Lorem #Ipsum #Dolor
          </h3>
          <p className="hidden sm:block text-xs sm:text-base lg:text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            <br></br> do eiusmod tempor{" "}
          </p>
        </div>
      </header>
      <Content>
        <HomeLineUp lineUp={homePageLineup} />
      </Content>
    </>
  );
}

// const homePageLineup = "Arctic Monkeys | Nothing but thives*Jungle*Futurelands|inhaler*channel*alice meltorn*inhaler*inhale|roosevelt*self esteem*sad night dynamite*self esteem| lea porcelian*Hayes & Y*sad night dynamite*self esteem|lea porcelian*hayes and y*sad night dynamite*self esteem*sad night dynamite|lea porcelian*hayes & y*sad night dynamite*self esteem*sad night dynamite*sad night dynamite";

// const result = HomeLineUp(homePageLineup);
// console.log(result)

export function HomeLineUp({ lineUp }) {
  const lineupRows = lineUp.split("|");
  console.log(lineupRows);
  return (
    <article className=" font-aciersolid md:font-acier bg-concert-yellow text-black p-8 w-full h h-[30rem]">
      <ul className="grid">
        {lineupRows.map((row, index) => (
          <li className={`text-${7 - index}rem flex justify-center whitespace-normal flex flex-wrap`}>
            <BandLink bandsString={row} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BandLink({ bandsString }) {
  const bands = bandsString.split("*");
  console.log(bands);

  return (
    <>
      {bands.map(band => {
         return <Link className="w-fit hover:bg-concert-pink md:hover:font-aciersolid" to={`artist/${urlSlugMatch(band.trim())}`}>{`${band.trim()} /`}</Link>
      })}
    </>
  );
}
