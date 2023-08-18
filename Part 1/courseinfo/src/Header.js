import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

export default Header;
