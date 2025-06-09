import { Link } from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="header__logo">
      <Link to="/">
        <em aria-hidden="true" onClick={toggleMenu}></em>
        <span>
          webs
          <br />
          youtube
        </span>
      </Link>
    </h1>
  );
};

export default Logo;
