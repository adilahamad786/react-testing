import { useState } from "react";

const Product = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    setCounter(counter+1);
    setCounter(counter+1);
  };

  return (
    <>
      <div>Product</div>
      <h3>Counter : {counter}</h3>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default Product;
