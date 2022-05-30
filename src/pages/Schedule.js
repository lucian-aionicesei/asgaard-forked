import Content from "../components/Content";
import useFetch from "../hooks/useFetch";

export default function Schedule() {
  let mondayMidgard;
  let actMidgard;

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  if (data) {
    const dataArray = Object.values(data);
    const stageMidgard = Object.values(dataArray[0]);
    // const stageVanaheim = Object.values(dataArray[1]);
    // const stageJotunheim = Object.values(dataArray[2]);

    console.log(data);
    console.log(stageMidgard);
    stageMidgard.map((dayMidgard) => {
      actMidgard = Object.values(dayMidgard);
    });

    // stageVanaheim.map((dayMidgard) => {
    //   actMidgard = Object.values(dayMidgard);
    //   console.log(actMidgard);
    // });
  }

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Daily Schedule</h1>
      </div>
      <Content>
        {console.log(actMidgard)}
        <div>
          <div className="flex flex-row justify-center">
            <div className=" bg-concert-redish px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 ">MONDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">TUESDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">WEDNSDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">THURSDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">FRIDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">SATURDAY</div>
            <div className=" bg-concert-redish  px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">SUNDAY</div>
          </div>
          <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
            <h1 className="text-5xl sm:text-7xl font-acier bg-concert-redish flex justify-center py-1 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10 text-black">MONDAY</h1>
          </div>

          <div className="text-5xl sm:text-7xl font-acier bg-concert-redish flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black border-b-[3px] border-black">Midgard</div>

          <div className="bg-concert-redish h-[42rem] p-3">
            <div className="p-3">
              {/* <div className="flex flex-row  justify-between bg-concert-yellowish p-0 border-[3px] border-b-[0px] border-black ">
                <div className=" bg-concert-yellow px-[0.3rem] py-[0.1rem] text-[10px] font-montserrat font-bold 2xl:px-[4.2rem] text-black flex justify-center items-center mr-1 border-x-[3px] border-l-[0px] border-black font-extrabold">
                  12 A.M - 02 P.M.
                </div>
                <div className="flex flex-row">
                  <div className=" flex justify-center items-center font-montserrat font-extrabold text-black text-[14px]">SAD NIGHT DYNAMITE</div>
                  <div className="flex justify-center items-center ">
                    <div className="  bg-concert-yellow  px-[0.4rem] py-[0.1rem] mx-2 text-[9px]  font-montserrat font-black  text-black border-[3px]  border-black ">POP</div>
                  </div>
                  <div>
                    <img src={`./images/logos/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG`} className="object-cover  w-[5.7rem]  h-[2.9rem]" alt="this"></img>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex flex-row bg-concert-yellowish p-2  border-[3px] border-b-[0px] border-black ">
                <div className="flex flex-row">
                  <div className=" flex justify-center items-center font-montserrat font-extrabold text-black">BREAK</div>
                </div>
              </div> */}
            </div>

            {data &&
              actMidgard.map((act, index) => (
                <div key={`act#${index}`}>
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
                </div>
              ))}
          </div>
        </div>
      </Content>
    </div>
  );
}
