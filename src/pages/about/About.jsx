import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import AuthContext from "../../context/auth-context";
import { counterActions } from "../../store/redux-store";

const About = () => {
  const AuthCtx = useContext(AuthContext);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log("COUNTER", counter)

  return (
    <>
      <div>About</div>
      <p>{AuthCtx.data}</p>
      <h4>{AuthCtx.counter}</h4>
      <button onClick={() => AuthCtx.updateCounter(5)}>Update</button>
      <p>Conunter : {counter}</p>
      <button onClick={() => dispatch(counterActions.inc())}>increase</button>
      <button onClick={() => dispatch(counterActions.dec())}>decrease</button>
      <button onClick={() => dispatch(counterActions.add(5))}>add</button>
      {/* <button onClick={() => dispatch({ type : "RES"})}>reset</button> */}
    </>
  );
};

export default About;
