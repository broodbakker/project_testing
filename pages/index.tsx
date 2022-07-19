//components
import { Card } from "../components/card";
import { Navbar } from "../components/navbar";
//data
import { mockCards } from '../util/mockData';

export default function Home() {
  return (
    <div >
      <Navbar/>
      {mockCards.map((card,key) => <Card cardData={card} key={key}></Card>)}
    </div>
  );
}
