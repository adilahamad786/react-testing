import { useRef } from "react";
import Input from "../../components/input/Input";

const Contect = () => {
  const inRef = useRef();

  const fo = () => {
    inRef.current.active();
  }

  return (
    <>
      <Input type="text" ref={inRef}/>
      <button onClick={fo}>Click</button>
    </>
  )
}

export default Contect;