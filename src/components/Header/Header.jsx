import {Link} from "react-router-dom";
import {Logo} from "../../assets";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/services">Dịch vụ</Link>
          </li>
          <li>
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <a href="tel:+4733378901">+84 934 419 987</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
