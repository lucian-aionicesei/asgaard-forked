import Content from "../components/Content";
import useFetch from "../hooks/useFetch";
import { Button2 } from "../components/Buttons";
import { useState } from "react";
const urlSlugMatch = require("url-slug-match");

export default function Schedule() {
  //
  let stageMidgard;
  let stageVanaheim;
  let stageJotunheim;
  //

  let DaysOfTheWeek = ["Monday", "Tuesday", "Wednsaday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [day, setDay] = useState();
  const { bandData } = useFetch;

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  if (data) {
    const dataArray = Object.values(data);
    stageMidgard = Object.values(dataArray[0]);
    stageVanaheim = Object.values(dataArray[1]);
    stageJotunheim = Object.values(dataArray[2]);

    // stageMidgard.map((OneDay) => {
    //   dayMidgard = Object.values(OneDay);
    // });

    // stageVanaheim.map((dayVanaheim) => {
    //   dayVanaheim = Object.values(dayVanaheim);
    // });

    // stageJotunheim.map((dayJotunheim) => {
    //   dayJotunheim = Object.values(dayJotunheim);
    // });

    // async function getBands() {
    //   const res = await fetch("https://the-javascript-bar-project.herokuapp.com/bands");
    //   const bandData = await res.json();
    //   if (bandData) {
    //     console.log(bandData);

    //     // bandData.map((actName) => {
    //     //   const ActImageMidgard = bandData.find((elem) => elem.name === actName);
    //     //   DisplayMidgard = [...DisplayMidgard, ActImageMidgard];
    //     // });
    //     // console.log(DisplayMidgard);
    //   }
    // }
    // getBands();
  }

  function handleClick(value) {
    // console.log(value);
    setDay(value);
  }

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Daily Schedule</h1>
      </div>
      <Content>
        <div>
          <div className="w-full sticky top-[6rem] z-10 bg-black">
            <div className="flex flex-row justify-center">
              <button
                className=" bg-concert-redish px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={0}
                onClick={(event) => handleClick(event.target.value)}
              >
                MONDAY
              </button>
              <button
                className=" bg-concert-redish px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={1}
                onClick={(event) => handleClick(event.target.value)}
              >
                TUESDAY
              </button>
              <button
                className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={2}
                onClick={(event) => handleClick(event.target.value)}
              >
                WEDNSDAY
              </button>
              <button
                className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={3}
                onClick={(event) => handleClick(event.target.value)}
              >
                THURSDAY
              </button>
              <button
                className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={4}
                onClick={(event) => handleClick(event.target.value)}
              >
                FRIDAY
              </button>
              <button
                className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={5}
                onClick={(event) => handleClick(event.target.value)}
              >
                SATURDAY
              </button>
              <button
                className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px]  border-concert-redish"
                value={6}
                onClick={(event) => handleClick(event.target.value)}
              >
                SUNDAY
              </button>
            </div>
            <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
              <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-1 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10 text-black">{DaysOfTheWeek[day]}</h1>
            </div>
          </div>

          <div id="main">
            <div className="text-5xl sm:text-7xl font-acier bg-concert-redish flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Midgard Stage</div>
            <div className="bg-concert-redish h-[38rem] p-3">
              {data &&
                day != null &&
                stageMidgard[day].map((act) => {
                  if (act.act !== "break")
                    return (
                      <div className="flex flex-row  justify-between bg-concert-yellowish p-0 border-[3px] border-b-[0px] border-black ">
                        <div className=" bg-concert-yellow   text-[10px] w-[130px] font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-l-[0px] border-black font-extrabold">
                          {act.start}A.M - {act.end} P.M.
                        </div>

                        <div className=" flex justify-center items-center  font-montserrat font-extrabold text-black text-[14px]">{act.act}</div>
                        <div className="flex flex-row justify-between">
                          <div className="flex justify-center items-center ">
                            <div className="  bg-concert-yellow  px-[0.4rem] py-[0.1rem] mx-2 text-[9px]  font-montserrat font-black  text-black border-[3px]  border-black ">POP</div>
                          </div>
                          <div>
                            <img src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`} className="object-cover  w-[5.7rem]  h-[2.9rem]" alt="this"></img>
                          </div>
                        </div>
                      </div>
                    );
                  return (
                    <div>
                      <div className="flex flex-row justify-center items-center bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                        <div>
                          <div className="font-montserrat font-extrabold text-slate-400">BREAK</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-b-green flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Vanaheim Stage</div>
              <div className="bg-concert-b-green h-[38rem] p-3">
                {data &&
                  day != null &&
                  stageVanaheim[day].map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-row  justify-between bg-concert-yellowish p-0 border-[3px] border-b-[0px] border-black ">
                          <div className=" bg-concert-yellow   text-[10px] w-[130px] font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-l-[0px] border-black font-extrabold">
                            {act.start}A.M - {act.end} P.M.
                          </div>

                          <div className=" flex justify-center items-center  font-montserrat font-extrabold text-black text-[14px]">{act.act}</div>
                          <div className="flex flex-row justify-between">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow  px-[0.4rem] py-[0.1rem] mx-2 text-[9px]  font-montserrat font-black  text-black border-[3px]  border-black ">POP</div>
                            </div>
                            <div>
                              <img src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`} className="object-cover  w-[5.7rem]  h-[2.9rem]" alt="this"></img>
                            </div>
                          </div>
                        </div>
                      );
                    return (
                      <div>
                        <div className="flex flex-row justify-center items-center bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                          <div>
                            <div className="font-montserrat font-extrabold text-slate-400">BREAK</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-blue flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Jotunheim Stage</div>
              <div className="bg-concert-blue h-[38rem] p-3">
                {data &&
                  day != null &&
                  stageJotunheim[day].map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-row  justify-between bg-concert-yellowish p-0 border-[3px] border-b-[0px] border-black ">
                          <div className=" bg-concert-yellow   text-[10px] w-[130px] font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-l-[0px] border-black font-extrabold">
                            {act.start}A.M - {act.end} P.M.
                          </div>

                          <div className=" flex justify-center items-center  font-montserrat font-extrabold text-black text-[14px]">{act.act}</div>
                          <div className="flex flex-row justify-between">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow  px-[0.4rem] py-[0.1rem] mx-2 text-[9px]  font-montserrat font-black  text-black border-[3px]  border-black ">POP</div>
                            </div>
                            <div>
                              <img src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`} className="object-cover  w-[5.7rem]  h-[2.9rem]" alt="this"></img>
                            </div>
                          </div>
                        </div>
                      );
                    return (
                      <div>
                        <div className="flex flex-row justify-center items-center bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                          <div>
                            <div className="font-montserrat font-extrabold text-slate-400">BREAK</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
