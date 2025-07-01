import { LogoURL } from "../constant";

export const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          src = {LogoURL}
          alt="logo"
          className="logo"
        />
      </a>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Details</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Card</li>
      </ul>
    </div>
  );
};