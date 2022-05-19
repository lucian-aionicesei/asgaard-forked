import Content from "../components/Content";
import { Button2 } from "../components/Buttons";
import { Link } from "react-router-dom";

export default function Lineup({ bands }) {
  return (
    <Content>
      <h1 className="text-7xl font-acier">Lineup</h1>
      <Link to="/artist/2">
        <Button2 label="See all artists" bgcolor="concert-pink" />
      </Link>
      <ul className="w-full grid gap-4 grid-cols-3 grid-rows-3 p-4">
        {bands.map((band, index) => (
          <li key={`band#${index}`} className="bg-gray-600 text-white rounded-md p-4">
            {band.name}
          </li>
        ))}
      </ul>
    </Content>
  );
}
