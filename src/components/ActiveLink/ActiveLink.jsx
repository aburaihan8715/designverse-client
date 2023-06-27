import { NavLink } from "react-router-dom";

const ActiveLink = (props) => {
  return (
    <NavLink
      {...props}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#8e28c9" : "",
          color: isActive ? "white" : "black",
        };
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default ActiveLink;
