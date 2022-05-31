import Content from "../components/Content";
import useFetch from "../hooks/useFetch";
import { Button2 } from "../components/Buttons";
import { useState } from "react";
import { _colorStringFilter } from "gsap/gsap-core";
const urlSlugMatch = require("url-slug-match");

export default function Schedule({ bands }) {
  //
  let stageMidgard;
  let stageVanaheim;
  let stageJotunheim;
  //

  let FindMidgardAct = [];
  let DisplayMidgard = [];
  let RealMidgardAct = [];
  //
  //
  //
  //
  //
  //
  //
  //
  let thisBand;
  let BandMidgard;
  //
  let updatedBandList = [];
  let updatedMidgardList = [];
  //

  let newItems;
  let MidgardNew = [];
  let mihai;
  //
  //
  //
  //
  //
  //

  // console.log(bands);

  let DaysOfTheWeek = ["Monday", "Tuesday", "Wednsaday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [day, setDay] = useState(0);
  // const { bandData } = useFetch;

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  if (data) {
    const dataArray = Object.values(data);
    stageMidgard = Object.values(dataArray[0]);
    stageVanaheim = Object.values(dataArray[1]);
    stageJotunheim = Object.values(dataArray[2]);

    data &&
      stageMidgard[day].map((act) => {
        act.act !== "break" && (FindMidgardAct = [...FindMidgardAct, act.act]);
      });

    data &&
      FindMidgardAct.map((actMidgard) => {
        // console.log(actMidgard);
        const thisBand = bands.find((elem) => elem.name === actMidgard);
        DisplayMidgard = [...DisplayMidgard, thisBand];
      });

    stageMidgard[day].map((act) => {
      act.act !== "break" && (RealMidgardAct = [...RealMidgardAct, act]);
    });

    console.log(`${day}`, DisplayMidgard);
    console.log(`${day}`, RealMidgardAct);

    // RealMidgardAct.map((act) => {
    //   newItems = act;
    //   // const band = {
    //   //   imgLogo: "",
    //   //   genre: ""
    //   // }
    //   if (DisplayMidgard.find((band) => band.name === act.act)) {
    //     newItems.img = band.logo;
    //     newItems.genre = band.genre;
    //     console.log(newItems);
    //   }
    //   // if (userCart.find((cartItem) => cartItem.id === ticket.id)) {
    //   //   // console.log("Item already added");
    //   //   setUserCart((old) =>
    //   //     old.map((item) => {
    //   //       if (item.id === ticket.id) {
    //   //         const copy = { ...item };
    //   //         copy.quantity = copy.quantity + ticket.quantity;
    //   //         return copy;
    //   //       } else {
    //   //         return item;
    //   //       }
    //   //     })
    //   //   );
    //   // } else {
    //   //   setUserCart((oldArray) => [...oldArray, ticket]);
    //   // }
    // });

    // console.log(`${day}`, stageMidgard[0]);

    // data &&
    //   stageMidgard[day].map((band) => {
    //     if (band.act !== "break") return (thisBand = band);
    //     thisBand.id = thisBand.act;
    //     updatedBandList = [...updatedBandList, thisBand];
    //     // console.log(updatedBandList);
    //   });

    // DisplayMidgard.map((artist) => {
    //   BandMidgard = artist;
    //   // BandMidgard.id = artist.name;
    //   updatedMidgardList = [...updatedMidgardList, BandMidgard];
    //   // console.log(BandMidgard);
    // });

    // console.log(thisBand);

    // stageVanaheim.map((dayVanaheim) => {
    //   dayVanaheim = Object.values(dayVanaheim);
    // });

    // stageJotunheim.map((dayJotunheim) => {
    //   dayJotunheim = Object.values(dayJotunheim);
    // });
  }

  function handleClick(value) {
    setDay(value);
  }

  // bands.map((band) => {
  //   // console.log(band);
  //   let thisBand = bands.find((elem) => elem.name === stageMidgard[0].act);
  //   console.log(thisBand);
  // });

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Daily Schedule</h1>
      </div>
      <Content>
        <>
          <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-acier  hover:font-aciersolid bg-concert-redish  flex justify-center py-1  lg:py-1   xl:py-2 text-black">{DaysOfTheWeek[day]}</h1>
          </div>
          <div className="w-full sticky top-[6rem] z-0 bg-black">
            <div className=" flex flex-row justify-center flex-wrap">
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 0 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={0}
                onClick={(event) => handleClick(event.target.value)}
              >
                MONDAY
              </button>
              <button
                id="1"
                value={1}
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 1 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                onClick={(event) => handleClick(event.target.value)}
              >
                TUESDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 2 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={2}
                onClick={(event) => handleClick(event.target.value)}
              >
                WEDNESDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 3 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={3}
                onClick={(event) => handleClick(event.target.value)}
              >
                THURSDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 4 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={4}
                onClick={(event) => handleClick(event.target.value)}
              >
                FRIDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 5 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={5}
                onClick={(event) => handleClick(event.target.value)}
              >
                SATURDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day == 6 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={6}
                onClick={(event) => handleClick(event.target.value)}
              >
                SUNDAY
              </button>
            </div>
          </div>
          <div id="main">
            <div className=" text-5xl sm:text-7xl font-acier bg-concert-redish flex justify-center py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Midgard Stage</div>
            <div className="bg-concert-redish h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem] ">
              {
                // stageMidgard[day].map((act) => {
                //   if (act.act !== "break")
                //     DisplayMidgard.map((band) => {
                //       console.log(act.act);
                //       console.log(band.logo);
                //     });
                // });

                data &&
                  day != null &&
                  stageMidgard[day].map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                          <div className="flex flex-col items-center md:flex-row md:">
                            <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1 xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black font-extrabold">
                              {act.start}A.M - {act.end} P.M.
                            </div>
                            <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">{act.act}</div>
                          </div>
                          <div className="flex flex-col justify-between md:flex-row ">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow  px-[1.4rem] py-[0.1rem] mx-2 text-[12px] m-[0.5rem]   lg:text-[13px] xl:text-[16px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                                POP
                              </div>
                            </div>
                            <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                              {/* <img src={band.logo} className="object-cover w-[100%]  h-[10rem] md:h-[7.8rem] md:w-[12rem] lg:h-[8.9rem] lg:w-[15rem] xl:h-[10.9rem] xl:w-[20rem]" alt={band.name}></img> */}
                            </div>
                          </div>
                        </div>
                      );

                    // return (
                    //   <div className="h-[5rem] md:h-[6rem]">
                    //     <div className="flex flex-row justify-center items-center bg-concert-redish p-2  border-[3px] border-b-[0px]  border-black h-[5rem] md:h-[6rem]  ">
                    //       <div>
                    //         <div className="font-montserrat font-extrabold text-black ">BREAK</div>
                    //       </div>
                    //     </div>
                    //   </div>
                    // );
                  })
              }
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-b-green flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Vanaheim Stage</div>
              <div className="bg-concert-b-green h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem] ">
                {data &&
                  day != null &&
                  stageVanaheim[day].map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                          <div className="flex flex-col items-center md:flex-row md:">
                            <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1 xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black font-extrabold">
                              {act.start}A.M - {act.end} P.M.
                            </div>
                            <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">{act.act}</div>
                          </div>
                          <div className="flex flex-col justify-between md:flex-row ">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow  px-[1.4rem] py-[0.1rem] mx-2 text-[12px] m-[0.5rem]   lg:text-[13px] xl:text-[16px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                                POP
                              </div>
                            </div>
                            <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                              <img
                                src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`}
                                className="object-cover w-[100%]  h-[10rem] md:h-[7.8rem] md:w-[12rem] lg:h-[8.9rem] lg:w-[15rem] xl:h-[10.9rem] xl:w-[20rem]"
                                alt="this"
                              ></img>
                            </div>
                          </div>
                        </div>
                      );
                    // return (
                    //   <div>
                    //     <div className="flex flex-row justify-center items-center bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                    //       <div>
                    //         <div className="font-montserrat font-extrabold text-slate-400">BREAK</div>
                    //       </div>
                    //     </div>
                    //   </div>
                    // );
                  })}
              </div>
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-blue flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Jotunheim Stage</div>
              <div className="bg-concert-blue h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem]">
                {data &&
                  day != null &&
                  stageJotunheim[day].map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                          <div className="flex flex-col items-center md:flex-row md:">
                            <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1 xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black font-extrabold">
                              {act.start}A.M - {act.end} P.M.
                            </div>
                            <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">{act.act}</div>
                          </div>
                          <div className="flex flex-col justify-between md:flex-row ">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow  px-[1.4rem] py-[0.1rem] mx-2 text-[12px] m-[0.5rem]   lg:text-[13px] xl:text-[16px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                                POP
                              </div>
                            </div>
                            <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                              <img
                                src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`}
                                className="object-cover w-[100%]  h-[10rem] md:h-[7.8rem] md:w-[12rem] lg:h-[8.9rem] lg:w-[15rem] xl:h-[10.9rem] xl:w-[20rem]"
                                alt="this"
                              ></img>
                            </div>
                          </div>
                        </div>
                      );
                    // return (
                    //   <div>
                    //     <div className="flex flex-row justify-center items-center bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                    //       <div>
                    //         <div className="font-montserrat font-extrabold text-slate-400">BREAK</div>
                    //       </div>
                    //     </div>
                    //   </div>
                    // );
                  })}
              </div>
            </div>
          </div>
        </>
      </Content>
    </div>
  );
}
