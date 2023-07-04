import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const active = () => {
        inputRef.current.focus();
        console.log("Child function called!");
    }

    useImperativeHandle(ref, () => ({ active }))

  return (
    <input type={props.type} ref={inputRef} />
  )
})

export default Input;