//components
import Counter from "../components/counter";
import { Navbar } from "../components/navbar";

export default function Counter1() {
  return (
    <div >
        <Navbar/>
        <Counter defaultValue={0}/>
    </div>
  );
}
