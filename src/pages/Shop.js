import Content from "../components/Content";
import { CampContainer } from "../components/Content";
import MerchOffer from "../components/MerchOffer";

export default function Shop() {
  return (
    <Content>
      <h1 className="text-7xl font-acier">Shop page</h1>
      <CampContainer />
      <MerchOffer />
    </Content>
  );
}
