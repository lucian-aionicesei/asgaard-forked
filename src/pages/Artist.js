import Content from "../components/Content";
import { useParams } from "react-router-dom";

export default function Artist({ bands }) {
  const params = useParams();
  console.log(params);

  return (
    <Content>
      <h1 className="text-7xl font-acier">this is {params.userId}</h1>
    </Content>
  );
}
