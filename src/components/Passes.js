export default function Passes() {
  return (
    <div className="w-full h-96 bg-concert-pink">
      <h3 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h3>
      <div className="flex box-border flex-col gap-6 pl-12 pr-10">
        <div className="flex h-14 w-full bg-white border-[3px] border-black">
          <div className="flex top-0 left-0 right-0 bottom-0 h-auto w-10 bg-concert-l-green border-r-[2px] border-black"></div>
          <div className="flex items-center place-around">
            <div className="pl-2 text-black font-bold">GENERAL ACCES</div>
            <div className="pl-10 pr-10 text-black font-bold">140$</div>
            <div className="flex pr-0">
              <div className="flex justify-center ml-auto mr-5 justify-around items-center text-center w-20 h-3/5 bg-concert-yellow border-black border-[2px]">
                <div className="w-4 h-3/5 bg-concert-yellow border-black border-[1px] rounded-full"></div>
                <div className="align-middle text-black">1</div>
                <div className="w-4 h-3/5 bg-concert-yellow border-black border-[1px] rounded-full"></div>
              </div>
              <div className="flex items-center w-26 h-3/5 bg-black">
                <div className="text-bold text-xs p-1 text-center text-white">
                  ADD TO CHART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-5/6 h-14 bg-white border-[3px] border-black">
          <div>GENRERAL ACCES</div>
          <div> 140</div>
          <div>Button</div>
          <div>Button</div>
        </div>
        <div className="flex w-5/6 h-14 bg-white border-[3px] border-black">
          <div>GENRERAL ACCES</div>
          <div> 140</div>
          <div>Button</div>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
}
