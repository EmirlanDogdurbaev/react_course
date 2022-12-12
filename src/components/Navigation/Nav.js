import classes from "./Nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import search from "../../media/search.png";
import logo from "../../media/book.png";
const Nav = () => {
  return (
    <nav>
      <div className={classes.left}>
        <img src={logo} alt="logo" width="50" height="50" />
        <NavLink to="/">
          <h4>KGMA</h4>
        </NavLink>
      </div>
      <form action="" method="get" className={classes.headInp}>
        <div className={classes.bord}></div>
        <input
          type="search"
          name="q"
          placeholder="Search..."
          className={classes.formInpId}
        />
        <button type="submit" className={classes.formBtn}>
          <img src={search} alt="icon" width="25px" />
        </button>
      </form>
      <ul className={classes.right}>
        <li>
          <Link to="/" className={classes.link}>
            home
          </Link>
        </li>
        <li>
          <Link to="/notes" className={classes.link}>
            notes
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={classes.link}>
            favorites
          </Link>
        </li>
        <li>
          <Link to="/profile" className={classes.link}>
            profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
