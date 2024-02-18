const LogoutBtn = () => {
  return <button className="text-white btn-secondary btn">logout</button>;
};

export default LogoutBtn;
/*
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogOutBtn = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await logOutUser();
    navigate("/");
  };
  return (
    <button onClick={logOutHandler} className="text-white btn-secondary btn">
      logout
    </button>
  );
};

export default LogOutBtn;
*/
