import Content from "../components/Content";
import { useParams } from "react-router-dom";

export default function Artist({ bands }) {
  let { id } = useParams();
  console.log(id);

  return (
    <Content>
      <h1 className="text-7xl font-acier">this is {id.trim()}</h1>
    </Content>
  );
}
