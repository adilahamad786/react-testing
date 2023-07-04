import classes from "./Navbar.module.css";
import { NavLink, useNavigate, useSearchParams, useParams, useLocation, useNavigation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("searchParams", searchParams.toString());
    const parmas = useParams();
    console.log("params", parmas);
    const location = useLocation();
    console.log("location", location);
    const navigation = useNavigation();
    console.log("navigation", navigation)
  return (
    <nav className={classes.navbar}>
        <ul className={classes.container}>
            <NavLink to="/home" className={({isActive}) => (isActive ? classes.active : null)}><li>Home</li></NavLink>
            <NavLink to="/product" className={({isActive}) => (isActive ? classes.active : null)}><li>Porduct</li></NavLink>
            <NavLink to="/contect" className={({isActive}) => (isActive ? classes.active : null)}><li>Contect</li></NavLink>
            <NavLink to="/about" className={({isActive}) => (isActive ? classes.active : null)}><li>About</li></NavLink>
            <NavLink to="/login" className={({isActive}) => (isActive ? classes.active : null)}><li>Login</li></NavLink>
            <button onClick={() => navigate("/")}>Click</button>
            <button onClick={() => setSearchParams({type : "myparam"})}>Click</button>
        </ul>
    </nav>
  )
}

export default Navbar;