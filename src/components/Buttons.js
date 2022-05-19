export function Button1({ label }) {
  return (
    <div
      className={`text-black font-montserrat px-4 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-b-green`}
    >
      {label}
    </div>
  );
}

export function Button2({ label, bgcolor }) {
  return (
    <div
      className={`text-black font-montserrat px-4 py-1 w-fit font-bold border-[3px] border-black text-xl bg-${bgcolor}`}
    >
      {label}
    </div>
  );
}

Button2.defaultProps = {
  bgcolor: "concert-b-green",
  textSize: "xl",
};
