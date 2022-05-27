import Content from "../components/Content";

export default function Schedule() {
  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Daily Schedule</h1>
      </div>
      <Content>
        <div>
          <div className="flex flex-row justify-center">
            <div className=" bg-concert-redish px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1">MONDAY</div>
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
          <div className="text-5xl sm:text-7xl font-acier bg-concert-redish flex justify-start py-1 px-1 lg:py-1 px-1 xl:text-[114px] xl:py-1 px-1 text-black">Stage 1</div>
          <div className="bg-concert-redish h-[10rem]">
            <div className="flex flex-row bg-concert-yellowish p-0 ">
              <div className=" bg-concert-yellow px-[0.3rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black flex justify-center items-center mr-1">12 A.M - 02 P.M.</div>
              <div className="flex flex-row">
                <div className=" flex justify-center items-center font-montserrat font-extrabold text-black">SAD NIGHT DYNAMITE</div>
                <div>
                  <div className=" bg-concert-yellow  px-[0.6rem] py-[0.2rem] text-[9px] font-montserrat font-bold 2xl:px-[4.2rem] text-black mb-3 mt-2 mr-1 ml-2">POP</div>
                </div>
                <div>
                  <img src="/public/images/logos/720px-Queen_–_montagem_–_new.png" alt="img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
