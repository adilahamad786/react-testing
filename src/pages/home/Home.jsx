import classes from "./Home.module.css"
import { useEffect, useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    function fun () {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return "result";
        }, 1000);
    };

    useEffect(() => {
        const value = fun();
        setData(value);
    })

  return (
    <div className={classes.home}>
        <div>Home</div>
        <div>{data}</div>
    </div>
  )
}

export default Home;