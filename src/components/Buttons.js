export function Button1({ label, bgcolor }) {
  return (
    <div
      className={`bg-${bgcolor} text-black font-montserrat px-4 w-fit font-bold border-[3px] border-black text-xl`}
    >
      {label}
    </div>
  );
}

Button1.defaultProps = {
  bgcolor: "concert-b-green",
};
