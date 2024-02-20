import React from "react";
import logo from "../../images/react.png";
const Header = () => {
  return (
    <div>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 p-2 offset-5 text-secondary"> reduxOpedia</span>
    </div>
  );
};

export default Header;
