export default function Content(props) {
  return <main className="bg-black px-4 phone:px-8 xl:w-[80%] lg:w-[85%] mx-auto text-concert-yellow space-y-16">{props.children}</main>;
}
