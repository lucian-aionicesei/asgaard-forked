import Content from "../components/Content";
import { Link } from "react-router-dom";

export default function Home() {
  const homePageLineup =
    "Arctic Monkeys | Nothing but thives*Jungle*Futurelands|inhaler*channel*alice meltorn*inhaler*inhale|roosevelt*self esteem*sad night dynamite*self esteem| lea porcelian*Hayes & Y*sad night dynamite*self esteem|lea porcelian*hayes and y*sad night dynamite*self esteem*sad night dynamite|lea porcelian*hayes & y*sad night dynamite*self esteem*sad night dynamite*sad night dynamite";

  return (
    <>
      <header className="mx-8 mb-14 relative">
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
    <article className="font-acier">
      <section>
        {lineupRows.map((row, index) => (
          <li className={`text-${7 - index}xl flex justify-center`}>
            <BandLink bandsString={row} />
          </li>
        ))}
      </section>
    </article>
  );
}

export function BandLink({ bandsString }) {
  const bands = bandsString.split("*");
  console.log(bands);

  return (
    <>
      {bands.map(band => {
         return <Link className="w-fit" to={`artist/${band}`}>{`${band}/`}</Link>
      })}
    </>
  );
}
