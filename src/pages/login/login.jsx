import { useEffect, useRef, useState, useReducer } from "react";

const Login = () => {
//   const [value, setValue] = useState("");
//   const [touched, setTouched] = useState(false);

  const reducer = (state, action) => {
    console.log("AC",action)
    switch (action.type) {
      case "Value":
        return { ...state, value: action.value };
      case "Touched":
        return { ...state, touched: true };
      case "Both":
        return { value: action.value, touched: action.touched };
      default:
        return { ...state };
    }
  };

  const [currentState, dispatch] = useReducer(reducer, {
    value: "",
    touched: false,
  });

  console.log("CV", currentState);

  const isInvalid = !(currentState.value.length > 6) && currentState.touched;

  const updateValue = (e) => {
    dispatch({ type: "Value", value: e.target.value.trim(" ")})
    // console.log("Update Value");
    // setValue(e.target.value);
  };

  const updateTouched = () => {
    dispatch({ type: "Touched" });
    // setTouched(true);
  };

  return (
    <>
      <div>Login</div>
      {isInvalid && <p>Please enter correct value!</p>}
      <input
        type="text"
        onChange={updateValue}
        onFocus={updateTouched}
        name="todo"
        id="todo"
      />
    </>
  );

  // OLD CODE
  // const [val, setVal] = useState();
  // const inputRef = useRef();

  // useEffect(() => {
  //   setVal(inputRef);
  //   console.dir(inputRef.current.value)
  //   if (inputRef.current.value.length < 6)
  //     inputRef.current.focus();
  // }, [inputRef])

  // return (
  //   <>
  //     <div>Login</div>
  //     <input type="text" ref={inputRef} name="text" id="text" />
  //   </>
  // )
};

export default Login;
